import React, { useState } from 'react';
import { FiPackage, FiChevronLeft, FiChevronRight, FiEye, FiRefreshCw } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import AccountSidebar from './Component/AccountSidebar';

const MyOrdersPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Sample orders data - in real app, this would come from an API
    const orders = [
        { id: '00000003', date: '4/14/25', total: '$82.00', status: 'Pending', items: 1 },
        { id: '00000004', date: '4/12/25', total: '$156.00', status: 'Processing', items: 3 },
        { id: '00000005', date: '4/10/25', total: '$45.00', status: 'Shipped', items: 2 },
        { id: '00000006', date: '4/8/25', total: '$234.00', status: 'Delivered', items: 4 },
        { id: '00000007', date: '4/5/25', total: '$89.00', status: 'Cancelled', items: 1 },
        { id: '00000008', date: '4/3/25', total: '$167.00', status: 'Delivered', items: 2 },
        { id: '00000009', date: '4/1/25', total: '$123.00', status: 'Processing', items: 3 },
        { id: '00000010', date: '3/30/25', total: '$98.00', status: 'Shipped', items: 1 },
        { id: '00000011', date: '3/28/25', total: '$210.00', status: 'Delivered', items: 5 },
        { id: '00000012', date: '3/25/25', total: '$76.00', status: 'Pending', items: 2 },
        { id: '00000013', date: '3/22/25', total: '$145.00', status: 'Delivered', items: 3 },
        { id: '00000014', date: '3/20/25', total: '$67.00', status: 'Shipped', items: 1 },
    ];

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(orders.length / itemsPerPage);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-100 text-yellow-700';
            case 'Processing':
                return 'bg-blue-100 text-blue-700';
            case 'Shipped':
                return 'bg-purple-100 text-purple-700';
            case 'Delivered':
                return 'bg-green-100 text-green-700';
            case 'Cancelled':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-8 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                    {/* Page Title */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-40" />
                                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <FiPackage className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    My Orders
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">Track and manage your orders</p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                            <HiOutlineUser className="w-4 h-4" />
                            Welcome back, <span className="font-semibold text-gray-900">Fakhir Israr</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Sidebar */}
                        <div className="lg:col-span-3">
                            <AccountSidebar
                                activeTab="My Orders"
                                onTabChange={() => { }}
                            />
                        </div>

                        {/* Main Content - My Orders */}
                        <div className="lg:col-span-9">
                            <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 overflow-hidden">

                                {/* Orders Table Header */}
                                <div className="border-b border-gray-100 px-8 py-5 bg-gray-50">
                                    <div className="grid grid-cols-12 text-sm font-medium text-gray-600">
                                        <div className="col-span-3">Order #</div>
                                        <div className="col-span-2">Date</div>
                                        <div className="col-span-2">Order Total</div>
                                        <div className="col-span-2">Status</div>
                                        <div className="col-span-3 text-right">Action</div>
                                    </div>
                                </div>

                                {/* Order Rows */}
                                {currentOrders.map((order) => (
                                    <div key={order.id} className="px-8 py-7 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                        <div className="grid grid-cols-12 items-center text-sm">
                                            <div className="col-span-3 font-medium text-gray-900">{order.id}</div>
                                            <div className="col-span-2 text-gray-600">{order.date}</div>
                                            <div className="col-span-2 font-medium text-gray-900">{order.total}</div>
                                            <div className="col-span-2">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="col-span-3 text-right flex gap-4 justify-end">
                                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-1">
                                                    <FiEye className="w-4 h-4" />
                                                    View Order
                                                </a>
                                                <span className="text-gray-300">|</span>
                                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-1">
                                                    <FiRefreshCw className="w-4 h-4" />
                                                    Reorder
                                                </a>
                                            </div>
                                        </div>

                                        {/* Order Details */}
                                        <div className="mt-6 flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-4">
                                                <span className="text-gray-500">{order.items} Item{order.items !== 1 ? 's' : ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Pagination Section - Right Aligned */}
                                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                        {/* Left side - Items per page selector */}
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm text-gray-600">Show</span>
                                            <select
                                                value={itemsPerPage}
                                                onChange={handleItemsPerPageChange}
                                                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                            >
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={15}>15</option>
                                                <option value={20}>20</option>
                                                <option value={25}>25</option>
                                            </select>
                                            <span className="text-sm text-gray-600">per page</span>

                                            <div className="text-sm text-gray-500 ml-4">
                                                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, orders.length)} of {orders.length} orders
                                            </div>
                                        </div>

                                        {/* Right side - Pagination buttons */}
                                        <div className="flex items-center gap-2">
                                            {/* Previous button */}
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === 1
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-300'
                                                    }`}
                                            >
                                                <FiChevronLeft className="w-4 h-4" />
                                            </button>

                                            {/* Page numbers */}
                                            {[...Array(totalPages)].map((_, index) => {
                                                const pageNumber = index + 1;
                                                // Show limited page numbers with ellipsis
                                                if (
                                                    pageNumber === 1 ||
                                                    pageNumber === totalPages ||
                                                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                                ) {
                                                    return (
                                                        <button
                                                            key={pageNumber}
                                                            onClick={() => handlePageChange(pageNumber)}
                                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === pageNumber
                                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                                                }`}
                                                        >
                                                            {pageNumber}
                                                        </button>
                                                    );
                                                } else if (
                                                    pageNumber === currentPage - 2 ||
                                                    pageNumber === currentPage + 2
                                                ) {
                                                    return (
                                                        <span key={pageNumber} className="px-2 text-gray-400">
                                                            ...
                                                        </span>
                                                    );
                                                }
                                                return null;
                                            })}

                                            {/* Next button */}
                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === totalPages
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-gray-300'
                                                    }`}
                                            >
                                                <FiChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* No orders message */}
                                {orders.length === 0 && (
                                    <div className="text-center py-12">
                                        <FiPackage className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                                        <p className="text-gray-500 text-lg">No orders found</p>
                                        <p className="text-gray-400 text-sm mt-1">You haven't placed any orders yet.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrdersPage;