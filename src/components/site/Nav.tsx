import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/components/store/store";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#top" },
  { label: "Collections", href: "#collections" },
  { label: "Shop", href: "#shop" },
  { label: "Discover", href: "#discover" },
  { label: "Story", href: "#story" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, wishlist, setCartOpen, setSearchOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-sage shadow-[0_8px_32px_-8px_rgba(5,20,10,0.45)]"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-1 sm:px-10">

          {/* Logo */}
          <a href="#top" className="shrink-0">
            <img
              src={logo}
              alt="Casa de Aroma"
              className="h-28 w-auto object-contain sm:h-32"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="label-xs link-underline text-ivory/70 transition-colors hover:text-ivory"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              aria-label="Search fragrances"
              onClick={() => setSearchOpen(true)}
              className="p-2.5 text-ivory/60 transition-colors hover:text-champagne"
            >
              <Search strokeWidth={1.5} className="h-[18px] w-[18px]" />
            </button>
            <a
              href="#shop"
              aria-label="Wishlist"
              className="relative hidden p-2.5 text-ivory/60 transition-colors hover:text-champagne sm:block"
            >
              <Heart strokeWidth={1.5} className="h-[18px] w-[18px]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-champagne" />
              )}
            </a>
            <button
              aria-label="Open cart"
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 text-ivory/60 transition-colors hover:text-champagne"
            >
              <ShoppingBag strokeWidth={1.5} className="h-[18px] w-[18px]" />
              {count > 0 && (
                <span className="label-xs absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[9px] tracking-normal text-ink">
                  {count}
                </span>
              )}
            </button>
            <a
              href="#shop"
              className="ml-2 hidden items-center gap-2 rounded-sm bg-champagne px-5 py-2.5 text-[0.68rem] font-medium tracking-[0.26em] text-ink uppercase transition-all duration-300 hover:brightness-90 md:inline-flex"
            >
              <span>Shop Now</span>
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2.5 text-ivory/70 transition-colors hover:text-ivory md:hidden"
            >
              <Menu strokeWidth={1.5} className="h-[18px] w-[18px]" />
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
          className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-x-0 top-0 origin-top bg-sage px-7 pt-6 pb-12 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="flex items-center justify-between">
            <img src={logo} alt="Casa de Aroma" className="h-16 w-auto object-contain" />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-ivory/70 hover:text-ivory"
            >
              <X strokeWidth={1.5} className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-8 space-y-1">
            {links.map((l, i) => (
              <li key={l.label} className="border-b border-ivory/10 py-4 last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between font-display text-4xl text-ivory transition-colors hover:text-champagne"
                >
                  {l.label}
                  <span className="label-xs text-ivory/40">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-center rounded-sm bg-champagne py-4 text-[0.68rem] font-medium tracking-[0.3em] text-ink uppercase transition-all hover:brightness-90"
          >
            <span>Shop Now</span>
          </a>
        </div>
      </div>
    </>
  );
}
