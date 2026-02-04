import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RiGhostLine } from "@remixicon/react";

export function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <RiGhostLine className="w-24 h-24 text-muted-foreground animate-pulse" />
            <h1 className="font-display text-4xl md:text-6xl text-gilt-gold">
                The Page Hath Vanished!
            </h1>
            <p className="font-mono text-muted-foreground max-w-md">
                Alas, the digital scroll thou seekest exists not in this realm. Perchance it was lost to the void.
            </p>
            <Link to="/">
                <Button className="font-display tracking-widest bg-regal-purple hover:bg-regal-purple/80 text-white">
                    RETURN TO SAFETY
                </Button>
            </Link>
        </div>
    );
}
