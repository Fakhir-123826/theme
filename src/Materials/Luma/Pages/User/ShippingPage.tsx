import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShippingPage = () => {
    const [selectedShipping, setSelectedShipping] = useState(10);

    const orderItems = [
        {
            name: "Hero Hoodie",
            price: 54.00,
            qty: 1,
            image: "https://via.placeholder.com/80x80/111827/ffffff?text=Hero+Hoodie"
        },
        {
            name: "Juno Jacket",
            price: 77.00,
            qty: 1,
            image: "https://via.placeholder.com/80x80/6b21a8/ffffff?text=Juno+Jacket"
        }
    ];

    return (
        <>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Logo & Progress */}
                    <div className="flex justify-center mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">L</span>
                            </div>
                            <span className="text-3xl font-bold text-gray-900">LUMA</span>
                        </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex justify-center mb-12">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">1</div>
                                <div>
                                    <p className="font-medium text-orange-600">Shipping</p>
                                </div>
                            </div>
                            <div className="h-px w-20 bg-gray-300" />
                            <div className="flex items-center gap-3 opacity-50">
                                <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-400 font-bold">2</div>
                                <div>
                                    <p className="font-medium text-gray-400">Review & Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Left Side - Shipping Address & Methods */}
                        <div className="lg:col-span-7 space-y-10">

                            {/* Shipping Address */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Address</h2>

                                <div className="border border-orange-500 rounded-2xl p-6 bg-white relative">
                                    <div className="absolute top-6 right-6 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm">✔</span>
                                    </div>
                                    <div className="space-y-1 text-gray-700">
                                        <p className="font-medium">Fakhir Israr</p>
                                        <p>dsad, sadsa</p>
                                        <p>asd, Alaska, 78966</p>
                                        <p>United States</p>
                                        <p className="pt-2">asda</p>
                                    </div>
                                </div>

                                <button className="mt-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-5 py-2.5 rounded-xl hover:bg-gray-50 transition">
                                    <span className="text-lg">+</span> New Address
                                </button>
                            </div>

                            {/* Shipping Methods */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Shipping Methods</h2>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5">
                                    <label className="flex items-center gap-4 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            checked={selectedShipping === 10}
                                            onChange={() => setSelectedShipping(10)}
                                            className="w-5 h-5 accent-orange-500"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <span className="font-medium">$10.00</span>
                                                <span className="text-gray-500">Fixed</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Flat Rate</p>
                                        </div>
                                    </label>

                                    <label className="flex items-center gap-4 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            checked={selectedShipping === 20}
                                            onChange={() => setSelectedShipping(20)}
                                            className="w-5 h-5 accent-orange-500"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <span className="font-medium">$20.00</span>
                                                <span className="text-gray-500">Table Rate</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Best Way</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Next Button */}
                            <div className="flex justify-end pt-6">
                                <Link to="/LumaHome/ReviewAndPaymentsPage">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-12 py-4 rounded-2xl transition-all text-lg">
                                        Next
                                    </button>

                                </Link>
                            </div>
                        </div>

                        {/* Right Side - Order Summary */}
                        <div className="lg:col-span-5">
                            <div className="bg-gray-100 rounded-3xl p-8 sticky top-8">
                                <h3 className="font-semibold text-xl mb-6">Order Summary</h3>

                                <div className="bg-white rounded-2xl p-6 mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="font-medium">2 Items in Cart</p>
                                        <span className="text-xs text-gray-400">▼</span>
                                    </div>

                                    {orderItems.map((item, index) => (
                                        <div key={index} className="flex gap-4 py-5 border-t border-gray-100 first:border-t-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <p className="font-medium text-gray-900">{item.name}</p>
                                                <p className="text-sm text-gray-500 mt-1">Qty: {item.qty}</p>
                                                <p className="font-semibold mt-2">${item.price.toFixed(2)}</p>
                                            </div>
                                            <button className="text-blue-600 text-sm hover:underline self-start">View Details</button>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center text-xs text-gray-500 mt-8">
                                    Copyright © 2013-present Magento, Inc. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShippingPage;