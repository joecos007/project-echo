import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

/**
 * Magnetic button that follows cursor on hover
 * Creates engaging micro-interaction
 */
export function MagneticButton({
    children,
    className = "",
    strength = 0.3,
    onClick,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const magneticRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        const magnetic = magneticRef.current;
        if (!button || !magnetic) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = button.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            gsap.to(magnetic, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(magnetic, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.5)",
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={buttonRef}
            className={className}
            onClick={onClick}
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div ref={magneticRef} style={{ display: "inline-block" }}>
                {children}
            </div>
        </button>
    );
}
