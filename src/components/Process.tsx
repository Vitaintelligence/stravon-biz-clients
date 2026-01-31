"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "15-minute call to understand your vision, requirements, and timeline. No fluff, just facts.",
    duration: "Day 1"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We create wireframes and technical architecture. You approve, we proceed.",
    duration: "Day 1-2"
  },
  {
    number: "03",
    title: "Development Sprint",
    description: "Rapid development with daily updates. You see progress in real-time.",
    duration: "Day 2-6"
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous testing, final tweaks, and deployment. Your app goes live.",
    duration: "Day 7"
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-white/20 bg-black text-white text-xs font-semibold mb-6 uppercase tracking-widest">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            From Idea to Launch
            <br />
            In 7 Days
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A streamlined process designed for speed without sacrificing quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step relative p-6 border border-white/20 bg-black hover:bg-black transition-all duration-300"
            >
              <div className="text-4xl font-bold text-white/10 mb-3">
                {step.number}
              </div>
              <div className="mb-2">
                <span className="inline-block px-2 py-1 border border-white/20 bg-black text-white text-xs font-bold uppercase tracking-wide">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
