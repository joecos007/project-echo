import { motion } from "framer-motion";
import { RiMailSendLine, RiLinkedinBoxLine, RiTwitterXLine, RiPhoneLine, RiMapPinLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

                {/* TEXT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="inline-block border-b border-gilt-gold/50 pb-2">
                        <span className="font-display text-gilt-gold tracking-[0.2em]">GET STARTED</span>
                    </div>

                    <h1 className="font-display text-6xl md:text-8xl leading-none">
                        Hire Your<br />
                        <span className="text-regal-purple">Virtual Team</span>
                    </h1>

                    <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-md">
                        Ready to scale your business with dedicated virtual talent? Tell us about your needs and we'll match you with the perfect VA or agent.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <RiPhoneLine className="w-5 h-5 text-neon-quill" />
                            <span className="font-mono">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <RiMailSendLine className="w-5 h-5 text-neon-quill" />
                            <span className="font-mono">hello@teamecho.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <RiMapPinLine className="w-5 h-5 text-neon-quill" />
                            <span className="font-mono">Remote-first, Global Team</span>
                        </div>
                    </div>

                    <div className="flex gap-6 pt-4">
                        {[RiLinkedinBoxLine, RiTwitterXLine].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-regal-purple transition-colors">
                                <Icon className="w-6 h-6 text-muted-foreground hover:text-white" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* INQUIRY FORM */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 md:p-12 rounded-sm border-t border-t-white/10"
                >
                    <h2 className="font-display text-2xl text-foreground mb-6">Request a Consultation</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Your Name</label>
                                <Input
                                    placeholder="John Smith"
                                    className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Company</label>
                                <Input
                                    placeholder="Your Company"
                                    className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Email Address</label>
                            <Input
                                type="email"
                                placeholder="you@company.com"
                                className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">What do you need help with?</label>
                            <select className="w-full bg-black/20 border border-white/10 focus:border-regal-purple font-mono h-12 px-3 text-foreground rounded-md">
                                <option value="">Select a service...</option>
                                <option value="va">Virtual Assistant</option>
                                <option value="sales">Sales Agent</option>
                                <option value="support">Customer Support</option>
                                <option value="marketing">Marketing Support</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Tell us more</label>
                            <Textarea
                                placeholder="Describe your needs, timeline, and any specific requirements..."
                                className="bg-black/20 border-white/10 focus:border-regal-purple font-mono min-h-[120px]"
                            />
                        </div>

                        <Button className="w-full h-14 bg-regal-purple hover:bg-regal-purple/80 text-white font-display text-xl tracking-wider">
                            SUBMIT INQUIRY <RiMailSendLine className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="font-mono text-xs text-center text-muted-foreground">
                            We'll respond within 24 hours with qualified candidates.
                        </p>
                    </form>
                </motion.div>

            </div>
        </div>
    );
}
