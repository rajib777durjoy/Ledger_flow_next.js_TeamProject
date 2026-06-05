'use client'

import UseLoading from "@/app/Hook/UseLoading";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllProduct = () => {
    const { user } = useUser()
    const [productData, setproductData] = useState([]);
    const [searchquery, setsearchquery] = useState('');
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const fetchProductDatafunction = async () => {
            setloading(true)
            const res = await fetch(`/api/productsDetails?clerk_id=${user?.id}&search=${searchquery}`);
            const productData = await res.json();
            setproductData(productData)
            setloading(false)
            console.log('porddsfdsrewre::', productData)
        }
        if (user) {
            fetchProductDatafunction()
        }
    }, [user, searchquery])
    console.log('serach value', searchquery)
    if (loading) {
        return <UseLoading />;
    }
    return (
        <div className="min-h-screen bg-amber-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

                    <div>
                        <h1 className="text-2xl font-extrabold text-amber-900">
                            All Products
                        </h1>
                        <p className="text-amber-700 mt-1">
                            Manage your shop inventory with ease
                        </p>
                    </div>
                    <form className="mb-6">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                name="search"
                                onChange={(e) => setsearchquery(e.target.value)}
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-amber-200 
            focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white shadow-sm"
                            />

                            <button type="submit" className="absolute right-3 top-2.5 text-amber-600 text-sm">
                                Search
                            </button>
                        </div>
                    </form>

                    <div className="bg-white border border-amber-200 shadow-sm rounded-2xl px-4 py-2">
                        <p className="text-sm text-amber-600">
                            Total Products
                        </p>
                        <p className="text-xl font-bold text-amber-900">
                            {productData.length}
                        </p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

                    {productData?.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={product.image_url}
                                    alt={product.product_name}
                                    className="w-full h-52 object-cover"
                                />

                                <span className="absolute top-3 left-3 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
                                    {product.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                {/* Title + Stock */}
                                <div className="flex items-start justify-between gap-2">
                                    <h2 className="font-bold text-lg text-amber-950">
                                        {product.product_name}
                                    </h2>

                                    <span className={`text-xs px-2 py-1 rounded-full font-medium
                                        ${product.quantity < 50
                                            ? "bg-red-100 text-red-600"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {product.quantity < 50 ? "Low Stock" : "In Stock"}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-amber-700 mt-2 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Info */}
                                <div className="mt-4 space-y-2 text-sm">

                                    <div className="flex justify-between">
                                        <span className="text-amber-600">Price</span>
                                        <span className="font-bold text-amber-900">
                                            ৳{product.price}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-amber-600">Quantity</span>
                                        <span className="font-medium text-amber-900">
                                            {product.quantity}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-amber-600">Unit</span>
                                        <span className="font-medium text-amber-900">
                                            {product.unity}
                                        </span>
                                    </div>

                                </div>

                                {/* Actions */}
                                <div className="mt-5 pt-4 border-t border-amber-100 flex gap-2">

                                    <Link href={`/Shop/Dashboard/AllProduct/Edit/${product?.id}/${product?.shop_id}`} className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 text-center rounded-xl text-sm font-semibold transition">
                                        Edit
                                    </Link>

                                    <Link href={`/Shop/Dashboard/AllProduct/Delete/${product?.id}`} className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 text-center rounded-xl text-sm font-semibold transition">
                                        Delete
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
               
            </div>
        </div>
    );
};

export default AllProduct;