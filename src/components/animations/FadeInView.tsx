import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface FadeInViewProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    duration?: number;
    delay?: number;
}

/**
 * Fade in animation when element enters viewport
 * Replaces Framer Motion's whileInView with GSAP for better performance
 */
export function FadeInView({
    children,
    className = "",
    direction = "up",
    distance = 50,
    duration = 0.8,
    delay = 0,
}: FadeInViewProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        // Determine initial position based on direction
        const initialProps: Record<string, any> = {
            opacity: 0,
        };

        if (direction !== "none") {
            if (direction === "up") initialProps.y = distance;
            if (direction === "down") initialProps.y = -distance;
            if (direction === "left") initialProps.x = distance;
            if (direction === "right") initialProps.x = -distance;
        }

        // Set initial state
        gsap.set(element, initialProps);

        // Create scroll trigger animation
        const animation = gsap.to(element, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            animation.kill();
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === element) trigger.kill();
            });
        };
    }, [direction, distance, duration, delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
