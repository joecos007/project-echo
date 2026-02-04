import { useEffect, useRef, type DependencyList } from "react";
import { useGSAP as useGSAPCore, ScrollTrigger } from "@/lib/gsap";

/**
 * Custom hook for GSAP animations with automatic cleanup
 * 
 * @param animationFn - Function containing GSAP animation code
 * @param dependencies - Optional dependency array for re-triggering animations
 * 
 * @example
 * useGSAPAnimation(() => {
 *   gsap.to(".box", { x: 100, duration: 1 });
 * }, []);
 */
export function useGSAPAnimation(
    animationFn: () => void | (() => void),
    dependencies: DependencyList = []
) {
    const scope = useRef<HTMLDivElement>(null);

    useGSAPCore(
        () => {
            const cleanup = animationFn();
            return cleanup;
        },
        { scope, dependencies: dependencies as unknown[] }
    );

    return scope;
}

/**
 * Hook for handling GSAP animations that need to refresh on layout changes
 * Useful for responsive animations
 */
export function useGSAPWithRefresh(
    animationFn: () => void | (() => void),
    dependencies: DependencyList = []
) {
    const scope = useGSAPAnimation(animationFn, dependencies);

    useEffect(() => {
        // Manual debounce implementation
        let timeoutId: number;

        const debouncedRefresh = () => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        };

        window.addEventListener("resize", debouncedRefresh);
        return () => {
            window.removeEventListener("resize", debouncedRefresh);
            clearTimeout(timeoutId);
        };
    }, []);

    return scope;
}
