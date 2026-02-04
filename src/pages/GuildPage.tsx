import { motion } from "framer-motion";
import { RiUserStarLine, RiPhoneLine, RiMailLine, RiTeamLine, RiCheckboxCircleLine, RiGlobalLine } from "@remixicon/react";

// Placeholder images - in production, replace with actual talent photos
const TALENT_CATEGORIES = [
    {
        title: "Executive Assistants",
        description: "High-level support for busy executives. Calendar management, travel booking, correspondence, and strategic task handling.",
        icon: RiUserStarLine,
        skills: ["C-Suite Support", "Travel Coordination", "Meeting Management", "Confidential Handling"],
        color: "text-gilt-gold",
        available: "12+ VAs"
    },
    {
        title: "Sales Agents",
        description: "Revenue-driven professionals who excel at outbound calling, lead qualification, and closing deals.",
        icon: RiPhoneLine,
        skills: ["Cold Calling", "Lead Qualification", "CRM Management", "Pipeline Building"],
        color: "text-neon-quill",
        available: "25+ Agents"
    },
    {
        title: "Customer Support",
        description: "Empathetic problem-solvers who represent your brand and turn customers into advocates.",
        icon: RiTeamLine,
        skills: ["Live Chat", "Email Support", "Ticket Resolution", "Product Knowledge"],
        color: "text-regal-purple",
        available: "30+ Specialists"
    },
    {
        title: "Marketing Assistants",
        description: "Creative minds who execute campaigns, manage social media, and track marketing metrics.",
        icon: RiMailLine,
        skills: ["Social Media", "Email Marketing", "Content Creation", "Analytics"],
        color: "text-data-crimson",
        available: "18+ VAs"
    },
    {
        title: "Data Entry Specialists",
        description: "Detail-oriented professionals who ensure accuracy in all data handling and processing tasks.",
        icon: RiCheckboxCircleLine,
        skills: ["Spreadsheets", "CRM Updates", "Document Processing", "Quality Control"],
        color: "text-holo-silver",
        available: "40+ Specialists"
    },
    {
        title: "Multilingual VAs",
        description: "Global talent pool with fluency in multiple languages to serve international markets.",
        icon: RiGlobalLine,
        skills: ["English", "Spanish", "Tagalog", "Mandarin", "French"],
        color: "text-gilt-gold",
        available: "15+ VAs"
    }
];

const WHY_CHOOSE_US = [
    { title: "Pre-Vetted Talent", description: "Rigorous 5-step screening process" },
    { title: "48-Hour Matching", description: "Get qualified candidates fast" },
    { title: "Flexible Terms", description: "Full-time, part-time, or project-based" },
    { title: "Dedicated Support", description: "Account manager for your needs" },
    { title: "Quality Guarantee", description: "Free replacement if not satisfied" },
    { title: "Secure & Compliant", description: "NDA and data protection standard" },
];

export function GuildPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            {/* HEADER */}
            <section className="text-center py-20 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-6xl md:text-8xl text-gilt-gold mb-6"
                >
                    Our Talent Pool
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-muted-foreground max-w-2xl mx-auto"
                >
                    Access our network of 150+ pre-vetted Virtual Assistants and Agents ready to support your business.
                </motion.p>
            </section>

            {/* TALENT CATEGORIES */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TALENT_CATEGORIES.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 group hover:border-neon-quill/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <category.icon className={`w-10 h-10 ${category.color}`} />
                                <span className="font-mono text-xs text-neon-quill bg-neon-quill/10 px-3 py-1 rounded-full">
                                    {category.available}
                                </span>
                            </div>

                            <h3 className="font-display text-2xl text-foreground mb-3">{category.title}</h3>
                            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-400 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-20 bg-velvet-navy border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="font-display text-4xl text-center text-foreground mb-12">Why Choose Team Echo</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {WHY_CHOOSE_US.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <RiCheckboxCircleLine className="w-8 h-8 text-neon-quill mx-auto mb-4" />
                                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                                <p className="font-mono text-xs text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section className="py-20 max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="font-display text-5xl text-gilt-gold mb-2">150+</div>
                        <div className="font-mono text-xs text-muted-foreground uppercase">Active VAs</div>
                    </div>
                    <div>
                        <div className="font-display text-5xl text-neon-quill mb-2">50+</div>
                        <div className="font-mono text-xs text-muted-foreground uppercase">Clients Served</div>
                    </div>
                    <div>
                        <div className="font-display text-5xl text-regal-purple mb-2">98%</div>
                        <div className="font-mono text-xs text-muted-foreground uppercase">Retention Rate</div>
                    </div>
                    <div>
                        <div className="font-display text-5xl text-data-crimson mb-2">48h</div>
                        <div className="font-mono text-xs text-muted-foreground uppercase">Avg. Match Time</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
