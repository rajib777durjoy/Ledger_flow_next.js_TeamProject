"use client";

import {
  FaUser,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

const contacts = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    phone: "+8801712345678",
    whatsapp: "+8801712345678",
    address: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    phone: "+8801811122233",
    whatsapp: "+8801811122233",
    address: "Gazipur, Bangladesh",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    phone: "+8801912345678",
    whatsapp: "+8801912345678",
    address: "Narayanganj, Bangladesh",
  },
  {
    id: 4,
    name: "Sabbir Hossain",
    email: "sabbir@gmail.com",
    phone: "+8801612345678",
    whatsapp: "+8801612345678",
    address: "Khulna, Bangladesh",
  },
];

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h2 className="text-4xl font-black flex items-center gap-3">
                <FaUser />
                Contacts
              </h2>

              <p className="text-indigo-100 mt-3">
                Manage your customer contact list easily
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-5 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
              <FaPlus />
              Add Contact
            </button>
          </div>

          {/* Search */}
          <div className="mt-6 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <div
              key={c.id}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-6"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {c.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {c.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {c.address}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaEnvelope className="text-indigo-500" />
                  {c.email}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaPhone className="text-green-500" />
                  {c.phone}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaWhatsapp className="text-green-600" />
                  {c.whatsapp}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-6">
                <button className="flex-1 bg-indigo-500 text-white py-2 rounded-xl flex items-center justify-center gap-2">
                  <FaEdit />
                  Edit
                </button>

                <button className="flex-1 bg-red-500 text-white py-2 rounded-xl flex items-center justify-center gap-2">
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}