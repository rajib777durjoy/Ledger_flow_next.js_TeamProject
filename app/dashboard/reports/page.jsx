"use client";

import {
  FaUsers,
  FaMoneyBillWave,
  FaCheckCircle,
  FaChartBar,
  FaArrowUp,
  FaWallet,
  FaChartLine,
} from "react-icons/fa";

const reportData = [
  {
    title: "Total Customers",
    value: 120,
    icon: <FaUsers size={24} />,
    bg: "from-blue-500 to-cyan-500",
  },
  {
    title: "Total Due",
    value: "৳ 58,000",
    icon: <FaMoneyBillWave size={24} />,
    bg: "from-red-500 to-pink-500",
  },
  {
    title: "Collected Payments",
    value: "৳ 1,20,000",
    icon: <FaCheckCircle size={24} />,
    bg: "from-green-500 to-emerald-500",
  },
  {
    title: "Monthly Reports",
    value: 12,
    icon: <FaChartBar size={24} />,
    bg: "from-yellow-500 to-orange-500",
  },
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaChartLine />
                Reports & Analytics
              </h2>

              <p className="text-indigo-100 mt-3 text-base">
                Complete overview of customer payments and due reports
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-sm text-indigo-100">
                Monthly Growth
              </p>

              <div className="flex items-center gap-2 mt-1">
                <FaArrowUp />

                <h3 className="text-3xl font-bold">
                  +24%
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportData.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.bg} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-gray-500 text-sm font-medium uppercase tracking-wide">
                {item.title}
              </h3>

              <p className="text-3xl font-black text-gray-800 mt-2">
                {item.value}
              </p>

              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm font-semibold">
                <FaArrowUp />
                12% increase this month
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Monthly Summary */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaChartBar className="text-indigo-600" />
              Monthly Summary
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Total Collected</span>
                  <span className="text-green-600">80%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Total Due</span>
                  <span className="text-red-500">45%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 h-4 rounded-full w-[45%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2 text-sm font-semibold">
                  <span>Pending Payments</span>
                  <span className="text-yellow-600">60%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-4 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <FaWallet className="text-purple-600" />
              Quick Statistics
            </h3>

            <div className="space-y-5">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-5 text-white">
                <p className="text-sm opacity-80">
                  Highest Collection Day
                </p>

                <h4 className="text-3xl font-black mt-2">
                  ৳ 25,000
                </h4>

                <p className="text-sm mt-1 opacity-80">
                  18 August 2026
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-5 text-white">
                <p className="text-sm opacity-80">
                  Highest Due Customer
                </p>

                <h4 className="text-3xl font-black mt-2">
                  ৳ 7,000
                </h4>

                <p className="text-sm mt-1 opacity-80">
                  Sabbir Hossain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}