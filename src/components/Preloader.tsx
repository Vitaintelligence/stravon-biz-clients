"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => setComplete(true),
        });

        // Pulse
        tl.to(textRef.current, {
            opacity: 0.5,
            duration: 0.8,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
        })
            // Split reveal
            .to(textRef.current, {
                scale: 1.5,
                opacity: 0,
                duration: 0.5,
                ease: "power3.in",
            })
            .to(containerRef.current, {
                height: 0,
                duration: 1,
                ease: "expo.inOut",
            }, "-=0.3");

    }, []);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
            <h1
                ref={textRef}
                className="text-white text-6xl md:text-8xl font-bold tracking-tighter"
            >
                STRAVON
            </h1>
        </div>
    );
}
