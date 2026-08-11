import { useEffect, useState } from "react";
import { Label, Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const quotes = [
  {
    quote: "The kind of fragrance people ask you about.",
    body: "Rose d'Arabie is simply breathtaking — the longevity, the sillage. I receive compliments every single time I wear it.",
    name: "Layla A.",
    place: "Dubai, UAE",
    purchase: "Armani Privé Rose d'Arabie",
  },
  {
    quote: "My forever scent, and nothing compares.",
    body: "I have tried designer fragrances costing three times as much. Sì is the one I keep returning to — and the gift box is stunning.",
    name: "Sophie M.",
    place: "Paris, FR",
    purchase: "Sì Eau de Parfum Gift Box",
  },
  {
    quote: "She was genuinely blown away.",
    body: "Ordered the Sì Intense duo for my wife's birthday. Fast delivery, beautiful presentation, world-class fragrance.",
    name: "James R.",
    place: "Sydney, AU",
    purchase: "Sì Eau de Parfum & Intense Duo",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-stone-pale/60 px-6 py-24 sm:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <Label>Customer Experience</Label>
        </Reveal>

        <div className="relative mt-12 min-h-[26rem] sm:min-h-[24rem]">
          {quotes.map((q, idx) => (
            <blockquote
              key={q.name}
              aria-hidden={idx !== i}
              className={cn(
                "absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                idx === i
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-6 opacity-0",
              )}
            >
              <p className="font-display text-[10vw] leading-[0.92] sm:text-[6vw] lg:text-[4.6vw]">
                “{q.quote}”
              </p>
              <div className="mt-10 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-2">
                  {q.body}
                </p>
                <div>
                  <p className="font-display text-2xl">{q.name}</p>
                  <p className="label-xs mt-1 text-muted-foreground">{q.place}</p>
                  <p className="mt-3 text-[11px] text-sage">
                    Purchased: {q.purchase}
                  </p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {quotes.map((q, idx) => (
            <button
              key={q.name}
              aria-label={`Show review from ${q.name}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-px w-16 transition-all duration-500",
                idx === i ? "bg-ink" : "bg-ink/20 hover:bg-ink/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
