import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const map = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 80, opacity: 0, rotateX: -50,
        duration: 1.1, ease: "power4.out", stagger: 0.08, delay: 0.2,
      });
      gsap.from(".hero-sub, .hero-cta", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.9, stagger: 0.1,
      });
      gsap.from(phone.current, {
        y: 60, opacity: 0, rotateY: -25, duration: 1.4, ease: "power3.out", delay: 0.6,
      });

      gsap.to(phone.current, {
        y: -140,
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".hero-bg-layer", {
        y: 80,
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });

      if (map.current) {
        const len = map.current.getTotalLength();
        gsap.set(map.current, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(map.current, { strokeDashoffset: 0, duration: 4, ease: "power2.out", delay: 0.4 });
      }

      gsap.utils.toArray<HTMLElement>(".ember").forEach((el) => {
        gsap.to(el, {
          y: -400 - Math.random() * 200,
          x: `+=${(Math.random() - 0.5) * 60}`,
          opacity: 0,
          duration: 6 + Math.random() * 6,
          repeat: -1,
          ease: "none",
          delay: -Math.random() * 8,
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="hero relative min-h-[100svh] pt-32 pb-20 overflow-hidden">
      <div className="hero-bg-layer absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,107,60,0.35),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(201,168,76,0.12),transparent_50%)]" />
        <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="xMidYMid slice">
          <path
            ref={map}
            d="M150 280 L210 220 L290 200 L360 170 L450 165 L540 195 L610 240 L660 310 L640 410 L590 470 L500 510 L420 525 L340 510 L260 480 L200 430 L160 360 Z"
            fill="none" stroke="#C9A84C" strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="ember absolute bottom-0 w-1 h-1 rounded-full bg-gold/70 blur-[1px]"
            style={{ left: `${(i * 37) % 100}%` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <span className="hero-cta inline-flex items-center gap-2 text-xs font-mono-tk uppercase tracking-[0.2em] text-gold border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Now in Private Beta
          </span>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
            <span className="hero-word inline-block">How</span>{" "}
            <span className="hero-word inline-block">Well</span>{" "}
            <span className="hero-word inline-block">Do</span>{" "}
            <span className="hero-word inline-block">You</span>{" "}
            <span className="hero-word inline-block">Know</span>{" "}
            <span className="hero-word inline-block text-gold-shimmer">Nigeria?</span>
          </h1>
          <p className="hero-sub mt-8 text-lg text-foreground/70 max-w-xl leading-relaxed">
            The ultimate trivia platform for Nigerian culture, history, music, and more.
            Play daily. Compete nationally. Represent your roots.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <a className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform shadow-xl shadow-gold/20 cursor-pointer">
              Download App
            </a>
            <a className="rounded-full border border-foreground/25 px-7 py-3.5 font-semibold hover:border-gold hover:text-gold transition-colors cursor-pointer">
              ▶ Watch Demo
            </a>
          </div>
          <div className="hero-cta mt-12 flex flex-wrap gap-8 text-xs font-mono-tk text-foreground/50 uppercase tracking-wider">
            <div><span className="text-gold text-base block font-bold">10K+</span>Questions</div>
            <div><span className="text-gold text-base block font-bold">36</span>States</div>
            <div><span className="text-gold text-base block font-bold">4.9★</span>Beta rating</div>
          </div>
        </div>

        <div ref={phone} className="hero-phone flex justify-center lg:justify-end perspective-1000">
          <div style={{ transform: "rotateY(-15deg) rotateX(6deg)" }} className="preserve-3d">
            <PhoneMockup state="question" />
          </div>
        </div>
      </div>
    </section>
  );
}
