"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoreButton from "@/components/ui/StoreButton";
import GradientBlob from "@/components/ui/GradientBlob";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadCTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const content = sectionRef.current.querySelector(".cta-content");

    if (content) {
      gsap.fromTo(content, { scale: 0.9, opacity: 0 }, {
        scale: 1, opacity: 1, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 30%", scrub: 1 },
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="download" className="relative py-20 md:py-24 px-6 overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <GradientBlob color="green" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
      <GradientBlob color="gold" size="lg" className="top-1/4 right-[10%] opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto text-center cta-content">
        {/* Decorative line */}
        <div className="w-20 h-1 mx-auto mb-8 bg-gradient-to-r from-naija-green to-naija-gold rounded-full" />

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight">
          Your Journey Into
          <br />
          <span className="text-gradient">Nigerian Culture</span>
          <br />
          Starts Now
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Download Daily Naija Trivia and join over 100,000 Nigerians
          celebrating their heritage through fun, competitive gameplay.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <StoreButton store="apple" size="lg" />
          <StoreButton store="google" size="lg" />
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex items-center justify-center gap-6 text-text-muted text-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-naija-green-light" />
            Free to play
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-naija-gold" />
            Works offline
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-naija-green-light" />
            No ads in free tier
          </span>
        </div>
      </div>
    </section>
  );
}
