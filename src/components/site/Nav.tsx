import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useScrolled } from "@/hooks/use-reveal";
import { useStore } from "@/components/store/store";
import { cn } from "@/lib/utils";

const links = [
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "Story", href: "#story" },
  { label: "Discover", href: "#discover" },
];

export function Nav() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  const { count, wishlist, setCartOpen, setSearchOpen } = useStore();

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "px-3 pt-3 sm:px-6 sm:pt-5" : "px-0 pt-0",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex items-center justify-between backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled
              ? "max-w-5xl rounded-full border border-border/70 bg-ivory/80 px-5 py-3 shadow-[0_18px_50px_-30px_rgba(32,34,31,0.5)] sm:px-7"
              : "max-w-none border-b border-transparent bg-ivory/55 px-5 py-6 sm:px-10",
          )}
        >
          <a
            href="#top"
            className="font-display text-lg leading-none tracking-[0.22em] uppercase"
          >
            Casa
            <span className="text-sage"> de </span>
            Aroma
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="label-xs link-underline text-foreground/75 transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              aria-label="Search fragrances"
              onClick={() => setSearchOpen(true)}
              className="p-2 text-foreground/70 transition-colors hover:text-sage"
            >
              <Search strokeWidth={1} className="h-[18px] w-[18px]" />
            </button>
            <a
              href="#shop"
              aria-label="Wishlist"
              className="relative hidden p-2 text-foreground/70 transition-colors hover:text-sage sm:block"
            >
              <Heart strokeWidth={1} className="h-[18px] w-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-sage" />
              )}
            </a>
            <button
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-foreground/70 transition-colors hover:text-sage"
            >
              <ShoppingBag strokeWidth={1} className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="label-xs absolute -top-0.5 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[9px] tracking-normal text-ivory">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 text-foreground/70 md:hidden"
            >
              <Menu strokeWidth={1} className="h-[18px] w-[18px]" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-opacity duration-500 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          aria-label="Close menu"
          className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top bg-ivory px-7 pt-8 pb-14 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-[0.22em] uppercase">
              Menu
            </span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X strokeWidth={1} className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-10 space-y-1">
            {links.map((l, i) => (
              <li key={l.label} className="rule-thin py-4">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between font-display text-4xl"
                >
                  {l.label}
                  <span className="label-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="hairline-btn-solid mt-10 w-full justify-center"
          >
            <span>Explore Fragrances</span>
          </a>
        </div>
      </div>
    </>
  );
}
