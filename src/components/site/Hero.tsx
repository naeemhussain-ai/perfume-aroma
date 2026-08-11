import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [y, setY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const words = ["The", "Art", "of", "Scent."];

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="drift-slow pointer-events-none absolute -top-32 -left-40 h-[34rem] w-[34rem] rounded-full bg-mist/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="float-slow pointer-events-none absolute top-1/3 right-[42%] hidden h-24 w-24 rounded-full border border-champagne/40 lg:block"
      />

      <div className="mx-auto grid max-w-[1500px] items-end gap-12 px-6 pb-16 sm:px-10 lg:grid-cols-12 lg:gap-6 lg:pb-24">
        <div className="lg:col-span-6 lg:pb-10">
          <span
            className="label-xs block text-sage transition-all duration-1000"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(14px)",
            }}
          >
            Curated Fragrance Collection
          </span>

          <h1 className="display-hero mt-8 text-[19vw] leading-[0.82] sm:text-[13vw] lg:text-[8.5vw]">
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <span
                  className="block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: ready ? "translateY(0)" : "translateY(105%)",
                    transitionDelay: `${180 + i * 110}ms`,
                    fontStyle: i === 2 ? "italic" : undefined,
                    color: i === 2 ? "var(--sage)" : undefined,
                    paddingLeft: i === 1 ? "0.12em" : undefined,
                  }}
                >
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="mt-10 max-w-md transition-all duration-1000"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(18px)",
              transitionDelay: "760ms",
            }}
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              Discover distinctive fragrances created to become part of your
              signature.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#shop" className="hairline-btn-solid">
                <span>Explore Fragrances</span>
              </a>
              <a href="#discover" className="hairline-btn">
                <span>Find Your Scent</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            className="relative overflow-hidden transition-[clip-path] duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ clipPath: ready ? "inset(0 0 0 0)" : "inset(0 0 100% 0)" }}
          >
            <img
              src={heroBottle}
              alt="Sculptural glass perfume bottle in warm daylight"
              width={1104}
              height={1408}
              className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
              style={{ transform: `translateY(${Math.min(y * 0.06, 60)}px) scale(1.06)` }}
            />
          </div>

          <div
            className="absolute -bottom-6 -left-4 hidden max-w-[15rem] bg-ivory p-6 shadow-[0_30px_70px_-50px_rgba(32,34,31,0.6)] transition-all duration-1000 sm:block lg:-left-14"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(24px)",
              transitionDelay: "1100ms",
            }}
          >
            <p className="label-xs text-muted-foreground">Maison Since 2016</p>
            <p className="mt-3 font-display text-2xl leading-snug">
              200+ fragrances, personally vetted before they earn a place.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] items-center gap-6 border-t border-border px-6 py-6 sm:px-10">
        <ArrowDown strokeWidth={1} className="h-4 w-4 animate-bounce text-sage" />
        <p className="label-xs text-muted-foreground">
          4.8 average from 8,000+ clients · Delivery in 3–7 days · Worldwide
        </p>
      </div>
    </section>
  );
}
