import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export interface ScrollTriggerConfig {
    trigger?: string | HTMLElement;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    markers?: boolean;
    toggleActions?: string;
    onEnter?: () => void;
    onLeave?: () => void;
    onEnterBack?: () => void;
    onLeaveBack?: () => void;
}

/**
 * Custom hook for creating scroll-triggered animations
 * 
 * @param animationFn - Function that returns a GSAP animation
 * @param config - ScrollTrigger configuration
 * 
 * @example
 * useScrollTrigger(
 *   () => gsap.to(".box", { x: 100 }),
 *   { trigger: ".box", start: "top center" }
 * );
 */
export function useScrollTrigger(
    animationFn: (trigger: HTMLElement) => gsap.core.Tween | gsap.core.Timeline,
    config: ScrollTriggerConfig = {}
) {
    const triggerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

    useEffect(() => {
        if (!triggerRef.current) return;

        const ctx = gsap.context(() => {
            const animation = animationFn(triggerRef.current!);
            animationRef.current = animation;

            ScrollTrigger.create({
                animation,
                trigger: config.trigger || triggerRef.current,
                start: config.start || "top 80%",
                end: config.end || "bottom 20%",
                scrub: config.scrub,
                pin: config.pin,
                markers: config.markers,
                toggleActions: config.toggleActions,
                onEnter: config.onEnter,
                onLeave: config.onLeave,
                onEnterBack: config.onEnterBack,
                onLeaveBack: config.onLeaveBack,
            });
        }, triggerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return triggerRef;
}

/**
 * Hook for parallax scroll effects
 * 
 * @param speed - Parallax speed multiplier (-1 to 1, where 0.5 is half speed)
 */
export function useParallax(speed: number = 0.5) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const st = ScrollTrigger.create({
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const movement = (progress - 0.5) * 100 * (1 - speed);
                gsap.set(element, { y: movement });
            },
        });

        return () => {
            st.kill();
        };
    }, [speed]);

    return ref;
}
