"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Counter } from "@/components/ui/counter";
import { TextReveal } from "@/components/ui/text-reveal";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".story-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="story"
            className="relative py-20 px-6 z-10 bg-black"
        >
            <div className="max-w-4xl mx-auto">
                <div className="story-content text-center">
                    <span className="inline-block px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-semibold mb-8 uppercase tracking-widest">
                        OUR STORY
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                        <TextReveal delay={0.2}>
                            We Got Tired of Slow Agencies
                        </TextReveal>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
                        <p>
                            Traditional agencies take 3-6 months to build what we deliver in 7 days.
                            They charge ₹5-10 lakhs for what we do at ₹50-80k.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Why?</span> Because they're stuck in outdated processes.
                            Endless meetings. Bloated teams. Legacy tech.
                        </p>
                        <p>
                            We stripped away everything that doesn't add value. What's left is pure execution.
                            <span className="text-white font-semibold"> Modern stack. Small team. Fast delivery.</span>
                        </p>
                        <p className="text-2xl md:text-3xl font-bold text-white pt-8">
                            That's the Stravon difference.
                        </p>
                    </div>

                    {/* Stats with Counter */}
                    <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                <Counter to={10} suffix="x" duration={2} />
                            </div>
                            <div className="text-sm text-white/60 uppercase tracking-wide">Faster Than Traditional</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                <Counter to={50} suffix="+" duration={2} />
                            </div>
                            <div className="text-sm text-white/60 uppercase tracking-wide">Apps Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                <Counter to={100} suffix="%" duration={2} />
                            </div>
                            <div className="text-sm text-white/60 uppercase tracking-wide">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
