import { RiMailSendLine, RiLinkedinBoxLine, RiTwitterXLine, RiPhoneLine, RiMapPinLine } from "@remixicon/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TextReveal, FadeInView, MagneticButton } from "@/components/animations";

export function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">

                {/* TEXT CONTENT */}
                <div className="space-y-8">
                    <FadeInView direction="left">
                        <div className="inline-block border-b border-gilt-gold/50 pb-2">
                            <span className="font-display text-gilt-gold tracking-[0.2em]">GET STARTED</span>
                        </div>
                    </FadeInView>

                    <TextReveal type="word" className="font-display text-6xl md:text-8xl leading-none">
                        Hire Your<br />
                        <span className="text-regal-purple">Virtual Team</span>
                    </TextReveal>

                    <FadeInView delay={0.5} direction="left">
                        <p className="font-mono text-lg text-muted-foreground leading-relaxed max-w-md">
                            Ready to scale your business with dedicated virtual talent? Tell us about your needs and we'll match you with the perfect VA or agent.
                        </p>
                    </FadeInView>

                    <div className="space-y-4 pt-4">
                        <FadeInView delay={0.6} direction="left">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <RiPhoneLine className="w-5 h-5 text-neon-quill" />
                                <span className="font-mono">+1 (555) 123-4567</span>
                            </div>
                        </FadeInView>
                        <FadeInView delay={0.65} direction="left">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <RiMailSendLine className="w-5 h-5 text-neon-quill" />
                                <span className="font-mono">hello@teamecho.com</span>
                            </div>
                        </FadeInView>
                        <FadeInView delay={0.7} direction="left">
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <RiMapPinLine className="w-5 h-5 text-neon-quill" />
                                <span className="font-mono">Remote-first, Global Team</span>
                            </div>
                        </FadeInView>
                    </div>

                    <FadeInView delay={0.8} direction="left">
                        <div className="flex gap-6 pt-4">
                            {[
                                { Icon: RiLinkedinBoxLine, href: "https://linkedin.com/company/teamecho" },
                                { Icon: RiTwitterXLine, href: "https://twitter.com/teamecho" }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-regal-purple transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-muted-foreground hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </FadeInView>
                </div>

                {/* INQUIRY FORM */}
                <FadeInView direction="right" delay={0.3}>
                    <div className="glass-panel p-8 md:p-12 rounded-sm border-t border-t-white/10">
                        <h2 className="font-display text-2xl text-foreground mb-6">Request a Consultation</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FadeInView delay={0.4} direction="up">
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Your Name</label>
                                        <Input
                                            placeholder="John Smith"
                                            className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                                        />
                                    </div>
                                </FadeInView>
                                <FadeInView delay={0.45} direction="up">
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Company</label>
                                        <Input
                                            placeholder="Your Company"
                                            className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                                        />
                                    </div>
                                </FadeInView>
                            </div>

                            <FadeInView delay={0.5} direction="up">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="you@company.com"
                                        className="bg-black/20 border-white/10 focus:border-regal-purple font-mono h-12"
                                    />
                                </div>
                            </FadeInView>

                            <FadeInView delay={0.55} direction="up">
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
                            </FadeInView>

                            <FadeInView delay={0.6} direction="up">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-gilt-gold">Tell us more</label>
                                    <Textarea
                                        placeholder="Describe your needs, timeline, and any specific requirements..."
                                        className="bg-black/20 border-white/10 focus:border-regal-purple font-mono min-h-[120px]"
                                    />
                                </div>
                            </FadeInView>

                            <FadeInView delay={0.65} direction="up">
                                <MagneticButton className="w-full h-14 bg-regal-purple hover:bg-regal-purple/80 text-white font-display text-xl tracking-wider">
                                    SUBMIT INQUIRY <RiMailSendLine className="ml-2 w-5 h-5 inline" />
                                </MagneticButton>
                            </FadeInView>

                            <FadeInView delay={0.7} direction="up">
                                <p className="font-mono text-xs text-center text-muted-foreground">
                                    We'll respond within 24 hours with qualified candidates.
                                </p>
                            </FadeInView>
                        </form>
                    </div>
                </FadeInView>

            </div>
        </div>
    );
}
