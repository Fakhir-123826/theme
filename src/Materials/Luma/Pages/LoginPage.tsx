import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your login logic here
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 p-8 md:p-12">
          {/* Header with icon */}
          <div className="flex items-center space-x-3 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-40" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Customer Login
              </h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back to LumaStore</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Registered Customers (Login Form) */}
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 inline-block">
                  Registered Customers
                </h2>
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                If you have an account, sign in with your email address.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className={`relative transition-all duration-300 ${isFocused.email ? 'scale-[1.02]' : ''}`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      required
                      placeholder="your@email.com"
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className={`relative transition-all duration-300 ${isFocused.password ? 'scale-[1.02]' : ''}`}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => handleFocus('password')}
                      onBlur={() => handleBlur('password')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      required
                      placeholder="Enter your password"
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m12-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Show Password
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="relative w-full sm:w-auto group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Sign In</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                  
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                    Forgot Your Password?
                  </a>
                </div>

                <p className="text-xs text-red-500 pt-2">* Required Fields</p>
              </form>
            </div>

            {/* Right Side: New Customers */}
            <div className="relative">
              {/* Decorative gradient card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 blur-sm" />
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="relative">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 inline-block">
                    New Customers
                  </h2>
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-8">
                  Creating an account has many benefits: check out faster, keep more than one address, 
                  track orders and more.
                </p>

                <button
                  onClick={() => window.location.href = '/create-account'}
                  className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    <span>Create an Account</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                {/* Benefits list */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Member Benefits
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Express checkout process',
                      'Multiple shipping addresses',
                      'Order history & tracking',
                      'Exclusive member offers',
                      'Wishlist & saved items'
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Access Box - Styled to match theme */}
          <div className="mt-12 relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm" />
            
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-amber-800 mb-2">Try Demo Customer Access</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/50 rounded-lg p-2 px-3">
                      <span className="font-medium text-amber-700">Email:</span>
                      <span className="ml-2 text-amber-600 font-mono text-xs">roni_cost@example.com</span>
                    </div>
                    <div className="bg-white/50 rounded-lg p-2 px-3">
                      <span className="font-medium text-amber-700">Password:</span>
                      <span className="ml-2 text-amber-600 font-mono text-xs">roni_cost3@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;