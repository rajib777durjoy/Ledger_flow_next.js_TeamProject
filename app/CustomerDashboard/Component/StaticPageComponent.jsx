'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, ShoppingBag, CreditCard, Store } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const StaticPageComponent = () => {
    const { user } = useUser();
    const [customerData, setCustomerData] = useState({});
    const [purchaseData, setPurchaseData] = useState([]);
    const [shop_wise_due, setShop_wise_due] = useState([])

    useEffect(() => {
        const fetchCustomerData = async () => {
            const res = await fetch(`/api/CustomerDashboard?id=${user?.id}`);
            const data = await res.json();
            console.log("API data:", data);
            setCustomerData(data);
        };
        const fetchPurchaseData = async () => {
            const res = await fetch(`/api/CustomerDashboard/PurchasesRoute?id=${user?.id}`)
            const data = await res.json();
            console.log('purchase data', data);
            setPurchaseData(data);
        }
        const fetchShopDuePayment = async () => {
            const res = await fetch(`/api/CustomerDashboard/shop_wise_due?id=${user?.id}`)
            const data = await res.json();
            setShop_wise_due(data)
        }

        if (user) {
            fetchCustomerData();
            fetchPurchaseData();
            fetchShopDuePayment();
        }
    }, [user]);

    const getDaysAgo = (dateString) => {
        const now = new Date();
        const created = new Date(dateString);

        const diffTime = now - created;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "1 day ago";
        return `${diffDays} days ago`;
    };
    // console.log('customer data in component',customerData);
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
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                            {customerData?.profile ? (
                                <img
                                    src={customerData.profile}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <User className="text-blue-600" />
                            )}
                        </div>

                        <div>
                            <h2 className="font-semibold">
                                {customerData?.fullname || "Customer Name"}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {customerData?.role || "Active Customer"}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        Email: {customerData?.email || "No email found"}
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
                        ৳ {customerData?.total_due || 2500}
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
                        {customerData?.total_purchases || 12} Items
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                        All recorded purchase entries
                    </p>
                </motion.div>

            </div>

            {/* Buy History */}
            <div className="max-w-6xl mx-auto mt-8">
                <h2 className="text-xl font-semibold mb-3">Purchase History</h2>
                {
                    purchaseData?.slice(0, 4).map((item, index) => <div key={index + 1} className="bg-white my-1 rounded-2xl shadow-md p-4 space-y-3">

                        <div className="flex justify-between border-b pb-2 ">
                            <span>{item?.product_name} {item?.unity} </span>
                            <span>৳{Number(item?.price) * Number(item?.quantity)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>
                                Quantity: {item?.quantity}
                            </span>

                            <span>
                                {getDaysAgo(item?.created_at)}
                            </span>
                        </div>
                    </div>)
                }
                {/* Button */}
                <div className='mt-4'>
                    <Link href={'/CustomerDashboard/Allpurchases'} className="px-4 py-2  bg-amber-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm">
                        View All Purchases
                    </Link>
                </div>

            </div>

            {/* Shop-wise Due */}
            <div className="max-w-6xl mx-auto mt-8 px-4">

                {/* HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold">
                        Shop-wise Due
                    </h2>

                    <span className="text-sm text-gray-500">
                        Total Shops: {shop_wise_due?.length || 0}
                    </span>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

                    {shop_wise_due?.slice(0,3).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 border border-gray-100"
                        >

                            {/* TOP SECTION */}
                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    {/* IMAGE */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <img
                                            src={item?.shop_image}
                                            alt="shop"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* INFO */}
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                            {item?.shop_name}
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            {item?.address}
                                        </p>
                                    </div>

                                </div>

                                {/* DUE AMOUNT */}
                                <span className="text-red-500 font-bold text-sm sm:text-lg">
                                    ৳ {Number(item?.total_due).toLocaleString()}
                                </span>

                            </div>

                            {/* BOTTOM */}
                            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">

                                <span>
                                    📞 {item?.phone}
                                </span>

                                <span>
                                    🕒 {new Date(item?.last_due_date).toLocaleDateString()}
                                </span>

                            </div>

                            {/* STATUS BADGE */}
                            <div className="mt-3">
                                <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-50 text-red-600">
                                    Active Due
                                </span>
                            </div>

                        </div>
                    ))}

                </div>

                {/* VIEW ALL BUTTON */}
                <div className="mt-6 flex justify-center sm:justify-end">
                    <Link href={'/CustomerDashboard/ViewDueAll'} className="w-full sm:w-auto px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition shadow-sm">
                        View All Due
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default StaticPageComponent;