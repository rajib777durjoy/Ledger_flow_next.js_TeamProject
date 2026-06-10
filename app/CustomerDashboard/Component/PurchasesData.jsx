'use client';

import { useUser } from '@clerk/nextjs';
import React, { useEffect, useMemo, useState } from 'react';

const PurchasesData = () => {
  const { user } = useUser();
  const [purchaseData, setPurchaseData] = useState([]);

  // 📡 FETCH
  useEffect(() => {
    const fetchPurchaseData = async () => {
      const res = await fetch(
        `/api/CustomerDashboard/PurchasesRoute?id=${user?.id}`
      );
      const data = await res.json();
      setPurchaseData(data || []);
    };

    if (user?.id) fetchPurchaseData();
  }, [user?.id]);

  // ⏱ TIME FUNCTION
  const getDaysAgo = (dateString) => {
    const now = new Date();
    const created = new Date(dateString);

    const diffTime = now - created;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };

  // 💰 TOTAL SPEND
  const totalSpend = useMemo(() => {
    return purchaseData.reduce(
      (sum, item) =>
        sum + Number(item.price) * Number(item.quantity),
      0
    );
  }, [purchaseData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-sm border p-5 md:p-6 mb-6">

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Purchase History
          </h2>

          <p className="text-slate-500 mt-1">
            Track all customer transactions in one place
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500">Total Orders</p>
              <p className="text-xl font-bold">
                {purchaseData.length}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-500">Total Spend</p>
              <p className="text-xl font-bold text-green-600">
                ৳{totalSpend.toLocaleString()}
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 col-span-2 md:col-span-1">
              <p className="text-xs text-slate-500">Latest Activity</p>
              <p className="text-xl font-bold text-orange-600">
                {purchaseData[0]?.created_at
                  ? getDaysAgo(purchaseData[0]?.created_at)
                  : "N/A"}
              </p>
            </div>

          </div>

        </div>

        {/* LIST */}
        <div className="space-y-4">

          {purchaseData.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No purchases found
            </div>
          ) : (
            purchaseData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border p-4 md:p-5 hover:shadow-md transition"
              >

                {/* TOP */}
                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item?.product_name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item?.unity}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      ৳
                      {(
                        Number(item?.price) *
                        Number(item?.quantity)
                      ).toLocaleString()}
                    </p>

                    <span className="text-xs text-slate-400">
                      {getDaysAgo(item?.created_at)}
                    </span>
                  </div>

                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm text-slate-500 mt-3">

                  <span>
                    Quantity: {item?.quantity}
                  </span>

                  <span className="px-2 py-1 bg-slate-100 rounded-lg text-xs">
                    Order #{index + 1}
                  </span>

                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default PurchasesData;