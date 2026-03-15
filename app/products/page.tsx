"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

function ProductsContent() {
  const { data, isLoading } = useProducts()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search")?.trim() ?? ""

  const filteredProducts = searchQuery
    ? data?.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data

  if (isLoading)
    return (
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    )

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-10">
      {searchQuery && (
        <p className="mb-6 text-sm text-slate-400">
          Showing results for{" "}
          <span className="font-semibold text-blue-400">"{searchQuery}"</span>
          {filteredProducts !== undefined && (
            <> — {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found</>
          )}
        </p>
      )}
      {filteredProducts && filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        !isLoading && searchQuery && (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <span className="text-5xl mb-4">🔍</span>
            <p className="text-lg font-medium">No products found for "{searchQuery}".</p>
          </div>
        )
      )}
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}