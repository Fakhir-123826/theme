'use client';

import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaExchangeAlt, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';

type FlateCardProps = {
    title: string;
    price: string;
    image: string;
    rating?: number;
    reviewCount?: number;
    sizes?: string[];
    colors?: { label: string; code: string }[];
    onAddToCart?: () => void;
    onAddToWishlist?: () => void;
    onAddToCompare?: () => void;
};

const FlateCard: React.FC<FlateCardProps> = ({
    title = "Olivia 1/4 Zip Light Jacket",
    price = "$77.00",
    image = "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/j/wj12-blue_main_1.jpg",
    rating = 4.5,
    reviewCount = 12,
    sizes = ["XS", "S", "M", "L", "XL"],
    colors = [
        { label: "Black", code: "#000000" },
        { label: "Blue", code: "#1e88e5" },
        { label: "Pink", code: "#e91e63" },
    ],
    onAddToCart,
    onAddToWishlist,
    onAddToCompare,
}) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string>(colors[1]?.label || "");
    const [imageError, setImageError] = useState(false);

    // Fallback image
    const fallbackImage = "https://via.placeholder.com/400x480?text=No+Image+Available";

    return (
        <div className="group bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-100 lg:w-[850px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row gap-0 p-0 max-w-5xl mx-4 hover:scale-[1.01]">
            
            {/* Left Side - Premium Image Section */}
            <div className="relative flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 lg:w-[380px]">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/70 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        Best Seller
                    </span>
                </div>
                
                {/* Image Container */}
                <div className="w-full h-full min-h-[320px] lg:min-h-[480px] relative">
                    <img
                        src="http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/j/wj12-blue_main_1.jpg"
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>

            {/* Right Side - Premium Content */}
            <div className="flex-1 flex flex-col p-6 lg:p-8">
                
                {/* Brand / Category Tag */}
                <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
                        Women's Collection
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                    {title}
                </h2>

                {/* Price with Original Price */}
                <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {price}
                    </p>
                    <p className="text-sm text-gray-400 line-through">
                        $99.00
                    </p>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full ml-2">
                        -22%
                    </span>
                </div>

                {/* Rating with detailed stats */}
                <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-2">
                        <Rating
                            initialValue={rating}
                            size={18}
                            readonly={true}
                            allowFraction={true}
                            SVGclassName="inline-block"
                        />
                        <span className="text-sm font-semibold text-gray-700">
                            {rating}
                        </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300" />
                    <span className="text-sm text-gray-500">
                        {reviewCount} Verified Reviews
                    </span>
                </div>

                {/* Size Selection with Guide */}
                <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-semibold text-gray-800">Select Size</p>
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                            Size Guide →
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`min-w-[48px] h-10 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    selectedSize === size
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:shadow-md'
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color Selection with Names */}
                <div className="mt-5">
                    <p className="text-sm font-semibold text-gray-800 mb-2">Select Color</p>
                    <div className="flex flex-wrap items-center gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.label}
                                onClick={() => setSelectedColor(color.label)}
                                className={`group relative flex items-center gap-2 transition-all duration-300 ${
                                    selectedColor === color.label ? 'scale-105' : ''
                                }`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                                        selectedColor === color.label
                                            ? 'border-blue-600 ring-2 ring-blue-200'
                                            : 'border-gray-200 group-hover:border-gray-400'
                                    }`}
                                    style={{ backgroundColor: color.code }}
                                />
                                <span className={`text-xs font-medium transition-colors ${
                                    selectedColor === color.label ? 'text-blue-600' : 'text-gray-600'
                                }`}>
                                    {color.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Premium Actions */}
                <div className="mt-6 pt-2 flex flex-col gap-3">
                    <button
                        onClick={onAddToCart}
                        disabled={!selectedSize}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl"
                    >
                        <FaShoppingCart className="text-lg" />
                        {selectedSize ? 'Add to Cart' : 'Select Size First'}
                    </button>

                    <div className="flex gap-3">
                        <button
                            onClick={onAddToWishlist}
                            className="flex-1 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-200 transition-all group flex items-center justify-center gap-2"
                        >
                            <FaHeart className="text-gray-600 group-hover:text-red-500 transition-colors" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Wishlist
                            </span>
                        </button>

                        <button
                            onClick={onAddToCompare}
                            className="flex-1 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-200 transition-all group flex items-center justify-center gap-2"
                        >
                            <FaExchangeAlt className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Compare
                            </span>
                        </button>
                    </div>
                </div>

                {/* Premium Features */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Free Shipping
                        </span>
                        <span className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            30-Day Returns
                        </span>
                    </div>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1 group"
                    >
                        Learn More
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FlateCard;