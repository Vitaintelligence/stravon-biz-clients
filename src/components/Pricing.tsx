"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
    {
        name: "Standard Build",
        price: "₹50,000",
        duration: "7 Days",
        description: "Perfect for MVPs, landing pages, and simple web apps",
        features: [
            "Up to 5 pages/screens",
            "Responsive design",
            "Basic animations",
            "Contact forms",
            "SEO optimization",
            "7-day delivery",
            "1 week support",
        ],
        cta: "Start Building",
        popular: false,
    },
    {
        name: "Premium Build",
        price: "₹80,000",
        duration: "14 Days",
        description: "For complex apps with custom features and integrations",
        features: [
            "Up to 15 pages/screens",
            "Advanced animations",
            "API integrations",
            "Database setup",
            "Admin dashboard",
            "Authentication system",
            "14-day delivery",
            "2 weeks support",
        ],
        cta: "Go Premium",
        popular: true,
    },
];

export default function Pricing() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pricing-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="pricing"
            className="relative py-20 px-6 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-semibold mb-6 uppercase tracking-widest">
                        TRANSPARENT PRICING
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Simple Pricing.
                        <br />
                        No Hidden Fees.
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Choose your speed. Pay once. Get your app. That's it.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card relative p-10 transition-all duration-300 ${plan.popular
                                ? "bg-white/10 border-2 border-white"
                                : "bg-white/5 border border-white/10"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wide">
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-white/40">/ {plan.duration}</span>
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-white/80 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group w-full flex items-center justify-center gap-2 px-6 py-4 font-bold transition-all duration-200 ${plan.popular
                                    ? "bg-white text-black hover:bg-white/90"
                                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                                    }`}
                            >
                                {plan.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5">
                        <span className="text-white font-semibold">100% Satisfaction Guaranteed or Full Refund</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
