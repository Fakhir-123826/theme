import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Fake search results
  const fakeResults = [
    "Yoga Pants", "Running Shoes", "Hooded Sweatshirt",
    "Wireless Headphones", "Water Bottle", "Training Shorts", "Sports Bra"
  ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  const cartCount = 0;

  // Simple menu data structure
  const menuData: Record<string, any> = {
    "What's New": { url: "/whats-new", hasChildren: false },
    "Women": {
      url: "/women",
      hasChildren: true,
      children: {
        "Tops": {
          url: "/women/tops",
          items: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Bras & Tanks"]
        },
        "Bottoms": {
          url: "/women/bottoms",
          items: ["Pants", "Shorts"]
        }
      }
    },
    "Men": {
      url: "/men",
      hasChildren: true,
      children: {
        "Tops": {
          url: "/men/tops",
          items: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Tanks"]
        },
        "Bottoms": {
          url: "/men/bottoms",
          items: ["Pants", "Shorts"]
        }
      }
    },
    "Gear": { url: "/gear", hasChildren: false },
    "Training": { url: "/training", hasChildren: false },
    "Sale": { url: "/sale", hasChildren: false }
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
                    <div className="px-4 py-3 text-gray-500 text-sm">No results found</div>
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
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-gray-700 hover:text-black">
              <Search size={24} />
            </button>
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="p-2 text-gray-700 hover:text-black relative">
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

      {/* Desktop Navigation - Simple Working Solution */}
      <div className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="w-full px-6">
          <ul className="flex items-center h-12 text-sm font-medium text-gray-700 max-w-7xl mx-auto gap-2">
            {Object.entries(menuData).map(([item, data]) => (
              <li
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredCategory(null);
                }}
              >
                <Link
                  to={data.url}
                  className="flex items-center gap-1 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  {item}
                  {data.hasChildren && <IoIosArrowDown size={14} />}
                </Link>

                {/* Level 1 Dropdown - Shows Tops & Bottoms */}
                {data.hasChildren && hoveredMenu === item && (
                  <div 
                    className="absolute left-0 top-full mt-1 bg-white shadow-lg border border-gray-200 rounded-md min-w-[200px] z-50"
                    onMouseEnter={() => setHoveredMenu(item)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    {Object.entries(data.children).map(([categoryName, categoryData]: [string, any]) => (
                      <div
                        key={categoryName}
                        className="relative"
                        onMouseEnter={() => setHoveredCategory(categoryName)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        <Link
                          to={categoryData.url}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between"
                        >
                          {categoryName}
                          <IoIosArrowDown size={12} className="rotate-270" />
                        </Link>

                        {/* Level 2 Dropdown - Shows items like Jackets, Hoodies, etc. */}
                        {hoveredCategory === categoryName && categoryData.items && (
                          <div 
                            className="absolute left-full top-0 ml-1 bg-white shadow-lg border border-gray-200 rounded-md min-w-[180px] z-50"
                            onMouseEnter={() => setHoveredCategory(categoryName)}
                            onMouseLeave={() => setHoveredCategory(null)}
                          >
                            {categoryData.items.map((subItem: string) => (
                              <Link
                                key={subItem}
                                to={`${categoryData.url}/${subItem.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                              >
                                {subItem}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
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
          <div className="fixed top-16 right-4 w-80 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
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
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 p-6 lg:hidden overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <img src={logo} alt="Luma" className="h-8" />
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 text-2xl">✕</button>
            </div>
            <div className="space-y-4">
              {Object.entries(menuData).map(([item, data]) => (
                <Link
                  key={item}
                  to={data.url}
                  className="block text-lg font-medium text-gray-800 hover:text-orange-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
