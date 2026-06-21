"use client";

import Link from "next/link";
import { ShoppingBag, Trash2, ArrowLeft } from "lucide-react";
import { useCart } from "@/store/cart";
import { CartItem } from "@/components/cart/cart-item";
import { CartSummary } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, clearCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {items.length === 0
              ? "Your cart is empty"
              : `${items.reduce((sum, i) => sum + i.quantity, 0)} items in your cart`}
          </p>
        </div>
        {items.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground gap-1">
            <Trash2 size={14} /> Clear
          </Button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="mt-20 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-muted mb-4">
            <ShoppingBag size={32} className="text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Your cart is empty</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Looks like you haven&apos;t added anything yet.
          </p>
          <Link href="/products">
            <Button className="mt-6 gap-2">
              <ArrowLeft size={16} /> Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="divide-y divide-card-border rounded-2xl border border-card-border bg-card p-6">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                  item={item}
                />
              ))}
            </div>
            <div className="mt-4">
              <Link href="/products">
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                  <ArrowLeft size={14} /> Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
