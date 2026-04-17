import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/Store/hooks';
import { removeFromWishlist, clearWishlist } from '../../../../app/features/wishlistSlice';
import { addToCart } from '../../../../app/features/cartSlice';
import AccountSidebar from './Component/AccountSidebar';
import { FaTrash, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { showAlert } from '../../utils/alert';
import { showConfirm } from '../../utils/confirm';

const MyWishListPage = () => {
    const dispatch = useAppDispatch();
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    // Get wishlist items from Redux storeboolean
    const wishlistItems = useAppSelector((state) => state.wishlist.items);
    const [compareItems] = useState([
        "Argus All-Weather Tank",
        "Hero Hoodie",
        "Juno Jacket",
        "Neve Studio Dance Jacket",
        "Riona Full Zip Jacket",
        "Ingrid Running Jacket"
    ]);

    // // Handle remove single item
    // const handleRemoveItem = (item: any) => {
    //     if (window.confirm(`Remove "${item.name}" from your wishlist?`)) {
    //         dispatch(removeFromWishlist({
    //             id: item.id,
    //             size: item.size,
    //             color: item.color
    //         }));
    //     }
    // };


    // Handle remove single item
    const handleRemoveItem = async (item: any) => {
        const confirmed = await showConfirm({
            title: 'Remove from Wishlist',
            message: `Remove "${item.name}" from your wishlist?`,
            confirmText: 'Remove',
            cancelText: 'Cancel',
            type: 'error',
        });

        if (confirmed) {
            dispatch(removeFromWishlist({
                id: item.id,
                size: item.size,
                color: item.color
            }));
            showAlert(`${item.name} removed from wishlist`, 'info');
        }
    };

    // Handle add to cart
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
        if (wishlistItems.length === 0) return;

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

        showAlert(`Added ${wishlistItems.length} item(s) to cart!`);
    };

    // Handle clear all wishlist
    // const handleClearAll = () => {
    //     if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
    //         dispatch(clearWishlist());
    //     }
    // };

    const handleClearAll = async () => {
        const confirmed = await showConfirm({
            title: 'Clear Wishlist',
            message: 'Are you sure you want to clear your entire wishlist?',
            confirmText: 'Yes, Clear All',
            cancelText: 'Cancel',
            type: 'warning',
        });

        if (confirmed) {
            dispatch(clearWishlist());
            showAlert('Wishlist cleared!', 'success');
        }
    };


    // Handle image error
    const handleImageError = (itemId: string) => {
        setImageErrors(prev => ({ ...prev, [itemId]: true }));
    };

    // Get placeholder image
    const getPlaceholderImage = (name: string) => {
        return `https://via.placeholder.com/300x400/2563eb/ffffff?text=${encodeURIComponent(name.substring(0, 15))}`;
    };

    // Share wishlist (simple implementation)
    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        showAlert('Wishlist link copied to clipboard!');
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                    {/* Page Title */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur-md opacity-40" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <FaHeart className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    My Wish List
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    {wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}
                                </p>
                            </div>
                        </div>

                        {wishlistItems.length > 0 && (
                            <button
                                onClick={handleClearAll}
                                className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 hover:bg-red-50 transition-all"
                            >
                                <FaTrash className="w-4 h-4" />
                                Clear All
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <AccountSidebar
                                activeTab="My Wish List"
                                onTabChange={() => { }}
                            // compareItems={compareItems}
                            />
                        </div>

                        {/* Main Wish List Content */}
                        <div className="lg:col-span-9 space-y-12">

                            {wishlistItems.length === 0 ? (
                                // Empty Wishlist State
                                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-12 text-center">
                                    <div className="max-w-md mx-auto">
                                        <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <FaHeart className="w-12 h-12 text-pink-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h2>
                                        <p className="text-gray-500 mb-6">Click the ❤️ on any product to add it to your wishlist</p>
                                        <a
                                            href="/LumaHome/Jackets_page"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                                        >
                                            <FaShoppingCart className="w-4 h-4" />
                                            Start Shopping
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Wish List Products Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {wishlistItems.map((item: any) => (
                                            <div key={item.id} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                                <div className="relative h-80 bg-gray-100 overflow-hidden">
                                                    <img
                                                        src={imageErrors[item.id] ? getPlaceholderImage(item.name) : item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        onError={() => handleImageError(item.id)}
                                                    />
                                                    {/* Remove button overlay on image */}
                                                    <button
                                                        onClick={() => handleRemoveItem(item)}
                                                        className="absolute top-3 right-3 bg-white/90 hover:bg-red-500 text-gray-600 hover:text-white p-2 rounded-full transition-all duration-200 shadow-md"
                                                        title="Remove from wishlist"
                                                    >
                                                        <FaTrash className="w-4 h-4" />
                                                    </button>
                                                </div>

                                                <div className="p-6">
                                                    <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2 line-clamp-2">
                                                        {item.name}
                                                    </h3>

                                                    {item.size && (
                                                        <p className="text-sm text-gray-500 mb-1">Size: {item.size}</p>
                                                    )}
                                                    {item.color && (
                                                        <p className="text-sm text-gray-500 mb-3">Color: {item.color}</p>
                                                    )}

                                                    <p className="text-2xl font-bold text-gray-900 mb-6">
                                                        ${item.price.toFixed(2)}
                                                    </p>

                                                    <div className="flex flex-col gap-3">
                                                        <button
                                                            onClick={() => handleAddToCart(item)}
                                                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-2xl font-medium transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                                                        >
                                                            <FaShoppingCart className="w-4 h-4" />
                                                            Add to Cart
                                                        </button>
                                                        <div className="flex gap-3">
                                                            <button
                                                                onClick={() => handleRemoveItem(item)}
                                                                className="flex-1 border border-gray-300 hover:border-red-300 hover:bg-red-50 py-3 rounded-2xl text-sm font-medium transition-all duration-200 text-gray-600 hover:text-red-600"
                                                            >
                                                                Remove
                                                            </button>
                                                            <button
                                                                onClick={handleShare}
                                                                className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1"
                                                            >
                                                                <FiShare2 className="w-4 h-4" />
                                                                Share
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <button
                                            onClick={handleAddAllToCart}
                                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md flex items-center gap-2"
                                        >
                                            <FaShoppingCart className="w-4 h-4" />
                                            Add All to Cart ({wishlistItems.length} items)
                                        </button>
                                        <button
                                            onClick={handleShare}
                                            className="px-8 py-3 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
                                        >
                                            <FiShare2 className="w-4 h-4" />
                                            Share Wish List
                                        </button>
                                        <button
                                            onClick={handleClearAll}
                                            className="px-8 py-3 border border-red-300 rounded-2xl font-medium hover:bg-red-50 text-red-600 transition-all duration-200 flex items-center gap-2"
                                        >
                                            <FaTrash className="w-4 h-4" />
                                            Clear All
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyWishListPage;