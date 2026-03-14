import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-24 sm:px-12 sm:py-32 md:px-16 lg:py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-slate-900/90" />
          <div className="bg-grid-white/[0.05] absolute inset-0 bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Redefine Your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Lifestyle
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl md:mt-8 md:text-2xl font-light leading-relaxed">
            Discover a curated collection of premium essentials designed for
            modern living. Quality, comfort, and style in every detail.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/products"
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95">
              Shop Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/categories"
              className="group flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 active:scale-95">
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          {
            icon: Truck,
            title: "Free Shipping",
            desc: "On all orders over $150",
          },
          {
            icon: ShieldCheck,
            title: "Secure Payment",
            desc: "100% secure checkout",
          },
          {
            icon: RotateCcw,
            title: "Easy Returns",
            desc: "30-day return policy",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-800">
            <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Categories Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl font-medium text-slate-900 dark:text-white">
            Curated Collections
          </h2>
          <Link
            href="/categories"
            className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1 group">
            View All{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-sm font-medium">Coming Soon</span>
              </div>
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
