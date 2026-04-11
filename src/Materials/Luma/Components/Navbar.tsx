// // components/Navbar.tsx
// import React, { useState } from 'react';
// import { Menu, Search, ShoppingCart, X } from 'lucide-react';
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.svg';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fake search results (baad mein Redux ya API se aa sakte hain)
//   const fakeResults = [
//     "Yoga Pants",
//     "Running Shoes",
//     "Hooded Sweatshirt",
//     "Wireless Headphones",
//     "Water Bottle",
//     "Training Shorts",
//     "Sports Bra",
//   ].filter(item => 
//     item.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const cartCount = 0;

//   return (
//     <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      
//       {/* Top Bar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="h-16 flex items-center justify-between">
          
//           {/* Left: Hamburger + Logo */}
//           <div className="flex items-center gap-4">
//             <button 
//               onClick={() => setIsMenuOpen(true)}
//               className="p-2 -ml-2 text-gray-700 hover:text-black lg:hidden"
//             >
//               <Menu size={26} />
//             </button>

//             <img src={logo} alt="Luma" className="h-9 w-auto" />
//           </div>

//           {/* Desktop Search + Cart */}
//           <div className="hidden md:flex items-center gap-6">
//             <div className="relative w-96">
//               <input
//                 type="text"
//                 placeholder="Search entire store here..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-gray-100 border border-gray-300 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-gray-400"
//               />
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

//               {/* Search Dropdown - Desktop */}
//               {searchQuery && (
//                 <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 max-h-72 overflow-auto">
//                   {fakeResults.length > 0 ? (
//                     fakeResults.map((item, index) => (
//                       <div
//                         key={index}
//                         className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
//                         onClick={() => {
//                           alert(`Searching for: ${item}`); // baad mein proper routing
//                           setSearchQuery("");
//                         }}
//                       >
//                         {item}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="px-4 py-3 text-gray-500 text-sm">
//                       No results found for "{searchQuery}"
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <button 
//               onClick={() => setIsCartOpen(!isCartOpen)}
//               className="p-2 text-gray-700 hover:text-black relative"
//             >
//               <ShoppingCart size={24} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>

//           {/* Mobile Icons */}
//           <div className="flex items-center gap-4 md:hidden">
//             <button 
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="p-2 text-gray-700 hover:text-black"
//             >
//               <Search size={24} />
//             </button>

//             <button 
//               onClick={() => setIsCartOpen(!isCartOpen)}
//               className="p-2 text-gray-700 hover:text-black relative"
//             >
//               <ShoppingCart size={24} />
//               {cartCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navigation Menu */}
//       <div className="hidden lg:block bg-gray-100 border-t border-gray-200">
//         <div className="w-full px-6">
//           <ul className="flex items-center h-12 text-sm font-medium text-gray-700 max-w-7xl mx-auto">
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/whats-new">What's New</Link>
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer flex items-center gap-1 transition-colors">
//               <Link to="/women">Women</Link>
//               <IoIosArrowDown size={14} className="mt-0.5" />
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer flex items-center gap-1 transition-colors">
//               <Link to="/men">Men</Link>
//               <IoIosArrowDown size={14} className="mt-0.5" />
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer flex items-center gap-1 transition-colors">
//               <Link to="/gear">Gear</Link>
//               <IoIosArrowDown size={14} className="mt-0.5" />
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer flex items-center gap-1 transition-colors">
//               <Link to="/training">Training</Link>
//               <IoIosArrowDown size={14} className="mt-0.5" />
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/sale">Sale</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Search Bar + Dropdown */}
//       {isSearchOpen && (
//         <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-100">
//           <div className="relative">
//             <input
//               type="text"
//               autoFocus
//               placeholder="Search entire store here..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-gray-100 border border-gray-300 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-gray-400"
//             />
//             <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

//             {/* Mobile Search Dropdown */}
//             {searchQuery && (
//               <div className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 max-h-72 overflow-auto">
//                 {fakeResults.length > 0 ? (
//                   fakeResults.map((item, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
//                       onClick={() => {
//                         alert(`Searching for: ${item}`);
//                         setSearchQuery("");
//                         setIsSearchOpen(false);
//                       }}
//                     >
//                       {item}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="px-4 py-3 text-gray-500 text-sm">
//                     No results found for "{searchQuery}"
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Mini Cart Popup */}
//       {isCartOpen && (
//         <>
//           {/* Backdrop - Z-index kam kiya */}
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-40 z-40"
//             onClick={() => setIsCartOpen(false)}
//           />
          
//           {/* Cart Popup */}
//           <div className="fixed top-16 right-4 md:right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
//             <div className="flex items-center justify-between p-4 border-b">
//               <h3 className="font-semibold text-lg">Shopping Cart</h3>
//               <button 
//                 onClick={() => setIsCartOpen(false)}
//                 className="text-gray-500 hover:text-black"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             <div className="p-8 text-center">
//               <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                 <ShoppingCart size={32} className="text-gray-400" />
//               </div>
//               <p className="text-gray-600 text-lg">
//                 You have no items in your shopping cart.
//               </p>
//             </div>

//             <div className="border-t p-4">
//               <button 
//                 onClick={() => setIsCartOpen(false)}
//                 className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         </>
//       )}

//       {/* Mobile Side Menu */}
//       {isMenuOpen && (
//         <>
//           <div 
//             className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
//             onClick={() => setIsMenuOpen(false)}
//           />
//           <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 lg:hidden">
//             <div className="flex justify-between items-center mb-8">
//               <img src={logo} alt="Luma" className="h-8" />
//               <button 
//                 onClick={() => setIsMenuOpen(false)} 
//                 className="text-gray-600 text-2xl leading-none"
//               >
//                 ✕
//               </button>
//             </div>
            
//             <div className="space-y-6 text-lg font-medium">
//               <Link to="/whats-new" className="block">What's New</Link>
//               <Link to="/women" className="block">Women</Link>
//               <Link to="/men" className="block">Men</Link>
//               <Link to="/gear" className="block">Gear</Link>
//               <Link to="/training" className="block">Training</Link>
//               <Link to="/sale" className="block">Sale</Link>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, X, ChevronRight } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  // Fake search results
  const fakeResults = [
    "Yoga Pants", "Running Shoes", "Hooded Sweatshirt", 
    "Wireless Headphones", "Water Bottle", "Training Shorts", "Sports Bra"
  ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const cartCount = 0;

  const womenMenu = {
    Tops: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Bras & Tanks"],
    Bottoms: ["Pants", "Shorts"]
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 text-gray-700 hover:text-black lg:hidden"
            >
              <Menu size={26} />
            </button>
            <img src={logo} alt="Luma" className="h-9 w-auto" />
          </div>

          {/* Desktop Search + Cart */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search entire store here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-gray-400"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

              {searchQuery && (
                <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 max-h-72 overflow-auto">
                  {fakeResults.length > 0 ? (
                    fakeResults.map((item, index) => (
                      <div key={index} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm">
                        {item}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">No results found for "{searchQuery}"</div>
                  )}
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 text-gray-700 hover:text-black relative"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-black"
            >
              <Search size={24} />
            </button>

            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 text-gray-700 hover:text-black relative"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation with Hover Effect on Women */}
      <div className="hidden lg:block bg-gray-100 border-t border-gray-200">
        <div className="w-full px-6">
          <ul className="flex items-center h-12 text-sm font-medium text-gray-700 max-w-7xl mx-auto">
            <li className="px-6 hover:text-black cursor-pointer transition-colors">
              <Link to="/whats-new">What's New</Link>
            </li>

            {/* Women with Hover Mega Menu */}
            <li 
              className="relative px-6 group"
              onMouseEnter={() => setActiveMenu('Women')}
              onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null); }}
            >
              <div className="flex items-center gap-1 cursor-pointer">
                Women <IoIosArrowDown size={14} className="mt-0.5" />
              </div>

              {activeMenu === 'Women' && (
                <div className="absolute left-0 top-12 bg-white shadow-xl border border-gray-200 rounded-md w-[520px] grid grid-cols-2 p-6 z-50">
                  <div>
                    <Link to="/women" className="block font-semibold text-gray-900 mb-4 hover:text-orange-600">
                      All Women
                    </Link>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="font-semibold mb-2">Tops</p>
                        <ul className="space-y-1 text-sm">
                          {womenMenu.Tops.map((item, i) => (
                            <li 
                              key={i}
                              className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                              onMouseEnter={() => setActiveSubMenu(item)}
                            >
                              {item}
                              <ChevronRight size={16} className="text-gray-400" />
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Bottoms</p>
                        <ul className="space-y-1 text-sm">
                          {womenMenu.Bottoms.map((item, i) => (
                            <li 
                              key={i}
                              className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                              onMouseEnter={() => setActiveSubMenu(item)}
                            >
                              {item}
                              <ChevronRight size={16} className="text-gray-400" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Submenu */}
                  {activeSubMenu && womenMenu[activeSubMenu as keyof typeof womenMenu] && (
                    <div className="bg-white shadow-xl border border-gray-200 rounded-md p-5 w-64 absolute left-[250px] top-6 z-50">
                      <p className="font-semibold mb-3">{activeSubMenu}</p>
                      <ul className="space-y-2 text-sm">
                        {womenMenu[activeSubMenu as keyof typeof womenMenu].map((sub, i) => (
                          <li key={i} className="py-1 hover:text-orange-600 cursor-pointer">{sub}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </li>

            <li className="px-6 hover:text-black cursor-pointer transition-colors">
              <Link to="/men">Men</Link>
            </li>
            <li className="px-6 hover:text-black cursor-pointer transition-colors">
              <Link to="/gear">Gear</Link>
            </li>
            <li className="px-6 hover:text-black cursor-pointer transition-colors">
              <Link to="/training">Training</Link>
            </li>
            <li className="px-6 hover:text-black cursor-pointer transition-colors">
              <Link to="/sale">Sale</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Search entire store here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-gray-300 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-gray-400"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
      )}

      {/* Mini Cart Popup */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsCartOpen(false)} />
          <div className="fixed top-16 right-4 md:right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-lg">Shopping Cart</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-black">
                <X size={22} />
              </button>
            </div>
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-600 text-lg">You have no items in your shopping cart.</p>
            </div>
            <div className="border-t p-4">
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 lg:hidden">
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Luma" className="h-8" />
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 text-2xl">✕</button>
            </div>
            
            <div className="space-y-6 text-lg font-medium">
              <Link to="/whats-new" className="block">What's New</Link>
              <Link to="/women" className="block">Women</Link>
              <Link to="/men" className="block">Men</Link>
              <Link to="/gear" className="block">Gear</Link>
              <Link to="/training" className="block">Training</Link>
              <Link to="/sale" className="block">Sale</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;