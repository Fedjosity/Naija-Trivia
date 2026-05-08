"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import DiamondIcon from "@mui/icons-material/Diamond";

gsap.registerPlugin(ScrollTrigger);

const badges = [
  { name: "History Scholar", icon: "📚", color: "from-blue-500/20 to-blue-500/5 border-blue-500/20" },
  { name: "Afrobeats Guru", icon: "🎵", color: "from-purple-500/20 to-purple-500/5 border-purple-500/20" },
  { name: "Naija Genius", icon: "🧠", color: "from-naija-gold/20 to-naija-gold/5 border-naija-gold/20" },
  { name: "Streak Master", icon: "🔥", color: "from-orange-500/20 to-orange-500/5 border-orange-500/20" },
  { name: "Geography Pro", icon: "🗺️", color: "from-teal-500/20 to-teal-500/5 border-teal-500/20" },
  { name: "Quiz Champion", icon: "🏆", color: "from-naija-green/20 to-naija-green/5 border-naija-green/20" },
];

export default function FeatureRewards() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const coins = sectionRef.current.querySelectorAll(".coin-item");
    const badgeEls = sectionRef.current.querySelectorAll(".badge-item");
    const heading = sectionRef.current.querySelector(".reward-heading");

    if (heading) {
      gsap.fromTo(heading, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 40%", scrub: 1 },
      });
    }

    gsap.fromTo(coins, { y: 30, opacity: 0, rotateY: -30 }, {
      y: 0, opacity: 1, rotateY: 0, stagger: 0.1,
      scrollTrigger: { trigger: sectionRef.current, start: "top 65%", end: "top 25%", scrub: 1 },
    });

    gsap.fromTo(badgeEls, { scale: 0.7, opacity: 0 }, {
      scale: 1, opacity: 1, stagger: 0.08,
      scrollTrigger: { trigger: sectionRef.current, start: "top 55%", end: "top 15%", scrub: 1 },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-naija-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="reward-heading">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-naija-gold/30 text-naija-gold bg-naija-gold/10 mb-6">
              <DiamondIcon sx={{ fontSize: 14 }} /> Rewards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
              Learn, Earn &amp;<br />
              <span className="text-gradient">Collect Rewards</span>
            </h2>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed">
              Every correct answer earns you Naija Coins. Build streaks for multipliers. 
              Unlock exclusive badges and premium content.
            </p>

            {/* Reward flow */}
            <div className="mt-10 flex items-center gap-3 flex-wrap">
              {[
                { icon: <LocalFireDepartmentIcon sx={{ fontSize: 20 }} />, label: "Play Daily", color: "text-orange-400" },
                { icon: <MonetizationOnIcon sx={{ fontSize: 20 }} />, label: "Earn Coins", color: "text-naija-gold" },
                { icon: <WorkspacePremiumIcon sx={{ fontSize: 20 }} />, label: "Unlock Rewards", color: "text-naija-green-light" },
              ].map((step, i) => (
                <div key={i} className="coin-item flex items-center gap-2">
                  <GlassCard className="px-4 py-3 flex items-center gap-2" hover={false}>
                    <span className={step.color}>{step.icon}</span>
                    <span className="text-sm text-text-primary font-medium">{step.label}</span>
                  </GlassCard>
                  {i < 2 && <span className="text-text-muted text-lg hidden sm:block">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Badges grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {badges.map((badge, i) => (
              <div key={i} className={`badge-item p-4 rounded-2xl bg-gradient-to-br ${badge.color} border text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="text-xs font-medium text-text-primary">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
