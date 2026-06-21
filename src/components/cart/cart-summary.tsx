"use client";

import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";

export function CartSummary() {
  const { items, getSubtotal } = useCart();
  const router = useRouter();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl border border-card-border bg-card p-6 sticky top-24">
      <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold text-foreground">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold text-foreground">
            {shipping === 0 ? "Free" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span className="font-semibold text-foreground">{formatPrice(tax)}</span>
        </div>
        <div className="border-t border-card-border pt-3">
          <div className="flex justify-between">
            <span className="text-base font-bold text-foreground">Total</span>
            <span className="text-base font-bold text-foreground">{formatPrice(total)}</span>
          </div>
        </div>
      </div>
      <Button
        className="mt-6 w-full gap-2"
        size="lg"
        onClick={() => router.push("/checkout")}
      >
        <ShoppingBag size={18} /> Checkout
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Free shipping on orders over $100
      </p>
    </div>
  );
}
