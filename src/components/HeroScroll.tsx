"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;

export default function HeroScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Section Refs
    const heroTextRef = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        // --- Image Loading ---
        const images: HTMLImageElement[] = [];
        const frames = { currentIndex: 0 };

        const render = () => {
            const img = images[frames.currentIndex];
            if (!img || !img.complete) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            context.clearRect(0, 0, canvas.width, canvas.height);
            // Optional: Add a slight blur or filter here if needed via context, but CSS opacity is faster
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        let loadedCount = 0;
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameId = i.toString().padStart(4, "0");
            img.src = `/frames/${frameId}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 1) render();
            };
            images.push(img);
        }

        // --- Timeline & ScrollTrigger ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1, // Weighted smooth scrub
                pin: true,
                onUpdate: (self) => {
                    // Video Frame Logic
                    const frameIndex = Math.min(
                        FRAME_COUNT - 1,
                        Math.floor(self.progress * (FRAME_COUNT - 1))
                    );
                    if (images[frameIndex]?.complete) {
                        frames.currentIndex = frameIndex;
                        requestAnimationFrame(render);
                    }
                },
            },
        });

        // Content Animations (Sequenced relative to scroll progress approx)
        // Total Duration is mapped to scroll distance (e.g. 800vh) via scrub.
        // We can use absolute offsets or percentages in the timeline.

        /* 
           Timeline Strategy:
           0-10%: Hero Visible
           10-20%: Hero Fade Out
           20-30%: Mission Fade In
           45-55%: Mission Fade Out
           60-80%: Services Sequence
           85-100%: CTA visible
        */

        // 1. Hero Text (Starts visible, fades out early)
        tl.to(heroTextRef.current, { opacity: 0, duration: 1, ease: "power1.out" }, 1); // Relative time 1

        // 2. Mission Section (Enters around 20% of scroll)
        tl.fromTo(missionRef.current,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 2, ease: "power2.out" },
            2.5
        )
            .to(missionRef.current, { autoAlpha: 0, y: -50, duration: 2 }, 6);

        // 3. Services Section (Enters around 60% of scroll)
        tl.fromTo(servicesRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 2 },
            7
        );
        // Stagger items inside services?
        const serviceItems = servicesRef.current?.querySelectorAll(".service-item");
        if (serviceItems) {
            tl.from(serviceItems, {
                y: 30,
                opacity: 0,
                stagger: 0.5,
                duration: 1
            }, 7.5);
        }
        tl.to(servicesRef.current, { autoAlpha: 0, duration: 2 }, 12);

        // 4. CTA / Footer (Enters at end)
        tl.fromTo(ctaRef.current,
            { autoAlpha: 0, scale: 0.9 },
            { autoAlpha: 1, scale: 1, duration: 2, ease: "back.out(1.7)" },
            13
        );


        window.addEventListener("resize", render);

        return () => {
            tl.kill();
            window.removeEventListener("resize", render);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-[800vh] w-full bg-black">
            {/* The Cinematic Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full z-0 object-cover opacity-80" // Translucency
            />

            {/* 1. Hero Overlay */}
            <div ref={heroTextRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-none mix-blend-difference text-white">
                <h1 className="text-[12vw] font-bold tracking-tighter leading-none">
                    STRAVON
                </h1>
                <p className="text-xl md:text-2xl mt-4 font-light tracking-tight">
                    The Architecture of Intelligence
                </p>
            </div>

            {/* 2. Mission Overlay */}
            <div ref={missionRef} className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none opacity-0 invisible">
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-12 md:p-24 rounded-3xl max-w-4xl text-center mx-4 text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Building the Next Generation <br /> of <span className="text-titanium">AI</span>.</h2>
                    <p className="text-xl md:text-3xl font-light text-gray-200">
                        We engineer consumer apps and scale AI infrastructure for businesses.
                    </p>
                </div>
            </div>

            {/* 3. Services Overlay */}
            <div ref={servicesRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-none opacity-0 invisible text-white">
                <h3 className="text-2xl font-light uppercase tracking-widest mb-12 text-gray-400">Our Services</h3>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    {["AI Scaling", "Consumer Apps", "3D Web", "Infrastructure"].map((item, i) => (
                        <div key={i} className="service-item text-center">
                            <div className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">{item}</div>
                            <div className="w-full h-px bg-white/20"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. CTA Overlay */}
            <div ref={ctaRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-auto opacity-0 invisible text-white">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-center">
                    Defy <span className="text-titanium">Gravity</span>
                </h2>
                <button className="bg-white text-black px-12 py-6 rounded-full text-2xl font-medium hover:scale-105 transition-transform duration-300">
                    Let's Build
                </button>
                <div className="absolute bottom-10 text-sm text-gray-500 font-mono">
                    © {new Date().getFullYear()} Stravon Agency
                </div>
            </div>

        </div>
    );
}
