'use client';

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const COLORS = ['#f97316', '#3b82f6', '#10b981', '#a855f7', '#ef4444'];

const Customer_DuePage = () => {
  const { user } = useUser();
  const clerk_id = user?.id;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  //  FETCH
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          `${process.env.NEXT_PUBLIC_Extra_Server_Link}/api/get_customer_due/${clerk_id}`
        );
        setData(res.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    if (user?.id) fetchData();
  }, [user?.id]);

  //  TOTAL
  const totalDue = useMemo(
    () =>
      data.reduce((sum, i) => sum + Number(i.total_due || 0), 0),
    [data]
  );

  //  GROUP
  const grouped = useMemo(() => {
    const map = {};

    data.forEach((i) => {
      if (!map[i.cus_id]) {
        map[i.cus_id] = {
          cus_id: i.cus_id,
          cus_phone: i.cus_phone,
          total_due: 0,
        };
      }
      map[i.cus_id].total_due += Number(i.total_due);
    });

    return Object.values(map).sort(
      (a, b) => b.total_due - a.total_due
    );
  }, [data]);

  //  SEARCH
  const filtered = useMemo(() => {
    return grouped.filter((i) =>
      i.cus_phone.toLowerCase().includes(search.toLowerCase())
    );
  }, [grouped, search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 p-3 sm:p-4 md:p-6">

      {/* HEADER */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Customer Due Analytics
          </h1>
          <p className="text-sm text-slate-500">
            Track outstanding payments in real time
          </p>
        </div>

        <div className="bg-white border rounded-xl px-4 py-2 shadow-sm w-fit">
          <span className="font-bold text-orange-600">
            {grouped.length}
          </span>{' '}
          Customers
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">

        <div className="rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 text-white p-5">
          <p className="text-sm opacity-80">Total Due</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            ৳ {totalDue.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl bg-white border p-5">
          <p className="text-sm text-slate-500">Customers</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            {grouped.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white border p-5">
          <p className="text-sm text-slate-500">Highest Due</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mt-2">
            ৳ {grouped[0]?.total_due?.toLocaleString() || 0}
          </h2>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* CHART */}
        <div className="lg:col-span-5">
          <div className="bg-white border rounded-2xl p-4 sm:p-6 h-[350px] sm:h-[420px]">

            <h2 className="text-lg font-semibold mb-4">
              Due Distribution
            </h2>

            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={grouped}
                  dataKey="total_due"
                  nameKey="cus_phone"
                  innerRadius={60}
                  outerRadius={100}
                >
                  {grouped.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* LIST */}
        <div className="lg:col-span-7">
          <div className="bg-white border rounded-2xl p-4 sm:p-6">

            {/* SEARCH */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by phone..."
              className="w-full border rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* LIST */}
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">

              {filtered.map((item, i) => {
                const pct = ((item.total_due / totalDue) * 100).toFixed(1);

                return (
                  <div
                    key={item.cus_id}
                    className="border rounded-xl p-3 sm:p-4 hover:shadow-md transition"
                  >
                    {/* TOP */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-bold">
                          #{i + 1}
                        </span>

                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            background: COLORS[i % COLORS.length],
                          }}
                        />

                        <div className="min-w-0">
                          <p className="font-semibold text-slate-800 truncate">
                            {item.cus_phone}
                          </p>
                          <p className="text-xs text-slate-400">
                            ID: {item.cus_id}
                          </p>
                        </div>
                      </div>

                      <div className="font-bold text-red-500 text-right">
                        ৳ {item.total_due.toLocaleString()}
                      </div>
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600"
                        style={{ width: `${pct}%` }}
                      />
                    </div>

                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>{pct}% of total</span>
                      <span>Due</span>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Customer_DuePage;

  