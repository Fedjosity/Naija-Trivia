import clsx from "clsx";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "green" | "gold" | "none";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-2xl glass overflow-hidden",
        hover && "hover:bg-white/[0.07] hover:border-white/15 transition-all duration-300 cursor-pointer",
        glow === "green" && "glow-green",
        glow === "gold" && "glow-gold",
        className
      )}
    >
      {children}
    </div>
  );
}
