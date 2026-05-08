"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  className,
}: AnimatedCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberRef.current || !containerRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      numberRef.current.textContent = end.toLocaleString();
      return;
    }

    const obj = { value: 0 };

    const tween = gsap.to(obj, {
      value: end,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(obj.value).toLocaleString();
        }
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.kill();
    };
  }, [end]);

  return (
    <div ref={containerRef} className={clsx("text-center", className)}>
      <div className="font-accent text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
        {prefix}
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm text-text-muted uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
