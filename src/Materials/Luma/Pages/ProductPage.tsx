import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart, FaHeart, FaExchangeAlt, FaChevronDown, FaChevronUp, FaTimes, FaCheck, FaArrowLeft } from "react-icons/fa";
import ShortCard from "../Components/ShortCard";
import { useAppDispatch, useAppSelector } from "../../../app/Store/hooks";
import { addToCart } from "../../../app/features/cartSlice";
import { addToWishlist, removeFromWishlist } from "../../../app/features/wishlistSlice";
import { addToCompare, removeFromCompare } from "../../../app/features/compareSlice";
import { showAlert } from '../../../Materials/Luma/utils/alert';
// Product type definition
interface Product {
  id: string;
  title: string;
  price: string;
  sku: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; code: string }[];
  images: { main: string; thumb: string }[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: string;
}

// Mock products data - In real app, this would come from an API
const productsData: Product[] = [
  {
    id: "0",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "1",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "2",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "3",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "4",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "5",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },

  {
    id: "6",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "7",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "8",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "9",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },
  {
    id: "10",
    title: "Olivia 1/4 Zip Light Jacket",
    price: "$77.00",
    sku: "WJ12",
    description: "Running errands or headed to the gym, you just want to be comfortable. The Olivia Light Jacket promises that, plus a laid-back look. This zip-up is designed with shoulder stripes for an athletic touch, and banded waist and contoured seams for a flattering silhouette.",
    features: ["Loose fit", "Reflectivity", "Flat seams", "Machine wash/dry"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", code: "#000000" },
      { name: "Blue", code: "#1857f7" },
      { name: "Purple", code: "#ef3dff" },
    ],
    images: [
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-purple_main_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-purple_main_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_alt1_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_alt1_1.jpg"
      },
      {
        main: "http://dev.magentonew.local/media/catalog/product/cache/54b706b17f9250420aa64e529d8e402c/w/j/wj12-blue_back_1.jpg",
        thumb: "http://dev.magentonew.local/media/catalog/product/cache/34e0d27b1e74e43a8d024e02780fc0c2/w/j/wj12-blue_back_1.jpg"
      }
    ],
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    category: "Jackets"
  },

  // Add more products here as needed
];

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("description");
  const [openAccordion, setOpenAccordion] = useState<string | null>("description");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Full Screen Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Review form state
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewNickname, setReviewNickname] = useState("");
  const [reviewSummary, setReviewSummary] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<Array<{
    id: number;
    rating: number;
    nickname: string;
    summary: string;
    text: string;
    date: string;
  }>>([]);
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  const compareItems = useAppSelector((state) => state.compare.items);

  const isInWishlist = wishlistItems.some(
    item => item.productId === product?.id &&
      item.size === selectedSize &&
      item.color === selectedColor
  );

  // Check if product is in compare
  const isInCompare = compareItems.some(item => item.id === product?.id);
  // Handle Wishlist
  const handleWishlist = () => {
    if (!product) return;

    if (isInWishlist) {
      dispatch(removeFromWishlist({
        id: `wishlist-${product.id}`,
        size: selectedSize || undefined,
        color: selectedColor || undefined
      }));
    } else {
      const numericPrice = parseFloat(product.price.replace('$', ''));
      dispatch(addToWishlist({
        id: `wishlist-${product.id}-${Date.now()}`,
        productId: product.id,
        name: product.title,
        price: numericPrice,
        image: product.images[0].main,
        color: selectedColor || undefined,
        size: selectedSize || undefined,
        inStock: true,
        addedAt: new Date().toISOString(),
      }));
    }
  };

  // Handle Compare
  const handleCompare = () => {
    if (!product) return;

    if (isInCompare) {
      dispatch(removeFromCompare({ id: product.id }));
    } else {
      const numericPrice = parseFloat(product.price.replace('$', ''));
      dispatch(addToCompare({
        id: product.id,
        productId: product.id,
        name: product.title,
        price: numericPrice,
        image: product.images[0].main,
        sku: product.sku,
        description: product.description,
        features: product.features,
        rating: product.rating,
        reviewCount: product.reviewCount,
        color: selectedColor || undefined,
        size: selectedSize || undefined,
        addedAt: new Date().toISOString(),
      }));
    }
  };
  // Load product based on ID from URL
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productsData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]?.name || null);
    }
    setLoading(false);
  }, [id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!product || !selectedSize || !selectedColor) {
      showAlert("Please select both size and color before adding to cart");
      return;
    }

    setIsAdding(true);

    // Convert price string to number
    const numericPrice = parseFloat(product.price.replace('$', ''));

    // Dispatch to Redux store
    dispatch(addToCart({
      id: product.id,
      name: product.title,
      price: numericPrice,
      quantity: quantity,
      image: product.images[0].main,
      color: selectedColor,
      size: selectedSize,
      inStock: product.inStock,
    }));

    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
      setIsAdding(false);
    }, 3000);
  };

  // Open Full Screen Modal
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Navigate in Modal
  const nextImage = () => {
    if (product) {
      setModalImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setModalImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, product]);

  const handleRating = (rate: number) => {
    setReviewRating(rate);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (reviewRating === 0) {
      showAlert("Please select a rating");
      return;
    }

    const newReview = {
      id: Date.now(),
      rating: reviewRating,
      nickname: reviewNickname,
      summary: reviewSummary,
      text: reviewText,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);

    // Reset form
    setReviewRating(0);
    setReviewNickname("");
    setReviewSummary("");
    setReviewText("");

    showAlert("Thank you for your review!");
  };

  const toggleAccordion = (section: string) => {
    if (openAccordion === section) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(section);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-200 rounded-2xl h-[500px]"></div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-12 bg-gray-200 rounded w-1/3"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTimes className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Product Not Found</h2>
            <p className="text-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => navigate("/LumaHome/Jackets_page")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Jackets
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Accordion Item Component
  const AccordionItem: React.FC<{
    id: string;
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
  }> = ({ title, children, isOpen, onToggle }) => (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-2 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
      </button>
      {isOpen && (
        <div className="px-2 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Success Toast Message */}
      {showAddedToCart && (
        <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-in slide-in-from-right duration-300">
          <FaCheck className="w-5 h-5" />
          <span>Added to cart successfully!</span>
        </div>
      )}

      <div className="column main max-w-7xl mx-auto px-4 py-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6 group"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back</span>
        </button>

        {/* Main Grid - Image Left | Product Info Right */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT COLUMN - Product Media / Gallery */}
          <div className="product media">
            <div className="gallery-placeholder">
              <div className="fotorama-item">
                <div className="fotorama__wrap">
                  <div
                    className="fotorama__stage bg-gray-100 rounded-lg overflow-hidden mb-4 cursor-zoom-in"
                    onClick={() => openModal(activeImage)}
                  >
                    <div className="fotorama__stage__shaft">
                      <div className="fotorama__stage__frame fotorama__active">
                        <img
                          src={product.images[activeImage].main}
                          alt={product.title}
                          className="w-full h-[500px] object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="fotorama__nav-wrap">
                    <div className="fotorama__nav fotorama__nav--thumbs">
                      <div className="flex gap-3 justify-start">
                        {product.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`fotorama__nav__frame fotorama__nav__frame--thumb cursor-pointer transition-all ${activeImage === index ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                              }`}
                          >
                            <div className="fotorama__thumb w-20 h-20 border rounded-lg overflow-hidden hover:opacity-80">
                              <img
                                src={image.thumb}
                                className="w-full h-full object-cover"
                                alt={`Thumbnail ${index + 1}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Product Info Main */}
          <div className="product-info-main">
            {/* Product Title */}
            <div className="page-title-wrapper product">
              <h1 className="page-title text-2xl md:text-3xl font-semibold mb-3">
                {product.title}
              </h1>
            </div>

            {/* Product Reviews Summary */}
            <div className="product-reviews-summary mb-4">
              {reviews.length > 0 ? (
                <div className="flex items-center gap-2">
                  <Rating
                    initialValue={reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length}
                    size={18}
                    allowFraction={true}
                    readonly={true}
                    SVGclassName="inline-block"
                  />
                  <span className="text-sm text-gray-500">({reviews.length} Reviews)</span>
                </div>
              ) : (
                <div className="reviews-actions">
                  <button
                    className="action add text-blue-600 hover:underline text-sm"
                    onClick={() => {
                      setActiveTab("reviews");
                      setOpenAccordion("reviews");
                    }}
                  >
                    Be the first to review this product
                  </button>
                </div>
              )}
            </div>

            {/* Product Info Price & SKU */}
            <div className="product-info-price mb-6">
              <div className="price-box price-final_price mb-3">
                <span className="normal-price">
                  <span className="price-container">
                    <span className="price-wrapper">
                      <span className="price text-3xl font-bold text-gray-900">{product.price}</span>
                    </span>
                  </span>
                </span>
              </div>

              <div className="product-info-stock-sku pt-3 border-t">
                <div className={`stock text-sm mb-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  <span>{product.inStock ? '✓ In stock' : '✗ Out of stock'}</span>
                </div>
                <div className="product attribute sku text-sm text-gray-500">
                  <strong className="type">SKU:</strong>
                  <span className="value ml-1">{product.sku}</span>
                </div>
              </div>
            </div>

            {/* Product Add to Cart Form */}
            <div className="product-add-form">
              <form id="product_addtocart_form" onSubmit={(e) => e.preventDefault()}>

                {/* Size Selection */}
                <div className="swatch-attribute size mb-6">
                  <span className="swatch-attribute-label font-medium block mb-3">Size</span>
                  <div className="swatch-attribute-options flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <div
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`swatch-option text px-5 py-2 border rounded-md cursor-pointer text-sm transition-all ${selectedSize === size
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:border-blue-500"
                          }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div className="swatch-attribute color mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="swatch-attribute-label font-medium">Color</span>
                    <span className="swatch-attribute-selected-option text-sm text-gray-600">
                      {selectedColor}
                    </span>
                  </div>
                  <div className="swatch-attribute-options flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <div
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`swatch-option color w-10 h-10 rounded-full cursor-pointer border-2 transition-all ${selectedColor === color.name
                          ? "border-blue-600 ring-2 ring-blue-600 ring-offset-2"
                          : "border-gray-300 hover:border-blue-400"
                          }`}
                        style={{ backgroundColor: color.code }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="product-options-bottom">
                  <div className="box-tocart">
                    <div className="fieldset flex items-center gap-4 mb-6">
                      <div className="field qty flex items-center gap-2">
                        <label className="label font-medium" htmlFor="qty">
                          Qty
                        </label>
                        <div className="control">
                          <input
                            type="number"
                            name="qty"
                            id="qty"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            className="input-text qty w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            title="Qty"
                          />
                        </div>
                      </div>
                      <div className="actions flex-1">
                        <button
                          type="button"
                          onClick={handleAddToCart}
                          disabled={!selectedSize || !selectedColor || isAdding || !product.inStock}
                          title="Add to Cart"
                          className={`action primary tocart w-full text-white px-6 py-2 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${isAdding
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                          <FaShoppingCart />
                          <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Product Social Links */}
            <div className="product-social-links flex gap-6 mt-4 pt-4 border-t">
              {/* Wishlist Button */}
              <button
                onClick={handleWishlist}
                className={`action towishlist flex items-center gap-2 text-sm transition-colors ${isInWishlist
                  ? 'text-pink-500 hover:text-pink-600'
                  : 'text-gray-600 hover:text-pink-500'
                  }`}
              >
                <FaHeart className={isInWishlist ? 'text-pink-500' : ''} />
                <span>{isInWishlist ? 'Remove from Wish List' : 'Add to Wish List'}</span>
              </button>

              {/* Compare Button */}
              <button
                onClick={handleCompare}
                className={`action tocompare flex items-center gap-2 text-sm transition-colors ${isInCompare
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-gray-600 hover:text-blue-600'
                  }`}
              >
                <FaExchangeAlt className={isInCompare ? 'text-blue-600' : ''} />
                <span>{isInCompare ? 'Remove from Compare' : 'Add to Compare'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Info Detailed - Tabs/Accordion (Full Width) */}
        <div className="product info detailed mt-16">
          <div className="product data items mage-tabs-disabled">

            {/* Desktop Tabs View */}
            <div className="hidden md:block">
              <div className="border-b mb-8">
                <div className="flex gap-8">
                  {["description", "additional", "reviews"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-medium transition-colors relative ${activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                    >
                      {tab === "description" && "Details"}
                      {tab === "additional" && "More Information"}
                      {tab === "reviews" && "Reviews"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Tab Content */}
              {activeTab === "description" && (
                <div className="product attribute description">
                  <div className="value text-gray-700 space-y-3">
                    <p>{product.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* More Information Tab Content */}
              {activeTab === "additional" && (
                <div className="additional-attributes-wrapper">
                  <table className="data table additional-attributes min-w-full text-sm">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Style</th>
                        <td className="col data py-3 text-gray-600">Jacket, Lightweight, Soft Shell</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Material</th>
                        <td className="col data py-3 text-gray-600">Cocona® performance fabric, Cotton, Nylon</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Pattern</th>
                        <td className="col data py-3 text-gray-600">Solid</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Climate</th>
                        <td className="col data py-3 text-gray-600">Spring, Warm, Windy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* Reviews Tab Content */}
              {activeTab === "reviews" && (
                <div>
                  <div id="product-review-container" data-role="product-review" className="mb-8">
                    {reviews.length > 0 ? (
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Rating initialValue={review.rating} size={16} readonly={true} SVGclassName="inline-block" />
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-1">{review.summary}</h4>
                            <p className="text-sm text-gray-600 mb-1">By {review.nickname}</p>
                            <p className="text-sm text-gray-700 mt-2">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        No reviews yet. Be the first to review this product!
                      </div>
                    )}
                  </div>
                  <ReviewForm
                    reviewRating={reviewRating}
                    reviewNickname={reviewNickname}
                    reviewSummary={reviewSummary}
                    reviewText={reviewText}
                    setReviewNickname={setReviewNickname}
                    setReviewSummary={setReviewSummary}
                    setReviewText={setReviewText}
                    handleSubmitReview={handleSubmitReview}
                    handleRating={handleRating}
                  />
                </div>
              )}
            </div>

            {/* Mobile Accordion View - Keep as is but use product data */}
            <div className="block md:hidden">
              <AccordionItem
                id="1"
                title="Details"
                isOpen={openAccordion === "description"}
                onToggle={() => toggleAccordion("description")}
              >
                <div className="product attribute description">
                  <div className="value text-gray-700 space-y-3">
                    <p>{product.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                id="2"
                title="More Information"
                isOpen={openAccordion === "additional"}
                onToggle={() => toggleAccordion("additional")}
              >
                <div className="additional-attributes-wrapper">
                  <table className="data table additional-attributes min-w-full text-sm">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Style</th>
                        <td className="col data py-3 text-gray-600">Jacket, Lightweight, Soft Shell</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Material</th>
                        <td className="col data py-3 text-gray-600">Cocona® performance fabric, Cotton, Nylon</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Pattern</th>
                        <td className="col data py-3 text-gray-600">Solid</td>
                      </tr>
                      <tr>
                        <th className="col label py-3 text-left font-medium text-gray-700 w-1/3">Climate</th>
                        <td className="col data py-3 text-gray-600">Spring, Warm, Windy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AccordionItem>

              <AccordionItem
                id="3"
                title="Reviews"
                isOpen={openAccordion === "reviews"}
                onToggle={() => toggleAccordion("reviews")}
              >
                <div>
                  <div id="product-review-container" data-role="product-review" className="mb-8">
                    {reviews.length > 0 ? (
                      <div className="space-y-6">
                        {reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 pb-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Rating initialValue={review.rating} size={16} readonly={true} SVGclassName="inline-block" />
                              <span className="text-xs text-gray-500">{review.date}</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-1">{review.summary}</h4>
                            <p className="text-sm text-gray-600 mb-1">By {review.nickname}</p>
                            <p className="text-sm text-gray-700 mt-2">{review.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        No reviews yet. Be the first to review this product!
                      </div>
                    )}
                  </div>
                  <ReviewForm
                    reviewRating={reviewRating}
                    reviewNickname={reviewNickname}
                    reviewSummary={reviewSummary}
                    reviewText={reviewText}
                    setReviewNickname={setReviewNickname}
                    setReviewSummary={setReviewSummary}
                    setReviewText={setReviewText}
                    handleSubmitReview={handleSubmitReview}
                    handleRating={handleRating}
                  />
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <div className="block-title mb-6">
            <strong className="text-xl font-semibold text-gray-800">Related Products</strong>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productsData.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map((relatedProduct) => (
              <ShortCard
                key={relatedProduct.id}
                imageUrl={relatedProduct.images[0].main}
                name={relatedProduct.title}
                price={relatedProduct.price}
                onClick={() => navigate(`/LumaHome/Product_page/${relatedProduct.id}`)}
                onFavoriteClick={() => console.log('❤️ Favorited!')}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {isModalOpen && product && (
        <div className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-50 bg-gradient-to-b from-black/50 to-transparent">
              <div className="text-white/80 text-sm font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                {modalImageIndex + 1} / {product.images.length}
              </div>
              <button
                onClick={closeModal}
                className="text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center p-8 md:p-12">
              <img
                src={product.images[modalImageIndex].main}
                alt={product.title}
                className="max-h-[85vh] max-w-full object-contain"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 backdrop-blur-md p-5 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 backdrop-blur-md p-5 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Thumbnails */}
            <div className="bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-8 pb-10 px-6">
              <div className="flex justify-center gap-3 overflow-x-auto px-4 max-w-full">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`cursor-pointer transition-all duration-200 flex-shrink-0 ${modalImageIndex === index ? 'ring-2 ring-white ring-offset-2 rounded-lg' : 'opacity-50 hover:opacity-100'
                      }`}
                  >
                    <img src={img.thumb} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Review Form Component (keep as is)
const ReviewForm: React.FC<{
  reviewRating: number;
  reviewNickname: string;
  reviewSummary: string;
  reviewText: string;
  setReviewNickname: (value: string) => void;
  setReviewSummary: (value: string) => void;
  setReviewText: (value: string) => void;
  handleSubmitReview: (e: React.FormEvent) => void;
  handleRating: (rate: number) => void;
}> = ({
  reviewRating,
  reviewNickname,
  reviewSummary,
  reviewText,
  setReviewNickname,
  setReviewSummary,
  setReviewText,
  handleSubmitReview,
  handleRating,
}) => (
    <div className="block review-add">
      <div className="block-title">
        <strong className="text-xl font-semibold text-gray-800">Write Your Own Review</strong>
      </div>
      <div className="block-content mt-6">
        <form onSubmit={handleSubmitReview} noValidate>
          {/* Rating Fieldset */}
          <fieldset className="field required review-field-ratings mb-6">
            <legend className="label text-sm font-medium text-gray-700 mb-3">Your Rating</legend>
            <div className="control">
              <Rating
                onClick={handleRating}
                initialValue={reviewRating}
                size={32}
                allowFraction={false}
                showTooltip={true}
                tooltipDefaultText="Select your rating"
                SVGclassName="inline-block"
                tooltipArray={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
              />
            </div>
          </fieldset>

          {/* Nickname Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Nickname *</label>
            <input
              type="text"
              value={reviewNickname}
              onChange={(e) => setReviewNickname(e.target.value)}
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Summary Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Summary *</label>
            <input
              type="text"
              value={reviewSummary}
              onChange={(e) => setReviewSummary(e.target.value)}
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Review Text Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Review *</label>
            <textarea
              rows={5}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full max-w-2xl px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );

export default ProductPage;