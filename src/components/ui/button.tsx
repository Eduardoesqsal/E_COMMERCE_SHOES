"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "info";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md",
          variant === "secondary" &&
            "bg-muted text-foreground hover:bg-card-border",
          variant === "outline" &&
            "border border-card-border bg-transparent text-foreground hover:bg-muted",
          variant === "ghost" &&
            "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
          variant === "danger" &&
            "bg-destructive text-white hover:bg-red-700",
          variant === "info" &&
            "bg-info text-white hover:bg-blue-600 shadow-sm hover:shadow-md",
          size === "sm" && "h-8 px-3 text-xs gap-1.5",
          size === "md" && "h-10 px-4 text-sm gap-2",
          size === "lg" && "h-12 px-6 text-base gap-2.5",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
