import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useStore } from "@/components/store/store";
import { formatPrice, products } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, add } = useStore();
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products.slice(0, 4);
    return products.filter((p) =>
      [p.name, p.brand, p.family, p.note].join(" ").toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] transition-opacity duration-500",
        searchOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!searchOpen}
    >
      <button
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
        className="absolute inset-0 bg-ink/25 backdrop-blur-sm"
      />
      <div
        className={cn(
          "absolute inset-x-0 top-0 bg-ivory px-6 pt-10 pb-12 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-12",
          searchOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <span className="label-xs text-muted-foreground">Search</span>
            <button aria-label="Close search" onClick={() => setSearchOpen(false)}>
              <X strokeWidth={1} className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 border-b border-ink/30 pb-4">
            <Search strokeWidth={1} className="h-5 w-5 text-muted-foreground" />
            <input
              autoComplete="off"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Oud, floral, Armani…"
              className="w-full bg-transparent font-display text-3xl outline-none placeholder:text-foreground/25 sm:text-5xl"
            />
          </div>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {results.map((p) => (
              <li
                key={p.id}
                className="flex items-center gap-5 border-b border-border py-4"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-16 w-16 bg-stone-pale object-cover"
                />
                <div className="flex-1">
                  <p className="label-xs text-muted-foreground">{p.brand}</p>
                  <p className="font-display text-xl">{p.name}</p>
                </div>
                <span className="text-sm">{formatPrice(p.price)}</span>
                <button
                  onClick={() => {
                    add(p);
                    setSearchOpen(false);
                  }}
                  className="label-xs text-sage transition-opacity hover:opacity-60"
                >
                  Add
                </button>
              </li>
            ))}
            {results.length === 0 && (
              <li className="py-6 text-sm text-muted-foreground">
                No fragrance matches “{q}”.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
