"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "The Problem",
    description: "You face a problem. MCQs, labour work, or just something you don't know. No fluff, just facts.",
    duration: "0s"
  },
  {
    number: "02",
    title: "The Ultron Model",
    description: "Stravon AI analyzes the problem in real-time.",
    duration: "1s"
  },
  {
    number: "03",
    title: "Background Execution",
    description: "The AI works seamlessly in the background to assist you.",
    duration: "2s"
  },
  {
    number: "04",
    title: "Instant Solution",
    description: "You get the right answer immediately. No grinding.",
    duration: "3s"
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
    <section ref={sectionRef} className="relative py-20 px-6 z-10 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-white/20 bg-black text-white text-xs font-semibold mb-6 uppercase tracking-widest">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            From Problem to Solution
            <br />
            In Seconds
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A streamlined ai designed for instant assistance without sacrificing quality
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
