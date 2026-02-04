import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export interface SplitTextOptions {
    type?: "chars" | "words" | "lines" | "chars,words" | "chars,lines" | "words,lines" | "chars,words,lines";
    charsClass?: string;
    wordsClass?: string;
    linesClass?: string;
}

/**
 * Custom hook for splitting text into individual elements for animation
 * Note: This is a simplified version. For full SplitText functionality,
 * consider using GSAP's SplitText plugin (premium)
 * 
 * @param ref - Reference to the text element
 * @param options - Split configuration
 * 
 * @example
 * const ref = useSplitText({ type: "chars" });
 * // Then animate: gsap.from(ref.current.children, { opacity: 0, stagger: 0.05 });
 */
export function useSplitText(options: SplitTextOptions = { type: "words" }) {
    const ref = useRef<HTMLDivElement>(null);
    const originalHTML = useRef<string>("");

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;
        originalHTML.current = element.innerHTML;

        // Simple text splitting (words)
        if (options.type?.includes("words")) {
            const text = element.textContent || "";
            const words = text.split(" ");

            element.innerHTML = words
                .map((word, i) =>
                    `<span class="${options.wordsClass || 'word'}" style="display: inline-block;">${word}${i < words.length - 1 ? " " : ""}</span>`
                )
                .join("");
        }

        // Simple character splitting
        if (options.type?.includes("chars") && !options.type?.includes("words")) {
            const text = element.textContent || "";
            const chars = text.split("");

            element.innerHTML = chars
                .map(char =>
                    `<span class="${options.charsClass || 'char'}" style="display: inline-block;">${char === " " ? "&nbsp;" : char}</span>`
                )
                .join("");
        }

        return () => {
            if (element) {
                element.innerHTML = originalHTML.current;
            }
        };
    }, [options.type, options.charsClass, options.wordsClass]);

    return ref;
}

/**
 * Hook for character-by-character reveal animation
 */
export function useCharReveal(stagger: number = 0.05, delay: number = 0) {
    const ref = useSplitText({ type: "chars" });

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current!.children, {
                opacity: 0,
                y: 20,
                rotateX: -90,
                stagger: stagger,
                delay: delay,
                duration: 0.6,
                ease: "back.out(1.7)",
            });
        }, ref);

        return () => ctx.revert();
    }, [stagger, delay]);

    return ref;
}

/**
 * Hook for word-by-word reveal animation
 */
export function useWordReveal(stagger: number = 0.08, delay: number = 0) {
    const ref = useSplitText({ type: "words" });

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current!.children, {
                opacity: 0,
                y: 30,
                stagger: stagger,
                delay: delay,
                duration: 0.8,
                ease: "power3.out",
            });
        }, ref);

        return () => ctx.revert();
    }, [stagger, delay]);

    return ref;
}
