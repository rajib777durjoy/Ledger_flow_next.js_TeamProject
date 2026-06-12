'use client';

import { useUser } from '@clerk/nextjs';
import React, { useEffect, useMemo, useState } from 'react';

const CustomerDueAllPage = () => {
  const { user } = useUser();
  const [shop_wise_due, setShop_wise_due] = useState([]);

  // FETCH DATA
  useEffect(() => {
    const fetchShopDuePayment = async () => {
      const res = await fetch(
        `/api/CustomerDashboard/shop_wise_due?id=${user?.id}`
      );
      const data = await res.json();
      setShop_wise_due(data || []);
    };

    if (user?.id) fetchShopDuePayment();
  }, [user?.id]);

  // TOTAL DUE
  const totalDue = useMemo(() => {
    return shop_wise_due.reduce(
      (sum, item) => sum + Number(item.total_due),
      0
    );
  }, [shop_wise_due]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-8">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="bg-white rounded-3xl shadow-sm border p-5 md:p-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Shop-wise Due
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                Track all customer outstanding payments
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-slate-500">
                Total Shops
              </p>
              <p className="text-xl font-bold">
                {shop_wise_due.length}
              </p>
            </div>

          </div>

          {/* TOTAL DUE */}
          <div className="mt-5 flex items-center justify-between bg-red-50 rounded-2xl p-4">

            <span className="text-sm text-red-600 font-medium">
              Total Outstanding
            </span>

            <span className="text-xl font-bold text-red-600">
              ৳ {totalDue.toLocaleString()}
            </span>

          </div>

        </div>

        {/* GRID */}
        {shop_wise_due.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            No due records found
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

            {shop_wise_due.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 p-4"
              >

                {/* TOP */}
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    {/* IMAGE */}
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item?.shop_image}
                        alt="shop"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div>
                      <p className="font-semibold text-slate-800">
                        {item?.shop_name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {item?.address}
                      </p>
                    </div>

                  </div>

                  {/* DUE */}
                  <div className="text-right">
                    <p className="text-red-600 font-bold text-lg">
                      ৳ {Number(item?.total_due).toLocaleString()}
                    </p>

                    <p className="text-xs text-slate-400">
                      Due Amount
                    </p>
                  </div>

                </div>

                {/* BOTTOM INFO */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">

                  <span>
                    📞 {item?.phone}
                  </span>

                  <span>
                    🕒 {new Date(item?.last_due_date).toLocaleDateString()}
                  </span>

                </div>

                {/* BADGE */}
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    Active Due
                  </span>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default CustomerDueAllPage;