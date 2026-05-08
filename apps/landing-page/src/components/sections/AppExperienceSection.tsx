"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const appScreens = [
  {
    label: "Onboarding",
    annotation: "Choose your interests and personalize your experience",
    content: (
      <div className="absolute inset-0 bg-gradient-to-b from-naija-green-dark/60 via-surface-dark to-surface-dark p-5 pt-14 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center mb-4 shadow-lg shadow-naija-green/30">
          <span className="text-white font-heading font-bold text-xl">NT</span>
        </div>
        <h3 className="text-sm font-bold text-white">Welcome!</h3>
        <p className="text-[10px] text-white/50 mt-1 mb-6">Pick your interests</p>
        <div className="grid grid-cols-2 gap-2 w-full">
          {["Afrobeats", "History", "Sports", "Nollywood", "Politics", "Food"].map((cat, i) => (
            <div key={cat} className={`px-3 py-2 rounded-xl text-[10px] font-medium border ${i < 3 ? "bg-naija-green/20 border-naija-green/30 text-naija-green-light" : "bg-white/5 border-white/10 text-white/60"}`}>
              {cat}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Gameplay",
    annotation: "Answer questions fast, build streaks, earn points",
    content: (
      <div className="absolute inset-0 bg-gradient-to-b from-naija-green/30 via-surface-dark to-surface-dark p-5 pt-14 flex flex-col">
        <div className="text-center mb-4">
          <span className="px-3 py-1 rounded-full bg-naija-gold/20 text-[10px] text-naija-gold font-medium">⏱ 0:38</span>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-3">
          <p className="text-xs text-white leading-relaxed">What is the capital of Kano State?</p>
        </div>
        <div className="space-y-2 flex-1">
          {["Kano", "Kaduna", "Katsina", "Kebbi"].map((o, i) => (
            <div key={o} className={`px-4 py-2.5 rounded-xl text-[10px] font-medium border ${i === 0 ? "bg-naija-green/20 border-naija-green/50 text-naija-green-light" : "bg-white/5 border-white/10 text-white/60"}`}>{o}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "Results",
    annotation: "See your score, unlock achievements, share with friends",
    content: (
      <div className="absolute inset-0 bg-gradient-to-b from-naija-gold/20 via-surface-dark to-surface-dark p-5 pt-14 flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-3">🏆</div>
        <h3 className="text-sm font-bold text-white">Excellent!</h3>
        <p className="text-[10px] text-white/50 mt-1">9/10 correct</p>
        <div className="mt-4 grid grid-cols-2 gap-2 w-full">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-lg font-bold text-naija-gold">2,100</p>
            <p className="text-[8px] text-white/40">Points</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-lg font-bold text-naija-green-light">+150</p>
            <p className="text-[8px] text-white/40">Coins</p>
          </div>
        </div>
        <div className="mt-4 w-full h-8 bg-gradient-to-r from-naija-green to-naija-green-light rounded-xl flex items-center justify-center">
          <span className="text-[10px] text-white font-semibold">Share Results</span>
        </div>
      </div>
    ),
  },
];

export default function AppExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !phoneContainerRef.current) return;

    const screenEls = phoneContainerRef.current.querySelectorAll(".app-screen");
    const annotationEls = sectionRef.current.querySelectorAll(".screen-annotation");

    /* Pin the section */
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${appScreens.length * 100}%`,
      pin: true,
      anticipatePin: 1,
    });

    /* Cross-fade screens */
    screenEls.forEach((screen, i) => {
      if (i === 0) return;
      gsap.fromTo(screen, { opacity: 0 }, {
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `${(i / appScreens.length) * 100}% top`,
          end: `${((i + 0.5) / appScreens.length) * 100}% top`,
          scrub: 1,
        },
      });
    });

    /* Swap annotations */
    annotationEls.forEach((ann, i) => {
      if (i === 0) {
        gsap.fromTo(ann, { opacity: 1, y: 0 }, {
          opacity: 0, y: -20,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${(0.8 / appScreens.length) * 100}% top`,
            end: `${(1 / appScreens.length) * 100}% top`,
            scrub: 1,
          },
        });
      } else {
        gsap.fromTo(ann, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `${((i - 0.2) / appScreens.length) * 100}% top`,
            end: `${((i + 0.3) / appScreens.length) * 100}% top`,
            scrub: 1,
          },
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-naija-green-dark/5 to-surface-dark pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <SectionHeading
            tag="Full Experience"
            title="See It in Action"
            subtitle="Swipe through the complete app journey — from onboarding to victory."
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Phone */}
          <div ref={phoneContainerRef} className="relative flex-shrink-0">
            <PhoneMockup glowColor="green">
              {appScreens.map((screen, i) => (
                <div key={i} className={`app-screen absolute inset-0 ${i === 0 ? "opacity-100" : "opacity-0"}`}>
                  {screen.content}
                </div>
              ))}
            </PhoneMockup>
          </div>

          {/* Annotations */}
          <div className="relative h-24 lg:h-auto lg:w-64">
            {appScreens.map((screen, i) => (
              <div key={i} className={`screen-annotation ${i === 0 ? "" : "absolute inset-0"} text-center lg:text-left`}>
                <span className="text-xs font-semibold text-naija-green-light uppercase tracking-wider">{screen.label}</span>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">{screen.annotation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
