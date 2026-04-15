import AccountSidebar from './Component/AccountSidebar';

const AddressBookPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur-md opacity-40" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Address Book
                </h1>
              </div>
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

            {/* Main Content - Address Book */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 p-8">

                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Default Addresses</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Default Billing Address */}
                  <div className="border border-gray-200 rounded-2xl p-8">
                    <h3 className="font-semibold text-lg text-gray-900 mb-6">Default Billing Address</h3>
                    
                    <div className="space-y-2 text-gray-700">
                      <p className="font-medium">Fakhir Israr</p>
                      <p>dsad</p>
                      <p>sadsa</p>
                      <p>asd, Alaska, 78966</p>
                      <p>United States</p>
                      <p className="pt-2">T: asda</p>
                    </div>

                    <a 
                      href="#" 
                      className="inline-block mt-8 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Change Billing Address
                    </a>
                  </div>

                  {/* Default Shipping Address */}
                  <div className="border border-gray-200 rounded-2xl p-8">
                    <h3 className="font-semibold text-lg text-gray-900 mb-6">Default Shipping Address</h3>
                    
                    <div className="space-y-2 text-gray-700">
                      <p className="font-medium">Fakhir Israr</p>
                      <p>dsad</p>
                      <p>sadsa</p>
                      <p>asd, Alaska, 78966</p>
                      <p>United States</p>
                      <p className="pt-2">T: asda</p>
                    </div>

                    <a 
                      href="#" 
                      className="inline-block mt-8 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Change Shipping Address
                    </a>
                  </div>
                </div>

                {/* Additional Address Entries */}
                <div className="mt-16">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Additional Address Entries</h3>
                  <div className="border border-gray-200 rounded-2xl p-10 text-center">
                    <p className="text-gray-500">You have no other address entries in your address book.</p>
                  </div>
                </div>

                {/* Add New Address Button */}
                <div className="mt-10">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-2xl transition-all duration-200 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Address
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressBookPage;