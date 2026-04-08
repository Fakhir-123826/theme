import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";

const hotSellers = [
  {
    id: 1,
    title: "Modern Admin Dashboard",
    price: 79,
    image: "https://picsum.photos/id/1015/400/300",
    category: "Admin Template",
  },
  {
    id: 2,
    title: "E-Commerce Pro Store",
    price: 89,
    image: "https://picsum.photos/id/106/400/300",
    category: "Shop Template",
  },
  {
    id: 3,
    title: "SaaS Landing Kit",
    price: 59,
    image: "https://picsum.photos/id/201/400/300",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Fitness & Yoga Theme",
    price: 49,
    image: "https://picsum.photos/id/237/400/300",
    category: "Lifestyle",
  },
];

const ThemesStorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">L</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">LUMA</h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-xl mx-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search themes, templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 text-base"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-black transition">Sign In</button>
            <button className="text-gray-700 hover:text-black transition">Create Account</button>
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-2xl text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </div>
          </div>
        </div>

        {/* Main Menu */}
        <nav className="border-t bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600 transition">New Arrivals</a>
            <a href="#" className="hover:text-blue-600 transition">Admin Themes</a>
            <a href="#" className="hover:text-blue-600 transition">E-Commerce</a>
            <a href="#" className="hover:text-blue-600 transition">Marketing</a>
            <a href="#" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#" className="hover:text-blue-600 transition text-red-600 font-semibold">Sale</a>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[520px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-lg">
              <h2 className="text-white text-5xl font-bold leading-tight">
                New Premium Themes Collection
              </h2>
              <p className="text-white/90 mt-4 text-lg">
                Beautiful, fast and modern themes for your next project
              </p>
              <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                Browse All Themes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Banners */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 20% Off */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 flex flex-col justify-between h-80">
          <div>
            <h3 className="text-4xl font-bold">20% OFF</h3>
            <p className="mt-2 text-lg">On all Admin Templates this week</p>
          </div>
          <button className="mt-auto bg-white text-orange-600 px-6 py-3 rounded-2xl font-medium w-fit">
            Shop Now →
          </button>
        </div>

        {/* Mix & Match */}
        <div className="bg-yellow-400 rounded-3xl p-8 flex flex-col justify-between h-80">
          <div>
            <h3 className="text-3xl font-bold">Mix & Match</h3>
            <p className="mt-3">Buy 3 themes, get 1 free</p>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-green-400 rounded-xl" />
            <div className="w-12 h-12 bg-purple-400 rounded-xl" />
            <div className="w-12 h-12 bg-orange-400 rounded-xl" />
            <div className="w-12 h-12 bg-blue-500 rounded-xl" />
          </div>
        </div>

        {/* Performance */}
        <div className="bg-sky-100 rounded-3xl p-8 flex flex-col justify-between h-80">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">Science meets Performance</h3>
            <p className="mt-3 text-gray-700">Lightning fast & SEO optimized themes</p>
          </div>
          <button className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium w-fit">
            Explore Performance →
          </button>
        </div>
      </div>

      {/* Hot Sellers Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Hot Sellers</h2>
        <p className="text-gray-500 text-center mb-10">Here's what's trending right now</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotSellers.map((item) => (
            <div key={item.id} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="font-semibold text-lg mt-1 line-clamp-2">{item.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${item.price}</span>
                  <div className="flex gap-2">
                    <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition">
                      <FaHeart className="text-gray-600" />
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 Your Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ThemesStorePage;