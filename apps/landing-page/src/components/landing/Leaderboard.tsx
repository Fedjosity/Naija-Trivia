import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const rows = [
  { rank: 1, name: "Chiamaka O.", state: "🌴 Lagos", score: 12480 },
  { rank: 2, name: "Tunde A.", state: "🐎 Oyo", score: 11920 },
  { rank: 3, name: "Ifeoma E.", state: "🦅 Anambra", score: 11650 },
  { rank: 4, name: "Bashir M.", state: "🐪 Kano", score: 10980 },
  { rank: 5, name: "Ebiere W.", state: "⚓ Bayelsa", score: 10720 },
];

export function Leaderboard() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".lb-row", {
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="leaderboard" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">
            / Leaderboards
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Compete. Represent. <span className="text-gold-shimmer">Dominate.</span>
          </h2>
          <p className="mt-6 text-foreground/65 text-lg leading-relaxed">
            Leaderboards update daily. Your state is watching. Climb the ranks, defend your title,
            and let the whole federation know.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono-tk uppercase tracking-wider text-foreground/50">
            <span>● Daily reset</span>
            <span>● Weekly cups</span>
            <span>● All-time hall</span>
          </div>
        </div>

        <div className="rounded-2xl bg-surface border border-border p-6 shadow-2xl">
          <div className="flex justify-between text-xs font-mono-tk uppercase tracking-wider text-foreground/50 px-3 pb-3 border-b border-border">
            <span>Rank · Player</span>
            <span>Score</span>
          </div>
          <div className="mt-3 space-y-2">
            {rows.map((r) => (
              <div
                key={r.rank}
                className={`lb-row flex items-center gap-4 px-4 py-4 rounded-xl ${
                  r.rank === 1
                    ? "bg-gradient-to-r from-gold/20 to-gold/5 border border-gold/60 pulse-gold"
                    : "bg-background/40"
                }`}
              >
                <span
                  className={`font-mono-tk text-sm w-6 ${r.rank === 1 ? "text-gold" : "text-foreground/50"}`}
                >
                  {r.rank === 1 ? "🏆" : `0${r.rank}`}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${r.rank === 1 ? "bg-gold text-gold-foreground" : "bg-primary"}`}
                >
                  {r.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{r.name}</div>
                  <div className="text-xs text-foreground/55">{r.state}</div>
                </div>
                <div className="font-mono-tk text-gold font-bold">{r.score.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
