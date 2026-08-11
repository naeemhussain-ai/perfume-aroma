import { ArrowUpRight } from "lucide-react";
import { Label, Reveal } from "@/components/site/Reveal";
import signature from "@/assets/collection-signature.jpg";
import classics from "@/assets/collection-classics.jpg";
import privateCol from "@/assets/collection-private.jpg";
import discovery from "@/assets/collection-discovery.jpg";

const items = [
  {
    title: "Signature Scents",
    count: "12 fragrances",
    copy: "The bottles our clients return to, season after season.",
    image: signature,
    span: "lg:col-span-5 lg:row-span-2",
    ratio: "aspect-[4/5] lg:aspect-[3/4.4]",
  },
  {
    title: "Modern Classics",
    count: "9 fragrances",
    copy: "Houses that defined an era, in their finest concentration.",
    image: classics,
    span: "lg:col-span-7",
    ratio: "aspect-[4/3] lg:aspect-[16/9]",
  },
  {
    title: "Private Collection",
    count: "6 fragrances",
    copy: "Oud, amber and spice - Middle Eastern opulence, unfiltered.",
    image: privateCol,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Discovery",
    count: "4 travel parfums",
    copy: "Begin with a set. Commit to the one that stays with you.",
    image: discovery,
    span: "lg:col-span-3",
    ratio: "aspect-square lg:aspect-[3/4]",
  },
];

export function Collections() {
  return (
    <section id="collections" className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div className="max-w-4xl">
            <Label>Editorial Collections</Label>
            <h2 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
              Four ways
              <span className="block pl-[0.6em] italic text-sage">
                to be remembered
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:justify-self-end">
            Each edit is composed by our fragrance team - no algorithm, no
            filler, no grey market.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-14 lg:auto-rows-fr lg:grid-cols-12">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 110}
              className={`group flex h-full ${item.span}`}
            >
              <a href="#shop" className="flex h-full w-full flex-col">
                <div
                  className={`relative overflow-hidden rounded-xl bg-stone-pale ${item.ratio}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1000}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/8" />
                  <span className="absolute right-5 bottom-5 grid h-11 w-11 translate-y-3 place-items-center rounded-full bg-ivory opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight strokeWidth={1} className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <div className="flex items-baseline justify-between gap-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                    <h3 className="font-display text-3xl sm:text-4xl">
                      {item.title}
                    </h3>
                    <span className="label-xs shrink-0 text-muted-foreground">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
