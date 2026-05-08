import clsx from "clsx";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: "green" | "gold";
}

export default function PhoneMockup({
  children,
  className,
  glowColor = "green",
}: PhoneMockupProps) {
  return (
    <div className={clsx("relative", className)}>
      {/* Glow behind phone */}
      <div
        className={clsx(
          "absolute inset-0 blur-[80px] opacity-30 rounded-full scale-110",
          glowColor === "green"
            ? "bg-naija-green"
            : "bg-naija-gold"
        )}
      />

      {/* Phone frame */}
      <div className="relative z-10 w-[280px] sm:w-[300px] md:w-[320px] rounded-[2.5rem] border-[6px] border-white/10 bg-surface-card overflow-hidden shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-[120px] h-[28px] bg-black rounded-b-2xl" />

        {/* Screen area */}
        <div className="relative w-full aspect-[9/19.5] overflow-hidden bg-surface-dark">
          {children || (
            <div className="absolute inset-0 bg-gradient-to-br from-naija-green-dark/40 via-surface-dark to-naija-gold-dark/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-naija-green to-naija-green-light flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">NT</span>
                </div>
                <p className="text-text-muted text-xs">App Screen</p>
              </div>
            </div>
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-white/20" />
      </div>
    </div>
  );
}
