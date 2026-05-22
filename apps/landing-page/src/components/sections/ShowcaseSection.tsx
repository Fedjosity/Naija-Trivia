"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";

gsap.registerPlugin(ScrollTrigger);

const screens = [
  {
    title: "Dashboard",
    description: "Your daily trivia hub with challenges, streaks, and coins.",
    glowColor: "green" as const,
  },
  {
    title: "Explore",
    description: "Browse trivia packs by category — history, music, sports.",
    glowColor: "gold" as const,
  },
  {
    title: "Trivia Session",
    description: "Immersive gameplay with real-time scoring and streaks.",
    glowColor: "green" as const,
  },
  {
    title: "Leaderboard",
    description: "Compete nationally, by state, or by category.",
    glowColor: "gold" as const,
  },
  {
    title: "Completion",
    description: "Celebrate wins with scores, coins, and cultural insights.",
    glowColor: "green" as const,
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current || !sectionRef.current) return;

      // Get actual width of the track
      const totalWidth = trackRef.current.offsetWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${trackRef.current?.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative scroll-mt-24 py-24 md:py-32"
    >
      <div className="pt-8 pb-12 px-6 md:px-12 text-center">
        <SectionHeading
          tag="App Experience"
          title="Everything You Need to Master Naija Trivia"
          subtitle="From personalized dashboards to competitive leaderboards — every screen is crafted for an immersive experience."
        />
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-12 pl-[10vw] pr-[10vw] pb-16 pt-8"
          style={{ width: "max-content" }}
        >
          {screens.map((screen, i) => (
            <div
              key={i}
              className="showcase-card flex-shrink-0 w-[360px] flex flex-col items-center"
            >
              <PhoneMockup
                glowColor={screen.glowColor}
                className="scale-90 origin-top"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-naija-green-dark/50 via-surface-dark to-surface-dark flex flex-col p-5 pt-12">
                  <div className="text-center mb-4">
                    <p className="text-[10px] text-naija-gold uppercase tracking-widest">
                      {screen.title}
                    </p>
                  </div>
                  {/* Placeholder UI elements */}
                  <div className="space-y-2 flex-1">
                    <div className="h-10 bg-white/5 rounded-xl border border-white/10" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
                      <div className="h-16 bg-white/5 rounded-xl border border-white/10" />
                    </div>
                    <div className="h-20 bg-gradient-to-r from-naija-green/10 to-naija-gold/10 rounded-xl border border-naija-green/20" />
                    <div className="h-10 bg-white/5 rounded-xl border border-white/10" />
                    <div className="h-10 bg-white/5 rounded-xl border border-white/10" />
                  </div>
                  <div className="mt-3">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-naija-green to-naija-gold rounded-full"
                        style={{ width: `${(i + 1) * 20}%` }}
                      />
                    </div>
                  </div>
                </div>
              </PhoneMockup>
              <div className="mt-2 text-center max-w-xs px-4">
                <h3 className="text-lg font-heading font-bold text-text-primary">
                  {screen.title}
                </h3>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
