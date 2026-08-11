import { Heart, Plus, Star } from "lucide-react";
import { useStore } from "@/components/store/store";
import { formatPrice, type Product } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  tall = false,
}: {
  product: Product;
  tall?: boolean;
}) {
  const { add, toggleWish, wishlist } = useStore();
  const wished = wishlist.includes(product.id);

  return (
    <article className="group relative flex flex-col">
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-stone-pale",
          tall ? "aspect-[3/4]" : "aspect-square",
        )}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1000}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-hover:opacity-0"
        />
        <img
          src={product.altImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1000}
          height={1000}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100"
        />

        {product.compareAt && (
          <span className="label-xs absolute top-4 left-4 bg-ivory/85 px-3 py-1.5 backdrop-blur-sm">
            −{Math.round((1 - product.price / product.compareAt) * 100)}%
          </span>
        )}

        <button
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWish(product.id)}
          className="absolute top-4 right-4 grid h-9 w-9 place-items-center bg-ivory/85 backdrop-blur-sm transition-colors hover:bg-ivory"
        >
          <Heart
            strokeWidth={1}
            className={cn(
              "h-4 w-4 transition-colors",
              wished ? "fill-sage text-sage" : "text-foreground",
            )}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <button
            onClick={() => add(product)}
            className="flex w-full items-center justify-center gap-2 bg-ivory/95 py-3.5 backdrop-blur-sm transition-colors hover:bg-ink hover:text-ivory"
          >
            <Plus strokeWidth={1} className="h-3.5 w-3.5" />
            <span className="label-xs">Quick Add</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label-xs text-muted-foreground">{product.brand}</p>
            <h3 className="mt-1.5 font-display text-2xl leading-tight">
              {product.name}
            </h3>
          </div>
          <span className="flex shrink-0 items-center gap-1 pt-1 text-xs text-muted-foreground">
            <Star strokeWidth={1} className="h-3 w-3 fill-champagne text-champagne" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground italic">
          {product.family} · {product.note}
        </p>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-xl">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
          <span className="ml-auto text-[11px] text-muted-foreground">
            {product.size}
          </span>
        </div>
      </div>
    </article>
  );
}
