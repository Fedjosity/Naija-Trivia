"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface StoreButtonProps {
  store: "apple" | "google";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function StoreButton({
  store,
  size = "md",
  className,
}: StoreButtonProps) {
  const isApple = store === "apple";

  return (
    <button
      className={cn(
        "group relative flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 active:translate-y-0",
        size === "lg" ? "px-6 py-3.5" : "px-5 py-2.5",
        className,
      )}
    >
      <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
        {isApple ? (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.96.95-2.06 1.92-3.27 1.92-1.2 0-1.6-.74-3.03-.74-1.42 0-1.88.72-3.03.72-1.15 0-2.32-.98-3.3-1.92C2.42 18.3 1 15.14 1 12.15c0-4.8 3.12-7.33 6.13-7.33 1.58 0 3.08.57 4.05 1.03.97.46 2.5 1.03 4.18 1.03.35 0 2.55-.07 4.18-1.55.5.42 1.46 1.25 2 2.38-3.42 1.4-2.85 5.5.3 6.75-.72 2.1-1.6 4.13-3.79 5.82zM12.03 5.3c-.08-2.1 1.74-4.13 3.86-4.3.2 2.45-2.1 4.56-3.86 4.3z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.156 2.156 0 0 1-.466-1.312V3.126c0-.495.171-.96.465-1.312zm.827-1.026l11.025 6.32L18.41 12l-2.949 4.892-11.025 6.32a2.148 2.148 0 0 1-1.408-.066L14.711 12 3.028 1.146a2.148 2.148 0 0 1 1.408-.358zM19.11 11.582l3.498-2.003a2.152 2.152 0 0 1 0 3.842l-3.498-2.003a.5.5 0 0 1 0-.836z" />
          </svg>
        )}
      </div>
      <div className="text-left">
        <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold">
          {isApple ? "Download on the" : "Get it on"}
        </p>
        <p className="text-sm font-bold text-white leading-tight">
          {isApple ? "App Store" : "Google Play"}
        </p>
      </div>
    </button>
  );
}
