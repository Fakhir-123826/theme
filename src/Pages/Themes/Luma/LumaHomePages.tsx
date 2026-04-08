import { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";   // ← Added this

const hotSellers = [
  {
    id: 1,
    title: "Fusion Admin Dashboard",
    price: 89,
    image: "https://picsum.photos/id/1015/400/280",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "E-Commerce Pro Store",
    price: 129,
    image: "https://picsum.photos/id/106/400/280",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 3,
    title: "Modern SaaS Landing",
    price: 69,
    image: "https://picsum.photos/id/201/400/280",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    title: "Fitness Yoga Theme",
    price: 59,
    image: "https://picsum.photos/id/237/400/280",
    rating: 5.0,
    reviews: 67,
  },
];

const LumaHomePages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();   // ← For navigation

  const filtered = hotSellers.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white relative">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-sm">
        Default welcome msg! <span className="underline cursor-pointer">Sign In</span> or <span className="underline cursor-pointer">Create an Account</span>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">MADD</h1>
          </div>

          <div className="flex-1 max-w-2xl mx-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search entire store here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-black" />
          </div>
        </div>

        {/* Main Menu */}
        <nav className="bg-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-8 flex gap-8 text-sm font-medium">
            <Link to="/WhatsNewPage" className="hover:text-blue-600">What's New</Link>
            <a href="#" className="hover:text-blue-600">Admin Themes</a>
            <Link to="/LumaProductPages" className="hover:text-blue-600">E-Commerce</Link>
            <a href="#" className="hover:text-blue-600">Marketing</a>
            <a href="#" className="hover:text-blue-600">Portfolio</a>
            <a href="#" className="text-red-600 font-semibold">Sale</a>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className="relative h-[520px] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://picsum.photos/id/1015/1920/600')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white p-10 max-w-md rounded-2xl shadow-xl">
          <p className="text-gray-500">New Premium Collection</p>
          <h2 className="text-4xl font-bold mt-2 leading-tight">
            Get fit and look fab in new seasonal styles
          </h2>
          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
            Shop New Themes
          </button>
        </div>
      </div>

      {/* Promo Section - Same as before */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 p-10 rounded-3xl">
          <h3 className="text-5xl font-bold text-orange-600">20% OFF</h3>
          <p className="mt-4 text-xl">On all Admin & Dashboard Themes this week</p>
          <a href="#" className="mt-6 inline-block text-blue-600 font-medium hover:underline">
            Shop Now →
          </a>
        </div>

        <div className="bg-yellow-400 p-10 rounded-3xl flex flex-col justify-center">
          <h3 className="text-3xl font-bold">Even more ways to mix and match</h3>
          <p className="mt-4 text-lg">Buy 3 themes and get 1 free</p>
          <a href="#" className="mt-6 text-blue-600 font-medium hover:underline">
            Shop Themes →
          </a>
        </div>
      </div>

      {/* Info Sections */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div>
          <h3 className="text-2xl font-semibold">Take it from Erin</h3>
          <p className="mt-3 text-gray-600">Our founder shares her favorite themes and recommendations.</p>
          <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Shop Erin Recommends →</a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Science meets performance</h3>
          <p className="mt-3 text-gray-600">Lightning fast, SEO optimized & built with latest technologies.</p>
          <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">Shop Performance Themes →</a>
        </div>
      </div>

      {/* Hot Sellers */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <h2 className="text-4xl font-bold text-center">Hot Sellers</h2>
        <p className="text-gray-500 text-center mt-2 mb-12">Here's what's trending on Madd Store right now</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-sm ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`} />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                </div>
                <p className="text-2xl font-bold text-blue-600 mt-2">${item.price}</p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => navigate("/ThemesPage")}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 z-50"
      >
        Browse All Themes
        <FaArrowRight className="text-lg" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm">
          © 2026 Madd Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LumaHomePages;