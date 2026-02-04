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
    // Leadership & Operations
    {
        name: "Miguel",
        role: "Head of Operations",
        image: miguelImg,
        skills: ["Operations Management", "Technical Support", "Software & Tool Setup", "Process Documentation", "Team Oversight", "Quality Control"],
        bio: "Overall Team Lead overseeing systems, strategy, and cross-team coordination. Manages internal workflows, software tools, and documentation to maintain high performance across the organization."
    },

    // Operations & Administration
    {
        name: "Jai",
        role: "Virtual Agent Operations Manager",
        image: jaiImg,
        skills: ["Virtual Agent Deployment", "Process Optimization", "Project Management", "Team Coordination"],
        bio: "Ensures smooth day-to-day operations across all client accounts and manages the full virtual assistant deployment pipeline, focusing on optimizing processes and maintaining operational efficiency."
    },
    {
        name: "Celestin",
        role: "Lead Virtual Assistant",
        image: celestinImg,
        skills: ["Executive Support", "Calendar & Schedule Management", "Travel Coordination", "Administrative Leadership"],
        bio: "Provides high-level administrative and executive support, specializing in assisting C-suite executives. Ensures executives stay organized, prepared, and focused on strategic priorities."
    },

    // Client & Revenue Teams
    {
        name: "Megan",
        role: "Client Success Manager",
        image: meganImg,
        skills: ["Client Onboarding", "Account Management", "Performance Monitoring", "Relationship Management"],
        bio: "Dedicated to delivering exceptional client experiences. Manages onboarding, matches clients with the right virtual assistants, and tracks performance to ensure long-term success."
    },
    {
        name: "Biane",
        role: "Sales Agent Lead",
        image: bianeImg,
        skills: ["Sales Leadership", "Cold Calling", "Lead Qualification", "CRM Management", "Sales Training"],
        bio: "Leads the sales agent team, training and guiding virtual assistants to generate and qualify leads while driving consistent revenue growth for clients."
    },

    // Marketing & Growth
    {
        name: "Angelu",
        role: "Marketing Specialist",
        image: angeluImg,
        skills: ["Digital Marketing", "Social Media Strategy", "Content Creation", "Email Marketing"],
        bio: "Helps clients build strong brand visibility across digital platforms through creative and strategic marketing initiatives."
    },
    {
        name: "Kim",
        role: "Social Media Manager",
        image: kimImg,
        skills: ["Instagram & Facebook Management", "Content Scheduling", "Community Engagement", "Brand Consistency"],
        bio: "Manages and grows client social media accounts by creating engaging content, maintaining posting schedules, and fostering audience interaction."
    },

    // Support & Specialized Services
    {
        name: "Audrea",
        role: "Customer Support Lead",
        image: audreaImg,
        skills: ["Customer Support Leadership", "Live Chat", "Ticket Resolution", "Service Quality Training"],
        bio: "Leads the customer support team, ensuring excellent service delivery through effective communication, empathy, and fast issue resolution."
    },
    {
        name: "Mendy",
        role: "Data Entry Specialist",
        image: mendyImg,
        skills: ["Data Entry", "Spreadsheet Management", "CRM Updates", "Data Accuracy & Validation"],
        bio: "Ensures accurate and reliable data management across all projects, maintaining clean records and up-to-date systems."
    },
    {
        name: "Anthony",
        role: "Research Analyst",
        image: anthonyImg,
        skills: ["Market Research", "Competitor Analysis", "Data Interpretation", "Report Writing"],
        bio: "Provides detailed research and analytical support to help clients make informed business decisions."
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
                    <a href="https://linkedin.com/company/teamecho" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-display hover:bg-white/5 transition-colors">
                        <RiLinkedinBoxLine className="w-5 h-5" /> FOLLOW US
                    </a>
                </div>
            </section>
        </div>
    );
}
