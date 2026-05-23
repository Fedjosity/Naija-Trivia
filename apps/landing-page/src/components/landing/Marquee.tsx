import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "10,000+ Questions",
  "36 States Covered",
  "Afrobeats",
  "Nollywood",
  "History",
  "Sports",
  "Daily Challenges",
  "Live Leaderboards",
  "Pidgin Mode",
  "Offline Play",
];

export function Marquee() {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const tween = gsap.to(el, { x: -half, duration: 35, ease: "none", repeat: -1 });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="relative border-y border-gold/20 bg-primary overflow-hidden py-5">
      <div ref={track} className="flex gap-12 whitespace-nowrap will-change-transform">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-mono-tk text-sm uppercase tracking-[0.25em] text-gold inline-flex items-center gap-12"
          >
            {t}
            <span className="text-gold/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
