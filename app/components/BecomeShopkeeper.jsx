'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import Link from 'next/link';

const BecomeShopkeeper = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center"
      >

        <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
          <Store className="text-blue-600" size={28} />
        </div>

        <h1 className="text-2xl font-bold mt-4">
          Become a Shopkeeper
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Start your own shop, manage customers, track sales and due amounts.
        </p>

        <Link href={'/pages/ShopKeeperForm'} ><button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Upgrade Now
        </button></Link>

      </motion.div>

    </div>
  );
};

export default BecomeShopkeeper;