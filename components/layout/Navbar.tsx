// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { AlproLogo } from "@/components/ui/AlproLogo";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-500/15 bg-slate-950/80 backdrop-blur-xl">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center transition-transform active:scale-95"
          aria-label="AlproShop Home">
          <AlproLogo />
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden items-center gap-8 md:flex">
            {["Products", "Categories"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="group relative text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-blue-400">
                {item}
                {/* Expanding underline with glow */}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-sm transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/25 bg-blue-500/8 text-slate-400 transition-all duration-200 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
            aria-label="View Cart">
            <ShoppingCart className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-md shadow-blue-500/40 ring-2 ring-slate-950">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
