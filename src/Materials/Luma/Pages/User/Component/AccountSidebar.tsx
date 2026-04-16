import React, { useState } from 'react';
import {
  FiUser,
  FiPackage,
  FiDownload,
  FiHeart,
  FiBook,
  FiInfo,
  FiCreditCard,
  FiStar,
  FiMail,
  FiTrash2,
  FiShoppingCart
} from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../../../app/Store/hooks';
import { removeFromWishlist, clearWishlist } from '../../../../../app/features/wishlistSlice';
import { addToCart } from '../../../../../app/features/cartSlice';

interface AccountSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  userName?: string;
  userEmail?: string;
  compareItems?: string[];
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  activeTab = 'My Account',
  onTabChange,
  userName = 'Fakhir Israr',
  userEmail = 'fakhirdeveloper@devcir.com',
  compareItems = [
    "Argus All-Weather Tank",
    "Hero Hoodie",
    "Juno Jacket",
    "Neve Studio Dance Jacket",
    "Riona Full Zip Jacket",
    "Ingrid Running Jacket"
  ],
}) => {
  const dispatch = useAppDispatch();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Get wishlist items from Redux store
  const wishlistItems = useAppSelector((state) => state.wishlist.items);

  const menuItems = [
    { label: 'My Account', icon: FiUser },
    { label: 'My Orders', icon: FiPackage },
    { label: 'My Downloadable Products', icon: FiDownload },
    { label: 'My Wish List', icon: FiHeart },
    { label: 'Address Book', icon: FiBook },
    { label: 'Account Information', icon: FiInfo },
    { label: 'Stored Payment Methods', icon: FiCreditCard },
    { label: 'My Product Reviews', icon: FiStar },
    { label: 'Newsletter Subscriptions', icon: FiMail },
  ];

  // Clear all wishlist items
  const clearAllWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWishlist());
      console.log('🧹 Wishlist cleared');
    }
  };

  // Handle remove from wishlist
  const handleRemoveFromWishlist = (item: any, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeFromWishlist({
      id: item.id,
      size: item.size,
      color: item.color
    }));
  };

  // Handle add to cart from wishlist
  const handleAddToCart = (item: any) => {
    dispatch(addToCart({
      id: item.productId,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
      color: item.color,
      size: item.size,
      inStock: true,
    }));
  };

  // Handle add all to cart
  const handleAddAllToCart = () => {
    wishlistItems.forEach(item => {
      dispatch(addToCart({
        id: item.productId,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        color: item.color,
        size: item.size,
        inStock: true,
      }));
    });
  };

  // Handle image error
  const handleImageError = (itemId: string) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  // Get placeholder image
  const getPlaceholderImage = (name: string) => {
    return `https://via.placeholder.com/150/2563eb/ffffff?text=${encodeURIComponent(name.substring(0, 10))}`;
  };

  return (
    <div className="sticky top-24 space-y-6">
      {/* Main Navigation Menu */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-sm opacity-40" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              {userName.charAt(0)}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onTabChange?.(item.label);
                }}
                className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${activeTab === item.label
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-medium shadow-sm border border-blue-100'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === item.label ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                <span>{item.label}</span>
                {activeTab === item.label && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Compare Products Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <FiShoppingCart className="w-5 h-5 text-blue-600" />
            Compare Products
          </h3>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{compareItems.length} items</span>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
          {compareItems.map((product, i) => (
            <div key={i} className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-600 group-hover:text-gray-900 flex items-center gap-2">
                <span className="text-gray-400">✕</span>
                {product}
              </span>
              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all">
                <FiTrash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-medium rounded-xl hover:from-gray-900 hover:to-gray-800 transition-all duration-200 shadow-sm">
            Compare
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 transition-all duration-200">
            Clear All
          </button>
        </div>
      </div>

      {/* My Wish List Section - Connected to Redux */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <FaHeart className="w-5 h-5 text-pink-500" />
            My Wish List
          </h3>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Clear All button when wishlist has items */}
        {wishlistItems.length > 0 && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={clearAllWishlist}
              className="text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
            >
              <FiTrash2 className="w-3 h-3" />
              Clear All
            </button>
          </div>
        )}

        {wishlistItems.length === 0 ? (
          <div className="text-center py-8">
            <FaRegHeart className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">Your wishlist is empty</p>
            <p className="text-gray-300 text-xs mt-1">Click the ❤️ on any product to add it here</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar">
              {wishlistItems.map((item: any, idx: any) => (
                <div key={item.id || idx} className="flex gap-4 items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex-shrink-0 overflow-hidden shadow-sm">
                    <img
                      src={imageErrors[item.id] ? getPlaceholderImage(item.name) : item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(item.id)}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                    {item.size && <p className="text-xs text-gray-500">Size: {item.size}</p>}
                    {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                    <p className="text-lg font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={(e) => handleRemoveFromWishlist(item, e)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove from wishlist"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={handleAddAllToCart}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-sm"
              >
                Add All to Cart ({wishlistItems.length} items)
              </button>
            </div>
          </>
        )}

        <a href="/LumaHome/MyWishListPage" className="text-blue-600 hover:text-blue-700 mt-4 inline-block text-sm font-medium">
          View Full Wish List →
        </a>
      </div>

      {/* Recently Ordered Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recently Ordered</h3>

        <div className="flex items-center gap-4 mb-5">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Olivia 1/4 Zip Light Jacket</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-2xl text-sm transition-all duration-200">
            Add to Cart
          </button>
          <button className="flex-1 border border-gray-300 hover:bg-gray-50 font-medium py-3 rounded-2xl text-sm transition-all duration-200">
            View All
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default AccountSidebar;