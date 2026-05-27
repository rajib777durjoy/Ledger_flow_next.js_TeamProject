"use client";

import {
  FaUsers,
  FaMoneyBillWave,
  FaBell,
  FaArrowUp,
  FaChartLine,
  FaWallet,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black">
                Welcome Back 👋
              </h2>

              <p className="text-indigo-100 mt-3 text-base">
                Here is your payment management dashboard overview
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-sm text-indigo-100">
                This Month Growth
              </p>

              <div className="flex items-center gap-2 mt-1">
                <FaArrowUp />

                <h3 className="text-3xl font-bold">
                  +18%
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Customers */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
              <FaUsers size={26} />
            </div>

            <h3 className="text-gray-500 text-sm font-semibold uppercase mt-5">
              Total Customers
            </h3>

            <p className="text-4xl font-black text-gray-800 mt-2">
              1,240
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mt-4">
              <FaArrowUp />
              +12% this month
            </div>
          </div>

          {/* Pending Payments */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <FaMoneyBillWave size={26} />
            </div>

            <h3 className="text-gray-500 text-sm font-semibold uppercase mt-5">
              Pending Payments
            </h3>

            <p className="text-4xl font-black text-gray-800 mt-2">
              ৳ 4,200
            </p>

            <div className="flex items-center gap-2 text-red-500 text-sm font-semibold mt-4">
              <FaClock />
              24 unpaid invoices
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
              <FaBell size={26} />
            </div>

            <h3 className="text-gray-500 text-sm font-semibold uppercase mt-5">
              Reminders Sent
            </h3>

            <p className="text-4xl font-black text-gray-800 mt-2">
              320
            </p>

            <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold mt-4">
              <FaCheckCircle />
              Successfully delivered
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
              <FaWallet size={26} />
            </div>

            <h3 className="text-gray-500 text-sm font-semibold uppercase mt-5">
              Total Revenue
            </h3>

            <p className="text-4xl font-black text-gray-800 mt-2">
              ৳ 1.2L
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mt-4">
              <FaArrowUp />
              Revenue increased
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Monthly Collection */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
              <FaChartLine className="text-indigo-600" />
              Monthly Collection
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Collected Payments</span>
                  <span className="text-green-600">82%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full w-[82%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Pending Payments</span>
                  <span className="text-red-500">38%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 h-4 rounded-full w-[38%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Reminder Success</span>
                  <span className="text-purple-600">90%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-4 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Activity */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Recent Activity
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-indigo-50 rounded-2xl p-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
                  <FaCheckCircle />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    Payment Received
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Rahim Ahmed paid ৳ 2,500 successfully
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-pink-50 rounded-2xl p-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center text-white">
                  <FaBell />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    Reminder Sent
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Reminder message sent to Karim Hasan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-green-50 rounded-2xl p-4">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
                  <FaUsers />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    New Customer Added
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Nusrat Jahan added to customer database
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}