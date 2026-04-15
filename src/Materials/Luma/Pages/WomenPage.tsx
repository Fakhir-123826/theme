import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";

const WomenPage = () => {
    const products = Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        title: "Radiant Tee",
        rating: 4,
        reviewCount: 3,
        price: "$22.00",
        sizes: [
            { id: 1, label: "XS" },
            { id: 2, label: "S" },
            { id: 3, label: "M" },
            { id: 4, label: "L" },
        ],
        colors: [
            { id: 1, label: "Blue", code: "#2563eb" },
            { id: 2, label: "Orange", code: "#f97316" },
            { id: 3, label: "Pink", code: "#ec4899" },
        ],
    }));

    return (
        <div className="bg-white">

            {/* ===== Breadcrumb ===== */}
            <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
                Home / Women
            </div>

            {/* ===== Title ===== */}
            <div className="max-w-7xl mx-auto px-4 mb-6">
                <h1 className="text-3xl font-semibold">Women</h1>
            </div>

            {/* ===== Layout ===== */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* ===== Sidebar ===== */}
                <aside className="hidden lg:block text-sm text-gray-700 space-y-6">

                    <div>
                        <p className="font-semibold mb-2">Shop By</p>
                        <p className="text-gray-500 text-xs mb-1">Category</p>
                        <div className="text-blue-600">Tops 50</div>
                        <div className="text-blue-600">Bottoms 25</div>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">TOPS</p>
                        <ul className="space-y-1">
                            <li>Hoodies & Sweatshirts</li>
                            <li>Jackets</li>
                            <li>Tees</li>
                            <li>Bras & Tanks</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">BOTTOMS</p>
                        <ul className="space-y-1">
                            <li>Pants</li>
                            <li>Shorts</li>
                        </ul>
                    </div>

                </aside>

                {/* ===== MAIN CONTENT ===== */}
                <div className="lg:col-span-3 space-y-10">

                    {/* ===== HERO ===== */}
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="http://dev.magentonew.local/media/wysiwyg/womens/womens-main.jpg"
                            className="w-full h-[300px] md:h-[420px] object-cover"
                        />

                        <div className="absolute right-6 top-6 bg-white p-6 max-w-sm shadow">
                            <p className="text-sm text-gray-500 mb-1">
                                New Luma Yoga Collection
                            </p>
                            <h2 className="text-xl font-semibold mb-3">
                                Yoga is ancient Clothing shouldn’t be
                            </h2>
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                                Shop New Yoga
                            </button>
                        </div>
                    </div>

                    {/* ===== PROMO GRID ===== */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* LEFT YELLOW */}
                        <div className="bg-yellow-400 p-6 flex items-center justify-between min-h-[220px] overflow-hidden">

                            {/* LEFT TEXT */}
                            <div className="max-w-[60%]">
                                <h3 className="text-lg font-semibold mb-2">
                                    You can’t have too many tees
                                </h3>
                                <p className="text-sm">
                                    4 tees for the price of 3. Right now
                                </p>

                                <span className="text-sm font-semibold mt-4 inline-block">
                                    Women's Tees →
                                </span>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="w-[40%] flex justify-end">
                                <img
                                    src="http://dev.magentonew.local/media/wysiwyg/womens/womens-t-shirts.png"
                                    className="h-28 md:h-36 object-contain"
                                    alt="Tees"
                                />
                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative overflow-hidden">
                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/home/home-pants.jpg"
                                className="w-full h-[220px] object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white p-4 text-sm shadow">
                                <p className="font-semibold">Hot pants Hot deals</p>
                                <p className="text-xl font-bold">20% OFF</p>
                                <p className="text-xs">Shop Pants →</p>
                            </div>
                        </div>

                    </div>

                    {/* ===== ERIN SECTION ===== */}
                    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between">

                        <div className="p-6">
                            <h3 className="text-lg font-semibold">
                                What would Erin wear?
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Luma founder Erin Renny shares her favorites!
                            </p>
                            <span className="text-sm font-semibold mt-2 inline-block">
                                Shop Erin Recommends →
                            </span>
                        </div>

                        <img
                            src="http://dev.magentonew.local/media/wysiwyg/womens/womens-erin.jpg"
                            className="w-full md:w-64 h-40 md:h-full object-cover"
                        />
                    </div>

                    {/* ===== CATEGORY CARDS ===== */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Pants */}
                        <div className="relative overflow-hidden">
                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/womens/womens-category-pants.jpg"
                                className="w-full h-[180px] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm shadow">
                                <p className="font-semibold">Luma pants</p>
                                <p>Pants for yoga, gym</p>
                                <span className="font-semibold text-xs mt-1 block">
                                    Shop Pants →
                                </span>
                            </div>
                        </div>

                        {/* Shorts */}
                        <div className="relative overflow-hidden">
                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/womens/womens-category-shorts.jpg"
                                className="w-full h-[180px] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm shadow">
                                <p className="font-semibold">Luma shorts</p>
                                <p>Exercise comfort</p>
                                <span className="font-semibold text-xs mt-1 block">
                                    Shop Shorts →
                                </span>
                            </div>
                        </div>

                        {/* Bras */}
                        <div className="relative overflow-hidden">
                            <img
                                src="http://dev.magentonew.local/media/wysiwyg/womens/womens-category-tanks.jpg"
                                className="w-full h-[180px] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-white p-3 text-sm shadow">
                                <p className="font-semibold">Luma Bras</p>
                                <p>Stock up for summer!</p>
                                <span className="font-semibold text-xs mt-1 block">
                                    Shop Now →
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* ===== PRODUCTS ===== */}
                    <div className="text-center pt-6">
                        <h2 className="text-2xl font-semibold">Hot Sellers</h2>
                        <p className="text-gray-500 text-sm">
                            Favorites from Luma shoppers
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                rating={product.rating}
                                reviewCount={product.reviewCount}
                                price={product.price}
                                sizes={product.sizes}
                                colors={product.colors}
                            />
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default WomenPage;