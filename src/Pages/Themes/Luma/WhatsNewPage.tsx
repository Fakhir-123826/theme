import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const latestProducts = [
  {
    id: 1,
    title: "Didi Sport Watch",
    price: 92,
    image: "https://picsum.photos/id/1015/400/300",
    rating: 4,
    reviews: 2,
  },
  {
    id: 2,
    title: "Dash Digital Watch",
    price: 92,
    image: "https://picsum.photos/id/106/400/300",
    rating: 4.5,
    reviews: 3,
  },
  {
    id: 3,
    title: "Cruise Dual Analog Watch",
    price: 55,
    image: "https://picsum.photos/id/201/400/300",
    rating: 5,
    reviews: 4,
  },
  {
    id: 4,
    title: "Summit Watch",
    price: 54,
    image: "https://picsum.photos/id/237/400/300",
    rating: 4,
    reviews: 3,
  },
];

const WhatsNewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-sm">
        Default welcome msg! <span className="underline cursor-pointer">Sign In</span> or{" "}
        <span className="underline cursor-pointer">Create an Account</span>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link to="/ThemesStorePage">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">MADD</h1>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl mx-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search entire store here..."
                className="w-full pl-12 py-3 bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500"
              />
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">🔍</div>
            </div>
          </div>

          <div className="text-2xl cursor-pointer">🛒</div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-8 flex gap-8 text-sm font-medium text-gray-700">
            <Link to="/WhatsNewPage" className="hover:text-black">What's New</Link>
            <a href="#" className="hover:text-black">Admin Themes</a>
            <Link to="/LumaProductPages" className="hover:text-blue-600">E-Commerce</Link>
            <a href="#" className="hover:text-black">Marketing</a>
            <a href="#" className="hover:text-black">Portfolio</a>
            <a href="#" className="text-red-600 font-semibold">Sale</a>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-10 flex gap-12">
        {/* Left Sidebar */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-3xl font-bold mb-8">What's New</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold uppercase text-sm mb-3">NEW IN ADMIN</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Dashboard Themes</div>
                <div>Analytics Kits</div>
                <div>CRM Templates</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold uppercase text-sm mb-3">NEW IN E-COMMERCE</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Shopify Themes</div>
                <div>Magento Templates</div>
                <div>Landing Pages</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">What's New</h1>
          <p className="text-gray-500 mb-10">Just in time for the new season!</p>

          {/* Hero Section */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 mb-12 flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <p className="text-blue-600 font-medium">NEW LUMA COLLECTION</p>
              <h2 className="text-4xl font-bold mt-3 leading-tight">
                The very latest yoga styles plus twists on timeless classics
              </h2>
              <button className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition">
                Shop New Themes
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://picsum.photos/id/1015/600/400"
                alt="New Collection"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-semibold">Whatever day brings</h3>
              <p className="mt-3 text-gray-600">
                Luma Cocona™ for breathability, CoolTech™ for wicking, or a blend of both.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">
                Performance Fabrics →
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">A sense of renewal</h3>
              <p className="mt-3 text-gray-600">
                Enjoy comfort of body and mind with Luma eco-friendly choices.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block hover:underline">
                Shop Eco Friendly →
              </a>
            </div>
          </div>

          {/* Luma's Latest Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Luma's Latest</h2>
            <p className="text-gray-500 mb-8">Just in time for the new season!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestProducts.map((item) => (
                <div key={item.id} className="group">
                  <div className="overflow-hidden rounded-2xl border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-2">({item.reviews} Reviews)</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mt-3">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/ThemesPage")}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-3xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 z-50"
      >
        Browse All Themes
        <FaArrowRight className="text-lg" />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm">
          © 2026 Madd Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default WhatsNewPage;