// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer>

//       {/* ================= TOP SECTION ================= */}
//       <div className="bg-[#f5f5f5] py-10 px-4">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">

//           {/* ===== LEFT LINKS ===== */}
//           <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">

//             <div className="space-y-2">
//               <div>About us</div>
//               <div>Customer Service</div>
//             </div>

//             <div className="space-y-2">
//               <div>Privacy and Cookie Policy</div>
//               <div>Search Terms</div>
//               <div>Advanced Search</div>
//               <div>Orders and Returns</div>
//               <div>Contact Us</div>
//             </div>

//           </div>

//           {/* EMPTY SPACE (center alignment like Magento) */}
//           <div className="hidden md:block"></div>

//           {/* ===== NEWSLETTER (RIGHT) ===== */}
//           <div className="flex justify-start md:justify-end">
//             <div className="flex w-full max-w-sm border border-gray-300 bg-white overflow-hidden">

//               {/* Input */}
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="flex-1 px-3 py-2 text-sm outline-none"
//               />

//               {/* Button */}
//               <button className="bg-blue-600 text-white px-4 text-sm font-semibold hover:bg-blue-700 transition">
//                 Subscribe
//               </button>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ================= BOTTOM BAR ================= */}
//       <div className="bg-[#6d6d6d] py-3 text-center text-[12px] lg:text-sm text-white">
//         Copyright © 2013-present Magento, Inc. All rights reserved.
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaLock, FaEnvelope, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      console.log('Subscribed with email:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative mt-24 bg-white">
      {/* Modern gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      {/* Main Footer Section */}
      <div className="relative overflow-hidden">
        {/* Sophisticated background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
        
        {/* Fixed: Properly escaped SVG background */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Brand Section - Enhanced */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-40" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl tracking-tight">L</span>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  LumaStore
                </span>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Experience premium quality and exceptional service. 
                Your trusted destination for curated lifestyle products since 2013.
              </p>
              
              {/* Social Icons - Using React Icons */}
              <div className="flex space-x-3 pt-2">
                <a
                  href="#"
                  className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white transition-all duration-300 hover:shadow-md overflow-hidden"
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaFacebook className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white transition-all duration-300 hover:shadow-md overflow-hidden"
                  aria-label="Instagram"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaInstagram className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white transition-all duration-300 hover:shadow-md overflow-hidden"
                  aria-label="Twitter"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaTwitter className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
                
                <a
                  href="#"
                  className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-white transition-all duration-300 hover:shadow-md overflow-hidden"
                  aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaLinkedin className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Links Sections - Enhanced */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider relative inline-block">
                  Company
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h4>
                <ul className="space-y-3.5">
                  {['About Us', 'Careers', 'Press Center', 'Customer Service'].map((item) => (
                    <li key={item}>
                      <a href="#" className="group flex items-center text-gray-500 hover:text-gray-700 text-sm transition-all duration-200">
                        <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider relative inline-block">
                  Support
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </h4>
                <ul className="space-y-3.5">
                  {['Privacy Policy', 'Terms of Service', 'Shipping Info', 'Returns Policy', 'Contact Us'].map((item) => (
                    <li key={item}>
                      <a href="#" className="group flex items-center text-gray-500 hover:text-gray-700 text-sm transition-all duration-200">
                        <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section - Premium Design */}
            <div className="lg:col-span-3">
              <div className="relative group">
                {/* Animated gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white rounded-2xl p-6 shadow-xl shadow-gray-100 border border-gray-100 group-hover:border-transparent transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider">
                      Newsletter
                    </h4>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <HiOutlineMail className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    Subscribe and get <span className="font-semibold text-blue-600">10% off</span> your first order + exclusive early access to sales.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                        required
                      />
                      <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    
                    <button
                      type="submit"
                      className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white px-4 py-3 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Subscribe Now</span>
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                  </form>

                  {subscribed && (
                    <div className="mt-4 text-xs text-green-600 bg-green-50 p-2.5 rounded-xl text-center animate-in slide-in-from-top-2 fade-in duration-300">
                      <span className="font-medium">✓ Thanks for subscribing!</span> Check your inbox for your 10% off code.
                    </div>
                  )}

                  <p className="text-xs text-gray-400 mt-4 flex items-center justify-center space-x-1">
                    <FaLock className="w-3 h-3" />
                    <span>No spam, unsubscribe anytime</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Enhanced with payment icons */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
              <p className="text-xs text-gray-400 flex items-center space-x-1">
                <span>© {new Date().getFullYear()} LumaStore</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>All rights reserved</span>
              </p>
              
              {/* Trust badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <FaShieldAlt className="w-4 h-4" />
                  <span>Secure Checkout</span>
                </div>
                
                {/* Payment Icons */}
                <div className="flex items-center space-x-2">
                  {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((payment, idx) => (
                    <div key={idx} className="px-2 py-1 bg-gray-50 rounded-lg text-[10px] font-semibold text-gray-500 hover:bg-gray-100 transition-colors">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;