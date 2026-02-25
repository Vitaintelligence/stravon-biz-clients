"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        number: "01",
        title: "Instant Solutions",
        description: "Real-time assistance for any problem. We don't waste time—Ai solves it.",
        stat: "Real-time",
    },
    {
        number: "02",
        title: "Background Execution",
        description: "Runs seamlessly in the background while you focus on what matters. No interruptions.",
        stat: "Seamless",
    },
    {
        number: "03",
        title: "The Ultron Model",
        description: "Powered by the latest Ultron model. The same AI used by top professionals. Future-proof.",
        stat: "Advanced AI",
    },
    {
        number: "04",
        title: "Learn Ai. Not MCQs.",
        description: "Stop grinding through outdated methods. Embrace the future of problem-solving.",
        stat: "Smart Choice",
    },
];

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="features"
            className="relative py-20 px-6 z-10 bg-black/40"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 border border-white/20 bg-black text-white text-xs font-semibold mb-6 uppercase tracking-widest">
                        WHY STRAVON
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        <TextReveal delay={0.2}>
                            Work Smarter Not Harder
                        </TextReveal>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        We've eliminated everything that slows you down. What's left? Pure Ai assistance.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card group relative p-8 bg-black hover:bg-white/5 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                {/* Number */}
                                <div className="text-5xl font-bold text-white/10 mb-4">
                                    {feature.number}
                                </div>

                                {/* Content */}
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                                    <span className="px-2 py-1 border border-white/20 bg-black text-white text-xs font-bold uppercase tracking-wide">
                                        {feature.stat}
                                    </span>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
