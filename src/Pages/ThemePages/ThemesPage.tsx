import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const themes = [
  {
    id: 1,
    title: "Modern Dashboard Pro",
    category: "Admin Template",
    image: "https://picsum.photos/id/1015/600/400", // Replace with real theme images
    isPopular: true,
  },
  {
    id: 2,
    title: "E-Commerce Storefront",
    category: "Shop Template",
    image: "https://picsum.photos/id/106/600/400",
    isPopular: false,
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Marketing",
    image: "https://picsum.photos/id/201/600/400",
    isPopular: true,
  },
  {
    id: 4,
    title: "Portfolio Minimal",
    category: "Personal",
    image: "https://picsum.photos/id/237/600/400",
    isPopular: false,
  },
  {
    id: 5,
    title: "Blog & Magazine",
    category: "Content",
    image: "https://picsum.photos/id/180/600/400",
    isPopular: false,
  },
  {
    id: 6,
    title: "Restaurant & Food",
    category: "Business",
    image: "https://picsum.photos/id/292/600/400",
    isPopular: true,
  },
];

const ThemesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Admin Template", "Shop Template", "Marketing", "Personal", "Content", "Business"];

  const filteredThemes = themes.filter((theme) => {
    const matchesSearch = theme.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || theme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Premium Themes</h1>
            <p className="text-gray-600 mt-2 text-lg">Choose beautiful themes for your next project</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search themes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-12 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 text-base"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredThemes.map((theme) => (
            <div
              key={theme.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Theme Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {theme.isPopular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-2xl shadow">
                    POPULAR
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 line-clamp-1">{theme.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{theme.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-blue-600"></span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3.5 rounded-2xl transition-all">
                    Live Preview
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-2xl transition-all">
                   Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredThemes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No themes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemesPage;