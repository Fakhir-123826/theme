import React from 'react';
import { Link } from 'react-router-dom';

const HomePromoSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            {/* ================= HERO ================= */}
            <Link to="/women" className="block relative mb-10 overflow-hidden">

                <img
                    src="http://dev.magentonew.local/media/wysiwyg/home/home-main.jpg"
                    className="w-full h-[400px] md:h-[520px] object-cover"
                    alt=""
                />

                {/* Content (LIKE LUMA - WHITE BOX) */}
                <div className="absolute top-10 right-10 bg-white p-6 max-w-md shadow">
                    <span className="block text-sm text-gray-500 mb-1">
                        New Luma Yoga Collection
                    </span>

                    <strong className="block text-2xl md:text-3xl font-bold mb-3 leading-tight">
                        Get fit and look fab in new seasonal styles
                    </strong>

                    <span className="inline-block bg-blue-600 text-white px-5 py-2 text-sm font-semibold">
                        Shop New Yoga
                    </span>
                </div>

            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <Link to="#" className="lg:row-span-3 relative block overflow-hidden">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-pants.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    <div className="absolute top-6 left-6 text-black">
                        <strong className="block text-2xl font-bold">20% OFF</strong>
                        <span className="block text-sm mt-1">
                            Luma pants when you shop today*
                        </span>
                        <span className="block mt-2 text-sm font-semibold">
                            Shop Pants →
                        </span>
                    </div>
                </Link>

                <Link to="#" className="lg:col-span-3 bg-[#F4D03F] p-6 flex flex-col items-center justify-center text-center">
                    <div className="mb-4">
                        <img
                            src="http://dev.magentonew.local/media/wysiwyg/home/home-t-shirts.png"
                            alt=""
                            className="h-24 mb-4"
                        />
                    </div>

                    <strong className="block text-lg font-bold mb-2">
                        Even more ways to mix and match
                    </strong>

                    <span className="text-sm mb-3">
                        Buy 3 Luma tees get a 4th free
                    </span>

                    <span className="text-sm font-semibold">
                        Shop Tees →
                    </span>
                </Link>

                <Link to="#" className="lg:col-span-2 lg:row-span-2 relative block overflow-hidden">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-erin.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 backdrop-blur-md p-6 text-center max-w-xs shadow">
                            <strong className="block text-lg">Take it from Erin</strong>
                            <span className="block text-sm mt-1">
                                Luma founder Erin Renny shares her favorites!
                            </span>
                            <span className="block text-sm font-semibold mt-2">
                                Shop Erin Recommends →
                            </span>
                        </div>
                    </div>
                </Link>

                <Link to="#" className="lg:row-span-4 relative block overflow-hidden">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-performance.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    <div className="absolute bottom-4 left-4 bg-white p-3 text-sm">
                        <strong className="block">
                            Science meets performance
                        </strong>
                        <span className="block">
                            Wicking to raingear, Luma covers you
                        </span>
                        <span className="block font-semibold mt-1">
                            Shop Performance →
                        </span>
                    </div>
                </Link>

                <Link to="#" className="lg:col-span-3 relative block overflow-hidden">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-eco.jpg"
                        className="w-full h-full object-cover"
                        alt=""
                    />

                    <div className="absolute bottom-6 left-6 bg-white p-4 max-w-sm">
                        <strong className="block text-lg">
                            Twice around, twice as nice
                        </strong>
                        <span className="block text-sm mt-1">
                            Find conscientious, comfy clothing in our eco-friendly collection
                        </span>
                        <span className="block text-sm font-semibold mt-2">
                            Shop Eco-Friendly →
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default HomePromoSection;