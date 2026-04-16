import { Link } from 'react-router-dom';

const HomePromoSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">

            {/* ================= HERO ================= */}
            <Link to="/LumaHome/Jackets_page" className="block relative mb-10 overflow-hidden group">
                <img
                    src="http://dev.magentonew.local/media/wysiwyg/home/home-main.jpg"
                    className="w-full aspect-[16/9] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Hero banner"
                />

                {/* Content (LIKE LUMA - WHITE BOX) */}
                <div className="absolute top-10 right-10 bg-white p-6 max-w-md shadow-lg">
                    <span className="block text-sm text-gray-500 mb-1">
                        New Luma Yoga Collection
                    </span>

                    <strong className="block text-2xl md:text-3xl font-bold mb-3 leading-tight">
                        Get fit and look fab in new seasonal styles
                    </strong>

                    <span className="inline-block bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Shop New Yoga
                    </span>
                </div>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Pants Banner */}
                <Link to="/LumaHome/Jackets_page" className="lg:row-span-3 relative block overflow-hidden group">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-pants.jpg"
                        className="w-full h-full object-cover aspect-[3/5] md:aspect-auto transition-transform duration-700 group-hover:scale-105"
                        alt="Pants banner"
                    />

                    <div className="absolute top-6 left-6 text-black">
                        <strong className="block text-2xl font-bold">20% OFF</strong>
                        <span className="block text-sm mt-1">
                            Luma pants when you shop today*
                        </span>
                        <span className="block mt-2 text-sm font-semibold hover:text-blue-600 transition-colors">
                            Shop Pants →
                        </span>
                    </div>
                </Link>

                {/* T-Shirts Banner */}
                <Link to="/LumaHome/Jackets_page" className="lg:col-span-3 bg-[#F4D03F] p-6 flex flex-col items-center justify-center text-center hover:bg-[#f5d64a] transition-colors">
                    <div className="mb-4">
                        <img
                            src="http://dev.magentonew.local/media/wysiwyg/home/home-t-shirts.png"
                            alt="T-shirts"
                            className="h-24 mb-4"
                        />
                    </div>

                    <strong className="block text-lg font-bold mb-2">
                        Even more ways to mix and match
                    </strong>

                    <span className="text-sm mb-3">
                        Buy 3 Luma tees get a 4th free
                    </span>

                    <span className="text-sm font-semibold hover:text-blue-600 transition-colors">
                        Shop Tees →
                    </span>
                </Link>

                {/* Erin Banner */}
                <Link to="/LumaHome/Jackets_page" className="lg:col-span-2 lg:row-span-2 relative block overflow-hidden group">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-erin.jpg"
                        className="w-full h-full object-cover aspect-[4/5] md:aspect-auto transition-transform duration-700 group-hover:scale-105"
                        alt="Erin banner"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 backdrop-blur-md p-6 text-center max-w-xs shadow-lg">
                            <strong className="block text-lg">Take it from Erin</strong>
                            <span className="block text-sm mt-1">
                                Luma founder Erin Renny shares her favorites!
                            </span>
                            <span className="block text-sm font-semibold mt-2 hover:text-blue-600 transition-colors">
                                Shop Erin Recommends →
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Performance Banner */}
                <Link to="/LumaHome/Jackets_page" className="lg:row-span-4 relative block overflow-hidden group">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-performance.jpg"
                        className="w-full h-full object-cover aspect-[3/6] md:aspect-auto transition-transform duration-700 group-hover:scale-105"
                        alt="Performance banner"
                    />

                    <div className="absolute bottom-4 left-4 bg-white p-3 text-sm shadow-lg">
                        <strong className="block">
                            Science meets performance
                        </strong>
                        <span className="block">
                            Wicking to raingear, Luma covers you
                        </span>
                        <span className="block font-semibold mt-1 hover:text-blue-600 transition-colors">
                            Shop Performance →
                        </span>
                    </div>
                </Link>

                {/* Eco Banner */}
                <Link to="/LumaHome/Jackets_page" className="lg:col-span-3 relative block overflow-hidden group">
                    <img
                        src="http://dev.magentonew.local/media/wysiwyg/home/home-eco.jpg"
                        className="w-full h-full object-cover aspect-[16/9] md:aspect-auto transition-transform duration-700 group-hover:scale-105"
                        alt="Eco banner"
                    />

                    <div className="absolute bottom-6 left-6 bg-white p-4 max-w-sm shadow-lg">
                        <strong className="block text-lg">
                            Twice around, twice as nice
                        </strong>
                        <span className="block text-sm mt-1">
                            Find conscientious, comfy clothing in our eco-friendly collection
                        </span>
                        <span className="block text-sm font-semibold mt-2 hover:text-blue-600 transition-colors">
                            Shop Eco-Friendly →
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default HomePromoSection;

