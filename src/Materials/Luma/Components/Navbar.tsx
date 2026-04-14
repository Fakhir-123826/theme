// import { Menu, Search, ShoppingCart, X, ChevronRight } from 'lucide-react';
// import { IoIosArrowDown } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.svg';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

//   // Fake search results
//   const fakeResults = [
//     "Yoga Pants", "Running Shoes", "Hooded Sweatshirt",
//     "Wireless Headphones", "Water Bottle", "Training Shorts", "Sports Bra"
//   ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

//   const cartCount = 0;

//   const womenMenu = {
//     Tops: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Bras & Tanks"],
//     Bottoms: ["Pants", "Shorts"]
//   };

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

//               {searchQuery && (
//                 <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 max-h-72 overflow-auto">
//                   {fakeResults.length > 0 ? (
//                     fakeResults.map((item, index) => (
//                       <div key={index} className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm">
//                         {item}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="px-4 py-3 text-gray-500 text-sm">No results found for "{searchQuery}"</div>
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

//       {/* Desktop Navigation with Hover Effect on Women */}
//       <div className="hidden lg:block bg-gray-100 border-t border-gray-200">
//         <div className="w-full px-6">
//           <ul className="flex items-center h-12 text-sm font-medium text-gray-700 max-w-7xl mx-auto">
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/LumaHome/Whats_new">What's New</Link>
//             </li>

//             {/* Women with Hover Mega Menu */}
//             <li
//               className="relative px-6 group"
//               onMouseEnter={() => setActiveMenu('Women')}
//               onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null); }}
//             >
//               <Link to="/LumaHome/Women_page">

//                 <div className="flex items-center gap-1 cursor-pointer">
//                   Women <IoIosArrowDown size={14} className="mt-0.5" />
//                 </div>

//                 {activeMenu === 'Women' && (
//                   <div className="absolute left-0 top-12 bg-white shadow-xl border border-gray-200 rounded-md w-130 grid grid-cols-2 p-6 z-50">
//                     <div>
//                       <Link to="/women" className="block font-semibold text-gray-900 mb-4 hover:text-orange-600">
//                         All Women
//                       </Link>

//                       <div className="space-y-6">
//                         <div>
//                           <p className="font-semibold mb-2">Tops</p>
//                           <ul className="space-y-1 text-sm">
//                             {womenMenu.Tops.map((item, i) => (
//                               <li
//                                 key={i}
//                                 className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
//                                 onMouseEnter={() => setActiveSubMenu(item)}
//                               >
//                                 {item}
//                                 <ChevronRight size={16} className="text-gray-400" />
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div>
//                           <p className="font-semibold mb-2">Bottoms</p>
//                           <ul className="space-y-1 text-sm">
//                             {womenMenu.Bottoms.map((item, i) => (
//                               <li
//                                 key={i}
//                                 className="flex items-center justify-between py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
//                                 onMouseEnter={() => setActiveSubMenu(item)}
//                               >
//                                 {item}
//                                 <ChevronRight size={16} className="text-gray-400" />
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Side Submenu */}
//                     {activeSubMenu && womenMenu[activeSubMenu as keyof typeof womenMenu] && (
//                       <div className="bg-white shadow-xl border border-gray-200 rounded-md p-5 w-64 absolute left-62.5 top-6 z-50">
//                         <p className="font-semibold mb-3">{activeSubMenu}</p>
//                         <ul className="space-y-2 text-sm">
//                           {womenMenu[activeSubMenu as keyof typeof womenMenu].map((sub, i) => (
//                             <li key={i} className="py-1 hover:text-orange-600 cursor-pointer">{sub}</li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </Link>
//             </li>


//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/LumaHome/Men_page">Men</Link>
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/LumaHome/Gear_page">Gear</Link>
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/LumaHome/Training_page">Training</Link>
//             </li>
//             <li className="px-6 hover:text-black cursor-pointer transition-colors">
//               <Link to="/LumaHome/Sale_page">Sale</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Search */}
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
//           </div>
//         </div>
//       )}

//       {/* Mini Cart Popup */}
//       {isCartOpen && (
//         <>
//           <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsCartOpen(false)} />
//           <div className="fixed top-16 right-4 md:right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
//             <div className="flex items-center justify-between p-4 border-b">
//               <h3 className="font-semibold text-lg">Shopping Cart</h3>
//               <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-black">
//                 <X size={22} />
//               </button>
//             </div>
//             <div className="p-8 text-center">
//               <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                 <ShoppingCart size={32} className="text-gray-400" />
//               </div>
//               <p className="text-gray-600 text-lg">You have no items in your shopping cart.</p>
//             </div>
//             <div className="border-t p-4">
//               <button
//                 onClick={() => setIsCartOpen(false)}
//                 className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800"
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
//           <div className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
//           <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 lg:hidden">
//             <div className="flex justify-between items-center mb-8">
//               <img src={logo} alt="Luma" className="h-8" />
//               <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 text-2xl">✕</button>
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
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useState } from 'react';

// Define TypeScript interfaces
interface NavChildItem {
  url: string;
}

interface NavChildren {
  [key: string]: NavChildItem;
}

interface NavCategory {
  url: string;
  children: NavChildren;
}

interface NavItem {
  url: string;
  hasChildren: boolean;
  children?: {
    [key: string]: NavCategory;
  };
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Fake search results
  const fakeResults = [
    "Yoga Pants", "Running Shoes", "Hooded Sweatshirt",
    "Wireless Headphones", "Water Bottle", "Training Shorts", "Sports Bra"
  ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const cartCount = 0;

  // Navigation data structure matching Magento with proper typing
  const navigationData: { [key: string]: NavItem } = {
    "What's New": {
      url: "/whats-new",
      hasChildren: false
    },
    "Women": {
      url: "/women",
      hasChildren: true,
      children: {
        "Tops": {
          url: "/women/tops",
          children: {
            "Jackets": { url: "/women/tops/jackets" },
            "Hoodies & Sweatshirts": { url: "/women/tops/hoodies-sweatshirts" },
            "Tees": { url: "/women/tops/tees" },
            "Bras & Tanks": { url: "/women/tops/bras-tanks" }
          }
        },
        "Bottoms": {
          url: "/women/bottoms",
          children: {
            "Pants": { url: "/women/bottoms/pants" },
            "Shorts": { url: "/women/bottoms/shorts" }
          }
        }
      }
    },
    "Men": {
      url: "/men",
      hasChildren: true,
      children: {
        "Tops": {
          url: "/men/tops",
          children: {
            "Jackets": { url: "/men/tops/jackets" },
            "Hoodies & Sweatshirts": { url: "/men/tops/hoodies-sweatshirts" },
            "Tees": { url: "/men/tops/tees" },
            "Tanks": { url: "/men/tops/tanks" }
          }
        },
        "Bottoms": {
          url: "/men/bottoms",
          children: {
            "Pants": { url: "/men/bottoms/pants" },
            "Shorts": { url: "/men/bottoms/shorts" }
          }
        }
      }
    },
    "Gear": {
      url: "/gear",
      hasChildren: true,
      children: {
        "Bags": { url: "/gear/bags", children: {} },
        "Fitness Equipment": { url: "/gear/fitness-equipment", children: {} },
        "Watches": { url: "/gear/watches", children: {} }
      }
    },
    "Training": {
      url: "/training",
      hasChildren: true,
      children: {
        "Video Download": { url: "/training/video-download", children: {} }
      }
    },
    "Sale": {
      url: "/sale",
      hasChildren: false
    }
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
            <Link to="/">
              <img src={logo} alt="Luma" className="h-9 w-auto cursor-pointer" />
            </Link>
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

      {/* Desktop Navigation - Fixed with proper nested hover */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="w-full px-6">
          <ul className="flex items-center h-12 text-sm font-medium text-gray-700 max-w-7xl mx-auto">
            {Object.entries(navigationData).map(([item, data]) => (
              <li
                key={item}
                className="relative px-6 group"
              >
                <Link
                  to={data.url}
                  className="flex items-center gap-1 hover:text-black transition-colors"
                >
                  {item}
                  {data.hasChildren && <IoIosArrowDown size={14} className="mt-0.5" />}
                </Link>

                {/* Mega Menu Dropdown - Level 1 */}
                {data.hasChildren && data.children && (
                  <div
                    className="absolute left-0 top-12 bg-white shadow-xl border border-gray-200 rounded-md min-w-[600px] p-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {Object.entries(data.children).map(([category, categoryData]) => (
                        <div
                          key={category}
                          className="relative group/submenu"
                        >
                          <Link
                            to={categoryData.url}
                            className="block font-semibold text-gray-900 mb-4 hover:text-orange-600 transition-colors"
                          >
                            {category}
                          </Link>

                          <ul className="space-y-2">
                            {Object.entries(categoryData.children).map(([subItem, subData]) => (
                              <li key={subItem}>
                                <Link
                                  to={subData.url}
                                  className="text-sm text-gray-600 hover:text-orange-600 transition-colors block py-1"
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Right Side Submenu - Level 2 */}
                          {Object.keys(categoryData.children).length > 0 && (
                            <div
                              className="absolute left-full top-0 ml-2 bg-white shadow-xl border border-gray-200 rounded-md min-w-[220px] p-4 z-50 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200"
                            >
                              <p className="font-semibold text-gray-900 mb-3 border-b pb-2">{category}</p>
                              <ul className="space-y-2">
                                {Object.entries(categoryData.children).map(([subItem, subData]) => (
                                  <li key={subItem}>
                                    <Link
                                      to={subData.url}
                                      className="text-sm text-gray-600 hover:text-orange-600 transition-colors block py-1.5 px-2 hover:bg-gray-50 rounded"
                                    >
                                      {subItem}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
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
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
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
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 p-6 lg:hidden overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Luma" className="h-8" />
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 text-2xl">✕</button>
            </div>

            <div className="space-y-4">
              {Object.entries(navigationData).map(([item, data]) => (
                <div key={item}>
                  <Link
                    to={data.url}
                    className="block text-lg font-medium text-gray-800 hover:text-orange-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>

                  {/* Mobile submenu for items with children */}
                  {data.hasChildren && data.children && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      {Object.entries(data.children).map(([category, categoryData]) => (
                        <div key={category}>
                          <Link
                            to={categoryData.url}
                            className="block text-sm font-medium text-gray-600 hover:text-orange-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category}
                          </Link>
                          <div className="ml-4 mt-1 space-y-1">
                            {Object.entries(categoryData.children).map(([subItem, subData]) => (
                              <Link
                                key={subItem}
                                to={subData.url}
                                className="block text-xs text-gray-500 hover:text-orange-600 py-1"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;