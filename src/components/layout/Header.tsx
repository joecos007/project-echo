import { RiBox3Line, RiMenu3Line } from "@remixicon/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
    { href: "/guild", label: "TALENT" },
    { href: "/art", label: "SERVICES" },
    { href: "/team", label: "TEAM" },
    { href: "/chronicles", label: "SUCCESS" },
    { href: "/scroll", label: "INSIGHTS" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group cursor-pointer z-50">
                    <RiBox3Line className="text-primary w-6 h-6 transition-transform group-hover:rotate-45" />
                    <span className="text-xl font-semibold text-foreground tracking-tighter font-display">
                        TEAM ECHO
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-12 font-mono font-semibold text-sm tracking-widest text-muted-foreground">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="hover:text-primary transition-colors hover:scale-110 block"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="font-mono text-xs text-accent hidden lg:block">SYS.READY</div>
                    <Link to="/summon">
                        <Button
                            variant="outline"
                            className="rounded-none font-mono font-semibold text-sm tracking-wider backdrop-blur-md hover:bg-primary hover:text-primary-foreground border-primary/50 text-primary"
                        >
                            INQUIRE
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 text-primary p-2 -mr-2"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <RiMenu3Line className="w-8 h-8" />
                </button>
            </nav>

            <MobileMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    );
}
