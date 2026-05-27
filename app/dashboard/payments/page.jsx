"use client";

import {
  FaMoneyCheckAlt,
  FaUser,
  FaCalendarAlt,
  FaWallet,
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaMoneyBillWave,
} from "react-icons/fa";

const payments = [
  {
    id: 1,
    customerName: "Rahim Ahmed",
    paymentDate: "10 Aug 2026",
    totalAmount: 5000,
    paidAmount: 2500,
    dueAmount: 2500,
    status: "Partial",
  },
  {
    id: 2,
    customerName: "Karim Hasan",
    paymentDate: "12 Aug 2026",
    totalAmount: 4500,
    paidAmount: 4500,
    dueAmount: 0,
    status: "Paid",
  },
  {
    id: 3,
    customerName: "Nusrat Jahan",
    paymentDate: "15 Aug 2026",
    totalAmount: 3000,
    paidAmount: 1800,
    dueAmount: 1200,
    status: "Partial",
  },
  {
    id: 4,
    customerName: "Sabbir Hossain",
    paymentDate: "18 Aug 2026",
    totalAmount: 7000,
    paidAmount: 3800,
    dueAmount: 3200,
    status: "Pending",
  },
];

export default function Payment() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaChartLine />
                Payment History
              </h2>

              <p className="text-blue-100 mt-3">
                Track customer payments and due balances easily
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-sm text-blue-100">
                Total Collected
              </p>

              <h3 className="text-3xl font-bold mt-1">
                ৳ 14,800
              </h3>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      Customer
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      Date
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaWallet />
                      Total
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaMoneyCheckAlt />
                      Paid
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave />
                      Due
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    Status
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {payments.map((payment, index) => (
                  <tr
                    key={payment.id}
                    className={`${
                      index !== payments.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Customer */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {payment.customerName.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800">
                            {payment.customerName}
                          </h3>

                          <p className="text-xs text-gray-500">
                            Payment ID #{payment.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {payment.paymentDate}
                      </span>
                    </td>

                    {/* Total */}
                    <td className="px-6 py-5">
                      <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl font-bold inline-flex">
                        ৳ {payment.totalAmount}
                      </div>
                    </td>

                    {/* Paid */}
                    <td className="px-6 py-5">
                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-bold inline-flex">
                        ৳ {payment.paidAmount}
                      </div>
                    </td>

                    {/* Due */}
                    <td className="px-6 py-5">
                      <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold inline-flex">
                        ৳ {payment.dueAmount}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                          payment.status === "Paid"
                            ? "bg-green-100 text-green-600"
                            : payment.status === "Partial"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {payment.status === "Paid" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}

                        {payment.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-center">
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}