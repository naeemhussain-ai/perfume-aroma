import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/catalog";

interface CartLine {
  product: Product;
  qty: number;
}

interface StoreValue {
  cart: CartLine[];
  wishlist: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  subtotal: number;
  count: number;
  add: (p: Product) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  toggleWish: (id: string) => void;
  setCartOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
}

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const add = useCallback((p: Product) => {
    setCart((prev) => {
      const found = prev.find((l) => l.product.id === p.id);
      if (found) {
        return prev.map((l) =>
          l.product.id === p.id ? { ...l, qty: l.qty + 1 } : l,
        );
      }
      return [...prev, { product: p, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      qty <= 0
        ? prev.filter((l) => l.product.id !== id)
        : prev.map((l) => (l.product.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setCart((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const toggleWish = useCallback((id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const subtotal = useMemo(
    () => cart.reduce((s, l) => s + l.product.price * l.qty, 0),
    [cart],
  );
  const count = useMemo(() => cart.reduce((s, l) => s + l.qty, 0), [cart]);

  const value: StoreValue = {
    cart,
    wishlist,
    cartOpen,
    searchOpen,
    subtotal,
    count,
    add,
    setQty,
    remove,
    toggleWish,
    setCartOpen,
    setSearchOpen,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}

export const allProducts = products;
