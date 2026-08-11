import { useState } from "react";
import { Plus } from "lucide-react";
import { Label, Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    n: "01",
    q: "Authenticity",
    a: "Every fragrance is sourced from verified houses and distributors across the Middle East, Europe and Asia. We never buy grey-market stock, and each batch is inspected before it is listed.",
  },
  {
    n: "02",
    q: "Delivery",
    a: "Tracked delivery in 3–7 business days worldwide. Complimentary shipping on orders over $50, with signature-required dispatch on orders above $200.",
  },
  {
    n: "03",
    q: "Payment",
    a: "All major cards, Apple Pay and Google Pay, processed over 256-bit encryption. We never store your card details.",
  },
  {
    n: "04",
    q: "Returns & Exchange",
    a: "Unopened bottles can be returned within 30 days for a full refund. Opened bottles may be exchanged if the fragrance is not what you expected — simply write to us.",
  },
  {
    n: "05",
    q: "Choosing a Fragrance",
    a: "Start with a Discovery set of four travel parfums, or write to our team with the scents you already wear. We will compose a short list for you within a day.",
  },
  {
    n: "06",
    q: "Gift Packaging",
    a: "Every order arrives in a presentation box with tissue and a hand-finished ribbon. Add a handwritten note at checkout at no cost.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Label>Questions</Label>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] sm:text-6xl">
            Everything
            <span className="block italic text-sage">worth knowing</span>
          </h2>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((f, i) => {
            const isOpen = open === f.n;
            return (
              <Reveal key={f.n} delay={i * 60}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : f.n)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-7 text-left"
                  >
                    <span className="label-xs w-8 text-muted-foreground">{f.n}</span>
                    <span className="flex-1 font-display text-3xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 sm:text-4xl">
                      {f.q}
                    </span>
                    <Plus
                      strokeWidth={1}
                      className={cn(
                        "h-5 w-5 shrink-0 transition-transform duration-500",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pt-1 pb-8 pl-14 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
