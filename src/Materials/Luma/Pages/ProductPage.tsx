import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart, FaHeart, FaExchangeAlt } from "react-icons/fa";

const ProductPage: React.FC = () => {
  const images = [
    "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/s/ws12-blue_main_1.jpg",
    "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/s/ws12-blue_back_1.jpg",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState("description");

  const sizes = [
    { id: 1, label: "XS" },
    { id: 2, label: "S" },
    { id: 3, label: "M" },
    { id: 4, label: "L" },
  ];

  const colors = [
    { id: 1, label: "Blue", code: "#2563eb" },
    { id: 2, label: "Black", code: "#000" },
    { id: 3, label: "Pink", code: "#ec4899" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ===== MAIN GRID ===== */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* ================= IMAGES ================= */}
        <div>
          {/* MAIN IMAGE */}
          <div className="border rounded-lg overflow-hidden mb-4">
            <img
              src={activeImage}
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover border cursor-pointer ${
                  activeImage === img ? "border-blue-600" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div>

          <h1 className="text-2xl font-semibold mb-3">
            Radiant Tee
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <Rating initialValue={4} size={20} readonly />
            <span className="text-sm text-gray-500">(3 Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold mb-6">$22.00</div>

          {/* Sizes */}
          <div className="mb-6">
            <p className="font-medium mb-2">Size</p>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <div
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`px-4 py-2 border rounded cursor-pointer text-sm ${
                    selectedSize === size.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "hover:border-blue-500"
                  }`}
                >
                  {size.label}
                </div>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <p className="font-medium mb-2">Color</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                    selectedColor === color.id
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.code }}
                />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 mb-6">

            <button
              disabled={!selectedSize || !selectedColor}
              className="bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 disabled:bg-gray-400"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
                <FaHeart /> Wish List
              </button>
              <button className="flex-1 bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
                <FaExchangeAlt /> Compare
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="mt-12">

        {/* Tabs */}
        <div className="flex border-b mb-6">
          {["description", "details", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 max-w-3xl">
          {activeTab === "description" && (
            <p>
              Comfortable and stylish tee made with premium fabric.
              Perfect for workouts and everyday wear.
            </p>
          )}

          {activeTab === "details" && (
            <p>
              Material: Cotton Blend <br />
              Fit: Regular <br />
              Care: Machine wash cold
            </p>
          )}

          {activeTab === "reviews" && (
            <p>No reviews yet.</p>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProductPage;