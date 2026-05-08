import clsx from "clsx";

interface GradientBlobProps {
  color?: "green" | "gold" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export default function GradientBlob({
  color = "green",
  size = "md",
  className,
  animate = true,
}: GradientBlobProps) {
  const sizeClasses = {
    sm: "w-[200px] h-[200px]",
    md: "w-[400px] h-[400px]",
    lg: "w-[600px] h-[600px]",
    xl: "w-[800px] h-[800px]",
  };

  const colorClasses = {
    green: "bg-naija-green/30",
    gold: "bg-naija-gold/20",
    mixed: "bg-gradient-to-br from-naija-green/30 to-naija-gold/20",
  };

  return (
    <div
      className={clsx(
        "absolute rounded-full blur-[120px] pointer-events-none",
        sizeClasses[size],
        colorClasses[color],
        animate && "animate-pulse-glow",
        className
      )}
      aria-hidden="true"
    />
  );
}
