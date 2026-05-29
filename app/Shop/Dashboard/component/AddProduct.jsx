'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Package,
  DollarSign,
  Layers3,
  FileText,
  Boxes,
  Tag,
} from 'lucide-react';
import AddProductAction from '../AddProduct/AddProduct.action';

const AddProduct = () => {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const handleFormSubmit = async (formData) => {

    const res = await AddProductAction(formData);
  }

  return (
    <div className="min-h-screen bg-[#0B1120] relative overflow-hidden px-4 py-14">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-5">
            <Package className="text-amber-400 w-5 h-5" />
            <span className="text-sm text-gray-200">Inventory Management</span>
          </div>
          <h1 className="text-5xl font-black text-white mb-3 leading-tight">
            Add New Product
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Create and manage your products with a beautiful modern dashboard.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <form action={handleFormSubmit} className="space-y-7">

              {/* Image Upload */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="text-gray-200 font-medium mb-3 block">
                  Product Image
                </label>

                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />

                <motion.label
                  htmlFor="image"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className="group border-2 border-dashed border-amber-400/40 hover:border-amber-400 transition-all rounded-3xl h-60 flex flex-col items-center justify-center cursor-pointer bg-white/5 overflow-hidden relative"
                >
                  {preview ? (
                    <>
                      <img src={preview} alt="preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <span className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                          <Upload className="w-5 h-5" /> Change Image
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <Upload className="text-amber-300 w-9 h-9" />
                      </div>
                      <h3 className="text-white font-semibold text-lg">Upload Product Image</h3>
                      <p className="text-gray-400 text-sm mt-1">Click to browse</p>
                    </>
                  )}
                </motion.label>
              </motion.div>

              {/* Product Name */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                  <Package size={18} className="text-amber-400" />
                  Product Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="product_name"
                  placeholder="Enter product name"
                  className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl transition-all"
                  required
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                  <FileText size={18} className="text-amber-400" />
                  Description
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={4}
                  name="description"
                  placeholder="Write detailed product description..."
                  className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl transition-all resize-none"
                  required
                />
              </motion.div>

              {/* Price, Quantity, Unit (Text) */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                    <DollarSign size={18} className="text-amber-400" />
                    Price
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="৳ 0.00"
                    className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                    <Boxes size={18} className="text-amber-400" />
                    Quantity
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="number"
                    name="quantity"
                    placeholder="100"
                    className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                    <Tag size={18} className="text-amber-400" />
                    Unity
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="unity"
                    placeholder="e.g. pcs, kg, box, liter"
                    className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-white placeholder:text-gray-500 px-5 py-4 rounded-2xl transition-all"
                    required
                  />
                </motion.div>
              </div>

                {/* Category */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="text-gray-200 font-medium mb-3 flex items-center gap-2">
                    <Layers3 size={18} className="text-amber-400" />
                    Category
                  </label>
                  <motion.select
                    name="category"
                    className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 outline-none text-black px-2 py-2 rounded-2xl transition-all"
                    required
                  >
                    <option value="">Select Category / ক্যাটাগরি নির্বাচন করুন</option>
                    <option value="Grocery">Grocery / মুদি মাল</option>
                    <option value="Electrical">Electrical / ইলেকট্রিক</option>
                    <option value="Hardware">Hardware / হার্ডওয়্যার</option>
                    <option value="Stationery">Stationery / স্টেশনারি</option>
                    <option value="Cosmetics">Cosmetics / কসমেটিক্স</option>
                    <option value="Mobile Accessories">Mobile Accessories / মোবাইল এক্সেসরিজ</option>
                    <option value="Fruits Vegetables">Fruits & Vegetables / ফল-মূল</option>
                    <option value="Meat Fish">Meat & Fish / মাংস-মাছ</option>
                    <option value="Snacks">Snacks / স্ন্যাক্স ও চা-বিস্কুট</option>
                    <option value="Household">Household / ঘরের জিনিসপত্র</option>
                    <option value="Clothing">Clothing / কাপড়-চোপড়</option>
                    <option value="Furniture">Furniture / ফার্নিচার</option>
                    <option value="Others">Others / অন্যান্য</option>
                  </motion.select>
                </motion.div>


              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-lg font-bold shadow-2xl shadow-amber-500/30 transition-all mt-6"
              >
                Add Product
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Secure • Fast • Professional Product Management
        </motion.p>
      </div>
    </div>
  );
};

export default AddProduct;
