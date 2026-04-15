// import React, { useState } from 'react';

// const CreateAccountPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your validation and API call here
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm p-10">
//         {/* Title - Left Aligned */}
//         <h1 className="text-3xl font-semibold text-gray-900 mb-10 text-left">
//           Create New Customer Account
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Personal Information Section */}
//           <div>
//             <h2 className="text-xl font-medium text-gray-900 mb-6">Personal Information</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   First Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Last Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-6 space-y-4">
//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   id="newsletter"
//                   className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
//                   Sign Up for Newsletter
//                 </label>
//               </div>

//               <div className="flex items-start gap-3">
//                 <input
//                   type="checkbox"
//                   id="remoteAssistance"
//                   className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="remoteAssistance" className="text-sm text-gray-600 cursor-pointer">
//                   Allow remote shopping assistance
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Sign-in Information Section */}
//           <div>
//             <h2 className="text-xl font-medium text-gray-900 mb-6">Sign-in Information</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//                 <p className="text-xs text-gray-500 mt-1.5">Password Strength: No Password</p>
//               </div>

//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Confirm Password <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   id="showPassword"
//                   checked={showPassword}
//                   onChange={() => setShowPassword(!showPassword)}
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="showPassword" className="text-sm text-gray-600 cursor-pointer">
//                   Show Password
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Required Fields Note */}
//           <p className="text-xs text-red-500 pt-2">* Required Fields</p>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-lg"
//           >
//             Create an Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateAccountPage;



import React, { useState } from 'react';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Calculate password strength
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return 'No Password';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'text-gray-500';
    if (passwordStrength === 1) return 'text-red-500';
    if (passwordStrength === 2) return 'text-orange-500';
    if (passwordStrength === 3) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getPasswordStrengthBar = () => {
    const width = (passwordStrength / 4) * 100;
    let color = 'bg-gray-200';
    if (passwordStrength === 1) color = 'bg-red-500';
    if (passwordStrength === 2) color = 'bg-orange-500';
    if (passwordStrength === 3) color = 'bg-yellow-500';
    if (passwordStrength === 4) color = 'bg-green-500';
    return { width, color };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', formData);
    // Add your validation and API call here
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center py-12 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-2xl w-full relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
        
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-100 p-8 md:p-12">
          {/* Header with icon */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-40" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-sm text-gray-500 mt-1">Join our premium community</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 inline-block">
                  Personal Information
                </h2>
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className={`relative transition-all duration-300 ${isFocused.firstName ? 'scale-[1.02]' : ''}`}>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('firstName')}
                      onBlur={() => handleBlur('firstName')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <div className={`relative transition-all duration-300 ${isFocused.lastName ? 'scale-[1.02]' : ''}`}>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('lastName')}
                      onBlur={() => handleBlur('lastName')}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                      required
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Sign Up for Newsletter
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    id="remoteAssistance"
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Allow remote shopping assistance
                  </span>
                </label>
              </div>
            </div>

            {/* Sign-in Information Section */}
            <div className="space-y-6">
              <div className="relative">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 inline-block">
                  Sign-in Information
                </h2>
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              
              <div className="space-y-5">
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
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m12-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Password strength indicator */}
                  {formData.password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className={`text-xs ${getPasswordStrengthColor()}`}>
                          Password Strength: {getPasswordStrengthText()}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formData.password.length}/32
                        </p>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${getPasswordStrengthBar().color}`}
                          style={{ width: `${getPasswordStrengthBar().width}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className={`relative transition-all duration-300 ${isFocused.confirmPassword ? 'scale-[1.02]' : ''}`}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      onFocus={() => handleFocus('confirmPassword')}
                      onBlur={() => handleBlur('confirmPassword')}
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                        formData.confirmPassword && formData.password !== formData.confirmPassword
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                          : 'border-gray-200 focus:border-blue-400 focus:ring-blue-100'
                      }`}
                      required
                    />
                    {formData.confirmPassword && formData.password === formData.confirmPassword && (
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-500 mt-1.5">Passwords do not match</p>
                  )}
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
              </div>
            </div>

            {/* Required Fields Note */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <p className="text-xs text-red-500">* Required Fields</p>
              <p className="text-xs text-gray-400">Already have an account? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Sign In</a></p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white font-semibold py-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span>Create an Account</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;