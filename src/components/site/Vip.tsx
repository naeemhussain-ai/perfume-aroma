import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Label, Reveal } from "@/components/site/Reveal";

export function Vip() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 rounded-[2rem] border border-ink/10 bg-[#004855] p-8 shadow-[0_26px_60px_-46px_rgba(0,72,85,0.55)] lg:grid-cols-12 lg:items-end lg:p-12">
          <Reveal className="lg:col-span-7">
            <Label className="!text-champagne/75">Membership</Label>
            <h2 className="mt-7 font-display text-5xl leading-[0.92] text-ivory sm:text-6xl lg:text-7xl">
              Be part of the
              <span className="block italic text-champagne">private collection.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="max-w-sm text-sm leading-relaxed text-ivory/65">
              Receive first access to new fragrances, exclusive releases and
              curated offers.
            </p>

            {done ? (
              <p className="mt-10 border-t border-ivory/12 pt-6 font-display text-2xl text-ivory">
                Welcome. Your invitation is on its way.
              </p>
            ) : (
              <form onSubmit={submit} className="mt-10">
                <div className="flex items-center gap-4 rounded-full border border-ivory/12 bg-white/8 px-5 py-3.5 backdrop-blur-sm">
                  <label htmlFor="vip-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="vip-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-base text-ivory outline-none placeholder:text-ivory/35"
                  />
                  <button
                    type="submit"
                    aria-label="Join privately"
                    className="shrink-0 text-ivory/55 transition-transform duration-500 hover:translate-x-1 hover:text-champagne"
                  >
                    <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
                  </button>
                </div>
                <button type="submit" className="hairline-btn-solid mt-6">
                  <span>Join Privately</span>
                </button>
                <p className="mt-4 text-[11px] text-ivory/42">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
