import { Reveal, Label } from "@/components/site/Reveal";
import storyMain from "@/assets/story-main.jpg";
import storyDetail from "@/assets/story-detail.jpg";

export function Story() {
  return (
    <section id="story" className="bg-white px-6 py-24 sm:px-10 lg:py-40">
      <div className="mx-auto grid max-w-[1500px] items-start gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden rounded-[1.75rem] bg-stone-pale shadow-[0_24px_60px_-48px_rgba(17,24,17,0.45)]">
            <img
              src={storyMain}
              alt="Editorial portrait applying fragrance in warm daylight"
              loading="lazy"
              width={1008}
              height={1200}
              className="aspect-[4/5] w-full object-cover max-h-[480px] lg:max-h-none"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal delay={80}>
            <Label>Our Story</Label>
            <h2 className="mt-8 max-w-4xl font-display text-[16vw] leading-[0.84] sm:text-[10vw] lg:text-[6.2vw]">
              Scent
              <span className="block pl-[0.25em] italic text-sage">becomes</span>
              <span className="block pl-[0.5em]">memory.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-[minmax(0,1fr)_19rem]">
            <Reveal
              delay={140}
              className="space-y-6 text-sm leading-relaxed text-muted-foreground"
            >
              <p>
                We are a small team obsessed with authentic fragrance - from
                enchanting oud and oriental blends to delicate florals and bold
                masculines. Every scent is personally vetted before it earns its
                place in the catalogue.
              </p>
              <p>
                With trusted houses across the Middle East, Europe and Asia, we
                bring authenticity directly to your door. What you wear should
                never be a compromise.
              </p>
              <a href="#shop" className="hairline-btn mt-2">
                <span>Explore the Edit</span>
              </a>
            </Reveal>

            <Reveal delay={220}>
              <div className="overflow-hidden rounded-[1.5rem] bg-stone-pale">
                <img
                  src={storyDetail}
                  alt="Bergamot, saffron and jasmine on pale stone"
                  loading="lazy"
                  width={816}
                  height={816}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 rounded-[1.25rem] border border-border bg-white p-6">
                {[
                  ["8,000+", "Clients"],
                  ["200+", "Fragrances"],
                  ["4.8", "Rating"],
                ].map(([v, k]) => (
                  <div key={k}>
                    <dt className="font-display text-3xl">{v}</dt>
                    <dd className="label-xs mt-1 text-muted-foreground">{k}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
