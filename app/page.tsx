import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-slate-950">
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        {/* Animated background layers — purely decorative */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Dot/line grid */}
          <div className="bg-grid absolute inset-0 opacity-40" />

          {/* Floating glow orbs */}
          <div className="animate-float-slow absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div
            className="animate-float-slow-reverse absolute -right-40 bottom-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[100px]"
            style={{ animationDelay: "4s" }}
          />
          <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div
            aria-label="Next-Gen Shopping Experience"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            <Zap className="h-3 w-3" aria-hidden="true" />
            Next-Gen Shopping Experience
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
            Redefine Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Lifestyle
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg md:mt-8">
            Discover a curated collection of premium essentials designed for
            modern living. Quality, comfort, and style in every detail.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
            <Link
              href="/products"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
              {/* Shimmer sweep */}
              <span className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative flex items-center gap-2">
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/categories"
              className="flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-8 py-3.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-800/80 hover:text-white active:scale-95">
              Explore Categories
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Feature Cards ────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/8">
                {/* Hover glow overlay — decorative */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-500/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1.5 text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Curated Collections ──────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-500">
                Our Range
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Curated Collections
              </h2>
            </div>
            <Link
              href="/categories"
              className="group flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-blue-400">
              View All
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Electronics",
                gradient: "from-blue-950/80 via-slate-900 to-slate-900",
                accent: "border-blue-800/40",
              },
              {
                label: "Fashion",
                gradient: "from-cyan-950/80 via-slate-900 to-slate-900",
                accent: "border-cyan-800/40",
              },
              {
                label: "Lifestyle",
                gradient: "from-indigo-950/80 via-slate-900 to-slate-900",
                accent: "border-indigo-800/40",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border ${item.accent} bg-gradient-to-br ${item.gradient} transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10`}>
                {/* Grid texture — decorative */}
                <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-400/60 transition-colors duration-200 group-hover:text-blue-400">
                      Coming Soon
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white/70 transition-colors duration-200 group-hover:text-white">
                      {item.label}
                    </h3>
                  </div>
                </div>
                {/* Subtle hover glow — decorative */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
