import { useState } from "react";

const benefitsFree = ["3 daily questions", "5 categories", "Basic leaderboard", "Ads supported"];
const benefitsGold = [
  "Unlimited daily questions",
  "All 8+ categories",
  "Streak insurance",
  "State & national leaderboards",
  "Offline mode",
  "No ads. Ever.",
  "Early access to new packs",
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = yearly ? "₦15,000" : "₦1,500";
  const period = yearly ? "/year" : "/month";

  return (
    <section id="pricing" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">
            / Pricing
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4">
            Go <span className="text-gold-shimmer">Gold</span>.
          </h2>
          <p className="mt-5 text-foreground/65 text-lg">
            Free forever. Or unlock the full federation.
          </p>

          <div className="inline-flex mt-8 p-1 rounded-full bg-surface border border-border">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? "bg-gold text-gold-foreground" : "text-foreground/65"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-gold text-gold-foreground" : "text-foreground/65"}`}
            >
              Yearly
              <span className="text-[10px] font-mono-tk px-1.5 py-0.5 rounded bg-primary text-foreground">
                −17%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-surface border border-border p-10">
            <div className="font-display text-2xl font-bold">Free</div>
            <div className="mt-1 text-sm text-foreground/55">For casual players</div>
            <div className="mt-8 font-display text-5xl font-bold">
              ₦0<span className="text-base font-sans text-foreground/55">/forever</span>
            </div>
            <button className="mt-8 w-full rounded-full border border-foreground/25 py-3.5 font-semibold hover:border-gold transition-colors">
              Start Free
            </button>
            <ul className="mt-8 space-y-3">
              {benefitsFree.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground/80">
                  <span className="text-gold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl bg-linear-to-br from-surface-elevated to-surface border border-gold p-10 gold-border-glow lg:scale-[1.03]">
            <span className="absolute -top-3 right-8 bg-gold text-gold-foreground px-4 py-1 rounded-full text-xs font-mono-tk uppercase tracking-wider font-bold">
              Most Popular
            </span>
            <div className="font-display text-2xl font-bold text-gold">Naija Gold</div>
            <div className="mt-1 text-sm text-foreground/55">For the true patriots</div>
            <div className="mt-8 font-display text-5xl font-bold text-gold-shimmer transition-all">
              {price}
              <span className="text-base font-sans text-foreground/55">{period}</span>
            </div>
            <button className="mt-8 w-full rounded-full bg-gold text-gold-foreground py-3.5 font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-gold/30">
              Get Naija Gold
            </button>
            <ul className="mt-8 space-y-3">
              {benefitsGold.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="text-gold font-bold">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
