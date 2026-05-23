import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function FinalCTA() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-letter", {
        y: 80,
        opacity: 0,
        rotateX: -60,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.04,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const headline = "Start Your Streak Today";

  return (
    <section ref={root} id="cta" className="relative py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18] flag-gradient" />
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background/95" />

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl leading-[0.95]">
          {headline.split(" ").map((word, wi) => (
            <span key={wi} className="inline-block mr-3">
              {word.split("").map((ch, ci) => (
                <span key={ci} className="cta-letter inline-block">
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h2>
        <p className="mt-8 text-lg text-foreground/70">
          Available on iOS & Android. Free to download.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a className="rounded-full border-2 border-gold px-7 py-3.5 font-semibold flex items-center gap-3 hover:bg-gold hover:text-gold-foreground transition-colors cursor-pointer">
            <span className="text-2xl"></span>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-mono-tk uppercase">Download on</div>
              <div className="font-bold">App Store</div>
            </div>
          </a>
          <a className="rounded-full border-2 border-gold px-7 py-3.5 font-semibold flex items-center gap-3 hover:bg-gold hover:text-gold-foreground transition-colors cursor-pointer">
            <span className="text-2xl">▶</span>
            <div className="text-left leading-tight">
              <div className="text-[10px] font-mono-tk uppercase">Get it on</div>
              <div className="font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
