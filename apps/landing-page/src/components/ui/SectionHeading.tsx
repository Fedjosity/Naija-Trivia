"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl flex flex-col gap-4",
        align === "center" ? "mx-auto text-center items-center" : "text-left items-start",
        className
      )}
    >
      {tag && (
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-naija-green/20 bg-naija-green/5 text-naija-green-light text-[10px] font-black uppercase tracking-[0.2em]">
          {tag}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
