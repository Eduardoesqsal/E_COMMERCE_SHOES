"use client";

import { products, categories } from "@/lib/constants";
import { ProductCard } from "@/components/product/product-card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 10);
  const topCategories = categories.slice(0, 4);

  return (
    <div>
      <HeroSection />

      <section className="border-b border-card-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: ShieldCheck, title: "Secure Checkout", desc: "100% secure payment" },
              { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 rounded-xl bg-card border border-card-border p-4 hover:shadow-md transition-shadow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Featured Drops</h2>
            <p className="text-sm text-muted-foreground mt-1">Most popular white sneakers this week</p>
          </div>
          <Link href="/products">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer">
              View All <ArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Shop by Category</h2>
              <p className="text-sm text-muted-foreground mt-1">Find your perfect white pair</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.name}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{ position: "relative" }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-white/60">Shop now →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-hover p-8 sm:p-12 dark:from-primary/20 dark:to-primary/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="relative mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
              Join the Sneaker Community
            </h2>
            <p className="mt-4 text-white/70">
              Get early access to new drops, exclusive deals, and members-only pricing.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/products">
                <span className="inline-flex h-12 items-center justify-center rounded-xl bg-white text-primary hover:bg-white/90 px-6 text-sm font-medium gap-2 shadow-xl transition-all">
                  Explore Collection <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
