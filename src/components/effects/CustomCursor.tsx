import { useEffect, useState } from "react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches("a, button, input, textarea, .cursor-pointer, .group")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-quantum transition-transform duration-100 ease-out"
                style={{
                    width: "4px",
                    height: "4px",
                    transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
                }}
            />
            <div
                className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-quantum/50 transition-all duration-300 ease-out ${isHovering ? "w-[60px] h-[60px] border-neon mix-blend-difference" : "w-[40px] h-[40px]"
                    }`}
                style={{
                    transform: `translate(${position.x - (isHovering ? 30 : 20)}px, ${position.y - (isHovering ? 30 : 20)}px)`,
                }}
            />
        </>
    );
}
