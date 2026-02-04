import { RiShieldCheckLine, RiArrowRightLine } from "@remixicon/react";

export function ContactSection() {
    return (
        <section id="summon" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 bg-void">
            {/* Floating Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-psych rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-quantum rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-2xl w-full px-8 relative z-10">
                <div className="text-center mb-12">
                    <RiShieldCheckLine className="w-12 h-12 text-quantum mx-auto mb-6 animate-slow-spin" />
                    <h2 className="font-display font-semibold text-5xl mb-2 tracking-tight">INITIATE CONTACT</h2>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest">SECURE CHANNEL // ENCRYPTED</p>
                </div>

                <form className="space-y-12">
                    {/* Identification Field */}
                    <div className="relative group">
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-mono text-foreground focus:outline-none focus:border-quantum transition-colors peer placeholder-transparent"
                            placeholder="IDENTIFICATION"
                        />
                        <label className="absolute left-0 top-4 text-muted-foreground font-mono text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-quantum peer-valid:-top-4 peer-valid:text-quantum">
                            IDENTIFICATION
                        </label>
                        <div className="absolute right-0 top-4 opacity-0 peer-focus:opacity-100 transition-opacity">
                            <span className="font-mono text-[10px] text-quantum animate-pulse">SCANNING...</span>
                        </div>
                    </div>

                    {/* Digital Address Field */}
                    <div className="relative group">
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-mono text-foreground focus:outline-none focus:border-psych transition-colors peer placeholder-transparent"
                            placeholder="DIGITAL ADDRESS"
                        />
                        <label className="absolute left-0 top-4 text-muted-foreground font-mono text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-psych peer-valid:-top-4 peer-valid:text-psych">
                            DIGITAL ADDRESS
                        </label>
                    </div>

                    {/* Transmission Data Field */}
                    <div className="relative group">
                        <textarea
                            rows={1}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-mono text-foreground focus:outline-none focus:border-neon transition-colors peer placeholder-transparent resize-none"
                            placeholder="TRANSMISSION DATA"
                        ></textarea>
                        <label className="absolute left-0 top-4 text-muted-foreground font-mono text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-neon peer-valid:-top-4 peer-valid:text-neon">
                            TRANSMISSION DATA
                        </label>
                    </div>

                    <div className="flex justify-end pt-8">
                        <button type="submit" className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden cursor-pointer">
                            <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-foreground group-hover:text-black font-display font-bold tracking-widest flex items-center gap-2">
                                TRANSMIT <RiArrowRightLine className="w-4 h-4" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
