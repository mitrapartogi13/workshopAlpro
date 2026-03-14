// components/layout/Navbar.tsx
"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { use } from "react"

export function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="sticky top-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide text-blue-500 hover:text-blue-400 transition-colors">
          AlproShop
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>

          <Link
            href="/cart"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors border border-gray-700"
          >
            <span>Cart</span>
            {useCart().cartCount > 0 && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {useCart().cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}