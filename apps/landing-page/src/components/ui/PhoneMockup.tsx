"use client";

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "green" | "gold";
}

export default function PhoneMockup({
  children,
  className,
  glowColor = "green",
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-[280px] h-[580px] sm:w-[300px] sm:h-[620px]", className)}>
      {/* Glow effect */}
      <div
        className={cn(
          "absolute -inset-4 rounded-[3rem] blur-2xl opacity-20",
          glowColor === "green" ? "bg-naija-green" : "bg-naija-gold"
        )}
      />

      {/* Frame */}
      <div className="relative h-full w-full rounded-[3rem] border-[8px] border-surface-elevated bg-surface-dark shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-surface-elevated rounded-b-2xl z-50" />
        
        {/* Screen Content */}
        <div className="relative h-full w-full bg-surface-dark overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
