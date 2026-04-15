import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AccountSidebar from './Component/AccountSidebar';

const EditAccountInformationPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Fakhir',
    lastName: 'Israr',
    changeEmail: false,
    changePassword: false,
    allowRemoteAssistance: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Account Information Updated:', formData);
    // Add your API call here
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Edit Account Information
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <AccountSidebar
                activeTab="Account Information"
                onTabChange={() => {}}
              />
            </div>

            {/* Main Form Content */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-10 max-w-2xl">

                <form onSubmit={handleSubmit} className="space-y-10">

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>

                    <div className="space-y-6">
                      {/* First Name */}
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

                      {/* Last Name */}
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

                      {/* Change Email */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="changeEmail"
                          name="changeEmail"
                          checked={formData.changeEmail}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="changeEmail" className="text-sm text-gray-700 cursor-pointer">
                          Change Email
                        </label>
                      </div>

                      {/* Change Password */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="changePassword"
                          name="changePassword"
                          checked={formData.changePassword}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="changePassword" className="text-sm text-gray-700 cursor-pointer">
                          Change Password
                        </label>
                      </div>

                      {/* Allow Remote Shopping Assistance */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="allowRemoteAssistance"
                          name="allowRemoteAssistance"
                          checked={formData.allowRemoteAssistance}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="allowRemoteAssistance" className="text-sm text-gray-700 cursor-pointer flex items-center gap-1">
                          Allow remote shopping assistance
                          <span className="text-gray-400 text-xs cursor-help" title="This allows our support team to assist you during shopping">ℹ️</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-3.5 rounded-2xl transition-all duration-200 shadow-sm"
                    >
                      Save
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

export default EditAccountInformationPage;