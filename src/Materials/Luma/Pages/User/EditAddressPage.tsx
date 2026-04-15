import React, { useState } from 'react';
import AccountSidebar from './Component/AccountSidebar';

const EditAddressPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Fakhir',
    lastName: 'Israr',
    company: '',
    phone: 'asda',
    streetAddress: 'dsad',
    streetAddress2: 'sadsa',
    country: 'United States',
    state: 'Alaska',
    city: 'asd',
    zipCode: '78966',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Address Updated:', formData);
    // Add your save logic here
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Edit Address
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <AccountSidebar
                activeTab="Address Book"
                onTabChange={() => {}}
              />
            </div>

            {/* Edit Address Form */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-10">

                <form onSubmit={handleSubmit} className="space-y-10">

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">

                    {/* Contact Information */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Address</h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Street Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Street Address 2
                          </label>
                          <input
                            type="text"
                            name="streetAddress2"
                            value={formData.streetAddress2}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          >
                            <option>United States</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            State/Province <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          >
                            <option>Alaska</option>
                          </select>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              City <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                              Zip/Postal Code <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning Messages */}
                  <div className="space-y-3">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                      <span className="text-amber-500 mt-0.5">⚠️</span>
                      <p className="text-amber-700 text-sm">It's a default billing address.</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3">
                      <span className="text-amber-500 mt-0.5">⚠️</span>
                      <p className="text-amber-700 text-sm">It's a default shipping address.</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3.5 rounded-2xl transition-all"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => window.history.back()}
                      className="border border-gray-300 hover:bg-gray-50 font-medium px-10 py-3.5 rounded-2xl transition-all"
                    >
                      Cancel
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAddressPage;