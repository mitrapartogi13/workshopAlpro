import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        Welcome to <span className="text-blue-500">AlproShop</span>
      </h1>
      
      <p className="text-lg text-gray-400 max-w-xl">
        Temukan berbagai produk kebutuhan Anda dengan antarmuka yang santai, aman, dan nyaman.
      </p>

      <Link 
        href="/products" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
      >
        Browse Products
      </Link>
    </div>
  )
}