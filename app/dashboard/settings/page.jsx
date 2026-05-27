"use client";

import {
  FaStore,
  FaUserCog,
  FaBell,
  FaLock,
  FaSave,
  FaCog,
  FaShieldAlt,
  FaPalette,
  FaWhatsapp,
} from "react-icons/fa";

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#071028] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaCog />
                App Settings
              </h2>

              <p className="text-purple-100 mt-3 text-base">
                Customize your shop information and reminder settings
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
              <p className="text-sm text-purple-100">
                System Status
              </p>

              <h3 className="text-2xl font-bold mt-1">
                Active
              </h3>
            </div>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Settings */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8">
            <div className="space-y-7">
              {/* Shop Name */}
              <div>
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <FaStore />
                  </div>

                  Shop Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your shop name"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                />
              </div>

              {/* Owner Name */}
              <div>
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <FaUserCog />
                  </div>

                  Owner Name
                </label>

                <input
                  type="text"
                  placeholder="Enter owner name"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <FaWhatsapp />
                  </div>

                  WhatsApp Number
                </label>

                <input
                  type="text"
                  placeholder="Enter WhatsApp number"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                />
              </div>

              {/* Reminder Message */}
              <div>
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                    <FaBell />
                  </div>

                  Reminder Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your custom reminder message..."
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 resize-none"
                ></textarea>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                    <FaLock />
                  </div>

                  Change Password
                </label>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                />
              </div>

              {/* Save Button */}
              <button className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl">
                <FaSave />
                Save Settings
              </button>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Security */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                <FaShieldAlt size={22} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Security
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Keep your shop account secure by updating passwords regularly.
              </p>
            </div>

            {/* Theme */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <FaPalette size={22} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                App Theme
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Customize dashboard appearance and improve user experience.
              </p>
            </div>

            {/* Notifications */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                <FaBell size={22} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-5">
                Notifications
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Manage reminder alerts and payment notification preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}