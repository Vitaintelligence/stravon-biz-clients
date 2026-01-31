"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can you deliver in 7 days?",
    answer: "We've eliminated everything that slows down traditional agencies: endless meetings, bloated teams, and legacy processes. Our small, expert team focuses purely on execution using modern tools and frameworks."
  },
  {
    question: "What's included in the fixed price?",
    answer: "Everything: design, development, testing, deployment, and 1-2 weeks of post-launch support. No hidden costs, no surprise charges. What we quote is what you pay."
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor tweaks during the support period are included. For major changes or new features, we offer maintenance packages starting at ₹10k/month."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. 80% of our clients are startups and founders who need to move fast. We understand the urgency and budget constraints."
  },
  {
    question: "What technologies do you use?",
    answer: "Next.js, React, TypeScript, Tailwind CSS, and modern deployment platforms like Vercel. The same stack used by companies like Airbnb, Netflix, and Uber."
  },
  {
    question: "Can you handle complex applications?",
    answer: "Yes. Complex apps take 14 days instead of 7. We've built everything from SaaS platforms to e-commerce sites to internal tools."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-white/20 bg-black text-white text-xs font-semibold mb-6 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Questions?
            <br />
            Answered.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/20 bg-black overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-white flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-white flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-white/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/918968037352"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-black font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  );
}
