import { useState } from "react";
import { Plus } from "lucide-react";
import { Label, Reveal } from "@/components/site/Reveal";
import { useStore } from "@/components/store/store";
import { families, formatPrice, products, type Family } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const blurbs: Record<Family, string> = {
  Floral: "Petals opened at dawn — tuberose, rose, jasmine absolute.",
  Woody: "Grounding and quiet. Cedar, vetiver, dry sandalwood.",
  Fresh: "Air off the water. Marine accords and clean aromatics.",
  Citrus: "Bergamot, neroli and zest — luminous from the first spray.",
  Amber: "Warm resin and tonka. A slow, golden trail.",
  Musk: "Skin-close and soft. The scent that reads as *you*.",
  Oriental: "Oud, saffron and spice. Opulence with an old soul.",
};

export function Discovery() {
  const [active, setActive] = useState<Family>("Oriental");
  const { add } = useStore();
  const matches = products.filter((p) => p.family === active);

  return (
    <section id="discover" className="px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <Label>Fragrance Discovery</Label>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-[5.5rem]">
            What will you
            <span className="italic text-sage"> wear today?</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 overflow-x-auto">
          <div className="flex min-w-max items-center gap-8 border-b border-border pb-4">
            {families.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "label-xs relative pb-3 transition-colors",
                  active === f
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-[17px] h-px origin-left bg-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active === f ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div key={active} className="reveal reveal-in lg:col-span-4">
            <p className="font-display text-4xl leading-tight">{active}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {blurbs[active]}
            </p>
            <p className="label-xs mt-8 text-sage">
              {matches.length} fragrance{matches.length === 1 ? "" : "s"} in this
              family
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {matches.map((p, i) => (
              <article
                key={p.id}
                className="group reveal reveal-in"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-pale">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <button
                    aria-label={`Add ${p.name} to bag`}
                    onClick={() => add(p)}
                    className="absolute right-4 bottom-4 grid h-11 w-11 translate-y-2 place-items-center bg-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink hover:text-ivory"
                  >
                    <Plus strokeWidth={1} className="h-4 w-4" />
                  </button>
                </div>
                <p className="label-xs mt-4 text-muted-foreground">{p.brand}</p>
                <h3 className="mt-1 font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm">{formatPrice(p.price)}</p>
              </article>
            ))}
            {matches.length === 0 && (
              <p className="text-sm text-muted-foreground">
                This family is currently being restocked — join the private list
                below for first access.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
