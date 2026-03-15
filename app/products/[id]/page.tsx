"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProduct } from "@/hooks/useProduct";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatUSD } from "@/lib/utils";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const currentId = Number(id);
  const { data } = useProduct(id as string);
  const { data: allProducts } = useProducts();
  const { addToCart } = useCart();

  const totalProducts = allProducts?.length ?? 0;
  const isFirst = currentId <= 1;
  const isLast = totalProducts > 0 && currentId >= totalProducts;

  const otherProducts = allProducts
    ?.filter((p) => p.id !== currentId)
    .slice(0, 4);

  if (!data)
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-400">
        Loading...
      </div>
    );

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-10">
      {/* Prev / Next navigation row */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => router.push(`/products/${currentId - 1}`)}
          disabled={isFirst}
          aria-label="Previous product"
          className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          Product {currentId} / {totalProducts || "…"}
        </span>

        <button
          onClick={() => router.push(`/products/${currentId + 1}`)}
          disabled={isLast}
          aria-label="Next product"
          className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Main detail card */}
      <div className="grid md:grid-cols-2 gap-8 rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm p-8">
        {/* Image panel */}
        <div className="flex items-center justify-center rounded-xl border border-slate-800/60 bg-transparent p-8">
          <Image
            src={data.image}
            alt={data.title}
            width={320}
            height={320}
            className="h-72 w-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Info panel */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
            {data.category}
          </p>

          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {data.title}
          </h1>

          <p className="mt-4 leading-relaxed text-slate-400">
            {data.description}
          </p>

          <p className="mt-6 text-3xl font-bold text-blue-400">
            {formatUSD(data.price)}
          </p>

          {/* Rating */}
          <div
            className="mt-3 flex items-center gap-2"
            aria-label={`Rating: ${data.rating.rate} out of 5 stars`}
          >
            <span className="text-sm text-yellow-400" aria-hidden="true">★ {data.rating.rate}</span>
            <span className="text-xs text-slate-500">({data.rating.count} reviews)</span>
          </div>

          <div className="mt-8">
            <Button onClick={() => addToCart(data)}>Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* Lihat Produk Lain */}
      {otherProducts && otherProducts.length > 0 && (
        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-500">
                Explore More
              </p>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Lihat Produk Lain
              </h2>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-blue-400"
            >
              Lihat Semua
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {otherProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/15"
              >
                {/* Hover glow */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />
                <div className="relative aspect-[4/3] overflow-hidden bg-transparent p-4">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative p-4">
                  <p className="line-clamp-2 text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {formatUSD(p.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
