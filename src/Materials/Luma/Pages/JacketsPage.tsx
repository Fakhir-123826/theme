import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import FlateCard from "../Components/FlateCard";
import { BiGridAlt, BiListUl } from "react-icons/bi";

const JacketsPage: React.FC = () => {
  const [openFilters, setOpenFilters] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleFilter = (filterName: string) => {
    setOpenFilters(prev =>
      prev.includes(filterName)
        ? prev.filter(f => f !== filterName)
        : [...prev, filterName]
    );
  };



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

  // FlateCard product data (single product for list view)
  const flatProduct = {
    id: "flat-product-1",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94/w/j/wj12-blue_main_1.jpg",
    rating: 4.5,
    reviewCount: 12,
  };

  // Slim filter data structure
  const filterData = {
    "STYLE": {
      options: [
        { name: "Insulated", count: 4 },
        { name: "Jacket", count: 12 },
        { name: "Lightweight", count: 6 },
        { name: "Hooded", count: 5 },
        { name: "Heavy Duty", count: 1 },
        { name: "Rain Coat", count: 2 },
        { name: "Hard Shell", count: 3 },
        { name: "Soft Shell", count: 8 },
        { name: "Windbreaker", count: 4 },
        { name: "1/4 zip", count: 5 },
        { name: "Full Zip", count: 6 },
        { name: "Reversible", count: 2 },
        { name: "Pullover", count: 4 }
      ]
    },
    "SIZE": {
      options: [
        { name: "XS", count: null },
        { name: "S", count: null },
        { name: "M", count: null },
        { name: "L", count: null },
        { name: "XL", count: null }
      ]
    },
    "PRICE": {
      options: [
        { name: "$30 - $39", count: 1 },
        { name: "$50 - $59", count: 4 },
        { name: "$60 - $69", count: 3 },
        { name: "$70 - $79", count: 3 },
        { name: "$80+", count: 1 }
      ]
    },
    "COLOR": {
      options: [
        { name: "Black", count: null, color: "#000000" },
        { name: "Blue", count: null, color: "#1857f7" },
        { name: "Brown", count: null, color: "#8B4513" },
        { name: "Grey", count: null, color: "#808080" },
        { name: "Green", count: null, color: "#22c55e" },
        { name: "Orange", count: null, color: "#FFA500" },
        { name: "Purple", count: null, color: "#ef3dff" },
        { name: "Red", count: null, color: "#FF0000" },
        { name: "White", count: null, color: "#FFFFFF" },
        { name: "Yellow", count: null, color: "#FFFF00" }
      ]
    },
    "MATERIAL": {
      options: [
        { name: "Cocona®", count: 3 },
        { name: "Cotton", count: 2 },
        { name: "Fleece", count: 3 },
        { name: "Nylon", count: 5 },
        { name: "Polyester", count: 6 },
        { name: "Spandex", count: 3 },
        { name: "Wool", count: 2 }
      ]
    },
    "ECO": {
      options: [
        { name: "Yes", count: 3 },
        { name: "No", count: 9 }
      ]
    },
    "NEW": {
      options: [
        { name: "Yes", count: 4 },
        { name: "No", count: 8 }
      ]
    },
    "SALE": {
      options: [
        { name: "Yes", count: 4 },
        { name: "No", count: 8 }
      ]
    },
    "PATTERN": {
      options: [
        { name: "Color-Blocked", count: 1 },
        { name: "Solid", count: null }
      ]
    },
    "CLIMATE": {
      options: [
        { name: "All-Weather", count: 3 },
        { name: "Cool", count: 8 },
        { name: "Mild", count: 8 },
        { name: "Spring", count: 12 },
        { name: "Windy", count: 7 }
      ]
    }
  };



  const FilterSection: React.FC<{ title: string; options: any[] }> = ({ title, options }) => {
    const isOpen = openFilters.includes(title);

    return (
      <div className="border-b border-gray-100 pb-2">
        <button
          onClick={() => toggleFilter(title)}
          className="w-full flex justify-between items-center py-1.5 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors uppercase tracking-wide"
        >
          <span>{title}</span>
          {isOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
        </button>

        {isOpen && (
          <div className="mt-2 space-y-1.5 pl-1">
            {options.map((option) => (
              <label
                key={option.name}
                className="flex items-center justify-between cursor-pointer hover:text-blue-600 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  {option.color ? (
                    <>
                      <div
                        className="w-3 h-3 rounded-full border border-gray-200"
                        style={{ backgroundColor: option.color }}
                      />
                      <input type="checkbox" className="hidden" />
                    </>
                  ) : (
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  )}
                  <span className="text-xs text-gray-600 group-hover:text-blue-600">
                    {option.name}
                  </span>
                </div>
                {option.count !== null && (
                  <span className="text-[10px] text-gray-400 group-hover:text-blue-400">
                    ({option.count})
                  </span>
                )}
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };



  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ===== TITLE ===== */}
      <h1 className="text-2xl font-semibold mb-6">Jackets</h1>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ================= SLIM SIDEBAR ================= */}
        <aside className="hidden lg:block lg:col-span-1 space-y-3 text-sm">
          <div className="bg-gray-50 p-3 rounded-lg">
            {/* Dynamic Filter Sections */}
            {Object.entries(filterData).map(([title, data]) => (
              <FilterSection key={title} title={title} options={data.options} />
            ))}

            {/* Compare Products */}
            <div className="pt-3 mt-2 border-t border-gray-200">
              <p className="font-semibold text-xs text-gray-800 mb-0.5">Compare Products</p>
              <p className="text-gray-400 text-[10px]">1 item</p>
              <button className="mt-1 text-[10px] text-blue-600 hover:text-blue-700 font-medium">
                Clear All
              </button>
            </div>

            {/* My Wish List */}
            <div className="pt-2">
              <p className="font-semibold text-xs text-gray-800 mb-0.5">My Wish List</p>
              <p className="text-gray-400 text-[10px]">
                No items yet
              </p>
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <div className="lg:col-span-4">

          {/* ===== TOOLBAR ===== */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">

            {/* LEFT */}
            <div className="flex items-center gap-3 text-xs">
              <span className="text-gray-500">{products.length} Items</span>

              {/* View Toggle - Premium Animated */}
              <div className="relative flex items-center gap-1 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1">
                {/* Animated Background Indicator */}
                <div
                  className={`
        absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out
        ${viewMode === "grid" ? "left-1" : "left-[calc(50%+2px)]"}
      `}
                />

                {/* Grid View Button */}
                <button
                  onClick={() => setViewMode("grid")}
                  className={`
        relative z-10 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200
        flex items-center gap-1.5
        ${viewMode === "grid"
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                    }
      `}
                  title="Grid View"
                >
                  <BiGridAlt className="w-4 h-4" />
                  <span className="hidden sm:inline">Grid View</span>
                </button>

                {/* List View Button */}
                <button
                  onClick={() => setViewMode("list")}
                  className={`
        relative z-10 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200
        flex items-center gap-1.5
        ${viewMode === "list"
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                    }
      `}
                  title="List View"
                >
                  <BiListUl className="w-4 h-4" />
                  <span className="hidden sm:inline">List View</span>
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500">Sort By</span>
              <select className="border rounded px-2 py-1 text-xs bg-white">
                <option>Product Name</option>
                <option>Price</option>
                <option>Rating</option>
              </select>
            </div>

          </div>

          {/* ===== PRODUCT DISPLAY - CONDITIONAL RENDERING ===== */}

          {/* Grid View - Shows Product Cards in Grid */}
          {viewMode === "grid" && (
            <>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard
                    id={product.id.toString()}
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

              {/* Pagination for Grid View */}
              <div className="flex justify-end items-center mt-8 text-xs gap-2">
                <span className="text-gray-500">Show</span>
                <select className="border rounded px-2 py-1 text-xs bg-white">
                  <option>12</option>
                  <option>24</option>
                  <option>36</option>
                </select>
                <span className="text-gray-500">per page</span>
              </div>
            </>
          )}

          {/* List View - Shows FlateCards in Vertical List */}
          {viewMode === "list" && (
            <>
              <div className="flex flex-col gap-6">
                {/* Show multiple FlateCards in list view */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <FlateCard
                    key={index}
                    id={(index + 1).toString()}
                    title={flatProduct.title}
                    price={flatProduct.price}
                    image={flatProduct.image}
                    rating={flatProduct.rating}
                    reviewCount={flatProduct.reviewCount}
                    sizes={["XS", "S", "M", "L", "XL"]}
                    colors={[
                      { label: "Black", code: "#000000" },
                      { label: "Blue", code: "#1e88e5" },
                      { label: "Pink", code: "#e91e63" },
                    ]}
                  // Don't pass onAddToCart - let FlateCard use Redux
                  />
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default JacketsPage;