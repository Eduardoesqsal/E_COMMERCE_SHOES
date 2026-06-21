import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {product.originalPrice && (
          <div className="absolute left-3 top-3">
            <Badge variant="warning">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</Badge>
          </div>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-zinc-700 opacity-0 transition-all duration-300 hover:bg-white hover:text-red-500 group-hover:opacity-100"
        >
          <Heart size={15} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-foreground line-clamp-1 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            <Star size={12} className="fill-warning text-warning" />
            <span className="text-xs font-medium text-foreground">{product.rating.toFixed(1)}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="text-base font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
