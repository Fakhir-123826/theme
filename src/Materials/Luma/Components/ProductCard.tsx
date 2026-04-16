import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart, FaHeart, FaExchangeAlt, FaCheck } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../app/Store/hooks";
import { addToCart } from "../../../app/features/cartSlice";
import { addToWishlist, removeFromWishlist } from '../../../app/features/wishlistSlice';
import { addToCompare, removeFromCompare } from '../../../app/features/compareSlice';
import { Link } from "react-router-dom";

type ProductCardProps = {
  id?: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  sizes: { id: number; label: string }[];
  colors: { id: number; label: string; code: string }[];
  image?: string;
  productUrl?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id = Date.now().toString(),
  title,
  rating,
  reviewCount,
  price,
  sizes,
  colors,
  image = "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/s/ws12-blue_main_1.jpg",
  productUrl = "#",
}) => {
  const dispatch = useAppDispatch();

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number | null>(colors[0]?.id || null);
  const [isAdding, setIsAdding] = useState(false);
  const [showAdded, setShowAdded] = useState(false);

  // Get selected size label and color label
  const selectedSizeLabel = sizes.find(s => s.id === selectedSize)?.label;
  const selectedColorLabel = colors.find(c => c.id === selectedColor)?.label;

  // Convert price string to number
  const numericPrice = parseFloat(price.replace('$', ''));

  // Wishlist state
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(
    item => item.id === id &&
      item.size === selectedSizeLabel &&
      item.color === selectedColorLabel
  );

  // Compare state
  const compareItems = useAppSelector((state) => state.compare.items);
  const isInCompare = compareItems.some(item => item.id === id);

  // Handle wishlist click
  // const handleWishlistClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   if (isInWishlist) {
  //     dispatch(removeFromWishlist({
  //       id: id,
  //       size: selectedSizeLabel,
  //       color: selectedColorLabel
  //     }));
  //   } else {
  //     dispatch(addToWishlist({
  //       id: id,
  //       productId: id,
  //       name: title,
  //       price: numericPrice,
  //       image: image,
  //       color: selectedColorLabel,
  //       size: selectedSizeLabel,
  //       inStock: true,
  //       addedAt: new Date().toISOString(),
  //     }));
  //   }
  // };

  // // Handle compare click
  // const handleCompareClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   if (isInCompare) {
  //     dispatch(removeFromCompare({ id: id }));
  //   } else {
  //     dispatch(addToCompare({
  //       id: id,
  //       productId: id,
  //       name: title,
  //       price: numericPrice,
  //       image: image,
  //       sku: `SKU-${id}`,
  //       description: `Premium ${title} for all seasons`,
  //       features: ["Premium quality", "Comfortable fit", "Durable material"],
  //       rating: rating,
  //       reviewCount: reviewCount,
  //       color: selectedColorLabel,
  //       size: selectedSizeLabel,
  //       addedAt: new Date().toISOString(),
  //     }));
  //   }Product_page
  // };

  // In ProductCard.tsx, update these functions:

  // Handle wishlist click - fix the null issue
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist) {
      dispatch(removeFromWishlist({
        id: id,
        size: selectedSizeLabel || undefined,
        color: selectedColorLabel || undefined
      }));
    } else {
      dispatch(addToWishlist({
        id: id,
        productId: id,
        name: title,
        price: numericPrice,
        image: image,
        color: selectedColorLabel || undefined,
        size: selectedSizeLabel || undefined,
        inStock: true,
        addedAt: new Date().toISOString(),
      }));
    }
  };

  // Handle compare click - fix the null issue
  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInCompare) {
      dispatch(removeFromCompare({ id: id }));
    } else {
      dispatch(addToCompare({
        id: id,
        productId: id,
        name: title,
        price: numericPrice,
        image: image,
        sku: `SKU-${id}`,
        description: `Premium ${title} for all seasons`,
        features: ["Premium quality", "Comfortable fit", "Durable material"],
        rating: rating,
        reviewCount: reviewCount,
        color: selectedColorLabel || undefined,
        size: selectedSizeLabel || undefined,
        addedAt: new Date().toISOString(),
      }));
    }
  };


  // Handle add to cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;

    setIsAdding(true);

    dispatch(addToCart({
      id: id,
      name: title,
      price: numericPrice,
      quantity: 1,
      image: image,
      color: selectedColorLabel,
      size: selectedSizeLabel,
      inStock: true,
    }));

    setShowAdded(true);
    setTimeout(() => {
      setShowAdded(false);
      setIsAdding(false);
    }, 2000);
  };

  return (
    <li className="list-none w-full max-w-65 border border-gray-200 p-4 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative">
      {/* Success Badge */}
      {showAdded && (
        <div className="absolute top-2 right-2 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 animate-in fade-in slide-in-from-top duration-300">
          <FaCheck className="w-3 h-3" />
          <span>Added!</span>
        </div>
      )}

      <div className="flex flex-col">
        {/* Product Image */}
        <Link
          to={`/LumaHome/Product_page/${id}`}
          className="block mb-4 overflow-hidden rounded-lg"
        >
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
        </Link>

        {/* Product Details */}
        <div className="flex flex-col">
          {/* Title */}
          <strong className="text-lg font-semibold mb-2">
            <Link
              to={`/LumaHome/Product_page/${id}`}
              className="text-gray-800 no-underline hover:text-blue-600"
            >
              {title}
            </Link>
          </strong>

          {/* Reviews Summary */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-3">
            <Rating
              initialValue={rating}
              size={18}
              allowFraction={true}
              readonly={true}
              SVGclassName="inline-block"
            />

            <div className="reviews-actions">
              <Link
                className="text-gray-500 text-xs no-underline hover:text-blue-600 hover:underline"
                to={`/LumaHome/Product_page/${id}#reviews`}
              >
                {reviewCount} <span>Reviews</span>
              </Link>
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
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none py-2.5 px-4 rounded-lg cursor-pointer font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-px disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed`}
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor || isAdding}
            >
              <FaShoppingCart className="text-sm" />
              <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
            </button>

            <div className="flex flex-col sm:flex-row gap-2">
              {/* Wishlist Button */}
              <button
                className="w-full sm:flex-1 bg-gray-100 text-gray-600 py-2 px-3 rounded-lg cursor-pointer text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-gray-200"
                onClick={handleWishlistClick}
                title={isInWishlist ? "Remove from Wish List" : "Add to Wish List"}
              >
                {isInWishlist ? (
                  <FaHeart className="text-red-500 text-sm" />
                ) : (
                  <FaHeart className="text-gray-600 text-sm hover:text-red-500" />
                )}
                <span className="hidden sm:inline">{isInWishlist ? "Added" : "Wish List"}</span>
              </button>

              {/* Compare Button */}
              <button
                className="w-full sm:flex-1 bg-gray-100 text-gray-600 py-2 px-3 rounded-lg cursor-pointer text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-gray-200"
                onClick={handleCompareClick}
                title={isInCompare ? "Remove from Compare" : "Add to Compare"}
              >
                <FaExchangeAlt className={`text-sm ${isInCompare ? 'text-blue-600' : 'text-gray-600'}`} />
                <span className="hidden sm:inline">{isInCompare ? "Compared" : "Compare"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;