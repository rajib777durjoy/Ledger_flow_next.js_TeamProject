'use server';

import sql from "@/lib/db.connect";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { Eye, Pencil, Trash2, Package } from "lucide-react";

const AllProduct = async () => {
  const { userId: clerk_id } = await auth();

  if (!clerk_id) return null;

  const shopData = await sql`
    SELECT s.id AS shop_id
    FROM users_table u
    JOIN shop_table s
    ON u.id = s.user_id
    WHERE u.clerk_id = ${clerk_id}
  `;

  const shop_id = shopData[0]?.shop_id;

  const products = await sql`
    SELECT *
    FROM products_table
    WHERE shop_id = ${shop_id}
    ORDER BY created_at DESC
  `;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-2 text-orange-100">
          Manage your shop inventory easily
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6 bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
        <Package className="h-10 w-10 text-orange-500" />
        <div>
          <h2 className="text-xl font-bold">{products.length}</h2>
          <p className="text-gray-500">Total Products</p>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-slate-100 text-slate-700">
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Stock</th>
                <th className="px-6 py-4 text-left">Unit</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products?.map((product) => (
                <tr
                  key={product?.id}
                  className="border-b hover:bg-orange-50 transition"
                >
                  {/* Product */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 rounded-xl overflow-hidden border">
                        <img
                          src={product?.image_url}
                          alt={product.product_name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {product.product_name}
                        </h3>

                        <p className="text-xs text-slate-500">
                          ID #{product.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 font-semibold text-green-600">
                    ৳ {product.price}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4">
                    <span className="font-medium">
                      {product.quantity}
                    </span>
                  </td>

                  {/* Unit */}
                  <td className="px-6 py-4">
                    {product.unity}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(product.created_at).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
                        <Pencil size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-gray-600">
              No Products Found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProduct;