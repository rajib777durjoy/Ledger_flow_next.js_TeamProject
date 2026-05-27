"use client";

import {
  FaUser,
  FaEnvelope,
  FaWhatsapp,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaUsers,
} from "react-icons/fa";

const customers = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    whatsapp: "+8801712345678",
    dueAmount: 2500,
    status: "Pending",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    whatsapp: "+8801811122233",
    dueAmount: 4500,
    status: "Pending",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    whatsapp: "+8801912345678",
    dueAmount: 1200,
    status: "Paid",
  },
  {
    id: 4,
    name: "Sabbir Hossain",
    email: "sabbir@gmail.com",
    whatsapp: "+8801612345678",
    dueAmount: 3200,
    status: "Pending",
  },
];

export default function Customer() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-7xl rounded-2xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 shadow-2xl mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex items-center justify-between flex-wrap gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaUsers />
                Customer Due List
              </h2>

              <p className="text-purple-100 mt-3 text-base">
                Track customer dues and manage payment reminders easily
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl">
              <h3 className="text-sm text-purple-100">
                Total Due Amount
              </h3>

              <p className="text-3xl font-bold mt-1">
                ৳ 11,400
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      Customer
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <FaEnvelope />
                      Email
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <FaWhatsapp />
                      WhatsApp
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave />
                      Due Amount
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={customer.id}
                    className={`transition duration-300 hover:bg-purple-50 hover:scale-[1.01] ${
                      index !== customers.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Name */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                          {customer.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800 text-base">
                            {customer.name}
                          </h3>

                          <p className="text-xs text-gray-500">
                            Customer ID #{customer.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-5">
                      <span className="text-gray-700 font-medium">
                        {customer.email}
                      </span>
                    </td>

                    {/* WhatsApp */}
                    <td className="px-6 py-5">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {customer.whatsapp}
                      </span>
                    </td>

                    {/* Due Amount */}
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold">
                        <FaMoneyBillWave />
                        ৳ {customer.dueAmount}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
                          customer.status === "Paid"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {customer.status === "Paid" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}

                        {customer.status}
                      </span>
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