import { type ReactNode } from "react";
import { useCharReveal, useWordReveal } from "@/lib/hooks";

interface TextRevealProps {
    children: ReactNode;
    type?: "char" | "word";
    stagger?: number;
    delay?: number;
    className?: string;
}

/**
 * Text reveal animation component
 * Splits text into characters or words and animates them in
 */
export function TextReveal({
    children,
    type = "word",
    stagger = 0.05,
    delay = 0,
    className = "",
}: TextRevealProps) {
    const charRef = useCharReveal(stagger, delay);
    const wordRef = useWordReveal(stagger, delay);

    const ref = type === "char" ? charRef : wordRef;

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
