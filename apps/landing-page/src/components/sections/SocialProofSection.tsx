"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "This app makes me proud of my heritage. I've learned things about Nigeria I never knew — and my kids love it too!",
    name: "Amaka O.",
    location: "Lagos, Nigeria",
    role: "Parent & Player",
  },
  {
    quote: "I play every morning on my way to work. The streaks keep me coming back. Already at 45 days straight!",
    name: "Tunde A.",
    location: "London, UK",
    role: "Diaspora Player",
  },
  {
    quote: "Better than any textbook. My students are more engaged with Nigerian history since I introduced this app.",
    name: "Dr. Fatima B.",
    location: "Abuja, Nigeria",
    role: "University Lecturer",
  },
  {
    quote: "The leaderboard competition is fierce! Nothing like proving you know more about Naija than your friends.",
    name: "Emeka K.",
    location: "New York, USA",
    role: "Top 50 Player",
  },
];

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    gsap.fromTo(cards, { y: 40, opacity: 0, rotateX: -5 }, {
      y: 0, opacity: 1, rotateX: 0, stagger: 0.12,
      scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "top 10%", scrub: 1 },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="community" className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden scroll-mt-24">
      {/* Subtle Nigeria map background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%2314B85C' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23D4A017' stroke-width='0.3'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }} />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          tag="Community"
          title="Join the Movement"
          subtitle="Thousands of Nigerians are already mastering their cultural knowledge. Here's what they're saying."
        />

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={100} suffix="K+" label="Active Players" />
          <AnimatedCounter end={1} suffix="M+" label="Questions Answered" />
          <AnimatedCounter end={50} suffix="K+" label="Daily Streaks" />
          <AnimatedCounter end={36} suffix="" label="States Covered" />
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard
              key={i}
              className="testimonial-card p-6 sm:p-8"
              hover={true}
              glow="none"
            >
              <FormatQuoteIcon sx={{ fontSize: 32 }} className="text-naija-green/30 mb-4" />
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-naija-green/30 to-naija-gold/20 border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-text-primary">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.location} · {t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
