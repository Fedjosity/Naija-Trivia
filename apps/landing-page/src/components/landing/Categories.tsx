import { useRef, useState } from "react";

const cats = [
  { e: "📜", t: "History", p: 24 },
  { e: "🎵", t: "Music", p: 38 },
  { e: "⚽", t: "Sports", p: 19 },
  { e: "🎬", t: "Nollywood", p: 22 },
  { e: "🗺️", t: "Geography", p: 18 },
  { e: "🏛️", t: "Politics", p: 15 },
  { e: "🍲", t: "Food", p: 12 },
  { e: "🗣️", t: "Languages", p: 14 },
];

export function Categories() {
  const scroller = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState({ down: false, x: 0, left: 0 });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">/ Categories</span>
        <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
          Pick your <span className="text-gold-shimmer">battlefield</span>.
        </h2>
        <p className="mt-5 text-foreground/65 text-lg">Drag to scroll. New packs drop weekly.</p>
      </div>

      <div
        ref={scroller}
        onMouseDown={(e) => setDrag({ down: true, x: e.pageX, left: scroller.current!.scrollLeft })}
        onMouseLeave={() => setDrag((d) => ({ ...d, down: false }))}
        onMouseUp={() => setDrag((d) => ({ ...d, down: false }))}
        onMouseMove={(e) => {
          if (!drag.down || !scroller.current) return;
          scroller.current.scrollLeft = drag.left - (e.pageX - drag.x) * 1.5;
        }}
        className="flex gap-6 overflow-x-auto px-6 lg:px-10 pb-8 cursor-grab active:cursor-grabbing scrollbar-none scroll-smooth"
      >
        {cats.map((c) => (
          <div
            key={c.t}
            className="relative shrink-0 w-64 h-80 rounded-2xl bg-surface border border-border p-7 flex flex-col justify-between transition-all hover:-translate-y-2 hover:border-gold gold-border-glow group select-none"
          >
            <div className="text-6xl">{c.e}</div>
            <div>
              <h3 className="font-display text-2xl font-bold">{c.t}</h3>
              <p className="text-xs font-mono-tk text-gold mt-2 uppercase tracking-wider">{c.p} packs available</p>
            </div>
            <span className="absolute top-5 right-5 text-foreground/30 group-hover:text-gold transition-colors">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
