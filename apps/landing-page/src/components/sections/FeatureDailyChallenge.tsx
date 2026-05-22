"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import TimerIcon from "@mui/icons-material/Timer";
import QuizIcon from "@mui/icons-material/Quiz";
import BoltIcon from "@mui/icons-material/Bolt";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureDailyChallenge() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".feature-card");
    const visual = sectionRef.current.querySelector(".feature-visual");
    const heading = sectionRef.current.querySelector(".feature-heading");

    if (heading) {
      gsap.fromTo(heading, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 40%", scrub: 1 },
      });
    }

    if (visual) {
      gsap.fromTo(visual, { scale: 0.85, opacity: 0 }, {
        scale: 1, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 75%", end: "top 30%", scrub: 1 },
      });
    }

    gsap.fromTo(cards, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1,
      scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "top 15%", scrub: 1 },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-naija-green/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="feature-visual relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Timer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-naija-green/20 animate-spin-slow" />
              <div className="absolute inset-3 rounded-full border-2 border-naija-gold/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-accent font-bold text-gradient">60</div>
                  <p className="text-sm text-text-muted mt-1">seconds per question</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-naija-green/10 border border-naija-green/20 flex items-center justify-center animate-float">
                <QuizIcon sx={{ fontSize: 24 }} className="text-naija-green-light" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-naija-gold/10 border border-naija-gold/20 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <BoltIcon sx={{ fontSize: 22 }} className="text-naija-gold" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="feature-heading">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-naija-green/30 text-naija-green-light bg-naija-green/10 mb-6">
                <TimerIcon sx={{ fontSize: 14 }} /> Daily Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
                A New Challenge<br />
                <span className="text-gradient">Every Single Day</span>
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                Wake up to a fresh trivia pack every morning. 10 questions, 60 seconds each. 
                Build your streak, earn coins, and prove your knowledge.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { value: "10", label: "Questions", icon: <QuizIcon sx={{ fontSize: 20 }} /> },
                { value: "60s", label: "Per Question", icon: <TimerIcon sx={{ fontSize: 20 }} /> },
                { value: "∞", label: "Knowledge", icon: <BoltIcon sx={{ fontSize: 20 }} /> },
              ].map((stat, i) => (
                <GlassCard key={i} className="feature-card p-5 text-center" hover={false}>
                  <div className="text-naija-green-light mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-accent font-bold text-text-primary">{stat.value}</div>
                  <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
