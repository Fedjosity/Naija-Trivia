import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const map = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        y: 80,
        opacity: 0,
        rotateX: -50,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.2,
      });
      gsap.from(".hero-sub, .hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
        stagger: 0.1,
      });
      gsap.from(phone.current, {
        y: 60,
        opacity: 0,
        rotateY: -25,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.6,
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
    <section ref={root} className="hero relative min-h-svh pt-32 pb-20 overflow-hidden">
      <div className="hero-bg-layer absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,107,60,0.35),transparent_55%),radial-gradient(circle_at_75%_60%,rgba(201,168,76,0.12),transparent_50%)]" />
        <svg
          viewBox="-200 -150 1200 1050"
          className="absolute left-1/2 -translate-x-1/2 top-[20%] sm:top-1/2 sm:-translate-y-1/2 w-[90vw] h-[90vw] sm:w-[75vw] sm:h-[75vw] md:w-[70vw] md:h-[70vw] lg:w-[55vw] lg:h-[55vw] opacity-25 lg:opacity-30"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={map}
            d="M391.87,609.35 L328.98,631.15 L305.99,627.97 L282.7,641.54 L234.24,640.22 L201.81,602.33 L181.87,558.48 L138.98,518.57 L93.46,519.31 L40,519.28 L43.47,421.64 L41.94,383.1 L53.36,344.89 L72.02,326.32 L101.41,288.82 L95.03,272.52 L106.96,248.14 L93.34,212.2 L95.7,192.08 L99.91,138 L117.27,113.57 L125.79,78.73 L141.57,65.63 L206.67,58.46 L267.39,81.06 L290.11,103.94 L321.02,104.97 L349.73,90.1 L423.05,121.41 L453.94,119.93 L489.68,94.12 L525.19,95.96 L542.67,87.45 L575.27,90.98 L622.18,108.66 L669.55,74.8 L683.76,77.21 L724.75,143.53 L736.02,142.19 L760,166.32 L753.4,177.26 L750.2,197.4 L699.17,244.27 L683.16,282.93 L674.61,314.42 L661.76,327.92 L649.54,370.32 L617.14,395.28 L607.75,425.93 L594.14,450.33 L588.48,475.51 L546.86,495.92 L512.85,471.03 L489.89,472.03 L453.81,507.49 L436.27,508.03 L407.46,566.48 L391.87,609.35 Z"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.2"
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
            The ultimate trivia platform for Nigerian culture, history, music, and more. Play daily.
            Compete nationally. Represent your roots.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-gold text-gold-foreground px-7 py-3.5 font-semibold hover:scale-105 transition-transform shadow-xl shadow-gold/20 cursor-pointer">
              Download App
            </button>
            <button className="rounded-full border border-foreground/25 px-7 py-3.5 font-semibold hover:border-gold hover:text-gold transition-colors cursor-pointer">
              ▶ Watch Demo
            </button>
          </div>
          <div className="hero-cta mt-12 flex flex-wrap gap-8 text-xs font-mono-tk text-foreground/50 uppercase tracking-wider">
            <div>
              <span className="text-gold text-base block font-bold">10K+</span>Questions
            </div>
            <div>
              <span className="text-gold text-base block font-bold">36</span>States
            </div>
            <div>
              <span className="text-gold text-base block font-bold">4.9★</span>Beta rating
            </div>
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
