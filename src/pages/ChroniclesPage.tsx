import { motion } from "framer-motion";
import { RiBuilding4Line, RiShoppingBag3Line, RiHospitalLine, RiHandHeartLine, RiArrowRightUpLine, RiBookOpenLine } from "@remixicon/react";
import { useState } from "react";

// Success Stories / Case Studies
const STORIES = [
    {
        id: "story-01",
        title: "E-commerce Scale-Up",
        client: "Online Retail Brand",
        category: "VIRTUAL AGENTS",
        industry: "E-commerce",
        description: "A growing online store needed customer support coverage across multiple time zones. We deployed 5 dedicated agents who reduced response time by 70% and increased customer satisfaction scores.",
        results: ["70% faster response time", "4.8★ CSAT score", "24/7 coverage achieved"],
        icon: RiShoppingBag3Line,
        color: "text-neon-quill",
        borderColor: "border-neon-quill",
        bgGradient: "from-neon-quill/20 to-transparent"
    },
    {
        id: "story-02",
        title: "Real Estate Lead Machine",
        client: "Boutique Realty Firm",
        category: "SALES AGENTS",
        industry: "Real Estate",
        description: "A real estate team needed help qualifying leads and booking showings. Our agents handled 200+ leads monthly, converting cold inquiries into qualified appointments.",
        results: ["3x more showings booked", "45% lead qualification rate", "50 hrs/week saved"],
        icon: RiBuilding4Line,
        color: "text-regal-purple",
        borderColor: "border-regal-purple",
        bgGradient: "from-regal-purple/20 to-transparent"
    },
    {
        id: "story-03",
        title: "Healthcare Admin Support",
        client: "Multi-Location Clinic",
        category: "VIRTUAL ASSISTANTS",
        industry: "Healthcare",
        description: "A busy medical practice needed help with patient scheduling and insurance verification. Our VAs handled sensitive data with HIPAA-compliant processes.",
        results: ["500+ appointments/month", "Zero compliance issues", "30% no-show reduction"],
        icon: RiHospitalLine,
        color: "text-gilt-gold",
        borderColor: "border-gilt-gold",
        bgGradient: "from-gilt-gold/20 to-transparent"
    },
    {
        id: "story-04",
        title: "Nonprofit Outreach Campaign",
        client: "Community Foundation",
        category: "CAMPAIGN SPECIALISTS",
        industry: "Nonprofit",
        description: "A nonprofit needed to reach donors for their annual campaign. Our team managed email sequences, social media, and donor follow-ups across 8 weeks.",
        results: ["25% more donations", "10,000 emails sent", "300+ new donors"],
        icon: RiHandHeartLine,
        color: "text-data-crimson",
        borderColor: "border-data-crimson",
        bgGradient: "from-data-crimson/20 to-transparent"
    }
];

export function ChroniclesPage() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            {/* BACKGROUND AMBIENCE */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-regal-purple/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-velvet-navy/40 rounded-full blur-[100px]" />
            </div>

            {/* HEADER */}
            <section className="text-center py-20 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block p-3 rounded-full border border-neon-quill/30 bg-velvet-navy/50 mb-6 backdrop-blur-sm"
                >
                    <RiBookOpenLine className="w-8 h-8 text-neon-quill" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-6xl md:text-8xl text-white mb-6"
                >
                    Success Stories
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-muted-foreground max-w-2xl mx-auto"
                >
                    Real results from real clients. See how businesses like yours transformed their operations with Team Echo.
                </motion.p>
            </section>

            {/* STORIES GRID */}
            <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {STORIES.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredId(story.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onTouchStart={() => setHoveredId(hoveredId === story.id ? null : story.id)}
                            className={`
                                relative glass-panel p-8 border-l-4 ${story.borderColor}
                                bg-gradient-to-br ${story.bgGradient}
                                transition-all duration-500 group cursor-pointer
                                ${hoveredId === story.id ? 'scale-[1.02] shadow-xl' : ''}
                            `}
                        >
                            {/* Category Tag */}
                            <span className={`absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase ${story.color}`}>
                                {story.category}
                            </span>

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-full bg-black/30 flex items-center justify-center mb-6 ${story.color} border border-white/10`}>
                                <story.icon className="w-6 h-6" />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-3xl text-white mb-2 group-hover:text-neon-quill transition-colors">
                                {story.title}
                            </h3>
                            <p className="font-mono text-xs text-muted-foreground mb-4">
                                {story.industry} • {story.client}
                            </p>

                            {/* Description */}
                            <p className="font-mono text-sm text-gray-300 leading-relaxed mb-6">
                                {story.description}
                            </p>

                            {/* Results */}
                            <div className={`
                                space-y-2 overflow-hidden transition-all duration-500
                                ${hoveredId === story.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-0 md:opacity-0'}
                            `}>
                                <h4 className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Results:</h4>
                                <ul className="space-y-1">
                                    {story.results.map((result, i) => (
                                        <li key={i} className="font-mono text-sm text-neon-quill flex items-center gap-2">
                                            <RiArrowRightUpLine className="w-4 h-4" />
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center bg-velvet-navy border-t border-white/5">
                <h2 className="font-display text-4xl text-foreground mb-4">Your Story Could Be Next</h2>
                <p className="font-mono text-muted-foreground mb-8">Let's discuss how Team Echo can help your business.</p>
                <a href="/summon" className="inline-block px-8 py-4 bg-neon-quill text-black font-display text-lg hover:bg-neon-quill/90 transition-colors">
                    GET STARTED
                </a>
            </section>
        </div>
    );
}
