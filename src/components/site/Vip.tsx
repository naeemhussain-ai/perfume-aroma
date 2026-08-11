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
    <section className="px-6 pb-24 sm:px-10 lg:pb-36">
      <div className="mx-auto max-w-[1500px] bg-sage-soft/45 px-6 py-20 sm:px-16 lg:px-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Label>Membership</Label>
            <h2 className="mt-7 font-display text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
              Be part of the
              <span className="block italic">private collection.</span>
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="max-w-sm text-sm leading-relaxed text-foreground/70">
              Receive first access to new fragrances, exclusive releases and
              curated offers.
            </p>

            {done ? (
              <p className="mt-10 border-t border-ink/15 pt-6 font-display text-2xl">
                Welcome. Your invitation is on its way.
              </p>
            ) : (
              <form onSubmit={submit} className="mt-10">
                <div className="flex items-center gap-4 border-b border-ink/30 pb-3">
                  <label htmlFor="vip-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="vip-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-base outline-none placeholder:text-foreground/35"
                  />
                  <button
                    type="submit"
                    aria-label="Join privately"
                    className="shrink-0 transition-transform duration-500 hover:translate-x-1"
                  >
                    <ArrowRight strokeWidth={1} className="h-5 w-5" />
                  </button>
                </div>
                <button type="submit" className="hairline-btn mt-8">
                  <span>Join Privately</span>
                </button>
                <p className="mt-4 text-[11px] text-foreground/50">
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
