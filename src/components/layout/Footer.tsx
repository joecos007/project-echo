import { RiBox3Line, RiInstagramFill, RiTwitterXFill, RiLinkedinBoxFill } from "@remixicon/react";

export function Footer() {
    return (
        <footer className="border-t border-border/10 bg-card/80 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <RiBox3Line className="text-primary w-5 h-5" />
                    <span className="font-display font-semibold text-lg tracking-tight">TEAM ECHO</span>
                </div>

                {/* Copyright */}
                <div className="font-mono text-[10px] text-muted-foreground tracking-widest text-center">
                    © MMXXVI THE GUILD OF DIGITAL HERALDS. ALL RIGHTS RESERVED.
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                    >
                        <RiInstagramFill className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Twitter/X"
                    >
                        <RiTwitterXFill className="w-5 h-5" />
                    </a>
                    <a
                        href="#"
                        className="text-muted-foreground hover:text-ring transition-colors"
                        aria-label="LinkedIn"
                    >
                        <RiLinkedinBoxFill className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
