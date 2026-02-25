"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Stravon solve problems so fast?",
    answer: "Stravon AI uses the latest Ultron model to process and resolve queries in real-time, working seamlessly in the background."
  },
  {
    question: "What's included in Stravon Pro?",
    answer: "Unlimited access to the Ultron model, real-time background execution, priority support, and instant problem-solving capabilities."
  },
  {
    question: "Can Stravon handle complex questions?",
    answer: "Yes, the Ultron model is designed to handle intricate problems and provide accurate, instant solutions across various subjects."
  },
  {
    question: "Is it just for MCQs?",
    answer: "No, while it excels at MCQs, Stravon is a comprehensive AI assistant capable of automating any tedious knowledge-based labor."
  },
  {
    question: "How does background execution work?",
    answer: "Stravon runs seamlessly without interrupting your workflow. It analyzes screen context or inputted data in real time."
  },
  {
    question: "Is Stravon future-proof?",
    answer: "Absolutely. We continuously iterate on the Ultron model to ensure it remains the most advanced AI assistant available."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6 z-10 bg-black/40">
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
