import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>

      {/* ================= TOP SECTION ================= */}
      <div className="bg-[#f5f5f5] py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">

          {/* ===== LEFT LINKS ===== */}
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">

            <div className="space-y-2">
              <div>About us</div>
              <div>Customer Service</div>
            </div>

            <div className="space-y-2">
              <div>Privacy and Cookie Policy</div>
              <div>Search Terms</div>
              <div>Advanced Search</div>
              <div>Orders and Returns</div>
              <div>Contact Us</div>
            </div>

          </div>

          {/* EMPTY SPACE (center alignment like Magento) */}
          <div className="hidden md:block"></div>

          {/* ===== NEWSLETTER (RIGHT) ===== */}
          <div className="flex justify-start md:justify-end">
            <div className="flex w-full max-w-sm border border-gray-300 bg-white overflow-hidden">

              {/* Input */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-3 py-2 text-sm outline-none"
              />

              {/* Button */}
              <button className="bg-blue-600 text-white px-4 text-sm font-semibold hover:bg-blue-700 transition">
                Subscribe
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-[#6d6d6d] py-3 text-center text-[12px] lg:text-sm text-white">
        Copyright © 2013-present Magento, Inc. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;