import { useState } from "react";
import { FaArrowRight, FaSearch, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        title: "Fusion Admin Dashboard",
        price: 89,
        image: "https://picsum.photos/id/1015/400/300",
        rating: 4.8,
        reviews: 124,
    },
    {
        id: 2,
        title: "E-Commerce Pro Store",
        price: 129,
        image: "https://picsum.photos/id/106/400/300",
        rating: 4.9,
        reviews: 98,
    },
    {
        id: 3,
        title: "SaaS Landing Kit",
        price: 69,
        image: "https://picsum.photos/id/201/400/300",
        rating: 4.7,
        reviews: 156,
    },
    {
        id: 4,
        title: "Fitness Yoga Theme",
        price: 59,
        image: "https://picsum.photos/id/237/400/300",
        rating: 5.0,
        reviews: 67,
    },
    {
        id: 5,
        title: "Modern Portfolio",
        price: 49,
        image: "https://picsum.photos/id/180/400/300",
        rating: 4.6,
        reviews: 45,
    },
    {
        id: 6,
        title: "Restaurant Pro Theme",
        price: 79,
        image: "https://picsum.photos/id/292/400/300",
        rating: 4.8,
        reviews: 82,
    },
];

const LumaProductPages = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

                    <div className="flex-1 max-w-2xl mx-10">
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
                        <div className="text-2xl cursor-pointer">🛒</div>
                    </div>
                </div>

                {/* Secondary Menu */}
                <nav className="bg-gray-100 py-3 border-b">
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

            <div className="max-w-7xl mx-auto px-8 py-8 flex gap-10">
                {/* Left Sidebar Filters */}
                <div className="w-64 flex-shrink-0">
                    <h2 className="text-3xl font-bold mb-8">Themes</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">STYLE</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div>Admin Dashboard</div>
                                <div>E-Commerce</div>
                                <div>Landing Page</div>
                                <div>Portfolio</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">PRICE</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div>$0 - $50</div>
                                <div>$50 - $100</div>
                                <div>$100 - $200</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">CATEGORY</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div>Admin Template</div>
                                <div>Shop Template</div>
                                <div>Marketing</div>
                                <div>Business</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-4xl font-bold">All Themes</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Items 1-12 of 24</span>
                            <select className="border border-gray-300 rounded px-4 py-2 text-sm">
                                <option>Sort By: Position</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((item) => (
                            <div key={item.id} className="group">
                                <div className="relative overflow-hidden rounded-2xl border border-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="mt-4">
                                    <h3 className="font-semibold text-lg line-clamp-2">{item.title}</h3>

                                    <div className="flex items-center gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`text-sm ${i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-500 ml-2">({item.reviews})</span>
                                    </div>

                                    <p className="text-2xl font-bold text-blue-600 mt-3">${item.price}</p>
                                </div>

                                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-medium transition">
                                    Add to Cart
                                </button>
                            </div>
                        ))}
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

export default LumaProductPages;