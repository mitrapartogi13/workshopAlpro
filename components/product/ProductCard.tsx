"use client";

import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900">
        {/* Product Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-white p-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-sm font-medium leading-relaxed text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
            {product.title}
          </h3>

          <div className="mt-auto flex items-end justify-between pt-4">
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-400">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
