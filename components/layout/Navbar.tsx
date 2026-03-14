// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { AlproLogo } from "@/components/ui/AlproLogo";
import { ShoppingBag, ShoppingCart, User } from "lucide-react";

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center transition-transform active:scale-95"
          aria-label="AlproShop Home">
          <AlproLogo />
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden items-center gap-6 md:flex">
            {["Products", "Categories"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400">
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <Link
            href="/cart"
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-600"
            aria-label="View Cart">
            <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-slate-950">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
