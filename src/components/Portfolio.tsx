"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Herodot AI",
    category: "Travel & Education",
    description: "AI-powered travel guide with image recognition. Snap a photo of any landmark and get instant historical insights and audio guides in 20+ languages.",
    tech: ["AI/ML", "Image Recognition", "Audio Processing"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    link: "https://herodot.ai/en"
  },
  {
    title: "Glowrizz",
    category: "Beauty & Wellness",
    description: "AI-powered skincare and beauty platform. Personalized recommendations and routines powered by advanced algorithms.",
    tech: ["React", "AI/ML", "Mobile"],
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    link: "https://www.glowrizz.club/"
  },
  {
    title: "The Infinite Bar",
    category: "Entertainment & Social",
    description: "Interactive social experience platform. Real-time engagement with AI-driven content generation and community features.",
    tech: ["Next.js", "WebSocket", "AI"],
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    link: "https://theinfinite.bar/"
  },
  {
    title: "Emma AI",
    category: "Health & Nutrition",
    description: "Food scanner app with AI-powered nutritional analysis. Instant food recognition and detailed health insights for better eating habits.",
    tech: ["iOS", "Computer Vision", "Health APIs"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    link: "https://apps.apple.com/us/app/emma-ai-food-scanner/id1607127197"
  },
  {
    title: "PlanEat AI",
    category: "Meal Planning",
    description: "AI-powered meal planning and recipe generation. Smart grocery lists and personalized nutrition plans based on dietary preferences.",
    tech: ["AI/ML", "Recipe APIs", "Mobile"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    link: "https://planeatai.com/"
  },
  {
    title: "Rizzify",
    category: "Social & Communication",
    description: "AI conversation assistant for dating and social interactions. Smart reply suggestions and conversation starters powered by GPT.",
    tech: ["Android", "NLP", "GPT Integration"],
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80",
    link: "https://play.google.com/store/apps/details?id=com.rizzify.rizzify"
  },
  {
    title: "SmoothSpeak AI",
    category: "Communication & Learning",
    description: "AI-powered speech improvement and communication coach. Real-time feedback and personalized training for better speaking skills.",
    tech: ["Android", "Speech Recognition", "AI/ML"],
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
    link: "https://play.google.com/store/apps/details?id=ai.smoothspeak.smoothspeak"
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-6 z-10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-white/20 bg-white/5 text-white text-xs font-semibold mb-6 uppercase tracking-widest">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            AI-Powered Applications.
            <br />
            Built for Impact.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Specializing in AI/ML integration, mobile apps, and cutting-edge web platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group relative overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border border-white/20 bg-white/5 text-white text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-6 text-sm">
            These showcase our expertise in AI/ML, mobile development, and modern web technologies. Each application demonstrates our capability to deliver production-grade solutions.
          </p>
          <a
            href="https://wa.me/918968037352?text=Hey%20i%20want%20to%20build%20my%20application%0A%0AI'm-%20%0AI'm%20looking%20to%20build-%20%0AMy%20budget-%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            Build Your AI App
          </a>
        </div>
      </div>
    </section>
  );
}
