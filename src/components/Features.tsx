"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        number: "01",
        title: "Lightning Fast Delivery",
        description: "7-day turnaround for standard apps. 14 days for complex systems. We don't waste time on meetings—we build.",
        stat: "7 Days",
    },
    {
        number: "02",
        title: "Production-Ready Code",
        description: "Clean, scalable, maintainable. Built with modern frameworks. No technical debt. Ready to scale from day one.",
        stat: "100% Quality",
    },
    {
        number: "03",
        title: "Modern Tech Stack",
        description: "Next.js, React, TypeScript, Tailwind. The same stack used by billion-dollar companies. Future-proof.",
        stat: "Latest Tech",
    },
    {
        number: "04",
        title: "Fixed Price Guarantee",
        description: "₹50k-₹80k. No hidden costs. No scope creep charges. What we quote is what you pay. Period.",
        stat: "No Surprises",
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
            className="relative py-20 px-6 z-10 bg-black"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-semibold mb-6 uppercase tracking-widest">
                        WHY STRAVON
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        <TextReveal delay={0.2}>
                            Built Different Delivered Faster
                        </TextReveal>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        We've eliminated everything that slows down traditional agencies. What's left? Pure execution.
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
                                    <span className="px-2 py-1 border border-white/20 bg-white/5 text-white text-xs font-bold uppercase tracking-wide">
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
