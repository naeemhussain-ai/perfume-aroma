import {
  BadgeCheck,
  Gift,
  Headphones,
  Leaf,
  Lock,
  Truck,
} from "lucide-react";
import { Label, Reveal } from "@/components/site/Reveal";

const items = [
  { icon: BadgeCheck, title: "100% Authentic", copy: "Sourced directly from verified houses." },
  { icon: Leaf, title: "Curated Selection", copy: "Every bottle vetted by our team." },
  { icon: Lock, title: "Secure Checkout", copy: "256-bit encrypted payments." },
  { icon: Truck, title: "Fast Delivery", copy: "Tracked, 3–7 business days." },
  { icon: Gift, title: "Premium Packaging", copy: "Presentation boxes made to gift." },
  { icon: Headphones, title: "Customer Support", copy: "Real people, seven days a week." },
];

export function Trust() {
  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <Label>Why Casa de Aroma</Label>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="rule-thin pt-7">
                <item.icon strokeWidth={0.75} className="h-7 w-7 text-sage" />
                <h3 className="mt-6 font-display text-3xl">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
