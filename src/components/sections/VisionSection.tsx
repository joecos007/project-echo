import { RiCpuLine } from "@remixicon/react";

export function VisionSection() {
    return (
        <section id="guild" className="py-32 px-6 md:px-24 relative border-t border-white/5 bg-space/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-neon animate-pulse-glow">
                        <RiCpuLine className="w-5 h-5" />
                        <span className="font-mono text-xs tracking-widest">GENESIS_ALGORITHM</span>
                    </div>
                    <h2 className="font-display font-semibold text-4xl md:text-6xl leading-none tracking-tight">
                        FORM FOLLOWS <span className="text-quantum">DATA</span>
                    </h2>
                    <p className="font-mono font-medium text-lg text-muted-foreground leading-relaxed text-justify">
                        We don't just execute tasks. We cultivate digital organisms using evolutionary algorithms and real-time data. Every interaction is a living entity.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
                            <h3 className="font-display text-2xl mb-1 group-hover:text-cyan">98.4%</h3>
                            <p className="font-mono text-[10px] text-muted-foreground">ACCURACY RATING</p>
                        </div>
                        <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
                            <h3 className="font-display text-2xl mb-1 group-hover:text-psych">0.05s</h3>
                            <p className="font-mono text-[10px] text-muted-foreground">RESPONSE LATENCY</p>
                        </div>
                    </div>
                </div>

                {/* 3D Visual */}
                <div className="relative h-[400px] w-full perspective-1000 group">
                    <div className="absolute inset-0 border border-quantum/30 bg-quantum/5 transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 flex items-center justify-center overflow-hidden"
                        style={{ transform: "rotateY(12deg) rotateX(6deg)" }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="font-mono text-quantum text-center p-8 opacity-80">
                            <div className="text-6xl mb-4">AI</div>
                            <div className="text-sm tracking-widest">HUMAN LOOP INTEGRATED</div>
                        </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 border border-neon/50 rounded-full animate-slow-spin"></div>
                    <div className="absolute -bottom-5 -left-5 w-24 h-24 border border-psych/50 transform rotate-45"></div>
                </div>
            </div>
        </section>
    );
}
