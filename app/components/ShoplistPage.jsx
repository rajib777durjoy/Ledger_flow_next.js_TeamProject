'use client';

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

const ShoplistPage = () => {
    const { user } = useUser();
    const [ShopData, setShopData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getShopListData = async () => {
            try {
                const res = await axios(
                    `/api/Shop?clerk_id=${user?.id}`
                );

                setShopData(res.data || []);
                console.log('shop data ', res.data)
            } catch (error) {
                console.log(error);
            }
        };

        if (user) {
            getShopListData();
        }
    }, [user]);
    const filteredShops = useMemo(() => {
    return ShopData.filter((shop) =>
        shop.shop_name
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );
}, [ShopData, search]);

    const totalShops = ShopData.length;

    const totalOwners = new Set(
        (ShopData || []).map((shop) => shop?.owner_name)
    ).size;


    return (
        <div className="min-h-screen bg-gray-50 p-5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Shops Overview
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Manage and view all registered shops
                        </p>
                    </div>

                    <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-lg px-4 py-2 w-full md:w-72"
                    />
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-5 shadow">
                        <h3 className="text-gray-500 text-sm">
                            Total Shops
                        </h3>
                        <p className="text-3xl font-bold">
                            {totalShops}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow">
                        <h3 className="text-gray-500 text-sm">
                            Shop Owners
                        </h3>
                        <p className="text-3xl font-bold">
                            {totalOwners}
                        </p>
                    </div>


                </div>

                {/* Products */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredShops.map((shop) => (
                        <div
                            key={shop.id}
                            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src={shop?.shop_image}
                                alt={shop.shop_name}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-xl font-bold mb-2">
                                    {shop?.shop_name}
                                </h2>

                                <p className="text-sm text-gray-500 line-clamp-3">
                                    {shop?.description}
                                </p>

                                <div className="mt-4 space-y-2 text-sm">
                                    <p>
                                        <span className="font-semibold">
                                            Owner:
                                        </span>{' '}
                                        {shop?.owner_name}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Phone:
                                        </span>{' '}
                                        {shop?.phone}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Address:
                                        </span>{' '}
                                        {shop?.address}
                                    </p>
                                </div>

                                <div className="mt-5 flex gap-2">
                                    <Link
                                        href={`/pages/ShopList/${shop?.id}`}
                                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                                    >
                                        View Shop
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredShops?.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No Shop found
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShoplistPage;