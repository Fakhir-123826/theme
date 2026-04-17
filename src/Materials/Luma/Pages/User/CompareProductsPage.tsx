import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/Store/hooks';
import { removeFromCompare, clearCompare } from '../../../../app/features/compareSlice';
import { addToCart } from '../../../../app/features/cartSlice';
import { addToWishlist } from '../../../../app/features/wishlistSlice';
import {
    FiX,
    FiShoppingCart,
    FiHeart,
    FiTrash2,
    FiPrinter,
    FiCheckCircle,
} from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdCompare } from 'react-icons/md';  // 👈 Fixed: Use MdCompare instead of FiGitCompare
import AccountSidebar from './Component/AccountSidebar';
import { showConfirm } from '../../utils/confirm';
import { showAlert } from '../../utils/alert';

const CompareProductsPage = () => {
    const dispatch = useAppDispatch();
    const compareItems = useAppSelector((state) => state.compare.items);
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    // Use Redux items if available
    const products = compareItems;

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromCompare({ id }));
    };

    // const handleClearAll = () => {
    //     if (window.confirm('Are you sure you want to clear all items from compare?')) {
    //         dispatch(clearCompare());
    //     }
    // };

    const handleClearAll = async () => {
        const confirmed = await showConfirm({
            title: 'Clear Compare List',
            message: `Are you sure you want to clear all ${compareItems.length} items from compare?`,
            confirmText: 'Yes, Clear All',
            cancelText: 'Cancel',
            type: 'warning',
        });

        if (confirmed) {
            dispatch(clearCompare());
            showAlert('Compare list cleared successfully!', 'success');
        }
    };
    const handleAddToCart = (item: any) => {
        dispatch(addToCart({
            id: item.productId || item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            image: item.image,
            color: item.color,
            size: item.size,
            inStock: true,
        }));
    };

    const handleAddToWishlist = (item: any) => {
        dispatch(addToWishlist({
            id: `wishlist-${item.id}-${Date.now()}`,
            productId: item.productId || item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            color: item.color,
            size: item.size,
            inStock: true,
            addedAt: new Date().toISOString(),
        }));
    };

    const handlePrint = () => {
        window.print();
    };

    const handleImageError = (productId: string) => {
        setImageErrors(prev => ({ ...prev, [productId]: true }));
    };

    const renderRating = (rating: number) => {
        if (!rating) return null;

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);

        return (
            <div className="flex items-center gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} className="w-3.5 h-3.5 text-yellow-400" />
                ))}
                {hasHalfStar && <FaStarHalfAlt className="w-3.5 h-3.5 text-yellow-400" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="w-3.5 h-3.5 text-gray-300" />
                ))}
                <span className="text-xs text-gray-500 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Page Header with Gradient */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-40" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <MdCompare className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Compare Products
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    Compare {products.length} product{products.length !== 1 ? 's' : ''} side by side
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {products.length > 0 && (
                                <button
                                    onClick={handleClearAll}
                                    className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-200 text-sm font-medium"
                                >
                                    <FiTrash2 className="w-4 h-4" />
                                    Clear All
                                </button>
                            )}
                            <button
                                onClick={handlePrint}
                                className="flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-medium"
                            >
                                <FiPrinter className="w-4 h-4" />
                                Print
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <AccountSidebar
                                activeTab="Compare Products"
                                onTabChange={() => { }}
                            />
                        </div>

                        {/* Main Compare Content */}
                        <div className="lg:col-span-9">
                            {products.length === 0 ? (
                                // Empty State
                                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-12 text-center">
                                    <div className="max-w-md mx-auto">
                                        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <MdCompare className="w-12 h-12 text-gray-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">No products to compare</h2>
                                        <p className="text-gray-500 mb-6">Add products from the shop to compare their features side by side</p>
                                        <Link
                                            to="/LumaHome/Jackets_page"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                                        >
                                            <FiShoppingCart className="w-4 h-4" />
                                            Browse Products
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                // Compare Table
                                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[1000px] border-collapse">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                                                    <th className="p-6 text-left font-semibold text-gray-700 w-48 sticky left-0 bg-gradient-to-r from-gray-50 to-white z-10">
                                                        Product Details
                                                    </th>
                                                    {products.map((product: any) => (
                                                        <th key={product.id} className="p-6 text-center border-l border-gray-100 relative group">
                                                            {/* Remove Button */}
                                                            <button
                                                                onClick={() => handleRemoveItem(product.id)}
                                                                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                                            >
                                                                <FiX className="w-5 h-5" />
                                                            </button>

                                                            <div className="flex flex-col items-center gap-4">
                                                                {/* Product Image */}
                                                                <div className="relative w-40 h-52 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                                                                    <img
                                                                        src={imageErrors[product.id] ? `https://via.placeholder.com/160x208/2563eb/ffffff?text=${encodeURIComponent(product.name.substring(0, 10))}` : product.image}
                                                                        alt={product.name}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                        onError={() => handleImageError(product.id)}
                                                                    />
                                                                </div>

                                                                {/* Product Name */}
                                                                <h3 className="font-semibold text-gray-800 text-lg text-center line-clamp-2">
                                                                    {product.name}
                                                                </h3>

                                                                {/* Price */}
                                                                <div className="flex items-baseline gap-1">
                                                                    <span className="text-2xl font-bold text-gray-900">
                                                                        ${product.price.toFixed(2)}
                                                                    </span>
                                                                </div>

                                                                {/* Rating */}
                                                                {product.rating && renderRating(product.rating)}

                                                                {/* Add to Cart Button */}
                                                                <button
                                                                    onClick={() => handleAddToCart(product)}
                                                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                                                >
                                                                    <FiShoppingCart className="w-4 h-4" />
                                                                    Add to Cart
                                                                </button>

                                                                {/* Wishlist Button */}
                                                                <button
                                                                    onClick={() => handleAddToWishlist(product)}
                                                                    className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-1 text-sm"
                                                                >
                                                                    <FiHeart className="w-4 h-4" />
                                                                    <span>Add to Wishlist</span>
                                                                </button>
                                                            </div>
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {/* SKU Row */}
                                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-5 font-medium text-gray-700 bg-gray-50/50 sticky left-0 z-10">
                                                        SKU
                                                    </td>
                                                    {products.map((product: any) => (
                                                        <td key={`sku-${product.id}`} className="p-5 text-center border-l border-gray-100 text-sm text-gray-600">
                                                            {product.sku || product.productId || 'N/A'}
                                                        </td>
                                                    ))}
                                                </tr>

                                                {/* Description Row */}
                                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-5 font-medium text-gray-700 bg-gray-50/50 sticky left-0 z-10 align-top">
                                                        Description
                                                    </td>
                                                    {products.map((product: any) => (
                                                        <td key={`desc-${product.id}`} className="p-5 border-l border-gray-100 text-sm text-gray-600 leading-relaxed align-top">
                                                            {product.description || 'No description available'}
                                                        </td>
                                                    ))}
                                                </tr>

                                                {/* Features Row */}
                                                <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-5 font-medium text-gray-700 bg-gray-50/50 sticky left-0 z-10 align-top">
                                                        Features
                                                    </td>
                                                    {products.map((product: any) => (
                                                        <td key={`features-${product.id}`} className="p-5 border-l border-gray-100 text-sm text-gray-600 align-top">
                                                            {product.features && product.features.length > 0 ? (
                                                                <ul className="space-y-2">
                                                                    {product.features.map((feature: string, idx: number) => (
                                                                        <li key={idx} className="flex items-start gap-2">
                                                                            <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                                            <span>{feature}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : (
                                                                'No features listed'
                                                            )}
                                                        </td>
                                                    ))}
                                                </tr>

                                                {/* Color & Size Row (if available) */}
                                                {(products.some((p: any) => p.color || p.size)) && (
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                                        <td className="p-5 font-medium text-gray-700 bg-gray-50/50 sticky left-0 z-10">
                                                            Options
                                                        </td>
                                                        {products.map((product: any) => (
                                                            <td key={`options-${product.id}`} className="p-5 border-l border-gray-100 text-sm text-gray-600 text-center">
                                                                <div className="space-y-1">
                                                                    {product.color && <p>Color: {product.color}</p>}
                                                                    {product.size && <p>Size: {product.size}</p>}
                                                                    {!product.color && !product.size && <span className="text-gray-400">—</span>}
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProductsPage;