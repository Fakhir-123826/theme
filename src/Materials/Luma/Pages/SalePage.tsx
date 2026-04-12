import React from "react";

const SalePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-3xl font-semibold mb-8">Sale</h1>

      {/* ===== MAIN GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden lg:block text-sm text-gray-700 space-y-6">

          <div>
            <p className="font-semibold mb-2">WOMEN'S DEALS</p>
            <ul className="space-y-1">
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Tees</li>
              <li>Bras & Tanks</li>
              <li>Pants</li>
              <li>Shorts</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">MEN'S DEALS</p>
            <ul className="space-y-1">
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Tees</li>
              <li>Pants</li>
              <li>Shorts</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">GEAR DEALS</p>
            <ul className="space-y-1">
              <li>Bags</li>
              <li>Fitness Equipment</li>
            </ul>
          </div>

        </aside>

        {/* ================= CONTENT ================= */}
        <div className="lg:col-span-3 space-y-8">

          {/* ===== HERO ===== */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="http://dev.magentonew.local/media/wysiwyg/sale/sale-main.jpg"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />

            <div className="absolute right-6 top-6 bg-white p-6 max-w-sm shadow">
              <p className="text-sm text-gray-500 mb-1">
                Women’s Deals
              </p>
              <h2 className="text-xl font-semibold mb-3">
                Pristine prices on pants, tanks and bras.
              </h2>
              <button className="bg-blue-600 text-white px-4 py-2 text-sm">
                Shop Women’s Deals
              </button>
            </div>
          </div>

          {/* ===== TWO GRID ===== */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* LEFT */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/sale/sale-mens.jpg"
                className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-6 left-6 bg-white/90 p-4 shadow text-sm">
                <p className="font-semibold text-base">Men’s Bargains</p>
                <p className="text-xs mt-1">
                  Stretch your budget with active attire
                </p>
                <span className="block mt-2 text-xs font-semibold">
                  Shop Men's Deals →
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src="http://dev.magentonew.local/media/wysiwyg/sale/sale-gear.jpg"
                className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute top-6 left-6 bg-white/90 p-4 shadow text-sm">
                <p className="font-semibold text-base">Luma Gear Steals</p>
                <p className="text-xs mt-1">
                  Your best efforts deserve a deal
                </p>
                <span className="block mt-2 text-xs font-semibold">
                  Shop Luma Gear →
                </span>
              </div>
            </div>

          </div>

          {/* ===== BOTTOM PROMO CARDS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 20% OFF */}
            <div className="group bg-gray-100 p-5 flex items-center justify-between rounded-lg hover:shadow-lg transition">
              <div>
                <p className="text-xl font-bold">20% OFF</p>
                <p className="text-sm mt-1">
                  Every $200-plus purchase!
                </p>
              </div>
              <img
                src="http://dev.magentonew.local/media/wysiwyg/sale/sale-20-off.png"
                className="h-16 object-contain"
              />
            </div>

            {/* FREE SHIPPING */}
            <div className="group bg-green-500 text-white p-5 rounded-lg hover:shadow-lg transition">
              <p className="text-lg font-semibold">
                Spend $50 or more — shipping is free!
              </p>
              <p className="text-sm mt-2">
                Buy more, save more
              </p>
            </div>

            {/* TEES */}
            <div className="group bg-yellow-400 p-5 flex items-center justify-between rounded-lg hover:shadow-lg transition">
              <div className="max-w-[60%]">
                <p className="font-semibold">
                  You can't have too many tees
                </p>
                <p className="text-sm mt-1">
                  4 tees for the price of 3
                </p>
              </div>

              <img
                src="http://dev.magentonew.local/media/wysiwyg/womens/womens-t-shirts.png"
                className="h-16 object-contain"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SalePage;