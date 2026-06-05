'use client'
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Phone, MapPin, Package } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Static = () => {
    const { user } = useUser();
    const [shop_Data, setShop_Data] = useState({});
    const [products, setproduct] = useState([])
    useEffect(() => {
        const getShopData = async () => {
            const clerk_id = user?.id;
            const res = await fetch(
                `/api/Shop?clerk_id=${clerk_id}`
            );
            const data = await res.json();
            setShop_Data(data)
            console.log(data);
        };
        const fetchProductDatafunction = async () => {
            const res = await fetch(`/api/productsDetails?clerk_id=${user?.id}`);
            const productData = await res.json();
            setproduct(productData.slice(0,6))
            console.log('res::', productData)
        }
        if (user) {
            getShopData();
            fetchProductDatafunction();
        }
    }, [user]);
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Header */}
                <div className="bg-white rounded-3xl shadow-sm border p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                        <div>
                            <p className="text-sm text-gray-500 mb-2">
                                Shop Dashboard
                            </p>

                            <h1 className="text-3xl font-bold text-gray-900">
                                {shop_Data?.shop_name}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                Manage products, inventory and sales
                            </p>
                        </div>

                        <Link href="/Shop/Dashboard/AddProduct">
                            <Button
                                size="lg"
                                className="w-full lg:w-auto"
                            >
                                + Add Product
                            </Button>
                        </Link>

                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mt-8">

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">
                                {products.length}
                            </div>

                            <p className="text-gray-500 mt-2">
                                Total Products
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">
                                {products.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0
                                )}
                            </div>

                            <p className="text-gray-500 mt-2">
                                Inventory
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold">
                                {
                                    [...new Set(
                                        products.map(p => p.category)
                                    )].length
                                }
                            </div>

                            <p className="text-gray-500 mt-2">
                                Categories
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">
                            <div className="text-3xl font-bold text-red-500">
                                {
                                    products.filter(
                                        item => item.quantity < 50
                                    ).length
                                }
                            </div>

                            <p className="text-gray-500 mt-2">
                                Low Stock
                            </p>
                        </CardContent>
                    </Card>

                </div>

                {/* Shop Details + Categories */}
                <div className="grid lg:grid-cols-2 gap-6 mt-8">

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">

                            <h2 className="text-xl font-bold mb-5">
                                Shop Information
                            </h2>

                            <div className="space-y-4">

                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-green-500" />
                                    <span>{shop_Data?.phone}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-red-500" />
                                    <span>{shop_Data?.address}</span>
                                </div>

                            </div>

                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                        <CardContent className="p-6">

                            <h2 className="text-xl font-bold mb-5">
                                Product Categories
                            </h2>

                            <div className="space-y-3">

                                {[...new Set(products.map(
                                    p => p.category
                                ))].map(category => {

                                    const count = products.filter(
                                        p => p.category === category
                                    ).length;

                                    return (
                                        <div
                                            key={category}
                                            className="flex justify-between"
                                        >
                                            <span>{category}</span>
                                            <span className="font-semibold">
                                                {count}
                                            </span>
                                        </div>
                                    );
                                })}

                            </div>

                        </CardContent>
                    </Card>

                </div>

                {/* Products */}
                <div className="mt-10">

                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">
                            Recent Products
                        </h2>
                        <div className="flex items-center justify-between gap-3 ">
                            <Link
                                href="/Shop/Dashboard/AllProduct"
                                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-amber-500 hover:bg-blue-50 hover:text-amber-600 hover:shadow-md"
                            >
                                See All

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {products.map(product => (

                            <Card
                                key={product.id}
                                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <img
                                    src={product.image_url}
                                    alt={product.product_name}
                                    className="h-52 w-full object-cover"
                                />

                                <CardContent className="p-5">

                                    <div className="flex justify-between items-start">

                                        <div>
                                            <h3 className="font-bold text-lg">
                                                {product.product_name}
                                            </h3>

                                            <p className="text-gray-500 text-sm">
                                                {product.category}
                                            </p>
                                        </div>

                                    </div>

                                    <div className="mt-4 flex justify-between items-center">

                                        <div>
                                            <p className="font-bold text-xl text-green-600">
                                                ৳{product.price}
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                {product.unity}
                                            </p>
                                        </div>

                                        <div className="text-right">

                                            <p className="font-semibold">
                                                {product.quantity}
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Stock
                                            </p>

                                        </div>

                                    </div>

                                </CardContent>
                            </Card>

                        ))}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Static;