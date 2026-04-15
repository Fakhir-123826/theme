import  { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AccountSidebar from './Component/AccountSidebar';

const MyWishListPage = () => {
    const [wishListItems] = useState([
        {
            id: 1,
            name: "Olivia 1/4 Zip Light Jacket",
            price: 77.00,
            image: "https://via.placeholder.com/300x400/3b82f6/ffffff?text=Blue+Jacket",
            rating: 4,
            reviews: 3,
        },
        {
            id: 2,
            name: "Hero Hoodie",
            price: 54.00,
            image: "https://via.placeholder.com/300x400/111827/ffffff?text=Hero+Hoodie",
            rating: 5,
            reviews: 12,
        },
        {
            id: 3,
            name: "Juno Jacket",
            price: 77.00,
            image: "https://via.placeholder.com/300x400/6b21a8/ffffff?text=Juno+Jacket",
            rating: 4,
            reviews: 3,
        },
    ]);

    const [compareItems] = useState([
        "Argus All-Weather Tank",
        "Hero Hoodie",
        "Juno Jacket",
        "Neve Studio Dance Jacket",
        "Riona Full Zip Jacket",
        "Ingrid Running Jacket"
    ]);

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
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    My Wish List
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">3 item(s)</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Sidebar - Using your component */}
                        <div className="lg:col-span-3">
                            <AccountSidebar
                                activeTab="My Wish List"
                                onTabChange={() => { }}
                            />
                        </div>

                        {/* Main Wish List Content */}
                        <div className="lg:col-span-9 space-y-12">

                            {/* Wish List Products Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {wishListItems.map((item) => (
                                    <div key={item.id} className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden group">
                                        <div className="relative h-80 bg-gray-100">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2">{item.name}</h3>

                                            <div className="flex items-center gap-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-lg ${i < item.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                                                ))}
                                                <span className="text-sm text-gray-500 ml-2">({item.reviews} Reviews)</span>
                                            </div>

                                            <p className="text-2xl font-bold text-gray-900 mb-6">${item.price.toFixed(2)}</p>

                                            <div className="flex flex-col gap-3">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium transition">
                                                    Add to Cart
                                                </button>
                                                <div className="flex gap-3">
                                                    <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl text-sm font-medium transition">
                                                        Update Wish List
                                                    </button>
                                                    <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 rounded-2xl text-sm font-medium transition">
                                                        Share
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-gray-900 text-white rounded-2xl font-medium hover:bg-black transition">
                                    Update Wish List
                                </button>
                                <button className="px-8 py-3 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50 transition">
                                    Share Wish List
                                </button>
                                <button className="px-8 py-3 border border-gray-300 rounded-2xl font-medium hover:bg-gray-50 transition">
                                    Add All to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MyWishListPage;