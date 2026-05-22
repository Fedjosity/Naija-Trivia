"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneMockup from "@/components/ui/PhoneMockup";
import StoreButton from "@/components/ui/StoreButton";
import GradientBlob from "@/components/ui/GradientBlob";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        .fromTo(
          headlineRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          phoneRef.current,
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
          "-=0.8",
        );

      /* Parallax on scroll */
      gsap.to(phoneRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32"
    >
      {/* Background blobs */}
      <GradientBlob
        color="green"
        size="xl"
        className="top-[-20%] left-[-15%] opacity-20"
      />
      <GradientBlob
        color="gold"
        size="lg"
        className="bottom-[-10%] right-[-10%] opacity-15"
      />
      <GradientBlob
        color="mixed"
        size="md"
        className="top-[30%] right-[20%] opacity-10"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <div ref={badgeRef} className="opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-naija-green/30 text-naija-green-light bg-naija-green/10">
                <span className="w-2 h-2 rounded-full bg-naija-green-light animate-pulse" />
                Now Available for Download
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight opacity-0"
            >
              Master Nigerian
              <br />
              Culture. <span className="text-gradient">One Question</span>
              <br />
              at a Time.
            </h1>

            <p
              ref={subRef}
              className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0"
            >
              Challenge yourself daily with AI-powered trivia about Nigerian
              history, music, sports, and culture. Compete, learn, and climb the
              leaderboards.
            </p>

            <div
              ref={ctaRef}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0"
            >
              <StoreButton store="apple" size="lg" />
              <StoreButton store="google" size="lg" />
            </div>

            {/* Social proof mini */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-surface-dark bg-gradient-to-br from-naija-green/40 to-naija-gold/40"
                  />
                ))}
              </div>
              <p className="text-sm text-text-muted">
                <span className="text-text-primary font-semibold">100K+</span>{" "}
                Nigerians playing daily
              </p>
            </div>
          </div>

          {/* Right: Phone */}
          <div
            ref={phoneRef}
            className="flex justify-center lg:justify-end opacity-0"
          >
            <PhoneMockup glowColor="green" className="animate-float">
              {/* Hero screen content */}
              <div className="absolute inset-0 bg-gradient-to-b from-naija-green-dark/60 via-surface-dark to-surface-dark flex flex-col">
                {/* Status bar */}
                <div className="pt-10 px-5 flex justify-between text-[10px] text-white/60">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>●●●●○</span>
                  </div>
                </div>

                {/* App content */}
                <div className="flex-1 px-5 pt-6 flex flex-col">
                  <div className="text-center mb-4">
                    <p className="text-[10px] text-naija-gold uppercase tracking-widest">
                      Daily Challenge
                    </p>
                    <h3 className="text-sm font-heading font-bold text-white mt-1">
                      Nigerian History
                    </h3>
                  </div>

                  {/* Question card */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-3">
                    <p className="text-xs text-white/80 leading-relaxed">
                      Which year did Nigeria gain independence from Britain?
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-2">
                    {["1957", "1960", "1963", "1970"].map((opt, i) => (
                      <div
                        key={opt}
                        className={`px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                          i === 1
                            ? "bg-naija-green/20 border-naija-green/50 text-naija-green-light"
                            : "bg-white/5 border-white/10 text-white/60"
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mt-auto pb-6 pt-4">
                    <div className="flex justify-between text-[10px] text-white/40 mb-1">
                      <span>Question 3/10</span>
                      <span>🔥 5 streak</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[30%] bg-gradient-to-r from-naija-green to-naija-gold rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-text-muted">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-naija-green-light animate-bounce" />
        </div>
      </div>
    </section>
  );
}
