import { Label, Reveal } from "@/components/site/Reveal";
import { useStore } from "@/components/store/store";
import { formatPrice, products } from "@/lib/catalog";
import signatureBottle from "@/assets/signature-bottle.jpg";

const notes = [
  { tier: "Top", items: "Bergamot • Citrus • Saffron" },
  { tier: "Heart", items: "Rose • Jasmine • Spice" },
  { tier: "Base", items: "Amber • Musk • Woods" },
];

export function Signature() {
  const { add } = useStore();
  const hero = products.find((p) => p.id === "rose-darabie") ?? products[0]!;

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-40">
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <Label>The Signature</Label>
          <h2 className="mt-7 font-display text-6xl leading-[0.9] sm:text-7xl">
            Rose d'Arabie
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Turkish rose folded into aged oud and honeyed amber. A composition
            built for presence — the fragrance our clients are asked about most.
          </p>

          <dl className="mt-12 space-y-7">
            {notes.map((n, i) => (
              <div
                key={n.tier}
                className="grid grid-cols-[5rem_1fr] items-baseline gap-6 border-t border-ink/10 pt-5"
                style={{ marginLeft: `${i * 1.25}rem` }}
              >
                <dt className="label-xs text-sage">{n.tier}</dt>
                <dd className="font-display text-2xl">{n.items}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div>
              <p className="font-display text-3xl">{formatPrice(hero.price)}</p>
              <p className="label-xs mt-1 text-muted-foreground">
                {hero.size} · In stock
              </p>
            </div>
            <button onClick={() => add(hero)} className="hairline-btn-solid">
              <span>Discover the Fragrance</span>
            </button>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-x-8 top-10 bottom-10 rounded-full bg-stone-pale blur-3xl" />
            <img
              src={signatureBottle}
              alt="Signature fragrance bottle"
              loading="lazy"
              width={1008}
              height={1200}
              className="float-slow relative w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
