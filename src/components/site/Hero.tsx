import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bottle.jpg";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  const lines = [
    [{ text: "The Art", italic: false, gold: false }],
    [{ text: "of ", italic: true, gold: true }, { text: "Scent.", italic: false, gold: false }],
  ];
  const notes = [
    ["Top", "Bergamot, neroli, saffron"],
    ["Heart", "Rose, jasmine, soft spice"],
    ["Base", "Amber, musk, cedarwood"],
  ];

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-[112px] sm:pt-[124px]"
    >
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_28%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#072d35]/88 via-[#0b3943]/60 to-[#f4ecdf]/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,72,85,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(207,167,90,0.18),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#072d35]/65 to-transparent" />
      <div className="absolute -left-16 top-28 h-56 w-56 rounded-full bg-champagne/15 blur-3xl" />
      <div className="absolute right-0 bottom-24 h-64 w-64 rounded-full bg-sage-soft/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] min-h-[calc(100vh-124px)] items-end gap-14 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,1.2fr)_24rem] lg:gap-12 lg:py-20">
        <div className="max-w-3xl self-center">
          <span
            className="label-xs block text-champagne transition-all duration-1000"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(14px)",
            }}
          >
            Curated Fragrance Collection
          </span>

          <h1 className="display-hero mt-6 text-[13vw] leading-[0.88] text-ivory sm:text-[9vw] lg:text-[6.5vw]">
            {lines.map((parts, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className="block transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: ready ? "translateY(0)" : "translateY(105%)",
                    transitionDelay: `${180 + i * 150}ms`,
                  }}
                >
                  {parts.map((p, j) => (
                    <span
                      key={j}
                      style={{
                        fontStyle: p.italic ? "italic" : undefined,
                        color: p.gold ? "var(--champagne)" : undefined,
                      }}
                    >
                      {p.text}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="mt-10 transition-all duration-1000"
            style={{
              opacity: ready ? 1 : 0,
              transform: ready ? "none" : "translateY(18px)",
              transitionDelay: "760ms",
            }}
          >
            <p className="max-w-md text-base leading-relaxed text-ivory/72 sm:text-lg">
              Discover distinctive fragrances curated for presence, memory, and
              the kind of signature people remember long after you leave.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#shop" className="hairline-btn-solid">
                <span>Explore Fragrances</span>
              </a>
              <a
                href="#discover"
                className="hairline-btn !border-ivory/40 !text-ivory hover:!bg-ivory/15 hover:!text-ivory"
              >
                <span>Find Your Scent</span>
              </a>
            </div>
          </div>

          <div
            className="mt-16 inline-flex flex-wrap gap-8 border-t border-ivory/20 pt-8 transition-all duration-1000"
            style={{
              opacity: ready ? 1 : 0,
              transitionDelay: "1000ms",
            }}
          >
            {[
              ["8,000+", "Happy Clients"],
              ["200+", "Fragrances"],
              ["4.8*", "Avg Rating"],
            ].map(([v, k]) => (
              <div key={k}>
                <p className="font-display text-2xl text-ivory">{v}</p>
                <p className="label-xs mt-1 text-ivory/50">{k}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden self-start lg:block"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "none" : "translateY(22px)",
            transition: "opacity 1000ms ease, transform 1000ms ease",
            transitionDelay: "920ms",
          }}
        >
          <div className="rounded-[2rem] border border-ivory/18 bg-ivory/10 p-7 backdrop-blur-md">
            <p className="label-xs text-champagne">Scent Profile</p>
            <p className="mt-4 font-display text-3xl leading-tight text-ivory">
              A warm floral trail with golden citrus lift.
            </p>
            <div className="mt-8 space-y-4 border-t border-ivory/12 pt-6">
              {notes.map(([tier, items]) => (
                <div key={tier} className="grid grid-cols-[3.5rem_1fr] gap-4">
                  <span className="label-xs text-ivory/45">{tier}</span>
                  <span className="text-sm leading-relaxed text-ivory/75">
                    {items}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 border-t border-ivory/15 px-6 py-5 sm:px-10">
        <ArrowDown
          strokeWidth={1.5}
          className="h-4 w-4 animate-bounce text-champagne"
        />
        <p className="label-xs text-ivory/50">
          Delivery in 3-7 days | Worldwide shipping | 30-day returns
        </p>
      </div>
    </section>
  );
}
