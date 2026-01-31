"use client";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiNodedotjs, SiPostgresql } from 'react-icons/si';
import LogoLoop from '@/components/ui/logo-loop';

const techLogos = [
  { node: <SiReact size={40} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs size={40} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript size={40} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss size={40} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer size={40} />, title: "Framer Motion", href: "https://www.framer.com/motion" },
  { node: <SiVercel size={40} />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNodedotjs size={40} />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql size={40} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

export default function TechStack() {
  return (
    <section className="relative py-12 px-6 z-10 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-semibold uppercase tracking-widest">
            TECH STACK
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-6 mb-3">
            Built with Modern Technology
          </h2>
          <p className="text-white/60 text-sm">
            The same stack used by billion-dollar companies
          </p>
        </div>

        <div className="h-24">
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={80}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </section>
  );
}
