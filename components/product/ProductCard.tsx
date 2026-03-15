"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { formatUSD } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/15">
        {/* Hover glow overlay */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />

        {/* Product Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-transparent p-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-sm font-medium leading-relaxed text-slate-200 transition-colors group-hover:text-blue-400">
            {product.title}
          </h3>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-4">
            <span className="text-base font-bold text-white">
              {formatUSD(product.price)}
            </span>
            <span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
