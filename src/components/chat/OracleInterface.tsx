import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiSparklingLine, RiSendPlane2Line, RiCloseLine, RiMagicLine } from "@remixicon/react";
import { supabaseConfig } from "@/lib/supabase";

interface Message {
    role: "user" | "assistant";
    content: string;
}

const ORACLE_URL = `${supabaseConfig.url}/functions/v1/oracle-chat`;

export function OracleInterface() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch(ORACLE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${supabaseConfig.anonKey}`
                },
                body: JSON.stringify({
                    messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
                })
            });

            // Validate response before processing
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API error (${response.status}): ${errorText}`);
            }

            if (!response.body) throw new Error("No response body");

            // Create placeholder for assistant message
            setMessages(prev => [...prev, { role: "assistant", content: "" }]);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let assistantContent = "";
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                // Append to buffer to handle incomplete lines
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");

                // Keep last incomplete line in buffer
                buffer = lines.pop() || "";

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        try {
                            const data = JSON.parse(line.slice(6));
                            if (data.choices?.[0]?.delta?.content) {
                                assistantContent += data.choices[0].delta.content;
                                setMessages(prev => {
                                    const newMsgs = [...prev];
                                    const lastMsg = newMsgs[newMsgs.length - 1];
                                    if (lastMsg.role === "assistant") {
                                        lastMsg.content = assistantContent;
                                    }
                                    return newMsgs;
                                });
                            }
                        } catch (e) {
                            // Ignore parse errors for malformed data
                        }
                    }
                }
            }

        } catch (error) {
            console.error("Oracle Error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "Connection severed. The ether is turbulent." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* FAB Trigger */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`
                    fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full 
                    bg-velvet-navy border border-neon-quill shadow-[0_0_20px_rgba(16,185,129,0.3)]
                    flex items-center justify-center text-neon-quill
                    ${isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}
                `}
            >
                <RiMagicLine className="w-6 h-6 animate-pulse" />
            </motion.button>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-8 right-4 md:right-8 z-50 w-[90vw] md:w-[400px] h-[500px] max-h-[70vh] rounded-lg overflow-hidden"
                    >
                        {/* Glass Panel Background */}
                        <div className="absolute inset-0 bg-velvet-navy/95 backdrop-blur-xl border border-neon-quill/30 shadow-2xl" />

                        {/* Content Container - Full flex column */}
                        <div className="relative z-10 h-full flex flex-col">
                            {/* Header - Fixed height */}
                            <div className="shrink-0 p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
                                <div className="flex items-center gap-2">
                                    <RiSparklingLine className="w-4 h-4 text-neon-quill" />
                                    <span className="font-display tracking-widest text-gilt-gold text-sm">TEAM ECHO AI</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/50 hover:text-white transition-colors"
                                >
                                    <RiCloseLine className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Messages Area - Flexible, scrollable */}
                            <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 font-mono text-sm">
                                {messages.length === 0 && (
                                    <div className="text-center text-muted-foreground mt-16 opacity-50">
                                        <RiMagicLine className="w-8 h-8 mx-auto mb-2" />
                                        <p>Ask me about our VA services...</p>
                                    </div>
                                )}

                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`
                                            max-w-[80%] p-3 rounded-md text-sm break-words
                                            ${msg.role === 'user'
                                                ? 'bg-neon-quill/10 border border-neon-quill/30 text-neon-quill'
                                                : 'bg-regal-purple/10 border border-regal-purple/30 text-parchment'
                                            }
                                        `}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-regal-purple/10 border border-regal-purple/30 p-3 rounded-md">
                                            <span className="inline-block w-1.5 h-3 bg-regal-purple animate-ping mr-1"></span>
                                            <span className="inline-block w-1.5 h-3 bg-regal-purple animate-ping animation-delay-100 mr-1"></span>
                                            <span className="inline-block w-1.5 h-3 bg-regal-purple animate-ping animation-delay-200"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area - Fixed height */}
                            <div className="shrink-0 p-4 border-t border-white/10 bg-black/30">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask about our services..."
                                        className="flex-1 bg-black/40 border border-white/10 rounded-sm px-3 py-2 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-quill/50 font-mono text-xs"
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={isLoading}
                                        className="shrink-0 p-2 bg-neon-quill/20 border border-neon-quill/50 text-neon-quill hover:bg-neon-quill hover:text-black transition-colors rounded-sm disabled:opacity-50"
                                    >
                                        <RiSendPlane2Line className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
