type Props = {
  state?: "question" | "score" | "leaderboard";
  className?: string;
};

export function PhoneMockup({ state = "question", className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[280px] sm:w-[320px] aspect-9/19 rounded-[3rem] bg-linear-to-b from-surface-elevated to-surface p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-border">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-background rounded-b-2xl z-10" />
        <div className="w-full h-full rounded-[2.4rem] bg-background overflow-hidden flex flex-col">
          <div className="h-12 flex items-center justify-between px-6 pt-4 text-[10px] font-mono-tk text-foreground/70">
            <span>9:41</span>
            <span>●●●</span>
          </div>
          {state === "question" && <QuestionView />}
          {state === "score" && <ScoreView />}
          {state === "leaderboard" && <LeaderboardView />}
        </div>
      </div>
    </div>
  );
}

function QuestionView() {
  return (
    <div className="flex-1 px-5 py-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono-tk text-gold uppercase tracking-wider">
          Music · Q3/10
        </span>
        <span className="text-[10px] font-mono-tk text-foreground/60">00:18</span>
      </div>
      <div className="h-1 bg-surface rounded-full mb-5">
        <div className="h-full w-1/3 bg-gold rounded-full" />
      </div>
      <h3 className="font-display text-lg leading-tight mb-5">
        Who released the album "Made in Lagos" in 2020?
      </h3>
      <div className="space-y-2.5 mt-auto">
        {["Wizkid", "Burna Boy", "Davido", "Tems"].map((o, i) => (
          <div
            key={o}
            className={`px-4 py-3 rounded-xl text-sm border ${
              i === 0
                ? "bg-gold/15 border-gold text-gold"
                : "bg-surface border-border text-foreground/80"
            }`}
          >
            {o}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreView() {
  return (
    <div className="flex-1 px-5 py-6 flex flex-col items-center justify-center text-center">
      <span className="text-[10px] font-mono-tk text-gold uppercase tracking-widest mb-3">
        Round Complete
      </span>
      <div className="font-display text-7xl text-gold-shimmer font-bold mb-1">920</div>
      <div className="text-xs text-foreground/60 font-mono-tk mb-6">+ 120 streak bonus</div>
      <div className="w-full space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-foreground/60">Accuracy</span>
          <span className="text-gold font-mono-tk">90%</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-foreground/60">Speed</span>
          <span className="text-gold font-mono-tk">8.2s avg</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-foreground/60">Streak</span>
          <span className="text-gold font-mono-tk">🔥 12 days</span>
        </div>
      </div>
    </div>
  );
}

function LeaderboardView() {
  const rows = [
    { n: "Chiamaka O.", s: "🏆", p: 9840, st: "LA" },
    { n: "Tunde A.", s: "2", p: 9210, st: "OY" },
    { n: "Ifeoma E.", s: "3", p: 8970, st: "AN" },
    { n: "You", s: "4", p: 8540, st: "FC" },
  ];
  return (
    <div className="flex-1 px-4 py-4">
      <h4 className="font-display text-lg mb-3 px-1">Today's Top</h4>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div
            key={r.n}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
              i === 0 ? "bg-gold/15 border border-gold/50" : "bg-surface"
            }`}
          >
            <span
              className={`text-xs font-mono-tk w-5 ${i === 0 ? "text-gold" : "text-foreground/50"}`}
            >
              {r.s}
            </span>
            <div className="w-7 h-7 rounded-full bg-primary text-[10px] flex items-center justify-center font-bold">
              {r.n[0]}
            </div>
            <span className="text-xs flex-1 truncate">{r.n}</span>
            <span className="text-[10px] font-mono-tk text-foreground/60">{r.st}</span>
            <span className="text-xs font-mono-tk text-gold">{r.p}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
