"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-6 left-6 right-6 z-100 rounded-2xl transition-all duration-500",
        scrolled || mobileOpen
          ? "glass-strong shadow-2xl shadow-black/40 py-1 border-white/10"
          : "glass border-white/5 py-2",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center shadow-lg shadow-naija-green/30 group-hover:shadow-naija-green/50 transition-all duration-500 group-hover:scale-110">
            <span className="text-white font-heading font-bold text-lg">
              NT
            </span>
          </div>
          <span className="font-heading font-black text-xl text-white tracking-tighter hidden sm:block">
            Naija <span className="text-gradient">Trivia</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-text-secondary hover:text-white uppercase tracking-widest transition-colors duration-300 cursor-pointer relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-naija-green-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-naija-green-dark via-naija-green to-naija-green-light text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-naija-green/20 hover:shadow-naija-green/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer border border-white/10"
          >
            Get the App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 cursor-pointer transition-all hover:bg-white/10 active:scale-95"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen ? "top-2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute top-2 block w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute block w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen ? "top-2 -rotate-45" : "top-4",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          mobileOpen ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pt-4 flex flex-col gap-6">
          <div className="h-px bg-white/5 w-full mb-2" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold text-text-secondary hover:text-white uppercase tracking-widest transition-colors cursor-pointer px-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center px-8 py-4 rounded-xl bg-gradient-to-r from-naija-green-dark to-naija-green-light text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-naija-green/20 cursor-pointer border border-white/10"
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  );
}
