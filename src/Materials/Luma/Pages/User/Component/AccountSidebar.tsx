// import React from 'react';

// interface AccountSidebarProps {
//   activeTab?: string;
//   onTabChange?: (tab: string) => void;
//   userName?: string;
//   userEmail?: string;
//   compareItems?: string[];
//   wishlistItems?: Array<{ name: string; price: string; image: string }>;
// }

// const AccountSidebar: React.FC<AccountSidebarProps> = ({
//   activeTab = 'My Account',
//   onTabChange,
//   userName = 'Fakhir Israr',
//   userEmail = 'fakhirdeveloper@devcir.com',
//   compareItems = [
//     "Argus All-Weather Tank",
//     "Hero Hoodie",
//     "Juno Jacket",
//     "Neve Studio Dance Jacket",
//     "Riona Full Zip Jacket",
//     "Ingrid Running Jacket"
//   ],
//   wishlistItems = [
//     {
//       name: "Olivia 1/4 Zip Light Jacket",
//       price: "$77.00",
//       image: "https://via.placeholder.com/150"
//     }
//   ]
// }) => {
//   const menuItems = [
//     { label: 'My Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
//     { label: 'My Orders', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
//     { label: 'My Downloadable Products', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
//     { label: 'My Wish List', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
//     { label: 'Address Book', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
//     { label: 'Account Information', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { label: 'Stored Payment Methods', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
//     { label: 'My Product Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
//     { label: 'Newsletter Subscriptions', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
//   ];

//   return (
//     <div className="sticky top-24 space-y-6">
//       {/* Main Navigation Menu */}
//       <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
//         <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-sm opacity-40" />
//             <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
//               {userName.charAt(0)}
//             </div>
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="font-semibold text-gray-900 truncate">{userName}</p>
//             <p className="text-xs text-gray-500 truncate">{userEmail}</p>
//           </div>
//         </div>

//         <nav className="space-y-1">
//           {menuItems.map((item) => (
//             <a
//               key={item.label}
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 onTabChange?.(item.label);
//               }}
//               className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
//                 activeTab === item.label
//                   ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-medium shadow-sm border border-blue-100'
//                   : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
//               }`}
//             >
//               <svg className={`w-5 h-5 ${activeTab === item.label ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
//               </svg>
//               <span>{item.label}</span>
//               {activeTab === item.label && (
//                 <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
//               )}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Compare Products Section */}
//       <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-semibold text-gray-900 flex items-center gap-2">
//             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//             Compare Products
//           </h3>
//           <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{compareItems.length} items</span>
//         </div>
        
//         <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
//           {compareItems.map((product, i) => (
//             <div key={i} className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
//               <span className="text-sm text-gray-600 group-hover:text-gray-900 flex items-center gap-2">
//                 <span className="text-gray-400">✕</span>
//                 {product}
//               </span>
//               <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
        
//         <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
//           <button className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-medium rounded-xl hover:from-gray-900 hover:to-gray-800 transition-all duration-200 shadow-sm">
//             Compare
//           </button>
//           <button className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 transition-all duration-200">
//             Clear All
//           </button>
//         </div>
//       </div>

//       {/* My Wish List Section */}
//       <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-semibold text-gray-900 flex items-center gap-2">
//             <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//             My Wish List
//           </h3>
//           <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</span>
//         </div>

//         <div className="space-y-4">
//           {wishlistItems.map((item, idx) => (
//             <div key={idx} className="flex gap-4 items-center">
//               <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex-shrink-0 overflow-hidden shadow-sm">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
//                 <p className="text-lg font-bold text-gray-900 mt-1">{item.price}</p>
//               </div>
//               <button className="text-gray-400 hover:text-red-500 transition-colors">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
        
//         <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-sm">
//           Add to Cart
//         </button>

//         <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block text-sm font-medium">
//           View Full Wish List →
//         </a>
//       </div>

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//             width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//             background: #f1f1f1;
//             border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #cbd5e1;
//             border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background: #94a3b8;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AccountSidebar;


import React from 'react';

interface AccountSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  userName?: string;
  userEmail?: string;
  compareItems?: string[];
  wishlistItems?: Array<{ name: string; price: string; image: string }>;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({
  activeTab = 'My Account',
  onTabChange,
  userName = 'Fakhir Israr',
  userEmail = 'fakhirdeveloper@devcir.com',
  compareItems = [
    "Argus All-Weather Tank",
    "Hero Hoodie",
    "Juno Jacket",
    "Neve Studio Dance Jacket",
    "Riona Full Zip Jacket",
    "Ingrid Running Jacket"
  ],
  wishlistItems = [
    {
      name: "Olivia 1/4 Zip Light Jacket",
      price: "$77.00",
      image: "https://via.placeholder.com/150"
    }
  ]
}) => {
  const menuItems = [
    { label: 'My Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { label: 'My Orders', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
    { label: 'My Downloadable Products', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' },
    { label: 'My Wish List', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { label: 'Address Book', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Account Information', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Stored Payment Methods', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { label: 'My Product Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { label: 'Newsletter Subscriptions', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <div className="sticky top-24 space-y-6">

      {/* Main Navigation Menu */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-sm opacity-40" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              {userName.charAt(0)}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onTabChange?.(item.label);
              }}
              className={`group flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                activeTab === item.label
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 font-medium shadow-sm border border-blue-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <svg className={`w-5 h-5 ${activeTab === item.label ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span>{item.label}</span>
              {activeTab === item.label && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Compare Products Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Compare Products
          </h3>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{compareItems.length} items</span>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
          {compareItems.map((product, i) => (
            <div key={i} className="group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-600 group-hover:text-gray-900 flex items-center gap-2">
                <span className="text-gray-400">✕</span>
                {product}
              </span>
              <button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
          <button className="flex-1 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-sm font-medium rounded-xl hover:from-gray-900 hover:to-gray-800 transition-all duration-200 shadow-sm">
            Compare
          </button>
          <button className="flex-1 px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 transition-all duration-200">
            Clear All
          </button>
        </div>
      </div>

      {/* My Wish List Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            My Wish List
          </h3>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="space-y-4">
          {wishlistItems.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex-shrink-0 overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{item.price}</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-sm mt-4">
          Add to Cart
        </button>

        <a href="#" className="text-blue-600 hover:text-blue-700 mt-4 inline-block text-sm font-medium">
          View Full Wish List →
        </a>
      </div>

      {/* Newly Added: Recently Ordered Section */}
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recently Ordered</h3>
        
        <div className="flex items-center gap-4 mb-5">
          <input 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Olivia 1/4 Zip Light Jacket</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-2xl text-sm transition-all duration-200">
            Add to Cart
          </button>
          <button className="flex-1 border border-gray-300 hover:bg-gray-50 font-medium py-3 rounded-2xl text-sm transition-all duration-200">
            View All
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default AccountSidebar;

