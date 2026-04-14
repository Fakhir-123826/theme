'use client';

import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { FiBarChart2 } from 'react-icons/fi';   // You can change to FiScale if you prefer compare icon

interface ProductCardProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  onClick?: () => void;
  onFavoriteClick?: () => void;
  onCompareClick?: () => void;   // renamed for clarity
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl = "https://picsum.photos/id/1015/600/800",
  name = "Hera Pullover Hoodie",
  price = "$48.00",
  onClick,
  onFavoriteClick,
  onCompareClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group w-full max-w-[220px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mx-4"
    >
      {/* Image Container - Fixed Aspect Ratio like Magento */}
      <div className="relative bg-gray-100" style={{ aspectRatio: '152 / 190' }}>
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-medium text-sm text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        {/* Price */}
        <p className="text-xl font-semibold text-gray-900 mt-2">{price}</p>

        {/* Action Icons */}
        <div className="flex items-center justify-between mt-4 text-gray-500">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteClick?.();
            }}
            className="hover:text-red-500 transition-colors p-1"
            aria-label="Add to Wishlist"
          >
            <FiHeart size={18} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompareClick?.();
            }}
            className="hover:text-gray-800 transition-colors p-1"
            aria-label="Add to Compare"
          >
            <FiBarChart2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;