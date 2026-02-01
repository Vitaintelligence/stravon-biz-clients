"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-badge", {
                opacity: 0,
                y: -20,
                duration: 0.6,
                delay: 0.2,
                ease: "power2.out",
            });
            gsap.from(".hero-title", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out",
            });
            gsap.from(".hero-stats", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: 1.2,
                stagger: 0.1,
                ease: "power2.out",
            });
            gsap.from(".hero-cta", {
                opacity: 0,
                scale: 0.95,
                duration: 0.5,
                delay: 1.4,
                ease: "power2.out",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12"
        >
            <div className="max-w-6xl mx-auto text-center z-10">
                {/* Trust Badge */}
                <div className="hero-badge inline-flex items-center gap-3 px-5 py-2.5 border border-white/20 bg-black mb-8">
                    <div className="flex -space-x-2">
                        <img className="w-7 h-7 border-2 border-black object-cover" src="https://i.pravatar.cc/100?u=1" alt="Client" />
                        <img className="w-7 h-7 border-2 border-black object-cover" src="https://i.pravatar.cc/100?u=2" alt="Client" />
                        <img className="w-7 h-7 border-2 border-black object-cover" src="https://i.pravatar.cc/100?u=3" alt="Client" />
                    </div>
                    <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Trusted by 50+ Founders</span>
                </div>

                {/* Main Headline with LineShadowText */}
                <h1 className="hero-title text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
                    <LineShadowText shadowColor="rgba(255,255,255,0.3)" className="text-white">
                        SHIP YOUR APP
                    </LineShadowText>
                    <br />
                    <span className="text-white">IN 7 DAYS</span>
                </h1>

                {/* Value Proposition with TextReveal */}
                <div className="mb-12">
                    <TextReveal className="text-xl sm:text-2xl md:text-3xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed" delay={0.8}>
                        While others take months we deliver production-ready apps in a week No compromises No delays
                    </TextReveal>
                </div>

                {/* Social Proof Stats */}
                <div className="hero-stats flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
                    <div className="flex items-center gap-3 px-6 py-3 border border-white/20 bg-black">
                        <div className="text-left">
                            <div className="text-2xl font-bold text-white">7 Days</div>
                            <div className="text-xs text-white/50 uppercase tracking-wide">Avg. Delivery</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 border border-white/20 bg-black">
                        <div className="text-left">
                            <div className="text-2xl font-bold text-white">₹50-80k</div>
                            <div className="text-xs text-white/50 uppercase tracking-wide">Fixed Price</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 border border-white/20 bg-black">
                        <div className="text-left">
                            <div className="text-2xl font-bold text-white">10x</div>
                            <div className="text-xs text-white/50 uppercase tracking-wide">Faster Build</div>
                        </div>
                    </div>
                </div>

                {/* Primary CTA with MagneticButton */}
                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton
                        href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-200 flex items-center gap-3 cursor-pointer"
                    >
                        Start Your Project Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                    <a
                        href="#pricing"
                        className="px-8 py-4 bg-black border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-200"
                    >
                        View Pricing
                    </a>
                </div>

                {/* Urgency Indicator */}
                <p className="mt-8 text-sm text-white/40 uppercase tracking-widest">
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
                    3 slots available this month
                </p>
            </div>
        </section>
    );
}
