"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FaUsers,
  FaBell,
  FaCog,
} from "react-icons/fa";

import {
  MdDashboard,
  MdPayments,
} from "react-icons/md";

import { HiTrendingUp } from "react-icons/hi";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Customers",
      icon: <FaUsers size={18} />,
      path: "/dashboard/customers",
    },
    {
      name: "Payments",
      icon: <MdPayments size={20} />,
      path: "/dashboard/payments",
    },
    {
      name: "Reminders",
      icon: <FaBell size={18} />,
      path: "/dashboard/reminders",
    },
    {
      name: "Reports",
      icon: <HiTrendingUp size={20} />,
      path: "/dashboard/reports",
    },
    {
      name: "Settings",
      icon: <FaCog size={18} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#071028] border-r border-[#1b2742] p-5 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
          $
        </div>

        <div>
          <h2 className="text-lg font-semibold">PayAlert</h2>
          <p className="text-sm text-gray-400">Due Reminder</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-[#101d38] hover:text-white"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
