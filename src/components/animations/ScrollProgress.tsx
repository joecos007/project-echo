import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollProgressProps {
    className?: string;
    color?: string;
}

/**
 * Scroll progress indicator bar
 * Shows how far user has scrolled down the page
 * Uses GSAP ScrollTrigger for optimal performance
 */
export function ScrollProgress({
    className = "",
    color = "#00ff88",
}: ScrollProgressProps) {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!progressRef.current) return;

        // Use ScrollTrigger for performance (synced with GSAP's RAF loop)
        const trigger = ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
                if (!progressRef.current) return;

                // Use scaleX instead of width (GPU-accelerated)
                gsap.to(progressRef.current, {
                    scaleX: self.progress,
                    transformOrigin: "left center",
                    duration: 0.1,
                    ease: "none",
                    overwrite: "auto",
                });
            },
        });

        return () => trigger.kill();
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-1 z-50 ${className}`}
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
            <div
                ref={progressRef}
                className="h-full"
                style={{
                    backgroundColor: color,
                    transform: "scaleX(0)",
                    transformOrigin: "left center",
                    boxShadow: `0 0 10px ${color}`,
                }}
            />
        </div>
    );
}
