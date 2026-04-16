import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  FiShoppingCart,
  FiLogOut,
  FiPlusCircle,
  FiCheckCircle,
  FiX
} from 'react-icons/fi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../../../../app/Store/hooks';
import { removeFromWishlist, clearWishlist } from '../../../../../app/features/wishlistSlice';
import { addToCart } from '../../../../../app/features/cartSlice';
import { removeFromCompare, clearCompare } from '../../../../../app/features/compareSlice';

interface AccountSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  userName?: string;
  userEmail?: string;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  activeTab = 'My Account',
  onTabChange,
  userName = 'Fakhir Israr',
  userEmail = 'fakhirdeveloper@devcir.com',
}) => {
  const dispatch = useAppDispatch();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Get wishlist items from Redux store
  const wishlistItems = useAppSelector((state) => state.wishlist.items);
  
  // Get compare items from Redux store (from your compare slice)
  const compareItems = useAppSelector((state) => state.compare.items);

  // Menu items with routes
  const menuItems = [
    { label: 'My Account', icon: FiUser, route: '/LumaHome/MyAccountPage' },
    { label: 'My Orders', icon: FiPackage, route: '/LumaHome/MyOrdersPage' },
    { label: 'My Downloadable Products ❌', icon: FiDownload, route: '/LumaHome/MyDownloadableProducts' },
    { label: 'My Wish List', icon: FiHeart, route: '/LumaHome/MyWishListPage' },
    { label: 'Address Book', icon: FiBook, route: '/LumaHome/AddressBookPage' },
    { label: 'Account Information', icon: FiInfo, route: '/LumaHome/EditAccountInformationPage' },
    { label: 'Stored Payment Methods ❌', icon: FiCreditCard, route: '/LumaHome/StoredPaymentMethods' },
    { label: 'My Product Reviews ❌', icon: FiStar, route: '/LumaHome/MyProductReviews' },
    { label: 'Newsletter Subscriptions ❌', icon: FiMail, route: '/LumaHome/NewsletterSubscriptions' },
  ];

  // Clear all wishlist items
  const clearAllWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWishlist());
      console.log('🧹 Wishlist cleared');
    }
  };

  // Clear all compare items
  const clearAllCompare = () => {
    if (window.confirm('Are you sure you want to clear all items from compare?')) {
      dispatch(clearCompare());
      console.log('🧹 Compare list cleared');
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

  // Handle remove from compare
  const handleRemoveFromCompare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(removeFromCompare({ id }));
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
            const isActive = activeTab === item.label;
            return (
              <Link
                key={item.label}
                to={item.route}
                onClick={() => onTabChange?.(item.label)}
                className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-medium shadow-sm border border-blue-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                )}
                {item.label === 'My Wish List' && wishlistItems.length > 0 && (
                  <span className="ml-auto text-xs bg-pink-500 text-white px-1.5 py-0.5 rounded-full">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Auth Links Section */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link
            to="/LumaHome/CreateAccount"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            onClick={() => onTabChange?.('Create Account')}
          >
            <FiPlusCircle className="w-4 h-4" />
            <span>Create Account</span>
          </Link>

          <Link
            to="/LumaHome/LoginPage"
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => onTabChange?.('Login')}
          >
            <FiLogOut className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>

      {/* Compare Products Section - Dynamic from Redux/localStorage */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <FiShoppingCart className="w-5 h-5 text-blue-600" />
            Compare Products
          </h3>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {compareItems.length} / 4 items
          </span>
        </div>

        {/* Clear All button when compare has items */}
        {compareItems.length > 0 && (
          <div className="mb-3 flex justify-end">
            <button
              onClick={clearAllCompare}
              className="text-xs text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
            >
              <FiTrash2 className="w-3 h-3" />
              Clear All
            </button>
          </div>
        )}

        {compareItems.length === 0 ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <FiShoppingCart className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-400 text-sm">No items to compare</p>
            <p className="text-gray-300 text-xs mt-1">Add products to compare side by side</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
            {compareItems.map((item) => (
              <div key={item.id} className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { 
                        e.currentTarget.src = `https://via.placeholder.com/32/2563eb/ffffff?text=${encodeURIComponent(item.name.substring(0, 2))}`;
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 truncate">
                    {item.name}
                  </span>
                  {item.size && <span className="text-xs text-gray-400 ml-1">({item.size})</span>}
                </div>
                <button
                  onClick={(e) => handleRemoveFromCompare(item.id, e)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all ml-2 flex-shrink-0"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
          <Link
            to="/LumaHome/CompareProductsPage"
            className={`flex-1 px-4 py-2 text-white text-sm font-medium rounded-xl transition-all duration-200 shadow-sm text-center ${
              compareItems.length >= 2
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                : 'bg-gray-400 cursor-not-allowed pointer-events-none'
            }`}
          >
            Compare ({compareItems.length} items)
          </Link>

          <button
            onClick={clearAllCompare}
            disabled={compareItems.length === 0}
            className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear All
          </button>
        </div>

        {compareItems.length > 0 && compareItems.length < 2 && (
          <p className="text-xs text-gray-400 text-center mt-3">
            Add {2 - compareItems.length} more item(s) to compare (minimum 2 items required)
          </p>
        )}
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
              {wishlistItems.slice(0, 3).map((item: any, idx: any) => (
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

            {wishlistItems.length > 3 && (
              <p className="text-xs text-gray-400 text-center mt-2">
                +{wishlistItems.length - 3} more item(s)
              </p>
            )}

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

        <Link
          to="/LumaHome/MyWishListPage"
          className="text-blue-600 hover:text-blue-700 mt-4 inline-block text-sm font-medium"
          onClick={() => onTabChange?.('My Wish List')}
        >
          View Full Wish List →
        </Link>
      </div>

      {/* Checkout Links Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FiCheckCircle className="w-5 h-5 text-green-500" />
          Checkout
        </h3>

        <div className="space-y-2">
          <Link
            to="/LumaHome/ShippingPage"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => onTabChange?.('Shipping')}
          >
            <FiPackage className="w-4 h-4" />
            <span>Shipping Information</span>
          </Link>

          <Link
            to="/LumaHome/ReviewAndPaymentsPage"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => onTabChange?.('Review & Payments')}
          >
            <FiCreditCard className="w-4 h-4" />
            <span>Review & Payments</span>
          </Link>

          <Link
            to="/LumaHome/EditAddressPage"
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => onTabChange?.('Edit Address')}
          >
            <FiBook className="w-4 h-4" />
            <span>Edit Address</span>
          </Link>
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