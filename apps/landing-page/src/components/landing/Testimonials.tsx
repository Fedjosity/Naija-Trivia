import { useEffect, useState } from "react";

const quotes = [
  { name: "Adaeze N.", state: "Enugu", quote: "I thought I knew Naija. This humbled me in 3 questions. Now I'm hooked." },
  { name: "Seyi B.", state: "Lagos", quote: "The Nollywood pack is criminal. Took me back to my childhood NTA days." },
  { name: "Musa I.", state: "Kaduna", quote: "Finally a trivia app that actually understands the North. The history is on point." },
  { name: "Tobi R.", state: "Ogun", quote: "My family WhatsApp group is now a battleground. We compete every evening." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <span className="font-mono-tk text-xs uppercase tracking-[0.25em] text-gold">/ Word on the Streets</span>
        <h2 className="font-display text-5xl lg:text-6xl font-bold mt-4">
          Nigerians Are <span className="text-gold-shimmer">Already Talking</span>
        </h2>

        <div className="relative mt-16 h-72 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {quotes.map((q) => (
              <div key={q.name} className="w-full shrink-0 px-6 flex flex-col items-center justify-center">
                <div className="text-6xl text-gold/40 font-display leading-none mb-4">"</div>
                <blockquote className="font-display text-2xl lg:text-3xl leading-snug max-w-3xl">
                  {q.quote}
                </blockquote>
                <div className="mt-6 text-sm font-mono-tk uppercase tracking-wider text-gold">
                  {q.name} · {q.state}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-foreground/25"}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
