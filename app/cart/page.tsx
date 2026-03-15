"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, CheckCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatUSD } from "@/lib/utils";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (checkoutSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        {/* Decorative glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 rounded-2xl border border-blue-500/20 bg-white/5 p-10 text-center backdrop-blur-md shadow-2xl shadow-blue-500/10 max-w-md w-full">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 shadow-lg shadow-blue-500/20">
            <CheckCircle className="h-10 w-10 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Checkout Successful!</h2>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">
              Your order has been placed and is being processed. Thank you for shopping with us!
            </p>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <Link
            href="/products"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
            <span className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <ShoppingBag className="h-14 w-14 text-blue-400/50" />
          <h2 className="text-2xl font-semibold text-slate-300">Your cart is empty</h2>
          <p className="text-slate-500 text-sm">Looks like you haven&apos;t added anything yet.</p>
          <Link
            href="/products"
            className="mt-2 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-400 backdrop-blur-sm transition-all hover:bg-blue-500/20 hover:border-blue-400/50">
            <ArrowLeft className="w-4 h-4" /> Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative glow orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10">
        {/* Page header */}
        <div className="mb-8 flex items-center gap-4">
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <div className="h-4 w-px bg-slate-700" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Shopping Cart</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-800/80 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/8">
                {/* Product image */}
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-700/50">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Title + price */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-200 line-clamp-1">{item.title}</h3>
                  <p className="mt-0.5 text-blue-400 font-medium text-sm">{formatUSD(item.price)}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1.5 backdrop-blur-sm">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Item total */}
                <p className="w-20 text-right text-sm font-semibold text-slate-300">
                  {formatUSD(item.price * item.quantity)}
                </p>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-red-500/15 hover:text-red-400 transition ml-auto sm:ml-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 h-fit rounded-2xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-md shadow-xl shadow-blue-500/5">
            {/* Top accent */}
            <div className="mb-4 h-px bg-gradient-to-r from-blue-500/60 via-cyan-400/30 to-transparent" />

            <h2 className="mb-5 text-base font-bold text-white tracking-tight">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal ({cart.reduce((n, i) => n + i.quantity, 0)} items)</span>
                <span className="text-slate-200">{formatUSD(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="text-green-400 font-medium">Free</span>
              </div>
            </div>

            <div className="my-5 h-px bg-slate-800" />

            <div className="flex justify-between text-base font-bold text-white mb-6">
              <span>Total</span>
              <span className="text-blue-400">{formatUSD(cartTotal)}</span>
            </div>

            <button
              onClick={() => setCheckoutSuccess(true)}
              className="group relative w-full overflow-hidden rounded-full bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
              <span className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              Checkout
            </button>

            <p className="mt-3 text-center text-xs text-slate-600">
              Secure & encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}