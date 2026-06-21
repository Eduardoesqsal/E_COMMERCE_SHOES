import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default function CheckoutSuccessPage() {
  const orderId = "#ORD-DEMO2024";

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
        <Check size={32} className="text-success" />
      </div>
      <h1 className="mt-6 text-3xl font-bold text-foreground">
        Order Confirmed!
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Thank you for your purchase. You will receive a confirmation email
        shortly with your order details.
      </p>
      <div className="mt-4 rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Order ID
        </p>
        <p className="font-mono text-sm font-medium text-foreground">
          {orderId}
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href="/products">
          <Button variant="outline" size="lg">
            Continue Shopping
          </Button>
        </Link>
        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
