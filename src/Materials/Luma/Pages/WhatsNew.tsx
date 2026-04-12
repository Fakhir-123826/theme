import ProductCard from "../Components/LongCard";
import Footer from "../Components/Footer";

const WhatsNew = () => {
  const products = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    title: "Radiant Tee",
    rating: 4,
    reviewCount: 3,
    price: "$24.00",
    sizes: [
      { id: 1, label: "28" },
      { id: 2, label: "29" },
    ],
    colors: [
      { id: 1, label: "Black", code: "#000" },
      { id: 2, label: "Blue", code: "#1d4ed8" },
      { id: 3, label: "Pink", code: "#ec4899" },
    ],
  }));

  return (
    <div className="bg-white">

      {/* ================= PAGE HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
        Home / What's New
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h1 className="text-3xl font-semibold">What's New</h1>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block lg:col-span-1 text-sm text-gray-700 space-y-8">

          <div>
            <p className="font-semibold mb-3">NEW IN WOMEN'S</p>
            <ul className="space-y-2">
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Tees</li>
              <li>Bras & Tanks</li>
              <li>Pants</li>
              <li>Shorts</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">NEW IN MEN'S</p>
            <ul className="space-y-2">
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Tees</li>
              <li>Tanks</li>
              <li>Pants</li>
              <li>Shorts</li>
            </ul>
          </div>

        </aside>

        {/* ================= CONTENT ================= */}
        <div className="lg:col-span-4 space-y-10 my-5">

          {/* HERO */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="http://dev.magentonew.local/media/wysiwyg/new/new-main.jpg"
              className="w-full h-[350px] md:h-[450px] object-cover"
            />

            <div className="absolute right-8 top-8 bg-white p-6 max-w-sm shadow">
              <p className="text-sm text-gray-500 mb-1">
                New Luma Yoga Collection
              </p>
              <h2 className="text-xl font-semibold mb-3">
                The very latest yoga styles plus twists on timeless classics
              </h2>
              <button className="bg-blue-600 text-white px-5 py-2 text-sm">
                Shop New Yoga
              </button>
            </div>
          </div>

          {/* ===== BIG 2 CARDS UNDER HERO ===== */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/new/new-performance.jpg"
                className="w-full h-[260px] md:h-[300px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 shadow text-sm max-w-xs">
                <p className="font-semibold text-base">Whatever day brings</p>
                <p className="mt-1">
                  Luma Cocona™ for breathability, CoolTech™ for wicking
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/new/new-eco.jpg"
                className="w-full h-[260px] md:h-[300px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 shadow text-sm max-w-xs">
                <p className="font-semibold text-base">A sense of renewal</p>
                <p className="mt-1">
                  Enjoy comfort with eco-friendly choices
                </p>
              </div>
            </div>

          </div>

          {/* PRODUCTS TITLE */}
          <div className="text-center pt-6">
            <h2 className="text-2xl font-semibold">Luma's Latest</h2>
            <p className="text-gray-500 text-sm mt-1">
              Just in time for the new season!
            </p>
          </div>

          {/* PRODUCTS GRID */}
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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

export default WhatsNew;