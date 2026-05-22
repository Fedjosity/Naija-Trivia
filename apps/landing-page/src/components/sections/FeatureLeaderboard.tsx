"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

gsap.registerPlugin(ScrollTrigger);

const ranks = [
  { rank: 1, name: "ChiefKnowledge", score: 45200, bar: "100%", color: "from-naija-gold to-naija-gold-light" },
  { rank: 2, name: "HistoryBuff_NG", score: 42100, bar: "93%", color: "from-gray-400 to-gray-300" },
  { rank: 3, name: "NaijaQuizKing", score: 39800, bar: "88%", color: "from-amber-700 to-amber-600" },
  { rank: 4, name: "AdeWrites", score: 38500, bar: "85%", color: "from-naija-green to-naija-green-light" },
  { rank: 5, name: "ZainabTrivia", score: 36900, bar: "82%", color: "from-naija-green to-naija-green-light" },
];

export default function FeatureLeaderboard() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const bars = sectionRef.current.querySelectorAll(".rank-bar-fill");
    const items = sectionRef.current.querySelectorAll(".rank-item");
    const heading = sectionRef.current.querySelector(".lb-heading");

    if (heading) {
      gsap.fromTo(heading, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%", end: "top 40%", scrub: 1 },
      });
    }

    gsap.fromTo(items, { x: 60, opacity: 0 }, {
      x: 0, opacity: 1, stagger: 0.08,
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%", end: "top 25%", scrub: 1 },
    });

    bars.forEach((bar) => {
      gsap.fromTo(bar, { scaleX: 0 }, {
        scaleX: 1, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%", end: "top 20%", scrub: 1 },
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-naija-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="lg:order-2">
            <div className="lb-heading">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-naija-gold/30 text-naija-gold bg-naija-gold/10 mb-6">
                <LeaderboardIcon sx={{ fontSize: 14 }} /> Leaderboards
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
                Compete &amp; Climb<br />
                <span className="text-gradient-gold">The Rankings</span>
              </h2>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                See where you stand among the best. Compete on national, state, and 
                category leaderboards. Every correct answer moves you up.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {["National", "State", "Category"].map((tab, i) => (
                  <span key={tab} className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all ${i === 0 ? "bg-naija-gold/15 text-naija-gold border border-naija-gold/30" : "bg-white/5 text-text-muted border border-white/10 hover:border-white/20"}`}>
                    {tab}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard visual */}
          <div className="lg:order-1">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <MilitaryTechIcon sx={{ fontSize: 24 }} className="text-naija-gold" />
                <h3 className="text-lg font-heading font-bold text-text-primary">Top Players</h3>
              </div>
              <div className="space-y-4">
                {ranks.map((player) => (
                  <div key={player.rank} className="rank-item flex items-center gap-4">
                    <span className={`w-7 text-center font-accent font-bold text-sm ${player.rank === 1 ? "text-naija-gold" : player.rank === 2 ? "text-gray-400" : player.rank === 3 ? "text-amber-700" : "text-text-muted"}`}>
                      {player.rank}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-text-secondary">{player.name[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-text-primary truncate">{player.name}</span>
                        <span className="text-xs font-accent text-text-muted ml-2">{player.score.toLocaleString()}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`rank-bar-fill h-full rounded-full bg-gradient-to-r ${player.color} origin-left`} style={{ width: player.bar }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
