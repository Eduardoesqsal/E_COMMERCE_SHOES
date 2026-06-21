"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Check,
  ChevronRight,
  Heart,
} from "lucide-react";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductCard } from "@/components/product/product-card";
import { useCart } from "@/store/cart";
import type { Product } from "@/lib/types";
import { products } from "@/lib/constants";

interface ProductContentProps {
  product: Product;
}

export function ProductContent({ product }: ProductContentProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 5);

  const handleAdd = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/products" className="hover:text-foreground transition-colors">
          Products
        </Link>
        <ChevronRight size={14} />
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-foreground transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight size={14} />
        <span className="text-foreground font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {product.category}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl leading-tight">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={cn(
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              {product.rating}
            </span>
            <span className="text-sm text-muted-foreground">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <Badge variant="warning">
                  -
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  %
                </Badge>
              </>
            )}
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="flex items-center gap-2">
            <Badge variant={product.inStock ? "success" : "danger"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          {product.colors && (
            <div>
              <p className="mb-2 text-sm font-medium text-foreground">Color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "h-8 w-8 rounded-full border-2 transition-all duration-200",
                      selectedColor === color
                        ? "border-primary scale-110 ring-2 ring-primary/20"
                        : "border-card-border hover:border-muted-foreground"
                    )}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div>
              <p className="mb-2 text-sm font-medium text-foreground">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[3rem]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 rounded-xl border border-card-border p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Minus size={16} />
              </button>
              <span className="flex h-9 w-10 items-center justify-center text-sm font-semibold text-foreground">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              size="lg"
              className="flex-1 gap-2"
              onClick={handleAdd}
              disabled={!product.inStock}
            >
              {added ? (
                <>
                  <Check size={18} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={18} /> Add to Cart
                </>
              )}
            </Button>
            <Button variant="outline" size="lg" className="px-3">
              <Heart size={18} />
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Related Products</h2>
            <Link href="/products">
              <Button variant="ghost" size="sm">
                View All <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
