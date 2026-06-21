"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/store/cart";
import type { CartItem as CartItemType } from "@/lib/types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-card-border py-4 last:border-0">
      <Link
        href={`/products/${item.product.id}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-muted"
        style={{ position: "relative" }}
      >
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between gap-2">
          <div>
            <Link
              href={`/products/${item.product.id}`}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {item.product.name}
            </Link>
            <div className="mt-0.5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {item.selectedColor && (
                <span className="flex items-center gap-1">
                  Color:
                  <span
                    className="inline-block h-3 w-3 rounded-full border border-card-border"
                    style={{ backgroundColor: item.selectedColor }}
                  />
                </span>
              )}
              {item.selectedSize && <span>Size: {item.selectedSize}</span>}
            </div>
          </div>
          <p className="text-sm font-bold text-foreground whitespace-nowrap">
            {formatPrice(item.product.price * item.quantity)}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 rounded-xl border border-card-border p-1">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Minus size={14} />
            </button>
            <span className="flex h-7 w-8 items-center justify-center text-xs font-semibold text-foreground">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
