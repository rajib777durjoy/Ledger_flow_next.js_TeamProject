'use client'

import UseAlertMessage from "@/app/Hook/UseAlertMessage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";

const EditPage = () => {
    const params = useParams();
    const [product_id, shop_id] = params?.id;


    const { data: product = {}, refetch } = useQuery({
        queryKey: ['product', product_id],
        queryFn: async () => {
            const res = await axios(`/api/products/EditProduct?id=${product_id}&shop_id=${shop_id}`);
            console.log('product data::', res.data)
            return res.data;
        }
    })
    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const product_data = { price, quantity, category, description }
        console.log('product update obj:', product_data)
        const updateProduct = await axios.put(`/api/products/EditProduct?id=${product_id}&shop_id=${shop_id}`, product_data);

        if (updateProduct.data?.id) {
            UseAlertMessage({
                message: "Product updated successfully",
                type: "success",
            })
            return refetch()
        }
    }
    console.log('product data::', product?.product_name)

    return (
        <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4">

            <div className="w-full max-w-2xl bg-white border border-amber-100 rounded-2xl shadow-sm p-6 md:p-10">
                {/* Title */}
                <h1 className="text-2xl font-bold text-amber-900 mb-1">
                    Edit Product
                </h1>
                <p className="text-amber-600 text-sm mb-6">
                    Update your product details
                </p>

                {/* Form */}
                <form onSubmit={handleUpdateProduct} className="space-y-5">

                    {/* Product Name */}
                    <div>
                        <label className="text-sm text-amber-800 font-medium">
                            Product Name
                        </label>
                        <input
                            type="text"
                            defaultValue={product?.product_name || ""}
                            readOnly
                            className="w-full mt-1 px-4 py-3 rounded-xl border border-amber-200 
      focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Price + Quantity */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                            <label className="text-sm text-amber-800 font-medium">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={product?.price || ""}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-amber-200 
        focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-amber-800 font-medium">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                defaultValue={product?.quantity || ""}
                                className="w-full mt-1 px-4 py-3 rounded-xl border border-amber-200 
        focus:outline-none focus:ring-2 focus:ring-amber-400"
                            />
                        </div>

                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-sm text-amber-800 font-medium">
                            Category
                        </label>
                        <input
                            type="text"
                            name="category"
                            defaultValue={product?.category || ""}
                            className="w-full mt-1 px-4 py-3 rounded-xl border border-amber-200 
      focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm text-amber-800 font-medium">
                            Description
                        </label>
                        <textarea
                            rows={4}
                            name="description"
                            defaultValue={product?.description || ""}
                            className="w-full mt-1 px-4 py-3 rounded-xl border border-amber-200 
      focus:outline-none focus:ring-2 focus:ring-amber-400"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">

                        <button
                            type="submit"
                            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Update Product
                        </button>

                        <button
                            type="button"
                            className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-xl font-semibold transition"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default EditPage;