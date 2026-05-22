import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneMockup } from "./PhoneMockup";

const steps = [
  { n: "01", title: "Choose your category", desc: "Pick from Music, Nollywood, History, Sports, Languages and more. Mix and match for custom rounds.", state: "question" as const },
  { n: "02", title: "Answer & compete", desc: "Beat the clock. Build streaks. Every correct answer climbs your score and unlocks bonus points.", state: "score" as const },
  { n: "03", title: "Climb the leaderboard", desc: "Daily, weekly, all-time. Compete in your state, your region, and across all 36.", state: "leaderboard" as const },
];

export function HowItWorks() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) return;

      const stepsEl = gsap.utils.toArray<HTMLElement>(".how-step");
      const phones = gsap.utils.toArray<HTMLElement>(".how-phone");

      gsap.set(stepsEl.slice(1), { opacity: 0.25 });
      gsap.set(phones.slice(1), { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=200%", pin: true, scrub: 1 },
      });

      for (let i = 1; i < stepsEl.length; i++) {
        tl.to(stepsEl[i - 1], { opacity: 0.25 }, ">")
          .to(stepsEl[i], { opacity: 1 }, "<")
          .to(phones[i - 1], { opacity: 0, y: -40 }, "<")
          .to(phones[i], { opacity: 1, y: 0 }, "<");
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="how" className="how-it-works relative min-h-screen py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-20">
          <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">/ How It Works</span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Three taps to <span className="text-gold-shimmer">glory</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 lg:space-y-20">
            {steps.map((s) => (
              <div key={s.n} className="how-step">
                <div className="font-mono-tk text-sm text-gold mb-3">{s.n}</div>
                <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">{s.title}</h3>
                <p className="text-foreground/65 text-lg max-w-md leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative h-[640px] hidden lg:flex items-center justify-center">
            {steps.map((s) => (
              <div key={s.n} className="how-phone absolute">
                <PhoneMockup state={s.state} />
              </div>
            ))}
          </div>

          <div className="lg:hidden grid gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex justify-center">
                <PhoneMockup state={s.state} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
