import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Global GSAP configuration
gsap.config({
    nullTargetWarn: false,
    force3D: true, // Force GPU acceleration
});

// ScrollTrigger defaults
ScrollTrigger.defaults({
    markers: import.meta.env.DEV, // Show markers in development
    toggleActions: "play pause resume reset",
});

// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0.01); // Effectively instant animations
    ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
}

export { gsap, ScrollTrigger, useGSAP };
