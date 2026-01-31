import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Story from "@/components/Story";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main className="w-full relative bg-black text-foreground overflow-x-hidden">
      <Preloader />
      <ScrollProgress />
      <VideoBackground />
      <Navbar />
      <Hero />
      <TechStack />
      <Story />
      <Portfolio />
      <Features />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
