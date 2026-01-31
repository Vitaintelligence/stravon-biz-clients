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
        <div ref={containerRef} className="relative h-[800vh] w-full bg-[var(--background)]">
            {/* The Cinematic Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full z-0 object-cover opacity-60" // Slightly more subtle for the navy theme
            />

            {/* 1. Hero Overlay */}
            <div ref={heroTextRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-none text-white px-4">
                <div className="trusted-badge mb-8 scale-90 md:scale-100">
                    <div className="avatar-stack">
                        <img src="https://i.pravatar.cc/100?u=1" alt="User" />
                        <img src="https://i.pravatar.cc/100?u=2" alt="User" />
                        <img src="https://i.pravatar.cc/100?u=3" alt="User" />
                    </div>
                    <span className="text-xs font-medium text-white/70 tracking-tight">Trusted by 100+ Founders</span>
                </div>

                <h1 className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-none mb-4">
                    STRAVON
                </h1>
                <p className="text-lg md:text-3xl font-light tracking-tight max-w-2xl text-center text-white/80">
                    We build apps. <span className="font-medium text-white">10x fast.</span> <span className="font-medium text-white">100x better.</span>
                </p>

                <div className="mt-12 flex flex-col items-center animate-bounce opacity-50">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2">Scroll to explore</p>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </div>

            {/* 2. Mission Overlay */}
            <div ref={missionRef} className="fixed top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none opacity-0 invisible px-4">
                <div className="glass-morphism p-8 md:p-20 rounded-[2.5rem] max-w-4xl text-center text-white">
                    <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">
                        The 7-Day <br /> Standard.
                    </h2>
                    <p className="text-lg md:text-3xl font-light text-white/70 leading-relaxed">
                        From vision to production in just 7 days. <br />
                        Complex feats in 14. We don't just build, <br />
                        <span className="text-white font-medium italic underline decoration-blue-500 underline-offset-8">we outpace.</span>
                    </p>
                </div>
            </div>

            {/* 3. Services Overlay */}
            <div ref={servicesRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-none opacity-0 invisible text-white px-4">
                <h3 className="text-sm font-medium uppercase tracking-[0.4em] mb-16 text-white/40">Our Efficiency</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-24 md:gap-y-16 max-w-6xl">
                    {[
                        { title: "7 Days", desc: "Average build time" },
                        { title: "50k - 80k", desc: "Ultra affordable pricing" },
                        { title: "10x Fast", desc: "Unmatched development speed" },
                        { title: "Premium", desc: "100x better working apps" }
                    ].map((item, i) => (
                        <div key={i} className="service-item flex flex-col items-center md:items-start">
                            <div className="text-5xl md:text-8xl font-bold tracking-tighter mb-2">{item.title}</div>
                            <div className="text-lg md:text-xl text-white/50 font-light">{item.desc}</div>
                            <div className="w-full h-px bg-white/10 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. CTA Overlay */}
            <div ref={ctaRef} className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center pointer-events-auto opacity-0 invisible text-white px-4 text-center">
                <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-4 leading-[0.9]">
                    Build Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Application</span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-white/60 mb-12 max-w-xl">
                    Ultra affordable. Professional execution. <br />
                    Ready in 7 days.
                </p>

                <a
                    href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white text-[#0A1F44] px-12 py-6 rounded-2xl text-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                    Start Inquiring Direct
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>

                <div className="absolute bottom-10 flex flex-col items-center gap-2">
                    <p className="text-xs text-white/30 font-mono tracking-widest uppercase">
                        © {new Date().getFullYear()} Stravon Agency — Modern Architecture
                    </p>
                </div>
            </div>

        </div>
    );
}
