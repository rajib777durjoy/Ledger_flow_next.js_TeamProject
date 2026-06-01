'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingBag, CreditCard, Store } from 'lucide-react';

const StaticPageComponent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto mb-6"
            >
                <h1 className="text-3xl font-bold text-gray-800">
                    Customer Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Buy history, due amount & shop-wise due list
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Customer Info */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-md p-5"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="text-blue-600" />
                        </div>
                        <div>
                            <h2 className="font-semibold">Customer Name</h2>
                            <p className="text-sm text-gray-500">Active Customer</p>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        Phone: +880 1XXXXXXXXX
                    </div>
                </motion.div>

                {/* Total Due */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-md p-5"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <CreditCard className="text-red-500" />
                        <h2 className="font-semibold">Total Due</h2>
                    </div>

                    <p className="text-3xl font-bold text-red-500">
                        ৳ 2,500
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        Pending payment from all shops
                    </p>
                </motion.div>

                {/* Total Purchases */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-md p-5"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <ShoppingBag className="text-green-500" />
                        <h2 className="font-semibold">Total Purchases</h2>
                    </div>

                    <p className="text-3xl font-bold text-green-600">
                        12 Items
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        All recorded purchase entries
                    </p>
                </motion.div>

            </div>

            {/* Buy History */}
            <div className="max-w-6xl mx-auto mt-8">
                <h2 className="text-xl font-semibold mb-3">Purchase History</h2>

                <div className="bg-white rounded-2xl shadow-md p-4 space-y-3">

                    <div className="flex justify-between border-b pb-2">
                        <span>Rice (50kg)</span>
                        <span>৳ 3,500</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                        <span>Oil (5L)</span>
                        <span>৳ 900</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Sugar (10kg)</span>
                        <span>৳ 800</span>
                    </div>

                    {/* Button */}
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm">
                        View All Purchases
                    </button>

                </div>
            </div>

            {/* Shop-wise Due */}
            <div className="max-w-6xl mx-auto mt-8">
                <h2 className="text-xl font-semibold mb-3">Shop-wise Due</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex justify-between items-center border border-gray-100">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Store className="text-blue-600" size={18} />
                            </div>

                            <div>
                                <p className="font-medium">ABC Grocery Shop</p>
                                <p className="text-xs text-gray-500">Active due account</p>
                            </div>
                        </div>

                        <span className="text-red-500 font-bold text-lg">
                            ৳ 1,200
                        </span>

                    </div>

                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex justify-between items-center border border-gray-100">

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Store className="text-blue-600" size={18} />
                            </div>

                            <div>
                                <p className="font-medium">City Mart</p>
                                <p className="text-xs text-gray-500">Active due account</p>
                            </div>
                        </div>

                        <span className="text-red-500 font-bold text-lg">
                            ৳ 1,300
                        </span>

                    </div>

                </div>

                {/* View All Button */}
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm">
                        View All Due
                    </button>
                </div>

            </div>

        </div>
    );
};

export default StaticPageComponent;