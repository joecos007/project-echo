import { motion } from "framer-motion";
import { RiMailLine, RiLinkedinBoxLine } from "@remixicon/react";

// Team member images
import chelleImg from "@/assets/team/chelle.jpeg";
import jaiImg from "@/assets/team/jai.jpg";
import celestinImg from "@/assets/team/celestin.jpg";
import angeluImg from "@/assets/team/angelu.jpg";
import meganImg from "@/assets/team/megan.jpg";
import bianeImg from "@/assets/team/biane.jpg";
import audreaImg from "@/assets/team/audrea.jpg";
import mendyImg from "@/assets/team/mendy.jpg";
import anthonyImg from "@/assets/team/anthony.jpg";
import miguelImg from "@/assets/team/miguel.jpg";
import kimImg from "@/assets/team/kim.jpg";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    skills: string[];
    bio: string;
}

const FOUNDER: TeamMember = {
    name: "Chelle",
    role: "Founder & CEO",
    image: chelleImg,
    skills: ["Leadership", "Business Strategy", "Client Relations", "Team Building"],
    bio: "Visionary leader who founded Team Echo to bridge the gap between global businesses and exceptional remote talent."
};

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Jai",
        role: "Operations Manager",
        image: jaiImg,
        skills: ["Project Management", "Process Optimization", "Team Coordination", "Quality Assurance"],
        bio: "Ensures smooth operations across all client accounts and manages our VA deployment pipeline."
    },
    {
        name: "Celestin",
        role: "Lead Virtual Assistant",
        image: celestinImg,
        skills: ["Executive Support", "Calendar Management", "Travel Booking", "Correspondence"],
        bio: "Expert in high-level administrative support with experience supporting C-suite executives."
    },
    {
        name: "Angelu",
        role: "Marketing Specialist",
        image: angeluImg,
        skills: ["Social Media", "Content Creation", "Email Marketing", "Brand Strategy"],
        bio: "Creative marketer who helps clients build their brand presence across digital channels."
    },
    {
        name: "Megan",
        role: "Client Success Manager",
        image: meganImg,
        skills: ["Account Management", "Onboarding", "Performance Tracking", "Communication"],
        bio: "Dedicated to ensuring every client gets the perfect VA match and ongoing support."
    },
    {
        name: "Biane",
        role: "Sales Agent Lead",
        image: bianeImg,
        skills: ["Cold Calling", "Lead Qualification", "CRM Management", "Sales Scripts"],
        bio: "Leads our sales agent team, training VAs to drive revenue for client businesses."
    },
    {
        name: "Audrea",
        role: "Customer Support Lead",
        image: audreaImg,
        skills: ["Live Chat", "Ticket Resolution", "Empathy", "Product Knowledge"],
        bio: "Expert in customer service excellence, training our support specialists."
    },
    {
        name: "Mendy",
        role: "Data Entry Specialist",
        image: mendyImg,
        skills: ["Spreadsheets", "Data Accuracy", "CRM Updates", "Document Processing"],
        bio: "Detail-oriented professional ensuring data integrity across all projects."
    },
    {
        name: "Anthony",
        role: "Research Analyst",
        image: anthonyImg,
        skills: ["Market Research", "Competitor Analysis", "Report Writing", "Data Mining"],
        bio: "Provides in-depth research support for clients making strategic decisions."
    },
    {
        name: "Miguel",
        role: "Tech Support VA",
        image: miguelImg,
        skills: ["IT Troubleshooting", "Software Setup", "Documentation", "Training"],
        bio: "Technical VA specializing in software tools and platform management."
    },
    {
        name: "Kim",
        role: "Social Media Manager",
        image: kimImg,
        skills: ["Instagram", "Facebook", "Content Scheduling", "Community Management"],
        bio: "Keeps client social channels active and engaging with creative content."
    }
];

export function TeamPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            {/* HEADER */}
            <section className="text-center py-20 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-6xl md:text-8xl text-gilt-gold mb-6"
                >
                    Meet Our Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-muted-foreground max-w-2xl mx-auto"
                >
                    The dedicated professionals behind Team Echo who make remote staffing seamless.
                </motion.p>
            </section>

            {/* FOUNDER SECTION */}
            <section className="max-w-4xl mx-auto px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gilt-gold via-regal-purple to-gilt-gold rounded-lg blur opacity-50 animate-pulse" />
                    <div className="relative glass-panel bg-velvet-navy/80 border border-gilt-gold p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center gap-12">
                        {/* Founder Image */}
                        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative rounded-full overflow-hidden border-4 border-gilt-gold shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                            <img src={FOUNDER.image} alt={FOUNDER.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Founder Details */}
                        <div className="text-center md:text-left space-y-4">
                            <div className="flex items-center justify-center md:justify-start gap-3 text-gilt-gold mb-2">
                                <span className="font-mono text-sm tracking-widest uppercase">Founder & CEO</span>
                            </div>
                            <h2 className="font-display text-5xl text-white">{FOUNDER.name}</h2>
                            <p className="font-mono text-gray-300 leading-relaxed max-w-xl">
                                {FOUNDER.bio}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                                {FOUNDER.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-gilt-gold/20 rounded-full text-xs font-mono text-gilt-gold border border-gilt-gold/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* TEAM GRID */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <h2 className="font-display text-3xl text-center text-foreground mb-12">Our Core Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-panel p-6 group hover:border-neon-quill/30 transition-all text-center"
                        >
                            {/* Image */}
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-quill/50 transition-colors">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Name & Role */}
                            <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
                            <p className="font-mono text-xs text-neon-quill uppercase tracking-wider mb-3">{member.role}</p>

                            {/* Bio */}
                            <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-4">
                                {member.bio}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-1 justify-center">
                                {member.skills.slice(0, 3).map((skill) => (
                                    <span key={skill} className="px-2 py-0.5 bg-white/5 rounded text-[10px] font-mono text-gray-400 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* JOIN CTA */}
            <section className="py-20 bg-velvet-navy border-t border-white/5 text-center">
                <h2 className="font-display text-4xl text-foreground mb-4">Want to Join Our Team?</h2>
                <p className="font-mono text-muted-foreground mb-8 max-w-lg mx-auto">
                    We're always looking for talented Virtual Assistants and Agents to join our network.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:careers@teamecho.com" className="inline-flex items-center gap-2 px-6 py-3 bg-neon-quill text-black font-display hover:bg-neon-quill/90 transition-colors">
                        <RiMailLine className="w-5 h-5" /> APPLY NOW
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-display hover:bg-white/5 transition-colors">
                        <RiLinkedinBoxLine className="w-5 h-5" /> FOLLOW US
                    </a>
                </div>
            </section>
        </div>
    );
}
