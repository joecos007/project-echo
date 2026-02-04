import { motion } from "framer-motion";
import { RiLightbulbLine, RiBookReadLine, RiTrophyLine, RiBriefcaseLine, RiArticleLine } from "@remixicon/react";

// Insights / Blog Entries
const INSIGHTS = [
    {
        id: 1,
        date: "Feb 2025",
        type: "GUIDE",
        title: "How to Onboard a Virtual Assistant Successfully",
        content: "First 30 days are critical. Set clear expectations, establish communication channels, and create documented processes for smooth integration.",
        icon: RiBookReadLine,
        color: "text-gilt-gold",
        borderColor: "border-gilt-gold"
    },
    {
        id: 2,
        date: "Jan 2025",
        type: "INDUSTRY NEWS",
        title: "Remote Work Trends to Watch in 2025",
        content: "Hybrid models are here to stay. Companies are increasingly leveraging VAs to maintain productivity while reducing overhead costs.",
        icon: RiLightbulbLine,
        color: "text-neon-quill",
        borderColor: "border-neon-quill"
    },
    {
        id: 3,
        date: "Dec 2024",
        type: "CASE STUDY",
        title: "How One Startup Scaled with 3 VAs",
        content: "A SaaS startup reduced operational costs by 40% by delegating customer support and admin tasks to our dedicated virtual team.",
        icon: RiTrophyLine,
        color: "text-regal-purple",
        borderColor: "border-regal-purple"
    },
    {
        id: 4,
        date: "Nov 2024",
        type: "TIPS",
        title: "5 Tasks Every Entrepreneur Should Delegate",
        content: "Email management, calendar scheduling, research, data entry, and social media. Free up your time for high-impact work.",
        icon: RiBriefcaseLine,
        color: "text-data-crimson",
        borderColor: "border-data-crimson"
    },
    {
        id: 5,
        date: "Oct 2024",
        type: "ANNOUNCEMENT",
        title: "Team Echo Expands to Serve Healthcare",
        content: "We now offer HIPAA-compliant virtual assistants trained in medical terminology and patient coordination.",
        icon: RiArticleLine,
        color: "text-holo-silver",
        borderColor: "border-holo-silver"
    }
];

export function ScrollPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-gilt-gold rounded-full opacity-20 animate-ping" />
                <div className="absolute bottom-40 right-20 w-3 h-3 bg-neon-quill rounded-full opacity-20 animate-pulse" />
            </div>

            {/* HEADER */}
            <section className="text-center py-16 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-4 rounded-full border border-gilt-gold/30 bg-velvet-navy/50 mb-6 backdrop-blur-sm"
                >
                    <RiArticleLine className="w-8 h-8 text-gilt-gold" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-5xl md:text-7xl text-gilt-gold mb-4"
                >
                    Insights
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-muted-foreground max-w-xl mx-auto tracking-wide"
                >
                    Tips, trends, and thought leadership on virtual staffing and remote work.
                </motion.p>
            </section>

            {/* INSIGHTS TIMELINE */}
            <section className="max-w-4xl mx-auto px-6 pb-32 relative">
                {/* Central Thread Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gilt-gold/30 to-transparent" />

                <div className="space-y-12">
                    {INSIGHTS.map((entry, index) => (
                        <motion.div
                            key={entry.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring" }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                <div className={`
                                    relative p-6 glass-panel border-l-4 ${entry.borderColor} 
                                    hover:bg-white/5 transition-colors duration-300 group
                                `}>
                                    {/* Connector Dot */}
                                    <div className={`
                                        absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 ${entry.borderColor}
                                        left-[-3.25rem] md:left-auto 
                                        ${index % 2 === 0 ? "md:right-[-2.5rem] md:left-auto" : "md:left-[-2.5rem]"}
                                        z-20 shadow-[0_0_10px_currentColor] ${entry.color}
                                    `} />

                                    {/* Date Badge */}
                                    <span className="font-mono text-xs opacity-60 mb-2 block tracking-widest">
                                        {entry.date}
                                    </span>

                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <entry.icon className={`w-5 h-5 ${entry.color}`} />
                                        <h3 className={`font-display text-sm uppercase tracking-wider ${entry.color}`}>
                                            {entry.type}
                                        </h3>
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gilt-gold transition-colors">
                                        {entry.title}
                                    </h4>

                                    <p className="font-mono text-sm text-gray-400 leading-relaxed">
                                        {entry.content}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-velvet-navy border-t border-white/5 text-center">
                <h2 className="font-display text-3xl text-foreground mb-4">Stay Updated</h2>
                <p className="font-mono text-sm text-muted-foreground mb-6">Get the latest insights on remote staffing delivered to your inbox.</p>
                <div className="flex justify-center gap-2 max-w-md mx-auto px-4">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="flex-1 bg-black/30 border border-white/10 rounded px-4 py-3 font-mono text-sm focus:border-neon-quill focus:outline-none"
                    />
                    <button className="px-6 py-3 bg-neon-quill text-black font-display hover:bg-neon-quill/90 transition-colors">
                        SUBSCRIBE
                    </button>
                </div>
            </section>
        </div>
    );
}
