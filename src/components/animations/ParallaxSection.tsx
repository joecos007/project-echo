import { type ReactNode } from "react";
import { useParallax } from "@/lib/hooks";

interface ParallaxSectionProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

/**
 * Section with parallax scroll effect
 * Elements move at different speeds than scroll for depth
 * 
 * @param speed - Parallax speed (0.1 = slow, 0.9 = fast, 0.5 = half speed)
 */
export function ParallaxSection({
    children,
    speed = 0.5,
    className = "",
}: ParallaxSectionProps) {
    const ref = useParallax(speed);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
