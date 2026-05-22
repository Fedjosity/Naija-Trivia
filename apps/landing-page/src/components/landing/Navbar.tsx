import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Leaderboard", href: "#leaderboard" },
];

export function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
    );
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg shadow-lg shadow-primary/30">
            🇳🇬
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Daily Naija <span className="text-gold">Trivia</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-gold transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-gold/20"
        >
          Get Early Access
        </a>
      </nav>
    </header>
  );
}
