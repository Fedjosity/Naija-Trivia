"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ===== ANIMATION DEFAULTS ===== */
const DEFAULTS = {
  duration: 1,
  ease: "power3.out",
  scrubSmoothing: 1,
};

/* Respect reduced motion */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ===== FADE IN UP ===== */
export function fadeInUp(
  element: gsap.TweenTarget,
  trigger: string | Element,
  options?: {
    scrub?: boolean;
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
    end?: string;
  }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, y = 60, duration = DEFAULTS.duration, delay = 0, start = "top 85%", end = "top 30%" } = options || {};

  return gsap.fromTo(
    element,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: scrub ? undefined : duration,
      delay,
      ease: DEFAULTS.ease,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}

/* ===== FADE IN STAGGER ===== */
export function fadeInStagger(
  elements: gsap.TweenTarget,
  trigger: string | Element,
  options?: {
    scrub?: boolean;
    y?: number;
    stagger?: number;
    start?: string;
    end?: string;
  }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, y = 50, stagger = 0.1, start = "top 85%", end = "top 20%" } = options || {};

  return gsap.fromTo(
    elements,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger,
      ease: DEFAULTS.ease,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}

/* ===== SLIDE IN FROM LEFT ===== */
export function slideInFromLeft(
  element: gsap.TweenTarget,
  trigger: string | Element,
  options?: { scrub?: boolean; x?: number; start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, x = -100, start = "top 80%", end = "top 30%" } = options || {};

  return gsap.fromTo(
    element,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: DEFAULTS.ease,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}

/* ===== SLIDE IN FROM RIGHT ===== */
export function slideInFromRight(
  element: gsap.TweenTarget,
  trigger: string | Element,
  options?: { scrub?: boolean; x?: number; start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, x = 100, start = "top 80%", end = "top 30%" } = options || {};

  return gsap.fromTo(
    element,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: DEFAULTS.ease,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}

/* ===== SCALE IN ===== */
export function scaleIn(
  element: gsap.TweenTarget,
  trigger: string | Element,
  options?: { scrub?: boolean; scale?: number; start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, scale = 0.85, start = "top 80%", end = "top 20%" } = options || {};

  return gsap.fromTo(
    element,
    { scale, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: DEFAULTS.ease,
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}

/* ===== PARALLAX ===== */
export function parallax(
  element: gsap.TweenTarget,
  trigger: string | Element,
  options?: { speed?: number; start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { speed = -50, start = "top bottom", end = "bottom top" } = options || {};

  return gsap.to(element, {
    y: speed,
    ease: "none",
    scrollTrigger: {
      trigger: trigger as gsap.DOMTarget,
      start,
      end,
      scrub: true,
    },
  });
}

/* ===== HORIZONTAL SCROLL (PINNED) ===== */
export function horizontalScroll(
  container: string | Element,
  scrollContent: string | Element,
  options?: { start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { start = "top top", end = "+=300%" } = options || {};

  const contentEl = typeof scrollContent === "string" ? document.querySelector(scrollContent) : scrollContent;
  if (!contentEl) return;

  const totalWidth = (contentEl as HTMLElement).scrollWidth - window.innerWidth;

  return gsap.to(scrollContent, {
    x: -totalWidth,
    ease: "none",
    scrollTrigger: {
      trigger: container as gsap.DOMTarget,
      start,
      end,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });
}

/* ===== COUNT UP ===== */
export function countUp(
  element: Element,
  endValue: number,
  trigger: string | Element,
  options?: { duration?: number; start?: string }
) {
  if (prefersReducedMotion()) {
    element.textContent = endValue.toLocaleString();
    return;
  }

  const { duration = 2, start = "top 80%" } = options || {};

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString();
    },
    scrollTrigger: {
      trigger: trigger as gsap.DOMTarget,
      start,
      toggleActions: "play none none reverse",
    },
  });
}

/* ===== TEXT REVEAL (Line by line) ===== */
export function textReveal(
  elements: gsap.TweenTarget,
  trigger: string | Element,
  options?: { scrub?: boolean; stagger?: number; start?: string; end?: string }
) {
  if (prefersReducedMotion()) return;

  const { scrub = true, stagger = 0.05, start = "top 80%", end = "top 30%" } = options || {};

  return gsap.fromTo(
    elements,
    {
      y: 30,
      opacity: 0,
      rotateX: -15,
    },
    {
      y: 0,
      opacity: 1,
      rotateX: 0,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger as gsap.DOMTarget,
        start,
        end,
        scrub: scrub ? DEFAULTS.scrubSmoothing : false,
        toggleActions: scrub ? undefined : "play reverse play reverse",
      },
    }
  );
}
