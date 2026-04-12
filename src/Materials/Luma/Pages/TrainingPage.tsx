import React from "react";

const TrainingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* ===== TITLE ===== */}
      <h1 className="text-3xl font-semibold mb-10">Training</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ===== SIDEBAR ===== */}
        <aside className="hidden lg:block text-sm text-gray-700 space-y-6">
          <div>
            <p className="font-semibold mb-2">Shop By</p>
            <p className="text-xs text-gray-500 mb-1">Category</p>
            <p className="text-blue-600 cursor-pointer">Video Download 0</p>
          </div>
        </aside>

        {/* ===== CONTENT ===== */}
        <div className="lg:col-span-3 space-y-12">

          {/* ===== HERO (BIGGER) ===== */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="http://dev.magentonew.local/media/wysiwyg/training/training-main.jpg"
              className="w-full h-[350px] md:h-[500px] object-cover"
              alt="Training"
            />

            <div className="absolute right-8 top-8 bg-white/95 backdrop-blur-sm p-8 max-w-md shadow-lg">
              <h2 className="text-2xl font-semibold leading-relaxed">
                <span className="block">Motivate yourself.</span>
                <span className="block">Reach goals.</span>
                <span className="block">Boost ambition.</span>
                <span className="block">Max fitness.</span>
                <span className="block">Upgrade lifestyle.</span>
              </h2>
            </div>
          </div>

          {/* ===== ERIN SECTION (BIGGER & CLEAN) ===== */}
          <div className="relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src="http://dev.magentonew.local/media/wysiwyg/training/training-erin.jpg"
              className="w-full h-[220px] md:h-[260px] object-cover"
              alt="Erin"
            />

            <div className="absolute inset-0 bg-white/80 flex items-center">
              <div className="p-6 md:p-10 max-w-2xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Before creating Luma, pro trainer Erin Renny helped world-class
                  athletes reach peak fitness
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Hand-selected by Erin, our training downloads reflect a
                  commitment to yoga, health and wellness.
                </p>
              </div>
            </div>
          </div>

          {/* ===== BLUE CTA (BIG & CENTERED) ===== */}
          <div className="bg-blue-600 text-white text-center py-12 md:py-16 rounded-lg">

            <div className="text-4xl mb-3">⬇</div>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Training on demand
            </h2>

            <p className="text-sm mt-3 opacity-90">
              Luma downloads to inspire and challenge.
              <br />
              Your space, your pace
            </p>

            <button className="mt-5 bg-white text-blue-600 px-6 py-2 text-sm font-semibold">
              Videos →
            </button>

          </div>

          {/* ===== TOP VIDEOS ===== */}
          <div className="text-center pt-6">
            <h2 className="text-2xl font-semibold">Top Videos</h2>
            <p className="text-gray-500 text-sm">
              Stream free with subscription
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrainingPage;