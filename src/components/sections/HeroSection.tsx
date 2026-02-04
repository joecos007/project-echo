
export function HeroSection() {
    return (
        <section id="vision" className="relative min-h-screen flex items-center justify-center perspective-1000 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space/50 to-space z-0 transition-opacity duration-1000"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center mix-blend-overlay transition-all duration-1000 animate-float" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}>
                <div className="font-display text-cyan tracking-[1em] text-xs mb-6 opacity-0 animate-[fade-in_1s_1s_forwards]">A PROCLAMATION</div>
                <h1 className="font-display font-black text-7xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-[0.85] select-none text-foreground hover:animate-glitch cursor-none">
                    WE BUILD<br />DREAMS
                </h1>
                <p className="font-mono text-xs md:text-sm text-muted-foreground mt-8 max-w-md mx-auto leading-relaxed border-l-2 border-psych pl-4 text-left">
                // TRANSCENDING PHYSICAL LIMITS<br />
                // QUANTUM VIRTUAL ASSISTANCE<br />
                // EST. MMXXIV
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-80">
                <div className="w-[1px] h-24 bg-gradient-to-b from-quantum to-transparent"></div>
                <span className="font-mono text-[10px] tracking-widest text-quantum">SCROLL TO SUMMON</span>
            </div>
        </section>
    );
}
