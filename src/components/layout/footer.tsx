import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold">
                S
              </div>
              <span className="text-sm font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium sneakers for the modern lifestyle. Quality, style, and comfort — redefined.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Shop
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?category=sports" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Support
            </h3>
            <ul className="mt-3 space-y-2">
              <li><span className="text-sm text-muted-foreground cursor-default">Contact Us</span></li>
              <li><span className="text-sm text-muted-foreground cursor-default">FAQ</span></li>
              <li><span className="text-sm text-muted-foreground cursor-default">Shipping & Returns</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <ul className="mt-3 space-y-2">
              <li><span className="text-sm text-muted-foreground cursor-default">Privacy Policy</span></li>
              <li><span className="text-sm text-muted-foreground cursor-default">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-card-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Portfolio project.
          </p>
        </div>
      </div>
    </footer>
  );
}
