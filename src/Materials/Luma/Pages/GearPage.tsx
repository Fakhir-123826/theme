import React from "react";
import ProductCard from "../Components/ProductCard";
import {Link} from 'react-router-dom';

const GearPage: React.FC = () => {
  const products = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    title: "Fusion Backpack",
    rating: 4,
    reviewCount: 3,
    price: "$59.00",
    sizes: [],
    colors: [],
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-3xl font-semibold mb-8">Gear</h1>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        

        <aside className="hidden lg:block text-sm text-gray-700 space-y-8">

          <div>
            <p className="font-semibold mb-2">Shop By</p>
            <p className="text-xs text-gray-500 mb-1">Category</p>
            <ul className="space-y-1">
              <li>
                <Link to="/LumaHome/Jackets_page" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer block">
                  Bags 14
                </Link>
              </li>
              <li>
                <Link to="/LumaHome/Jackets_page" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer block">
                  Fitness Equipment 11
                </Link>
              </li>
              <li>
                <Link to="/LumaHome/Jackets_page" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors cursor-pointer block">
                  Watches 9
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Categories</p>
            <ul className="space-y-1">
              <li>
                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                  Fitness Equipment
                </Link>
              </li>
              <li>
                <Link to="/LumaHome/Jackets_page" className="hover:text-blue-600 hover:underline transition-colors cursor-pointer block">
                  Watches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Compare Products</p>
            <p className="text-xs text-gray-500">You have no items</p>
          </div>

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
              src="http://dev.magentonew.local/media/wysiwyg/gear/gear-main.jpg"
              className="w-full h-[300px] md:h-[420px] object-cover"
              alt="Gear Hero"
            />

            <div className="absolute right-6 top-6 bg-white p-6 max-w-sm shadow">
              <p className="text-sm text-gray-500 mb-1">
                Sprite Yoga Companion Kit
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Save up to 20% on a bundle!
              </h2>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                Shop Yoga Kit
              </button>
            </div>
          </div>

          {/* ===== TOP GRID ===== */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* LEFT */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/gear/gear-fitnes.jpg"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Fitness"
              />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 text-sm shadow max-w-xs">
                <p className="font-semibold">Loosen Up</p>
                <p className="text-xs mt-1">
                  Extend your training with yoga straps, tone bands, and jump ropes
                </p>
                <span className="block mt-2 font-semibold text-xs">
                  Shop Fitness →
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/gear/gear-equipment.jpg"
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Bottle"
              />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 text-sm shadow max-w-xs">
                <p className="font-semibold">Here’s to you!</p>
                <p className="text-xs mt-1">
                  $4 Luma water bottle (save 70%)
                </p>
                <span className="block mt-2 font-semibold text-xs">
                  Shop Now →
                </span>
              </div>
            </div>

          </div>

          {/* ===== CATEGORY CARDS ===== */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Bags */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/gear/gear-category-bags.jpg"
                className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 text-sm shadow">
                <p className="font-semibold">Tote, cart or carry</p>
                <p className="text-xs">Luma bags go the distance</p>
                <span className="block mt-1 text-xs font-semibold">
                  Shop Bags →
                </span>
              </div>
            </div>

            {/* Equipment */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/gear/gear-category-equipment.jpg"
                className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 text-sm shadow">
                <p className="font-semibold">Let’s get after it!</p>
                <p className="text-xs">Luma gym equipment fits your goals</p>
                <span className="block mt-1 text-xs font-semibold">
                  Shop Equipment →
                </span>
              </div>
            </div>

            {/* Watches */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/gear/gear-category-watches.jpg"
                className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-3 text-sm shadow">
                <p className="font-semibold">Luma watches</p>
                <p className="text-xs">Keeping pace has never been stylish</p>
                <span className="block mt-1 text-xs font-semibold">
                  Shop Watches →
                </span>
              </div>
            </div>

          </div>

          {/* ===== PRODUCTS ===== */}
          <div className="text-center pt-10">
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

export default GearPage;