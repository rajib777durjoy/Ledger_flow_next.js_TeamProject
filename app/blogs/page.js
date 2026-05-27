"use client";

import {
  FaBlog,
  FaUser,
  FaCalendarAlt,
  FaTags,
  FaSearch,
  FaPlus,
  FaHeart,
  FaComment,
  FaEye,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "How to Manage Customer Due Payments Efficiently",
    author: "Admin",
    date: "27 May 2026",
    category: "Finance",
    description:
      "Learn effective strategies to track and manage customer due payments using simple tools and automation.",
    views: 1200,
    comments: 32,
    likes: 180,
  },
  {
    id: 2,
    title: "Best Practices for Sending Payment Reminders",
    author: "Admin",
    date: "25 May 2026",
    category: "Business",
    description:
      "Improve your cash flow by sending timely and professional payment reminders to your customers.",
    views: 980,
    comments: 18,
    likes: 145,
  },
  {
    id: 3,
    title: "Top 5 Tools for Small Business Owners",
    author: "Admin",
    date: "22 May 2026",
    category: "Tools",
    description:
      "Explore the best tools that help small business owners manage sales, payments, and customers easily.",
    views: 1500,
    comments: 45,
    likes: 220,
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaBlog />
                Blogs
              </h2>

              <p className="text-indigo-100 mt-3">
                Insights, tips, and guides for business growth
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
              <FaPlus />
              New Blog
            </button>
          </div>

          {/* Search */}
          <div className="mt-6 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6"
            >
              {/* Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <FaTags />
                  {blog.category}
                </span>

                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEye />
                  {blog.views}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-gray-800">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-3">
                {blog.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 mt-5 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaUser />
                  {blog.author}
                </span>

                <span className="flex items-center gap-1">
                  <FaCalendarAlt />
                  {blog.date}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mt-5 text-sm">
                <span className="flex items-center gap-1 text-pink-500">
                  <FaHeart />
                  {blog.likes}
                </span>

                <span className="flex items-center gap-1 text-indigo-500">
                  <FaComment />
                  {blog.comments}
                </span>
              </div>

              {/* Button */}
              <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-bold">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}