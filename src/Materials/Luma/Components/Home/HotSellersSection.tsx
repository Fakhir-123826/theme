import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';

const HotSellersSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Radiant Tee",
      rating: 3.5,
      reviewCount: 3,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/t/wt09-white_main_1.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    },
    {
      id: 2,
      title: "Radiant Tee",
      rating: 4.0,
      reviewCount: 5,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/t/wt09-white_main_1.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    },
    {
      id: 3,
      title: "Radiant Tee",
      rating: 4.5,
      reviewCount: 8,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//m/t/mt07-gray_main_1.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    },
    {
      id: 4,
      title: "Radiant Tee",
      rating: 5.0,
      reviewCount: 12,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//m/h/mh07-gray_main_2.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    },
    {
      id: 5,
      title: "Radiant Tee",
      rating: 3.0,
      reviewCount: 2,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//m/b/mb02-gray-0.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    },
    {
      id: 6,
      title: "Radiant Tee",
      rating: 4.2,
      reviewCount: 7,
      price: "$22.00",
      image: "http://dev.magentonew.local/media/catalog/product/cache/0ffed21db59b86b4d4dde83841810c94//w/b/wb04-blue-0.jpg",
      sizes: [
        { id: 166, label: "XS" },
        { id: 167, label: "S" },
        { id: 168, label: "M" },
        { id: 169, label: "L" },
        { id: 170, label: "XL" }
      ],
      colors: [
        { id: 50, label: "Blue", code: "#1857f7" },
        { id: 56, label: "Orange", code: "#eb6703" },
        { id: 57, label: "Purple", code: "#ef3dff" }
      ]
    }
  ];

  const handleAddToCart = (sizeId: number, colorId: number) => {
    console.log("Add to cart", { sizeId, colorId });
  };

  const handleAddToWishlist = () => {
    console.log("Add to wishlist");
  };

  const handleAddToCompare = () => {
    console.log("Add to compare");
  };

  // Handle product click navigation
  const handleProductClick = (productId: number) => {
    navigate(`/LumaHome/Product_page/${productId}`);
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Hot Sellers</h2>
        <p className="text-gray-600">Here is what`s trending on Luma right now</p>
      </div>

      {/* Grid: 1 column on mobile, 2 on sm, 3 on md, 4 on lg, 5 on xl */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {products.map((product) => (
          <div 
            key={product.id} 
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer"
          >
            <ProductCard
              id={product.id.toString()}
              title={product.title}
              rating={product.rating}
              reviewCount={product.reviewCount}
              image={product.image}
              price={product.price}
              sizes={product.sizes}
              colors={product.colors}
              // onAddToWishlist={handleAddToWishlist}
              // onAddToCompare={handleAddToCompare}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotSellersSection;