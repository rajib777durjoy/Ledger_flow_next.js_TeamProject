import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Phone, MapPin, Package } from "lucide-react";
import Link from "next/link";

const StaticPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Store /> My Shop Dashboard
            </h1>
            <p className="text-gray-500">Manage your shop overview</p>
          </div>
          <Link href={'/Shop/Dashboard/AddProduct'}><Button>+ Add Product</Button></Link>
        </div>

        {/* Shop Info */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">Shop Name</h2>
              <p className="text-gray-500">Durjoy Grocery Store</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <Phone className="text-green-600" />
              <div>
                <h2 className="text-lg font-semibold">Phone</h2>
                <p className="text-gray-500">+880 1XXXXXXXXX</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 flex items-center gap-2">
              <MapPin className="text-red-500" />
              <div>
                <h2 className="text-lg font-semibold">Address</h2>
                <p className="text-gray-500">Lalmonirhat, Bangladesh</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="mx-auto text-blue-500" />
              <h3 className="text-xl font-bold mt-2">120</h3>
              <p className="text-gray-500">Total Products</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-green-600">৳ 25,000</h3>
              <p className="text-gray-500">Total Sales</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-red-500">৳ 3,200</h3>
              <p className="text-gray-500">Total Due</p>
            </CardContent>
          </Card>
        </div>

       
      </div>
    </div>
  );
};

export default StaticPage;