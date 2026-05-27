"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl font-black mx-auto shadow-xl">
              S
            </div>

            <h2 className="text-4xl font-black text-gray-800 mt-5">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to manage your customer payments
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" />
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <FaLock className="text-purple-500" />
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-600 font-semibold"
              >
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl">
              Login
              <FaArrowRight />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-600 font-bold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}