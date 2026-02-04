import { motion } from "framer-motion";
import { RiUserStarLine, RiPhoneLine, RiMailLine, RiFileList3Line } from "@remixicon/react";

const SERVICES = [
    {
        title: "Virtual Assistants",
        description: "Professional support for your daily operations. Our VAs handle admin tasks so you can focus on strategy and growth.",
        icon: RiUserStarLine,
        tasks: ["Email Management", "Calendar Scheduling", "Data Entry", "Research", "Bookkeeping"]
    },
    {
        title: "Virtual Agents",
        description: "Sales and customer-facing specialists who represent your brand with excellence. Drive revenue and build relationships.",
        icon: RiPhoneLine,
        tasks: ["Lead Generation", "Appointment Setting", "Customer Support", "Sales Outreach", "Follow-ups"]
    },
    {
        title: "Campaign Specialists",
        description: "Marketing and outreach experts who execute campaigns across channels. Scale your marketing without scaling your team.",
        icon: RiMailLine,
        tasks: ["Social Media", "Email Campaigns", "Content Creation", "Market Research", "Reporting"]
    },
    {
        title: "Back-Office Support",
        description: "Operational backbone services that keep your business running smoothly behind the scenes.",
        icon: RiFileList3Line,
        tasks: ["Document Processing", "CRM Management", "Inventory Tracking", "Order Processing", "Quality Assurance"]
    }
];

export function ServicesPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            {/* HERO */}
            <section className="text-center py-20 px-4 bg-gradient-to-b from-regal-purple/10 to-transparent">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="font-display text-6xl md:text-8xl text-neon-quill drop-shadow-[0_0_10px_rgba(0,255,157,0.3)] mb-6"
                >
                    Our Services
                </motion.h1>
                <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive virtual workforce solutions tailored to your business needs.
                </p>
            </section>

            {/* SERVICE CARDS */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-panel p-10 border-l-4 border-l-regal-purple hover:border-l-neon-quill transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <h3 className="font-display text-4xl text-foreground group-hover:text-neon-quill transition-colors">
                                    {service.title}
                                </h3>
                                <service.icon className="w-10 h-10 text-muted-foreground group-hover:text-white transition-colors" />
                            </div>

                            <p className="font-mono text-lg text-muted-foreground mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Tasks Include:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.tasks.map((task) => (
                                        <span key={task} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 border border-white/10">
                                            {task}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* HIRING PROCESS */}
            <section className="py-24 bg-velvet-navy border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-display text-4xl text-gilt-gold mb-12">How It Works</h2>
                    <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
                        {[1, 2, 3, 4].map((num) => (
                            <div key={num} className="relative z-10 w-16 h-16 rounded-full bg-regal-purple border-2 border-neon-quill flex items-center justify-center font-display text-2xl font-bold">
                                {num}
                            </div>
                        ))}
                        {/* Connecting Line */}
                        <div className="absolute top-8 left-0 w-full h-1 bg-white/10 hidden md:block z-0" />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-8 text-sm font-mono text-muted-foreground">
                        <div className="w-full md:w-1/4">Tell Us Your Needs</div>
                        <div className="w-full md:w-1/4">We Match Talent</div>
                        <div className="w-full md:w-1/4">Trial Period</div>
                        <div className="w-full md:w-1/4">Ongoing Support</div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="font-display text-3xl text-center text-foreground mb-12">Industries We Serve</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["E-commerce", "Real Estate", "Healthcare", "Tech Startups", "Marketing Agencies", "Legal", "Finance", "Education", "Hospitality"].map((industry) => (
                        <span key={industry} className="px-6 py-3 bg-white/5 rounded-full text-sm font-mono text-gray-300 border border-white/10 hover:border-neon-quill/50 transition-colors">
                            {industry}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
