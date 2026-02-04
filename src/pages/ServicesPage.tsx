import { useEffect, useRef } from "react";
import { RiUserStarLine, RiPhoneLine, RiMailLine, RiFileList3Line, RiArrowRightLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";
import { TextReveal, FadeInView, MagneticButton } from "@/components/animations";

const SERVICES = [
    {
        title: "Virtual Assistants",
        description: "Professional support for your daily operations. Our VAs handle admin tasks so you can focus on strategy and growth.",
        icon: RiUserStarLine,
        tasks: ["Email Management", "Calendar Scheduling", "Data Entry", "Research", "Bookkeeping"],
        color: "regal-purple"
    },
    {
        title: "Virtual Agents",
        description: "Sales and customer-facing specialists who represent your brand with excellence. Drive revenue and build relationships.",
        icon: RiPhoneLine,
        tasks: ["Lead Generation", "Appointment Setting", "Customer Support", "Sales Outreach", "Follow-ups"],
        color: "neon-quill"
    },
    {
        title: "Campaign Specialists",
        description: "Marketing and outreach experts who execute campaigns across channels. Scale your marketing without scaling your team.",
        icon: RiMailLine,
        tasks: ["Social Media", "Email Campaigns", "Content Creation", "Market Research", "Reporting"],
        color: "gilt-gold"
    },
    {
        title: "Back-Office Support",
        description: "Operational backbone services that keep your business running smoothly behind the scenes.",
        icon: RiFileList3Line,
        tasks: ["Document Processing", "CRM Management", "Inventory Tracking", "Order Processing", "Quality Assurance"],
        color: "data-crimson"
    }
];

export function ServicesPage() {
    const horizontalRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    // Horizontal scroll animation
    useEffect(() => {
        if (!horizontalRef.current || !cardsRef.current) return;

        const cards = cardsRef.current;
        const totalWidth = cards.scrollWidth;
        const viewportWidth = window.innerWidth;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Desktop: horizontal scroll
            mm.add("(min-width: 768px)", () => {
                // Pin the section and scroll the cards horizontally
                const horizontalTween = gsap.to(cards, {
                    x: -(totalWidth - viewportWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalRef.current,
                        pin: true,
                        scrub: 1,
                        end: () => `+=${totalWidth}`,
                        invalidateOnRefresh: true,
                    },
                });

                // Scale cards as they reach center
                gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
                    gsap.fromTo(
                        card,
                        { scale: 0.9, opacity: 0.7 },
                        {
                            scale: 1,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: horizontalTween, // Use the tween directly
                                start: "left 80%",
                                end: "left 20%",
                                scrub: true,
                            },
                        }
                    );
                });
            });

            // Mobile: vertical scroll with stagger
            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(
                    ".service-card",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: cards,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            return () => mm.revert();
        }, horizontalRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            {/* HERO */}
            <section className="text-center py-20 px-4 bg-gradient-to-b from-regal-purple/10 to-transparent">
                <TextReveal type="char" className="font-display text-6xl md:text-8xl text-neon-quill drop-shadow-[0_0_10px_rgba(0,255,157,0.3)] mb-6">
                    Our Services
                </TextReveal>
                <FadeInView delay={0.5}>
                    <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive virtual workforce solutions tailored to your business needs.
                    </p>
                </FadeInView>
            </section>

            {/* HORIZONTAL SCROLL GALLERY */}
            <section ref={horizontalRef} className="relative overflow-hidden py-20">
                <div className="mb-12 text-center">
                    <h2 className="font-display text-4xl text-gilt-gold mb-4">What We Offer</h2>
                    <p className="font-mono text-sm text-muted-foreground">← Scroll to explore →</p>
                </div>

                <div
                    ref={cardsRef}
                    className="flex gap-8 px-6 md:flex-row flex-col"
                    style={{ width: "max-content" }}
                >
                    {SERVICES.map((service) => (
                        <div
                            key={service.title}
                            className="service-card glass-panel p-10 w-[500px] flex-shrink-0 border-l-4 hover:border-l-neon-quill transition-all group"
                            style={{
                                borderLeftColor: `hsl(var(--${service.color}))`,
                            }}
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
                        </div>
                    ))}
                </div>
            </section>

            {/* HIRING PROCESS */}
            <section className="py-24 bg-velvet-navy border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeInView>
                        <h2 className="font-display text-4xl text-gilt-gold mb-12">How It Works</h2>
                    </FadeInView>

                    <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
                        {[
                            { num: 1, label: "Tell Us Your Needs" },
                            { num: 2, label: "We Match Talent" },
                            { num: 3, label: "Trial Period" },
                            { num: 4, label: "Ongoing Support" }
                        ].map(({ num, label }, index) => (
                            <FadeInView key={num} direction="up" delay={index * 0.15}>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative z-10 w-16 h-16 rounded-full bg-regal-purple border-2 border-neon-quill flex items-center justify-center font-display text-2xl font-bold">
                                        {num}
                                    </div>
                                    <div className="font-mono text-sm text-muted-foreground">{label}</div>
                                </div>
                            </FadeInView>
                        ))}
                        {/* Connecting Line */}
                        <div className="absolute top-8 left-0 w-full h-1 bg-white/10 hidden md:block z-0" />
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <FadeInView>
                    <h2 className="font-display text-3xl text-center text-foreground mb-12">Industries We Serve</h2>
                </FadeInView>
                <div className="flex flex-wrap justify-center gap-4">
                    {["E-commerce", "Real Estate", "Healthcare", "Tech Startups", "Marketing Agencies", "Legal", "Finance", "Education", "Hospitality"].map((industry, index) => (
                        <FadeInView key={industry} delay={index * 0.05} direction="up">
                            <span className="px-6 py-3 bg-white/5 rounded-full text-sm font-mono text-gray-300 border border-white/10 hover:border-neon-quill/50 transition-colors cursor-default">
                                {industry}
                            </span>
                        </FadeInView>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center bg-gradient-to-b from-velvet-navy to-black">
                <FadeInView>
                    <h2 className="font-display text-5xl mb-6 text-foreground">Ready to Scale Your Team?</h2>
                    <p className="font-mono text-muted-foreground mb-10 max-w-lg mx-auto">
                        Let's match you with the perfect virtual workforce for your needs.
                    </p>
                    <Link to="/summon">
                        <MagneticButton className="h-16 px-12 bg-regal-purple hover:bg-regal-purple/90 text-white font-display text-xl tracking-wider border border-white/20 transition-all">
                            GET STARTED <RiArrowRightLine className="ml-2 inline" />
                        </MagneticButton>
                    </Link>
                </FadeInView>
            </section>
        </div>
    );
}
