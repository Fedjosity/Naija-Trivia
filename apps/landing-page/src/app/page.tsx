import HeroSection from "@/components/sections/HeroSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ShowcaseSection />
      {/* Other sections will be added here */}
    </main>
  );
}
