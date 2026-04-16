import React from "react";
import ProductCard from "../Components/ProductCard";
import { Link } from 'react-router-dom';

const MenPage: React.FC = () => {
    const products = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        title: "Radiant Tee",
        rating: 4,
        reviewCount: 3,
        price: "$22.00",
        sizes: [
            { id: 1, label: "XS" },
            { id: 2, label: "S" },
            { id: 3, label: "M" },
            { id: 4, label: "L" },
        ],
        colors: [
            { id: 1, label: "Blue", code: "#2563eb" },
            { id: 2, label: "Orange", code: "#f97316" },
            { id: 3, label: "Pink", code: "#ec4899" },
        ],
    }));
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* ===== PAGE TITLE ===== */}
            <h1 className="text-3xl font-semibold mb-8">Men</h1>

            {/* ===== MAIN GRID ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* ================= SIDEBAR ================= */}



                <aside className="hidden lg:block text-sm text-gray-700 space-y-8">

                    {/* Shop By */}
                    <div>
                        <p className="font-semibold mb-2">Shop By</p>
                        <p className="text-xs text-gray-500 mb-1">Category</p>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer block">
                                    Tops 48
                                </Link>
                            </li>
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer block">
                                    Bottoms 24
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tops */}
                    <div>
                        <p className="font-semibold mb-2">TOPS</p>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Hoodies & Sweatshirts
                                </Link>
                            </li>
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Jackets
                                </Link>
                            </li>
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Tees
                                </Link>
                            </li>
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Tanks
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bottoms */}
                    <div>
                        <p className="font-semibold mb-2">BOTTOMS</p>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Pants
                                </Link>
                            </li>
                            <li>
                                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                                    Shorts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Compare */}
                    <div>
                        <p className="font-semibold mb-2">Compare Products</p>
                        <p className="text-xs text-gray-500">You have no items</p>
                    </div>

                    {/* Wishlist */}
                    <div>
                        <p className="font-semibold mb-2">My Wish List</p>
                        <p className="text-xs text-gray-500">No items</p>
                    </div>

                </aside>

                {/* ================= CONTENT ================= */}
                <div className="lg:col-span-3 space-y-10">

                    {/* ===== HERO ===== */}
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="http://dev.magentonew.local/media/wysiwyg/mens/mens-main.jpg"
                            className="w-full h-[300px] md:h-[420px] object-cover"
                        />

                        <div className="absolute right-6 top-6 bg-white p-6 max-w-sm shadow">
                            <p className="text-sm text-gray-500 mb-1">
                                Luma’s Performance Fabric collection
                            </p>
                            <h2 className="text-xl font-semibold mb-3">
                                Going the extra mile just got extra comfortable
                            </h2>
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                                Shop Performance
                            </button>
                        </div>
                    </div>

                    {/* ===== TOP GRID ===== */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* LEFT */}
                        <div className="group bg-yellow-400 p-6 flex items-center justify-between min-h-[220px]">
                            <div className="max-w-[60%]">
                                <h3 className="text-lg font-semibold mb-2">
                                    Save up to $24!
                                </h3>
                                <p className="text-sm">
                                    Buy 3 Luma tees, get 4 instead
                                </p>
                                <span className="text-sm font-semibold mt-4 inline-block">
                                    Shop Tees →
                                </span>
                            </div>

                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/mens/mens-t-shirts.png"
                                className="h-28 object-contain"
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/mens/mens-pants.jpg"
                                className="w-full h-[220px] object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-white p-4 text-sm shadow">
                                <p className="font-semibold">Last chance for pants</p>
                                <p className="text-xs mt-1">Take 20% OFF</p>
                                <span className="block mt-2 font-semibold text-xs">
                                    Shop Pants →
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* ===== CATEGORY ===== */}
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="relative">
                            <img src="http://dev.magentonew.local/media/wysiwyg/mens/mens-category-shorts.jpg" className="w-full h-[180px] object-cover" />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm">
                                <p className="font-semibold">Luma Shorts</p>
                                <span>Shop Shorts →</span>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="http://dev.magentonew.local/media/wysiwyg/mens/mens-category-tees.jpg" className="w-full h-[180px] object-cover" />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm">
                                <p className="font-semibold">Luma Tees</p>
                                <span>Shop Tees →</span>
                            </div>
                        </div>

                        <div className="relative">
                            <img src="http://dev.magentonew.local/media/wysiwyg/mens/mens-category-hoodies.jpg" className="w-full h-[180px] object-cover" />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm">
                                <p className="font-semibold">Dress for Fitness</p>
                                <span>Shop Hoodies →</span>
                            </div>
                        </div>

                    </div>
                    <div className="text-center pt-6">
                        <h2 className="text-2xl font-semibold">Hot Sellers</h2>
                        <p className="text-gray-500 text-sm">
                            Favorites from Luma shoppers
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                rating={product.rating}
                                reviewCount={product.reviewCount}
                                price={product.price}
                                sizes={product.sizes}
                                colors={product.colors}
                            />
                        ))}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default MenPage;