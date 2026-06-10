'use client';

import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Package, Users } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Static = () => {
  const { user } = useUser();

  const [shop_Data, setShop_Data] = useState({});
  const [products, setProduct] = useState([]);

  // 📡 FETCH DATA
  useEffect(() => {
    const clerk_id = user?.id;

    const getShopData = async () => {
      const res = await fetch(`/api/Shop?clerk_id=${clerk_id}`);
      const data = await res.json();
      console.log('data',data)
      setShop_Data(data);
    };

    const getProducts = async () => {
      const res = await fetch(`/api/productsDetails?clerk_id=${clerk_id}`);
      const data = await res.json();
      setProduct(data.slice(0, 6));
    };

    if (user?.id) {
      getShopData();
      getProducts();
    }
  }, [user?.id]);

  // 📊 CALCULATIONS
  const totalInventory = useMemo(
    () => products.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
    [products]
  );

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  const lowStock = useMemo(() => {
    return products.filter((p) => p.quantity < 50).length;
  }, [products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* 🏪 HEADER */}
        <div className="bg-white border rounded-3xl shadow-sm p-5 sm:p-6 lg:p-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* SHOP INFO */}
            <div>
              <p className="text-xs sm:text-sm text-slate-500">
                Shop Dashboard
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {shop_Data?.shop_name || "Your Shop"}
              </h1>

              <p className="text-sm text-slate-500 mt-2">
                Manage products, inventory & customer dues in one place
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

              <Link href="/Shop/Dashboard/AddProduct" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800">
                  + Add Product
                </Button>
              </Link>

              <Link href="/Shop/Dashboard/CustomerDue" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700">
                  <Users size={18} className="mr-2" />
                  Customer Due
                </Button>
              </Link>

            </div>

          </div>
        </div>

        {/* 📊 STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

          <Card className="shadow-sm border">
            <CardContent className="p-5">
              <p className="text-slate-500 text-sm">Total Products</p>
              <h2 className="text-3xl font-bold mt-2">{products.length}</h2>
            </CardContent>
          </Card>

          <Card className="shadow-sm border">
            <CardContent className="p-5">
              <p className="text-slate-500 text-sm">Total Inventory</p>
              <h2 className="text-3xl font-bold mt-2">{totalInventory}</h2>
            </CardContent>
          </Card>

          <Card className="shadow-sm border">
            <CardContent className="p-5">
              <p className="text-slate-500 text-sm">Categories</p>
              <h2 className="text-3xl font-bold mt-2">{categories.length}</h2>
            </CardContent>
          </Card>

          <Card className="shadow-sm border">
            <CardContent className="p-5">
              <p className="text-slate-500 text-sm">Low Stock</p>
              <h2 className="text-3xl font-bold mt-2 text-red-500">
                {lowStock}
              </h2>
            </CardContent>
          </Card>

        </div>

        {/* 🏪 SHOP INFO + CATEGORIES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          {/* SHOP INFO */}
          <Card className="border shadow-sm">
            <CardContent className="p-6">

              <h2 className="text-xl font-bold mb-5 text-slate-900">
                Shop Information
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3 items-start">
                  <Phone className="text-green-600 mt-1" />
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="font-semibold text-slate-900">
                      {shop_Data?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin className="text-red-500 mt-1" />
                  <div>
                    <p className="text-xs text-slate-500">Address</p>
                    <p className="font-semibold text-slate-900">
                      {shop_Data?.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* 🔥 CUSTOMER DUE BUTTON */}
              <Link href="/Shop/Dashboard/CustomerDue">
                <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700">
                  <Users className="mr-2" size={18} />
                  View Customer Due Payments
                </Button>
              </Link>

            </CardContent>
          </Card>

          {/* CATEGORIES */}
          <Card className="border shadow-sm">
            <CardContent className="p-6">

              <h2 className="text-xl font-bold mb-5 text-slate-900">
                Product Categories
              </h2>

              <div className="space-y-3">

                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat
                  ).length;

                  return (
                    <div
                      key={cat}
                      className="flex justify-between border-b pb-2"
                    >
                      <span className="text-slate-700">{cat}</span>
                      <span className="font-semibold">{count}</span>
                    </div>
                  );
                })}

              </div>

            </CardContent>
          </Card>

        </div>

        {/* 🛒 PRODUCTS */}
        <div className="mt-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <h2 className="text-2xl font-bold">Recent Products</h2>

            <Link href="/Shop/Dashboard/AllProduct">
              <Button variant="outline">See All Products</Button>
            </Link>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={product.image_url}
                  className="h-48 w-full object-cover"
                  alt=""
                />

                <CardContent className="p-4">

                  <h3 className="font-bold text-lg truncate">
                    {product.product_name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {product.category}
                  </p>

                  <div className="flex justify-between mt-3">

                    <p className="font-bold text-green-600">
                      ৳{product.price}
                    </p>

                    <p className="text-sm text-slate-500">
                      Stock: {product.quantity}
                    </p>

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