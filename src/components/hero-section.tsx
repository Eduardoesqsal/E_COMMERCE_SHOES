"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-hover dark:from-primary/20 dark:via-primary/10 dark:to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')]" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white/80 mb-6 border border-white/10">
            <Sparkles size={14} className="text-blue-300" />
            New Collection 2026
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
            Step Into
            <span className="block text-white/90">Style & Comfort</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/60 max-w-lg mx-auto">
            Discover the latest white sneaker drops. Premium quality, iconic designs, and unbeatable comfort — all in one place.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                Shop Now <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/products?category=Classic">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
