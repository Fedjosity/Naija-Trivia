"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

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
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-6 left-6 right-6 z-[100] rounded-2xl transition-all duration-500",
        scrolled
          ? "glass-strong shadow-xl shadow-black/40 py-1"
          : "glass border-white/5 py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center shadow-lg shadow-naija-green/30 group-hover:shadow-naija-green/50 transition-shadow">
            <span className="text-white font-heading font-bold text-sm">NT</span>
          </div>
          <span className="font-heading font-bold text-lg text-text-primary hidden sm:block">
            Naija <span className="text-gradient">Trivia</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-naija-green to-naija-green-light text-white text-sm font-semibold hover:shadow-lg hover:shadow-naija-green/30 transition-all duration-300 cursor-pointer"
          >
            Download App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          <span
            className={clsx(
              "w-6 h-0.5 bg-text-primary transition-all duration-300",
              mobileOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={clsx(
              "w-6 h-0.5 bg-text-primary transition-all duration-300",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "w-6 h-0.5 bg-text-primary transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-naija-green to-naija-green-light text-white text-sm font-semibold cursor-pointer"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
