"use client";

import Link from "next/link";

import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaStore,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white text-3xl font-black mx-auto shadow-xl">
              S
            </div>

            <h2 className="text-4xl font-black text-gray-800 mt-5">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Register your shop management account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaStore className="text-indigo-500" />
                Shop Name
              </label>

              <input
                type="text"
                placeholder="Enter shop name"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaUser className="text-purple-500" />
                Owner Name
              </label>

              <input
                type="text"
                placeholder="Enter owner name"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-pink-500" />
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                WhatsApp Number
              </label>

              <input
                type="text"
                placeholder="Enter WhatsApp number"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaLock className="text-red-500" />
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl">
              Create Account
              <FaArrowRight />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-600 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}