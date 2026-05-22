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
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Entry animations
      tl.fromTo(
        headlineRef.current,
        { y: 100, opacity: 0, skewY: 5 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.5 },
        0.2
      )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=1"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          phoneRef.current,
          { x: 100, opacity: 0, rotate: 10, scale: 0.8 },
          { x: 0, opacity: 1, rotate: 0, scale: 1, duration: 2, ease: "power4.out" },
          "-=1.5"
        );

      // Floating phone parallax
      gsap.to(phoneRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Background movement
      gsap.to(".hero-blob", {
        x: (i) => (i % 2 === 0 ? 100 : -100),
        y: (i) => (i % 2 === 0 ? -100 : 100),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-surface-dark"
    >
      {/* Dynamic Background */}
      <GradientBlob
        color="green"
        size="xl"
        className="hero-blob -top-[20%] -left-[10%] opacity-20"
      />
      <GradientBlob
        color="gold"
        size="lg"
        className="hero-blob bottom-[10%] -right-[5%] opacity-15"
      />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-naija-green/20 bg-naija-green/5 text-naija-green-light text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-naija-green-light animate-pulse" />
              The #1 Nigerian Trivia Experience
            </div>

            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-8xl font-heading font-black leading-[1.1] tracking-tighter text-white mb-8"
            >
              Master Your <br />
              <span className="text-gradient">Heritage.</span>
            </h1>

            <p
              ref={subRef}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12"
            >
              Unlock the secrets of Nigeria through gamified AI-powered trivia. 
              History, music, sports, and culture — reimagined for the next generation.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <StoreButton store="apple" size="lg" />
              <StoreButton store="google" size="lg" />
            </div>

            {/* Premium Social Proof */}
            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-surface-dark bg-surface-elevated flex items-center justify-center text-xs font-bold text-white overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-naija-green/40 to-naija-gold/40" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-surface-dark bg-naija-green flex items-center justify-center text-xs font-bold text-white">
                  +1M
                </div>
              </div>
              <div className="text-sm text-text-muted">
                <span className="text-white font-bold">1,000,000+</span> games played <br className="hidden sm:block" />
                by Nigerians worldwide
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div ref={phoneRef} className="relative hidden lg:block">
            <PhoneMockup glowColor="green" className="scale-110">
              <div className="absolute inset-0 bg-gradient-to-b from-naija-green-dark/40 to-surface-dark p-6 pt-16">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-naija-green to-naija-green-light mb-6 flex items-center justify-center shadow-lg shadow-naija-green/20">
                  <span className="text-white font-bold text-xl">NT</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-24 bg-white/10 rounded-full" />
                  <div className="h-8 w-full bg-white/5 rounded-2xl border border-white/10" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-naija-green/10 rounded-3xl border border-naija-green/20" />
                    <div className="h-24 bg-white/5 rounded-3xl border border-white/10" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-naija-gold/10 to-transparent rounded-3xl border border-naija-gold/20" />
                </div>
              </div>
            </PhoneMockup>
            
            {/* Floating Badges */}
            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-3xl glass-strong border border-white/10 flex flex-col items-center justify-center animate-float">
              <span className="text-2xl mb-1">🏆</span>
              <span className="text-[10px] font-bold text-naija-gold">CHAMPION</span>
            </div>
            <div className="absolute top-1/2 -right-12 w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-3xl">🔥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
