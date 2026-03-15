"use client"

import { useState, useMemo } from "react"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

function capitalize(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("")
  const { data: products, isLoading } = useProducts()

  const categories = useMemo(() => {
    if (!products) return []
    return [...new Set(products.map((p) => p.category).filter(Boolean))]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (!products) return []
    if (!activeCategory) return products
    return products.filter((p) => p.category === activeCategory)
  }, [products, activeCategory])

  return (
    <div className="min-h-screen bg-[#060d1f] px-4 md:px-8 lg:px-12 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Browse by Category
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Filter products by category to find exactly what you need.
        </p>
      </div>

      {/* Category filter buttons */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {/* "All" button */}
        <button
          onClick={() => setActiveCategory("")}
          className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
            activeCategory === ""
              ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeCategory === cat
                ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
            }`}
          >
            {capitalize(cat)}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-slate-400">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-lg font-medium">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}