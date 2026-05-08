import clsx from "clsx";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function GradientButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  onClick,
}: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-300 cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-naija-green to-naija-green-light text-white hover:shadow-xl hover:shadow-naija-green/25 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-gradient-to-r from-naija-gold-dark to-naija-gold text-white hover:shadow-xl hover:shadow-naija-gold/25 hover:scale-[1.02] active:scale-[0.98]",
    outline:
      "border border-white/15 text-text-primary hover:bg-white/5 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98]",
  };

  const classes = clsx(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
