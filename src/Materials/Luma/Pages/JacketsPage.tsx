import React from "react";
import ProductCard from "../Components/LongCard";

const JacketsPage: React.FC = () => {
  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: "Juno Jacket",
    rating: 4,
    reviewCount: 3,
    price: "$77.00",
    sizes: [
      { id: 1, label: "XS" },
      { id: 2, label: "S" },
      { id: 3, label: "M" },
      { id: 4, label: "L" },
    ],
    colors: [
      { id: 1, label: "Blue", code: "#2563eb" },
      { id: 2, label: "Green", code: "#22c55e" },
      { id: 3, label: "Pink", code: "#ec4899" },
    ],
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ===== TITLE ===== */}
      <h1 className="text-3xl font-semibold mb-6">Jackets</h1>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block space-y-4 text-sm">

          {[
            "STYLE",
            "SIZE",
            "PRICE",
            "COLOR",
            "MATERIAL",
            "ECO COLLECTION",
            "PERFORMANCE FABRIC",
            "ERIN RECOMMENDS",
            "NEW",
            "SALE",
            "PATTERN",
            "CLIMATE",
          ].map((filter) => (
            <div
              key={filter}
              className="border-b pb-3 flex justify-between items-center cursor-pointer"
            >
              <span className="font-medium">{filter}</span>
              <span>+</span>
            </div>
          ))}

          {/* Compare */}
          <div className="pt-4">
            <p className="font-semibold mb-1">Compare Products</p>
            <p className="text-gray-500 text-xs">1 item</p>
          </div>

          {/* Wishlist */}
          <div>
            <p className="font-semibold mb-1">My Wish List</p>
            <p className="text-gray-500 text-xs">
              You have no items in your wish list.
            </p>
          </div>

        </aside>

        {/* ================= CONTENT ================= */}
        <div className="lg:col-span-3">

          {/* ===== TOOLBAR ===== */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-600">12 Items</span>

              <div className="flex gap-2">
                <button className="border px-2 py-1 text-xs">☷</button>
                <button className="border px-2 py-1 text-xs">☰</button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 text-sm">
              <span>Sort By</span>
              <select className="border px-2 py-1 text-sm">
                <option>Product Name</option>
                <option>Price</option>
              </select>
            </div>

          </div>

          {/* ===== PRODUCT GRID ===== */}
          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
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

          {/* ===== PAGINATION ===== */}
          <div className="flex justify-end items-center mt-10 text-sm gap-2">
            <span>Show</span>
            <select className="border px-2 py-1">
              <option>12</option>
              <option>24</option>
            </select>
            <span>per page</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JacketsPage;