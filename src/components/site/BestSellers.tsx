import { Label, Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/catalog";

export function BestSellers() {
  const [a, b, c, d, e, f] = products as [
    (typeof products)[number],
    (typeof products)[number],
    (typeof products)[number],
    (typeof products)[number],
    (typeof products)[number],
    (typeof products)[number],
  ];


  return (
    <section id="shop" className="bg-stone-pale/60 px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="max-w-3xl">
          <Label>The Edit</Label>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl">
            Most worn
            <span className="italic text-sage"> this season</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ProductCard product={a} tall />
          </Reveal>
          <div className="grid gap-y-16 lg:col-span-7 lg:grid-cols-2 lg:gap-x-8">
            <Reveal delay={80}>
              <ProductCard product={b} />
            </Reveal>
            <Reveal delay={160}>
              <ProductCard product={c} />
            </Reveal>
            <Reveal delay={220} className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-col items-start justify-center border-t border-border pt-8">
                <p className="max-w-md font-display text-3xl leading-snug">
                  “No grey market, no imitations — only genuine luxury at a price
                  that respects your intelligence.”
                </p>
                <span className="label-xs mt-5 text-muted-foreground">
                  Casa de Aroma — Sourcing Standard
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-4">
            <ProductCard product={d} tall />
          </Reveal>
          <Reveal delay={90} className="lg:col-span-4">
            <ProductCard product={e} tall />
          </Reveal>
          <Reveal delay={180} className="lg:col-span-4">
            <ProductCard product={f} tall />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
