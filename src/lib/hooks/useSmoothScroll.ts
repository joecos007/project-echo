import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Custom hook for smooth scrolling with Lenis
 * Integrates with GSAP ScrollTrigger for synchronized animations
 * 
 * @param options - Lenis configuration options
 * 
 * @example
 * useSmoothScroll({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
 */
export function useSmoothScroll(options: {
    duration?: number;
    easing?: (t: number) => number;
    orientation?: "vertical" | "horizontal";
    gestureOrientation?: "vertical" | "horizontal" | "both";
    smoothWheel?: boolean;
    wheelMultiplier?: number;
} = {}) {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: options.duration || 1.2,
            easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
            orientation: options.orientation || "vertical",
            gestureOrientation: options.gestureOrientation || "vertical",
            smoothWheel: options.smoothWheel !== false,
            wheelMultiplier: options.wheelMultiplier || 1,
        });

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on("scroll", () => {
            ScrollTrigger.update();
        });

        // Use GSAP ticker for smooth animation loop
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove(() => { });
        };
    }, [
        options.duration,
        options.orientation,
        options.smoothWheel,
        options.wheelMultiplier,
    ]);
}
