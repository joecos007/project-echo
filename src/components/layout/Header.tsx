import { RiBox3Line } from "@remixicon/react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "#vision", label: "VISION" },
    { href: "#guild", label: "GUILD" },
    { href: "#art", label: "ART" },
    { href: "#chronicles", label: "CHRONICLES" },
    { href: "#summon", label: "SUMMON" },
];

export function Header() {
    return (
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
                <RiBox3Line className="text-primary w-6 h-6 transition-transform group-hover:rotate-45" />
                <span className="text-xl font-semibold text-foreground tracking-tighter font-display">
                    TEAM ECHO
                </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-12 font-mono font-semibold text-sm tracking-widest text-muted-foreground">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="hover:text-primary transition-colors hover:scale-110 block"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
                <div className="font-mono text-xs text-accent hidden lg:block">SYS.READY</div>
                <Button
                    variant="outline"
                    className="rounded-none font-mono font-semibold text-sm tracking-wider backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
                >
                    INQUIRE
                </Button>
            </div>
        </nav>
    );
}
