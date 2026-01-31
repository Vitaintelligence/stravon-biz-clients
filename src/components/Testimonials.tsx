"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder, TechStart",
        image: "https://i.pravatar.cc/150?u=rahul",
        content: "Stravon delivered our MVP in 6 days. SIX DAYS. Other agencies quoted us 3 months. The quality is insane. We're already generating revenue.",
        rating: 5,
    },
    {
        name: "Priya Mehta",
        role: "CEO, HealthTech Solutions",
        image: "https://i.pravatar.cc/150?u=priya",
        content: "Fixed price, no surprises, delivered on time. This is how software development should work. They've set a new standard.",
        rating: 5,
    },
    {
        name: "Arjun Patel",
        role: "Product Manager, FinCorp",
        image: "https://i.pravatar.cc/150?u=arjun",
        content: "Clean code, modern stack, production-ready. Our CTO was impressed. Worth every rupee. Will definitely work with them again.",
        rating: 5,
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-card", {
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
            id="reviews"
            className="relative py-20 px-6 z-10"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-4 py-2 border border-white/20 bg-black/80 text-white text-xs font-semibold mb-6 uppercase tracking-widest">
                        CLIENT STORIES
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Don't Take Our Word.
                        <br />
                        Take Theirs.
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card group relative p-8 border border-white/20 bg-black/80 hover:bg-black/90 transition-all duration-300"
                        >
                            <div className="relative z-10">
                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-white text-white" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 border-2 border-white/10"
                                    />
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-xs text-white/50">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
