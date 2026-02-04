import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiUserStarLine, RiTeamLine, RiRocketLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.png";

export function HomePage() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Remote Work Future" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute inset-0 bg-velvet-navy/20 mix-blend-overlay" />
                </div>

                <div className="z-10 text-center space-y-8 px-4 max-w-4xl mx-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block border-b border-gilt-gold/50 pb-2"
                    >
                        <span className="font-display text-gilt-gold tracking-[0.2em] text-sm md:text-base bg-black/50 px-4 py-1 backdrop-blur-sm rounded-sm">
                            VIRTUAL WORKFORCE SOLUTIONS
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white drop-shadow-2xl"
                    >
                        SCALE YOUR<br />
                        <span className="text-gradient-gold">TEAM</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-mono text-gray-200 text-sm md:text-lg max-w-xl mx-auto leading-relaxed bg-black/30 p-4 backdrop-blur-sm rounded-md border border-white/10"
                    >
                        Connect with pre-vetted Virtual Assistants and Agents ready to work remotely.
                        From admin support to sales campaigns, we handle your staffing so you can focus on growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-6 justify-center pt-8"
                    >
                        <Link to="/summon">
                            <Button className="w-full md:w-auto h-14 px-8 bg-regal-purple hover:bg-regal-purple/90 text-white font-display text-lg tracking-wider rounded-sm border border-white/10 shadow-[0_0_20px_rgba(123,44,191,0.5)]">
                                HIRE A VIRTUAL ASSISTANT
                            </Button>
                        </Link>
                        <Link to="/art">
                            <Button variant="outline" className="w-full md:w-auto h-14 px-8 border-gilt-gold text-gilt-gold hover:bg-gilt-gold/10 font-display text-lg tracking-wider rounded-sm bg-black/50 backdrop-blur-sm">
                                EXPLORE SERVICES
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* VALUE PROPS */}
            <section className="py-24 px-6 md:px-12 bg-velvet-navy relative border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        {/* VALUE 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 space-y-6 group hover:border-regal-purple/50 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-regal-purple/20 flex items-center justify-center rounded-full text-regal-purple group-hover:scale-110 transition-transform">
                                <RiUserStarLine className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl text-foreground">Pre-Vetted Talent</h3>
                            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                                Every VA undergoes rigorous screening. Skills tests, background checks, and trial periods ensure you get the best.
                            </p>
                        </motion.div>

                        {/* VALUE 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-panel p-8 space-y-6 group hover:border-neon-quill/50 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-neon-quill/20 flex items-center justify-center rounded-full text-neon-quill group-hover:scale-110 transition-transform">
                                <RiTeamLine className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl text-foreground">Flexible Hiring</h3>
                            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                                Full-time, part-time, or project-based. Scale up or down as your business needs change.
                            </p>
                        </motion.div>

                        {/* VALUE 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="glass-panel p-8 space-y-6 group hover:border-gilt-gold/50 transition-colors duration-500"
                        >
                            <div className="w-12 h-12 bg-gilt-gold/20 flex items-center justify-center rounded-full text-gilt-gold group-hover:scale-110 transition-transform">
                                <RiRocketLine className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl text-foreground">Fast Deployment</h3>
                            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                                Get matched with qualified candidates within 48 hours. Start working together in under a week.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 flex flex-col items-center justify-center text-center space-y-8 bg-gradient-to-b from-velvet-navy to-black">
                <RiTeamLine className="w-16 h-16 text-gilt-gold opacity-50 animate-pulse" />
                <h2 className="font-display text-5xl md:text-6xl text-foreground">Ready to Build Your Team?</h2>
                <p className="font-mono text-muted-foreground max-w-lg">
                    Tell us about your needs and we'll match you with the perfect virtual talent.
                </p>
                <Link to="/summon">
                    <Button className="h-16 px-12 bg-transparent border border-neon-quill text-neon-quill hover:bg-neon-quill hover:text-black font-display text-xl transition-all duration-300">
                        GET STARTED <RiArrowRightLine className="ml-2" />
                    </Button>
                </Link>
            </section>
        </>
    );
}
