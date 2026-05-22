"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import PhoneMockup from "@/components/ui/PhoneMockup";
import GradientBlob from "@/components/ui/GradientBlob";

gsap.registerPlugin(ScrollTrigger);

const screens = [
  {
    title: "Daily Dashboard",
    description: "Your hub for cultural mastery. Track streaks and challenges.",
    color: "green" as const,
  },
  {
    title: "Global Rankings",
    description: "Compete with Nigerians worldwide for the ultimate title.",
    color: "gold" as const,
  },
  {
    title: "Earn Rewards",
    description: "Unlock exclusive badges and coins as you learn.",
    color: "green" as const,
  },
  {
    title: "AI Questions",
    description: "Never see the same question twice with our AI engine.",
    color: "gold" as const,
  },
  {
    title: "State Pride",
    description: "Represent your state and climb local leaderboards.",
    color: "green" as const,
  },
];

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!trackRef.current || !sectionRef.current) return;

      const track = trackRef.current;
      const totalWidth = track.scrollWidth - window.innerWidth;

      // Horizontal scroll with scrub
      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Individual card animations tied to scrub
      const cards = gsap.utils.toArray<HTMLElement>(".showcase-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0.5, rotateY: 20 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.getById("horizontal-scroll"), // Note: we'll set an id if needed or use context
              start: "left right",
              end: "center center",
              scrub: true,
              horizontal: true, // This is key for scrub within horizontal scroll
            },
          },
        );
      });

      // Simpler approach for individual cards since they are in a pinned horizontal track:
      // We can use the progress of the main scrollTrigger to drive child animations if they are simple,
      // or use `containerAnimation` which is the pro way in GSAP 3.8+

      const horizontalScroll = gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          id: "horizontal-scroll",
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalScroll,
              start: "left 80%",
              end: "left 20%",
              scrub: true,
            },
          },
        );
      });

      // Progress bar animation
      gsap.to(".showcase-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${trackRef.current?.scrollWidth}`,
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative min-h-screen bg-surface-dark overflow-hidden flex flex-col justify-center"
    >
      <div className="pt-20 pb-12 px-6">
        <SectionHeading
          tag="The Experience"
          title="Designed for Mastery"
          subtitle="Every pixel is optimized to make your journey into Nigerian culture as immersive as possible."
        />
      </div>

      <div className="relative overflow-hidden flex-1 flex items-center">
        <div
          ref={trackRef}
          className="flex gap-12 pl-[15vw] pr-[20vw] py-10"
          style={{ width: "max-content" }}
        >
          {screens.map((screen, i) => (
            <div
              key={i}
              className="showcase-card w-[320px] sm:w-[380px] flex-shrink-0 flex flex-col items-center group"
            >
              <PhoneMockup
                glowColor={screen.color}
                className="scale-90 group-hover:scale-95 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated to-surface-dark p-6 flex flex-col pt-16">
                  <div className="text-center mb-6">
                    <p className="text-[10px] text-naija-gold font-black uppercase tracking-[0.2em] mb-1">
                      {screen.title}
                    </p>
                    <div className="h-1 w-12 bg-naija-gold/20 mx-auto rounded-full" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="h-32 rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-naija-green/10 to-transparent" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-10 rounded-xl bg-white/5 border border-white/10" />
                      <div className="h-10 rounded-xl bg-white/5 border border-white/10" />
                      <div className="h-10 rounded-xl bg-naija-green/10 border border-naija-green/20" />
                    </div>
                  </div>
                </div>
              </PhoneMockup>

              <div className="mt-12 text-center max-w-xs px-4">
                <h3 className="text-2xl font-heading font-black text-white mb-3">
                  {screen.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar scrub-based */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/5 rounded-full overflow-hidden">
        <div className="showcase-progress h-full bg-gradient-to-r from-naija-green to-naija-gold origin-left scale-x-0" />
      </div>
    </section>
  );
}
