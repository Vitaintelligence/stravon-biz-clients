import HeroScroll from "@/components/HeroScroll";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="w-full relative bg-black text-foreground overflow-x-hidden">
      <Preloader />
      <HeroScroll />
    </main>
  );
}
