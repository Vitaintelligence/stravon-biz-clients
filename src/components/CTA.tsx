"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 px-6 z-10"
        >
            <div className="max-w-5xl mx-auto">
                <div className="cta-content relative p-12 md:p-20 border border-white/20 bg-black">
                    <div className="relative z-10 text-center">
                        {/* Urgency Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 bg-black mb-8">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            <span className="text-white text-sm font-semibold uppercase tracking-wide">Only 3 Slots Left This Month</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                            <TextReveal delay={0.2}>
                                Ready to Ship Your Next App
                            </TextReveal>
                        </h2>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
                            Stop waiting. Start building. Get your production-ready app in 7 days.
                        </p>

                        {/* CTA Buttons with MagneticButton */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <MagneticButton
                                href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start on WhatsApp
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                            <a
                                href="https://calendly.com/stravon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 bg-black border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-3"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a Call
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50 uppercase tracking-wide">
                            <span>No credit card required</span>
                            <span>•</span>
                            <span>Free consultation</span>
                            <span>•</span>
                            <span>Response in 2 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
