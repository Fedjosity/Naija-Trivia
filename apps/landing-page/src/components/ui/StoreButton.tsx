import clsx from "clsx";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

interface StoreButtonProps {
  store: "apple" | "google";
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function StoreButton({
  store,
  href = "#",
  className,
  size = "md",
}: StoreButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 gap-2",
    md: "px-6 py-3.5 gap-3",
    lg: "px-8 py-4 gap-3",
  };

  const iconSizes = {
    sm: 20,
    md: 26,
    lg: 30,
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center rounded-2xl bg-white/[0.06] border border-white/10 text-text-primary transition-all duration-300 cursor-pointer",
        "hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02]",
        "active:scale-[0.98]",
        sizeClasses[size],
        className
      )}
    >
      {store === "apple" ? (
        <AppleIcon sx={{ fontSize: iconSizes[size] }} />
      ) : (
        <ShopIcon sx={{ fontSize: iconSizes[size] }} />
      )}
      <div className="flex flex-col">
        <span className="text-[10px] text-text-muted leading-tight">
          {store === "apple" ? "Download on the" : "GET IT ON"}
        </span>
        <span
          className={clsx(
            "font-semibold leading-tight",
            size === "sm" ? "text-sm" : "text-base"
          )}
        >
          {store === "apple" ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}
