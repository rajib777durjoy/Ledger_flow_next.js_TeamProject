'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const ShopInfo = () => {
    const params = useParams();
    const { id } = params;
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [paymentStatus, setPaymentStatus] = useState('fullpayment');
    const [DueAmount,SetDueAmount]=useState(0);
    console.log('payment status::', paymentStatus)

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['shopInfo', id],
        queryFn: async () => {
            const res = await axios.get(`/api/Shop/shopInfo?shop_id=${id}`);
            return res.data;
        }
    });
    console.log('products:::', products)
    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto p-6">
                <div className="h-52 rounded-xl bg-gray-200 animate-pulse" />
            </div>
        );
    }

    const shop = products?.[0];

    const handleSelect = (productId, isChecked) => {
        setSelectedProducts((prev) => {
            const exists = prev.find((p) => p.productId === productId);
            if (isChecked) {
                if (exists) return prev;

                return [...prev, { productId, quantity: 1 }];
            } else {
                return prev.filter((p) => p.productId !== productId);
            }
        });
    };
    const totalAmount = selectedProducts.reduce((sum, item) => {
        const product = products.find(
            (p) => p.product_id === item.productId
        );

        if (!product) return sum;

        return sum + product.price * item.quantity;
    }, 0);
    const handleQuantityChange = (productId, value) => {
        setSelectedProducts((prev) =>
            prev.map((p) =>
                p.productId === productId
                    ? { ...p, quantity: Number(value) }
                    : p
            )
        );
    };
    const handleBuyProduct = async () => {
        console.log('clicked function !!!')
        /// todo send request to server for seles product insert and add due amount //
    }
    console.log('select product id ', selectedProducts)
    console.log('total amount', totalAmount)
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Shop Banner */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
                <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                    <img
                        src={shop?.shop_image}
                        alt={shop?.shop_name}
                        width={120}
                        height={120}
                        className="rounded-xl border object-cover"
                    />

                    <div className="flex-1">
                        <h1 className="text-3xl font-bold">
                            {shop?.shop_name}
                        </h1>

                        <p className="text-gray-500 mt-2">
                            📍 {shop?.address}
                        </p>

                        <p className="text-gray-500">
                            📞 {shop?.phone}
                        </p>

                        <div className="mt-4 flex gap-3">
                            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                                {products.length} Products
                            </span>

                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                                Active Shop
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}

            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">
                        Available Products
                    </h2>
                    <p className="text-gray-500">
                        Select products you want to buy
                    </p>
                </div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg">
                    Selected: {selectedProducts.length}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                    const selected = selectedProducts.find(
                        (p) => p.productId === product.product_id
                    );

                    return (
                        <div
                            key={product.product_id}
                            className={`rounded-2xl p-5 border transition-all ${selected ? "border-green-500 shadow-lg" : "border-gray-200"
                                }`}
                        >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">
                                        {product.product_name}
                                    </h3>

                                    <p className="text-xl font-bold text-primary mt-1">
                                        ৳ {product.price}
                                    </p>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Stock: {product.quantity}
                                    </p>
                                </div>

                                {/* Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={!!selected}
                                    onChange={(e) =>
                                        handleSelect(product.product_id, e.target.checked)
                                    }
                                    className="w-5 h-5 accent-green-600"
                                />
                            </div>

                            {/* Quantity Section */}
                            {selected && (
                                <div className="mt-4 flex items-center gap-3">
                                    <span className="text-sm font-medium">
                                        Quantity:
                                    </span>

                                    <input
                                        type="number"
                                        min="1"
                                        value={selected.quantity}
                                        onChange={(e) =>
                                            handleQuantityChange(
                                                product.product_id,
                                                e.target.value
                                            )
                                        }
                                        className="w-24 border rounded-lg px-2 py-1"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>


            {/* Bottom Action Bar */}
            {selectedProducts.length > 0 && (
                <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-xl border rounded-2xl px-6 py-4 w-[95%] max-w-3xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="font-bold text-lg">
                                {selectedProducts.length} Product Selected
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Ready to send purchase request
                            </p>
                        </div>
                        {/* Modal */}
                        <Dialog>
                            <DialogTrigger>
                                <button className="btn bg-green-700 text-white px-4 py-2 rounded-xl">
                                    Open
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Confirm Purchase</DialogTitle>

                                    <DialogDescription>
                                        Choose payment type and confirm your order.
                                    </DialogDescription>
                                </DialogHeader>

                                {/* Payment Type */}
                                <div className="mt-4 space-y-3">

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            value="full"
                                            defaultChecked
                                            onChange={(e) => setPaymentStatus(e.target.checked && 'fullpayment')}
                                        />
                                        Full Payment
                                    </label>

                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="paymentType"
                                            value="due"
                                            onChange={(e) => setPaymentStatus(e.target.checked ? 'paymentDue' : 'fullpayment')}
                                        />
                                        Partial / Due Payment
                                    </label>

                                </div>

                                {/* Due Input */}
                                {
                                    paymentStatus === 'paymentDue'
                                    &&
                                    <div className="mt-4">
                                        <label className="text-sm font-medium">
                                            Due Amount (৳)
                                        </label>

                                        <input
                                            type="number"
                                            placeholder="Enter due amount"
                                            className="w-full border rounded-lg px-3 py-2 mt-1"
                                            onChange={(e)=>SetDueAmount(e.target.value)}
                                        />
                                    </div>
                                }


                                {/* Total Summary */}
                                <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                                    <p>Total Amount: <b>৳ {totalAmount}</b></p>
                                    <p>
                                        Pay Now: <b>৳ {totalAmount - (DueAmount || 0)}</b>
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="flex justify-end mt-5">
                                    <button
                                        onClick={handleBuyProduct}
                                        className="btn bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-xl"
                                    >
                                       Buy Confirm 
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            )}
            {/* <Dialog>
                <DialogTrigger>
                    <button className="btn bg-green-700 text-white px-4 py-2 rounded-xl">
                        Open
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog> */}
        </div>

    );
};

export default ShopInfo;