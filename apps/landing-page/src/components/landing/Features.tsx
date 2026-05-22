import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const features = [
  {
    icon: "🎵",
    title: "Afrobeats & Nollywood",
    desc: "From Fela to Rema, Tinubu to Tunde Kelani — deep cuts across music and film eras.",
  },
  {
    icon: "🗺️",
    title: "All 36 States Covered",
    desc: "Geography, culture, languages, and trivia rooted in every corner of the federation.",
  },
  {
    icon: "⚡",
    title: "Daily Challenges & Streaks",
    desc: "Fresh questions every day. Build streaks, earn badges, unlock seasonal packs.",
  },
  {
    icon: "🏆",
    title: "Live Leaderboards",
    desc: "Compete by state, region, and nationally. See who really knows Naija best.",
  },
  {
    icon: "📴",
    title: "Offline Mode",
    desc: "Subway, village, NEPA off — your questions are always ready. Sync when you're back.",
  },
  {
    icon: "🤖",
    title: "AI Content Engine",
    desc: "Curated by AI, verified by humans. Always fresh, always factual, always Naija.",
  },
];

export function Features() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feat-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          once: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="features" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">
            / Features
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Everything <span className="text-gold-shimmer">Nigerian</span> Knowledge
          </h2>
          <p className="mt-5 text-foreground/65 text-lg">
            Built by Nigerians, for Nigerians. Every category, every state, every era.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FlipCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="feat-card perspective-1000 h-72">
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateY(0deg)";
        }}
      >
        <div className="backface-hidden absolute inset-0 rounded-2xl bg-surface border border-border p-8 flex flex-col justify-between gold-border-glow">
          <div className="text-5xl">{icon}</div>
          <h3 className="font-display text-2xl font-bold leading-tight">{title}</h3>
        </div>
        <div className="backface-hidden rotate-y-180 absolute inset-0 rounded-2xl bg-primary border border-gold p-8 flex flex-col justify-center">
          <h3 className="font-display text-xl font-bold text-gold mb-3">{title}</h3>
          <p className="text-foreground/85 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}
