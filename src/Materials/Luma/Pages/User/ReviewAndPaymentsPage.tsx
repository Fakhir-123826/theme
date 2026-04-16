import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const ReviewAndPaymentsPage = () => {
    const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);

    const orderItems = [
        { name: "Hero Hoodie", price: 54.00, qty: 1 },
        { name: "Juno Jacket", price: 77.00, qty: 1 }
    ];

    const subtotal = 131.00;
    const shipping = 10.00;
    const total = subtotal + shipping;

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Logo */}
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
                                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">✓</div>
                                <p className="text-gray-500">Shipping</p>
                            </div>
                            <div className="h-px w-20 bg-orange-500" />
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                                <p className="font-medium text-orange-600">Review & Payments</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Left Side - Payment Method */}
                        <div className="lg:col-span-7">

                            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Payment Method</h2>

                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

                                <div className="mb-6">
                                    <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked
                                            className="w-4 h-4 accent-orange-500"
                                        />
                                        Check / Money order
                                    </label>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            checked={isBillingSameAsShipping}
                                            onChange={(e) => setIsBillingSameAsShipping(e.target.checked)}
                                            className="mt-1 w-4 h-4 accent-blue-600"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">My billing and shipping address are the same</p>
                                            <div className="mt-3 text-sm text-gray-600 space-y-1">
                                                <p>Fakhir Israr</p>
                                                <p>dsad, sadsa</p>
                                                <p>asd, Alaska, 78966</p>
                                                <p>United States</p>
                                                <p>asda</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apply Discount Code */}
                                    <div className="pt-6 border-t border-gray-100">
                                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                                            Apply Discount Code
                                            <span className="text-xs">▼</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Place Order Button */}
                                <div className="mt-12 flex justify-end">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-12 py-4 rounded-2xl transition-all text-lg shadow-sm">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Order Summary */}
                        <div className="lg:col-span-5">
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-8">

                                <h3 className="font-semibold text-xl mb-6">Order Summary</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Cart Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-medium">Flat Rate - Fixed</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Shipping Cost</span>
                                        <span className="font-medium">${shipping.toFixed(2)}</span>
                                    </div>

                                    <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg">
                                        <span>Order Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="text-sm font-medium mb-3">2 Items in Cart</p>

                                    {orderItems.map((item, index) => (
                                        <div key={index} className="flex justify-between text-sm py-2">
                                            <span>{item.name} × {item.qty}</span>
                                            <span>${(item.price * item.qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Ship To */}
                                <div className="mt-10 pt-8 border-t border-gray-100">
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="font-medium">Ship To:</p>
                                        <button className="text-blue-600 text-sm hover:underline">✎</button>
                                    </div>
                                    <div className="text-sm text-gray-600 space-y-1">
                                        <p>Fakhir Israr</p>
                                        <p>dsad, sadsa</p>
                                        <p>asd, Alaska, 78966</p>
                                        <p>United States</p>
                                        <p>asda</p>
                                    </div>
                                </div>

                                {/* Shipping Method */}
                                <div className="mt-8">
                                    <div className="flex justify-between items-center mb-3">
                                        <p className="font-medium">Shipping Method:</p>
                                        <button className="text-blue-600 text-sm hover:underline">✎</button>
                                    </div>
                                    <p className="text-sm text-gray-600">Flat Rate - Fixed</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewAndPaymentsPage;