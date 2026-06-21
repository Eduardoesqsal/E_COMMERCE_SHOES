"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, getSubtotal, clearCart } = useCart();
  const router = useRouter();
  const subtotal = getSubtotal();
  const shipping = subtotal >= 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.zip) newErrors.zip = "Required";
    if (!form.cardName) newErrors.cardName = "Required";
    if (!form.cardNumber || form.cardNumber.replace(/\s/g, "").length < 16)
      newErrors.cardNumber = "Valid card number required";
    if (!form.expDate) newErrors.expDate = "Required";
    if (!form.cvv || form.cvv.length < 3) newErrors.cvv = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    clearCart();
    router.push("/checkout/success");
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-foreground">
          Your cart is empty
        </h1>
        <p className="mt-2 text-muted-foreground">
          Add some items before checking out.
        </p>
        <Link href="/products">
          <Button className="mt-6">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-foreground">
        Checkout
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Shipping Information
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input
                  id="firstName"
                  label="First Name"
                  placeholder="John"
                  value={form.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
                <Input
                  id="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <div className="sm:col-span-2">
                  <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    id="address"
                    label="Address"
                    placeholder="123 Main St"
                    value={form.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </div>
                <Input
                  id="city"
                  label="City"
                  placeholder="New York"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                />
                <Input
                  id="zip"
                  label="ZIP Code"
                  placeholder="10001"
                  value={form.zip}
                  onChange={handleChange}
                  error={errors.zip}
                />
              </div>
            </div>

            <div className="rounded-xl border border-card-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Payment Method
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Input
                    id="cardName"
                    label="Name on Card"
                    placeholder="John Doe"
                    value={form.cardName}
                    onChange={handleChange}
                    error={errors.cardName}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    id="cardNumber"
                    label="Card Number"
                    placeholder="4242 4242 4242 4242"
                    value={form.cardNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                      const formatted = val.replace(/(.{4})/g, "$1 ").trim();
                      setForm({ ...form, cardNumber: formatted });
                      setErrors({ ...errors, cardNumber: "" });
                    }}
                    error={errors.cardNumber}
                  />
                </div>
                <Input
                  id="expDate"
                  label="Expiry Date"
                  placeholder="MM/YY"
                  value={form.expDate}
                  onChange={handleChange}
                  error={errors.expDate}
                />
                <Input
                  id="cvv"
                  label="CVV"
                  placeholder="123"
                  type="password"
                  maxLength={4}
                  value={form.cvv}
                  onChange={handleChange}
                  error={errors.cvv}
                />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                This is a demo. No real payment will be processed.
              </p>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-card-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Order Summary
              </h2>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium text-foreground whitespace-nowrap">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 border-t border-card-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-medium text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Shipping
                  </span>
                  <span className="font-medium text-foreground">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Tax (8%)
                  </span>
                  <span className="font-medium text-foreground">
                    {formatPrice(tax)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-card-border pt-2">
                  <span className="font-semibold text-foreground">
                    Total
                  </span>
                  <span className="font-semibold text-foreground">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full">
                Place Order - {formatPrice(total)}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
