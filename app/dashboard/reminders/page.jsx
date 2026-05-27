"use client";

import {
  FaBell,
  FaUser,
  FaWhatsapp,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const reminders = [
  {
    id: 1,
    name: "Rahim Ahmed",
    whatsapp: "+8801712345678",
    dueAmount: 2500,
    dueDate: "12 Aug 2026",
    reminderStatus: "Sent",
  },
  {
    id: 2,
    name: "Karim Hasan",
    whatsapp: "+8801811122233",
    dueAmount: 4500,
    dueDate: "18 Aug 2026",
    reminderStatus: "Pending",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    whatsapp: "+8801912345678",
    dueAmount: 1200,
    dueDate: "22 Aug 2026",
    reminderStatus: "Sent",
  },
];

export default function Reminders() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaBell />
                Payment Reminders
              </h2>

              <p className="text-purple-100 mt-3 text-base">
                Send payment reminder notifications to your customers
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-sm text-purple-100">
                Pending Reminders
              </p>

              <h3 className="text-3xl font-bold mt-1">
                03
              </h3>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      Customer
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaWhatsapp />
                      WhatsApp
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave />
                      Due Amount
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      Due Date
                    </div>
                  </th>

                  <th className="px-6 py-5 text-left text-sm font-bold uppercase">
                    <div className="flex items-center gap-2">
                      <FaBell />
                      Status
                    </div>
                  </th>

                  <th className="px-6 py-5 text-center text-sm font-bold uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {reminders.map((reminder, index) => (
                  <tr
                    key={reminder.id}
                    className={`${
                      index !== reminders.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Customer */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {reminder.name.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-gray-800">
                            {reminder.name}
                          </h3>

                          <p className="text-xs text-gray-500">
                            Reminder ID #{reminder.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* WhatsApp */}
                    <td className="px-6 py-5">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {reminder.whatsapp}
                      </span>
                    </td>

                    {/* Due Amount */}
                    <td className="px-6 py-5">
                      <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold inline-flex">
                        ৳ {reminder.dueAmount}
                      </div>
                    </td>

                    {/* Due Date */}
                    <td className="px-6 py-5">
                      <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {reminder.dueDate}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                          reminder.reminderStatus === "Sent"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {reminder.reminderStatus === "Sent" ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}

                        {reminder.reminderStatus}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-center">
                      <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg flex items-center gap-2 mx-auto">
                        <FaPaperPlane />
                        Send
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