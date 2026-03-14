"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import Image from "next/image"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-gray-800/40 rounded-2xl border border-gray-700 p-5 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
        
        {/* Wadah gambar diberi latar putih agar gambar produk tetap proporsional dan jelas */}
        <div className="bg-white rounded-xl p-4 flex justify-center items-center h-48 mb-4">
          <Image
            width={200}
            height={200}
            src={product.image}
            alt={product.title}
            className="h-full w-auto object-contain drop-shadow-sm"
          />
        </div>

        <div className="flex flex-col flex-grow justify-between">
          <h3 className="text-gray-100 font-medium line-clamp-2 leading-relaxed">
            {product.title}
          </h3>

          <p className="mt-4 text-xl font-bold text-blue-400">
            ${product.price}
          </p>
        </div>
      </div>
    </Link>
  )
}