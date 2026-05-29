'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Store, User, Phone, MapPin, FileText, Image } from 'lucide-react';
import BecomeShopkeeperAction from '../pages/ShopKeeperForm/Shopkeeper.action';

const ShopkeeperFormComponent = () => {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleShopFrom =async(formData)=>{
   const res = await BecomeShopkeeperAction(formData);

  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-10"
      >

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
            <Store className="text-blue-600" />
          </div>

          <h1 className="text-2xl font-bold mt-3">
            Become a Shopkeeper
          </h1>

          <p className="text-sm text-gray-500">
            Fill up the form to register your shop
          </p>
        </div>

        {/* Form */}
        <form action={handleShopFrom} className="space-y-4">

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium">Shop Logo</label>

            <div className="mt-2 flex items-center gap-4">

              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border">
                {preview ? (
                  <img src={preview} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <Image className="text-gray-400" />
                )}
              </div>

              <input
                type="file"
                name='image'
                accept="image/*"
                onChange={handleImage}
                className="text-sm"
              />
            </div>
          </div>

          {/* Shop Name */}
          <div>
            <label className="text-sm font-medium">Shop Name</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Store size={16} className="text-gray-400" />
              <input
                type="text"
                name='Shop_name'
                placeholder="Enter shop name"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Owner Name */}
          <div>
            <label className="text-sm font-medium">Owner Name</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <User size={16} className="text-gray-400" />
              <input
                type="text"
                name='Owner_name'
                placeholder="Enter owner name"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <Phone size={16} className="text-gray-400" />
              <input
                type="text"
                name='phone'
                placeholder="+8801XXXXXXXXX"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium">Address</label>
            <div className="flex items-start border rounded-lg px-3 mt-1">
              <MapPin size={16} className="text-gray-400 mt-3" />
              <textarea
                placeholder="Enter shop address"
                name='address'
                className="w-full p-2 outline-none resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <div className="flex items-start border rounded-lg px-3 mt-1">
              <FileText size={16} className="text-gray-400 mt-3" />
              <textarea
                placeholder="Short description about your shop"
                name='description'
                className="w-full p-2 outline-none resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-medium"
          >
            Submit Request
          </button>

        </form>

      </motion.div>

    </div>
  );
};

export default ShopkeeperFormComponent;