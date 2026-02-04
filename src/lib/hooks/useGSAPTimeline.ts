import { useRef, type DependencyList } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAPAnimation } from "./useGSAPAnimation";

/**
 * Hook for creating GSAP timelines with automatic cleanup
 * Useful for complex animation sequences
 * 
 * @param defaults - Timeline default properties
 * @param dependencies - Optional dependency array
 * 
 * @example
 * const { scope, timeline } = useGSAPTimeline({ paused: true });
 * 
 * useEffect(() => {
 *   timeline
 *     ?.to(".box", { x: 100 })
 *     .to(".circle", { rotation: 360 }, "<")
 *     .to(".text", { opacity: 1 });
 * }, [timeline]);
 */
export function useGSAPTimeline(
    defaults?: gsap.TimelineVars,
    dependencies: DependencyList = []
) {
    const timelineRef = useRef<gsap.core.Timeline>();

    const scope = useGSAPAnimation(() => {
        timelineRef.current = gsap.timeline(defaults);

        return () => {
            timelineRef.current?.kill();
        };
    }, dependencies);

    return { scope, timeline: timelineRef.current };
}
