import { RiInstagramFill, RiTwitterXFill, RiLinkedinBoxFill } from "@remixicon/react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black pt-12 pb-2 text-center overflow-hidden relative mt-auto">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-4">

                {/* 8-BIT SCENE - Scaled Down */}
                <div className="flex items-end gap-2 mb-2 transform scale-75 origin-bottom">

                    {/* Character: Mr. O */}
                    <div className="relative w-12 h-12 group cursor-pointer">
                        {/* Head */}
                        <div className="absolute top-2 left-2 w-8 h-8 bg-regal-purple rounded-sm shadow-[4px_4px_0_0_rgba(0,0,0,1)]"></div>
                        {/* Eyes */}
                        <div className="absolute top-4 left-3 w-2 h-2 bg-white rounded-none animate-[wink_4s_infinite]"></div>
                        <div className="absolute top-4 left-7 w-2 h-2 bg-white rounded-none animate-[wink_4s_infinite_0.1s]"></div>
                        {/* Mouth */}
                        <div className="absolute top-7 left-4 w-4 h-1 bg-black/50"></div>
                        {/* Hat/Crown */}
                        <div className="absolute top-0 left-2 w-8 h-2 bg-gilt-gold"></div>
                        <div className="absolute -top-2 left-3 w-6 h-2 bg-gilt-gold"></div>

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white text-black text-[10px] font-mono px-2 py-1 rounded-none border border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                            MR. O SAYS HELLO!
                        </div>
                    </div>

                    {/* Coffee Cup */}
                    <div className="relative w-8 h-8">
                        {/* Steam Particles */}
                        <div className="absolute -top-4 left-1 w-1 h-1 bg-white/50 animate-[pixel-steam_2s_infinite]"></div>
                        <div className="absolute -top-6 left-3 w-1 h-1 bg-white/50 animate-[pixel-steam_2s_infinite_0.5s]"></div>
                        <div className="absolute -top-3 left-5 w-1 h-1 bg-white/50 animate-[pixel-steam_2s_infinite_1s]"></div>

                        {/* Mug Body - Using box-shadow for pixel art feel */}
                        <div className="absolute bottom-0 left-0 w-6 h-6 bg-neon-quill shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]"></div>
                        {/* Handle */}
                        <div className="absolute top-2 right-0 w-2 h-3 border-2 border-neon-quill border-l-0"></div>
                        {/* Liquid */}
                        <div className="absolute top-1 left-1 w-4 h-1 bg-black/20"></div>
                    </div>

                </div>

                {/* Retro Text - Smaller & Subtler */}
                <div className="font-mono text-[10px] md:text-xs text-gilt-gold tracking-widest bg-velvet-navy/80 px-3 py-1.5 border border-white/10 shadow-[2px_2px_0_0_rgba(123,44,191,0.3)]">
                    <span className="text-muted-foreground mr-2">{'>'}</span>
                    YOUR <span className="text-neon-quill">VIRTUAL TEAM</span> AWAITS
                    <span className="animate-[blink_1s_infinite] ml-1 inline-block w-1.5 h-3 bg-neon-quill align-middle"></span>
                </div>

                {/* Standard Links (Subtle) */}
                <div className="flex gap-4 opacity-20 hover:opacity-100 transition-opacity duration-300 mt-2 grayscale hover:grayscale-0 scale-90">
                    <a href="#" aria-label="Instagram"><RiInstagramFill className="w-4 h-4 hover:text-data-crimson transition-colors" /></a>
                    <a href="#" aria-label="Twitter"><RiTwitterXFill className="w-4 h-4 hover:text-white transition-colors" /></a>
                    <a href="#" aria-label="LinkedIn"><RiLinkedinBoxFill className="w-4 h-4 hover:text-regal-purple transition-colors" /></a>
                </div>

                {/* Copyright */}
                <div className="font-mono text-[8px] text-white/10 mt-4">
                    © MMXXVI TEAM ECHO // SYSTEM.END
                </div>

            </div>
        </footer>
    );
}
