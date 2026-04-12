// components/ProductCard.tsx
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart, FaHeart, FaExchangeAlt } from "react-icons/fa";

type ProductCardProps = {
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  sizes: { id: number; label: string }[];
  colors: { id: number; label: string; code: string }[];
  image?: string;
  productUrl?: string;
  onAddToCart?: (sizeId: number, colorId: number) => void;
  onAddToWishlist?: () => void;
  onAddToCompare?: () => void;
  //onRatingChange?: (rating: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  rating,
  reviewCount,
  price,
  sizes,
  colors,
  image = "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/s/ws12-blue_main_1.jpg",
  productUrl = "#",
  onAddToCart,
  onAddToWishlist,
  onAddToCompare,
  //onRatingChange,
}) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(colors[0]?.id || null);
  // const [currentRating, setCurrentRating] = useState<number>(rating);

  // const handleRating = (rate: number) => {
  //   setCurrentRating(rate);
  //   if (onRatingChange) {
  //     onRatingChange(rate);
  //   }
  // };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor && onAddToCart) {
      onAddToCart(selectedSize, selectedColor);
    }
  };

  return (
    <li className="list-none  w-full max-w-65 border border-gray-200  p-4 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex flex-col">
        {/* Product Image */}
        <a href={productUrl} className="block mb-4 overflow-hidden rounded-lg">
          <span className="block w-full aspect-240/300">
            <img
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              src={image}
              loading="lazy"
              width="240"
              height="300"
              alt={title}
            />
          </span>
        </a>

        {/* Product Details */}
        <div className="flex flex-col">
          {/* Title */}
          <strong className="text-lg font-semibold mb-2">
            <a title={title} href={productUrl} className="text-gray-800 no-underline hover:text-blue-600">
              {title}
            </a>
          </strong>

          {/* Reviews Summary - Vertical layout */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
            <Rating
              initialValue={rating}
              size={18}
              allowFraction={true}
              readonly={true}
              SVGclassName="inline-block"
            />

            <div className="reviews-actions">
              <a
                className="text-gray-500 text-xs no-underline hover:text-blue-600 hover:underline"
                href={`${productUrl}#reviews`}
              >
                {reviewCount} <span>Reviews</span>
              </a>
            </div>
          </div>

          {/* Price */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-800">{price}</span>
          </div>

          {/* Swatch Options - Sizes */}
          <div className="mb-4">
            <div className="mb-3">
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <div
                    key={size.id}
                    className={`flex items-center justify-center h-9 border rounded-md cursor-pointer text-xs font-medium transition-all duration-200
          ${selectedSize === size.id
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 bg-white hover:border-blue-500 hover:bg-gray-50"}`}
                    onClick={() => setSelectedSize(size.id)}
                    role="option"
                  >
                    {size.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Swatch Options - Colors */}
            <div>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-200 hover:scale-110
                      ${selectedColor === color.id
                        ? "border-blue-600 shadow-[0_0_0_2px_white,0_0_0_4px_#2563eb]"
                        : "border-gray-300"}`}
                    onClick={() => setSelectedColor(color.id)}
                    style={{
                      backgroundColor: color.code,
                    }}
                    title={color.label}
                    role="option"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Actions */}
          <div className="flex flex-col gap-3">
            <button
              className="bg-blue-600 text-white border-none py-2.5 px-4 rounded-lg cursor-pointer font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-px disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              <FaShoppingCart className="text-sm" />
              <span>Add to Cart</span>
            </button>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className="w-full sm:flex-1 bg-gray-100 text-gray-600 py-2 px-3 rounded-lg cursor-pointer text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-gray-200 hover:text-blue-600"
                onClick={onAddToWishlist}
                title="Add to Wish List"
              >
                <FaHeart className="text-sm" />
                <span className="hidden sm:inline">Wish List</span>
              </button>

              <button
                className="w-full sm:flex-1 bg-gray-100 text-gray-600 py-2 px-3 rounded-lg cursor-pointer text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-gray-200 hover:text-blue-600"
                onClick={onAddToCompare}
                title="Add to Compare"
              >
                <FaExchangeAlt className="text-sm" />
                <span className="hidden sm:inline">Compare</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;