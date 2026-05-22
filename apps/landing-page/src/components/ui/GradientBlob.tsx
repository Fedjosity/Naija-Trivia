"use client";

import { cn } from "@/lib/utils"; // Assuming a utility exists or I'll create one

interface GradientBlobProps {
  color?: "green" | "gold" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function GradientBlob({
  color = "green",
  size = "md",
  className,
}: GradientBlobProps) {
  const sizes = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[32rem] h-[32rem]",
    xl: "w-[48rem] h-[48rem]",
  };

  const colors = {
    green: "bg-naija-green/30",
    gold: "bg-naija-gold/20",
    mixed: "bg-gradient-to-br from-naija-green/20 to-naija-gold/20",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full blur-[120px] pointer-events-none animate-pulse-glow",
        sizes[size],
        colors[color],
        className,
      )}
    />
  );
}
