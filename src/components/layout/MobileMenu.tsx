import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { RiCloseLargeLine, RiVipCrownLine } from "@remixicon/react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: Array<{ href: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full xs:w-80 bg-velvet-navy border-l border-white/10 z-50 p-8 md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-12">
                            <div className="flex items-center gap-2 text-gilt-gold">
                                <RiVipCrownLine className="w-5 h-5" />
                                <span className="font-display tracking-widest text-sm">MENU</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 text-white/50 hover:text-white transition-colors"
                            >
                                <RiCloseLargeLine className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="flex-1 space-y-6 flex flex-col justify-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={onClose}
                                        className="block text-4xl font-display text-white hover:text-neon-quill transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8"
                            >
                                <div className="font-mono text-xs text-accent mb-2">SYS.READY</div>
                                <Link to="/summon" onClick={onClose}>
                                    <button className="w-full text-left text-4xl font-display text-neon-quill border border-neon-quill/50 p-4 hover:bg-neon-quill hover:text-velvet-navy transition-all uppercase tracking-wider">
                                        Inquire
                                    </button>
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Footer / Decor */}
                        <div className="mt-auto pt-8 border-t border-white/10">
                            <div className="font-mono text-xs text-center text-muted-foreground tracking-widest">
                                /// SYSTEM.ONLINE ///
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
