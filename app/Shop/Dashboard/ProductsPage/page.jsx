'use client'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const ProductsPage = () => {
    const [product, setProduct] = useState([]);
    const { user } = useUser();
    const clerk_id = user?.id;
    useEffect(() => {
         if (!user?.id) return;
        const getProducts = async () => {
            const res = await fetch(`/api/products/?clerk_id=${clerk_id}`);
            const data = await res.json();
            console.log('data', data);
            setProduct(data);
        }
        getProducts();

    },[user])

    return (
        <div className='w-full h-screen'>

            <div className="w-full px-6 overflow-x-auto">

                <div className="mb-4 px-6">
                    <h1 className="text-2xl font-bold text-gray-800">Products List</h1>
                    <p className="text-gray-500 text-sm">All products of your shop</p>
                </div>

                <table className="min-w-full bg-white border rounded-xl shadow-md overflow-hidden">

                    {/* Table Head */}
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th className="py-3 px-4 text-left">Image</th>
                            <th className="py-3 px-4 text-left">Product</th>
                            <th className="py-3 px-4 text-left">Category</th>
                            <th className="py-3 px-4 text-left">Price</th>
                            <th className="py-3 px-4 text-left">Qty</th>
                            <th className="py-3 px-4 text-left">Unit</th>
                            <th className="py-3 px-4 text-left">Description</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-gray-700 text-sm">

                        {product?.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                {/* Image */}
                                <td className="py-3 px-4">
                                    <img
                                        src={item.image_url}
                                        alt={item.product_name}
                                        className="w-12 h-12 rounded-md object-cover border"
                                    />
                                </td>

                                {/* Product Name */}
                                <td className="py-3 px-4 font-medium">
                                    {item.product_name}

                                </td>

                                {/* Category */}
                                <td className="py-3 px-4 text-gray-500">
                                    {item.category}
                                </td>

                                {/* Price */}
                                <td className="py-3 px-4 text-green-600 font-semibold">
                                    ৳ {item.price}
                                </td>

                                {/* Quantity */}
                                <td className="py-3 px-4">
                                    {item.quantity}
                                </td>

                                {/* Unit */}
                                <td className="py-3 px-4 text-gray-500">
                                    {item.unity}
                                </td>

                                {/* Description */}
                                <td className="py-3 px-4 text-gray-500 max-w-xs truncate">
                                    {item.description}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>
            <div className="mx-8">
                <Link
                    href="/Shop/Dashboard/ProductsPage/AllProduct"
                    className="inline-flex items-center gap-2 px-4 py-1 
    bg-linear-to-r from-amber-400 to-orange-500 
    text-white font-semibold rounded-full 
    shadow-md hover:shadow-xl 
    hover:scale-105 active:scale-95 
    transition-all duration-300 ease-in-out"
                >
                    View All →
                </Link>
            </div>

        </div>
    );
};

export default ProductsPage;