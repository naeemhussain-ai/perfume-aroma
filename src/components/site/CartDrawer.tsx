import { Minus, Plus, X } from "lucide-react";
import { useStore } from "@/components/store/store";
import { formatPrice } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, setQty, remove, subtotal } = useStore();
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 12;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-500",
        cartOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!cartOpen}
    >
      <button
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
        className="absolute inset-0 bg-ink/25 backdrop-blur-[2px]"
      />
      <aside
        className={cn(
          "absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-ivory transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          cartOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-7 py-6">
          <span className="label-xs">Your Selection ({cart.length})</span>
          <button aria-label="Close cart" onClick={() => setCartOpen(false)}>
            <X strokeWidth={1} className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-3xl">Nothing chosen yet.</p>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Your fragrance wardrobe begins with a single bottle.
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="hairline-btn mt-8"
              >
                <span>Browse Fragrances</span>
              </button>
            </div>
          ) : (
            <ul>
              {cart.map((line) => (
                <li
                  key={line.product.id}
                  className="flex gap-5 border-b border-border py-6"
                >
                  <img
                    src={line.product.image}
                    alt={line.product.name}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    className="h-28 w-24 bg-stone-pale object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <span className="label-xs text-muted-foreground">
                      {line.product.brand}
                    </span>
                    <h3 className="mt-1 font-display text-xl leading-tight">
                      {line.product.name}
                    </h3>
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {line.product.size} · {line.product.family}
                    </span>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-border">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(line.product.id, line.qty - 1)}
                          className="px-2.5 py-1.5 transition-colors hover:bg-stone-pale"
                        >
                          <Minus strokeWidth={1} className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs">
                          {line.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(line.product.id, line.qty + 1)}
                          className="px-2.5 py-1.5 transition-colors hover:bg-stone-pale"
                        >
                          <Plus strokeWidth={1} className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-display text-lg">
                        {formatPrice(line.product.price * line.qty)}
                      </span>
                    </div>
                  </div>
                  <button
                    aria-label={`Remove ${line.product.name}`}
                    onClick={() => remove(line.product.id)}
                    className="self-start text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X strokeWidth={1} className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-border px-7 py-6">
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-border pt-3">
                <dt className="label-xs">Total</dt>
                <dd className="font-display text-2xl">
                  {formatPrice(subtotal + shipping)}
                </dd>
              </div>
            </dl>
            <button className="hairline-btn-solid mt-6 w-full justify-center">
              <span>Proceed to Checkout</span>
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Secure encrypted payment · Delivery in 3–7 business days
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
