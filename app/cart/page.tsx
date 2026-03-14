// app/cart/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">Keranjang belanja kosong</h2>
        <Link href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Kembali Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Keranjang Belanja</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border rounded-xl shadow-sm">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-cover rounded-md" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                <p className="text-blue-600 font-medium mt-1">Rp {item.price.toLocaleString("id-ID")}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100 rounded">
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100 rounded">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Delete Button */}
              <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition ml-auto sm:ml-0">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="w-full lg:w-80 h-fit bg-white p-6 border rounded-xl shadow-sm">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Ringkasan Pesanan</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>Rp {cartTotal.toLocaleString("id-ID")}</span>
          </div>
          <div className="border-t my-4"></div>
          <div className="flex justify-between mb-6 font-bold text-lg text-gray-800">
            <span>Total</span>
            <span>Rp {cartTotal.toLocaleString("id-ID")}</span>
          </div>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}