'use client'
import { Input } from "@base-ui/react";
import Link from "next/link";
import { useState } from "react";
import { Search, Clock, Package, User, ArrowRight, ShoppingCart } from 'lucide-react';

export default function HomePage() {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearchFunction = async (query) => {
    setQuery(query);
    if (!query || query.trim() === "") {
      setOpen(false);
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/products/Search_product?searchQuery=${query}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.log('search error', error);
    } finally {
      setLoading(false);
    }

  };

  console.log('search results', results);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#202940] via-[#202940] to-slate-900 text-white py-24 px-6 overflow-hidden">

        {/* glow background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,orange,transparent_60%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center">

          {/* SEARCH */}
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-lg">
              <Input
                placeholder="Search products, customers, dues..."
                onChange={(e) => handleSearchFunction(e.target.value)}
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-300 px-3 py-2"
              />
            </div>
          </div>
          {open && (
            <div className="relative w-full max-w-xl mx-auto">
              {/* Amazon Style Results Dropdown */}
              {query.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1c2e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Close Button Design */}
                  <button
                    onClick={() => {
                      setOpen(false)
                      setResults([]);
                      setQuery('');
                    }}
                    className="absolute top-3 right-3 h-8 w-8 flex items-center justify-center 
                 bg-slate-800 border border-white/20 rounded-full text-slate-400 
                 hover:text-white hover:bg-red-500/80 hover:scale-110
                 transition-all duration-200 shadow-xl z-60 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18" height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  {/* Section: Products Matches */}
                  <div className="p-2 border-t border-white/10">
                    <p className="text-[11px] font-bold text-slate-500 uppercase px-3 py-2 tracking-[2px]">
                      Products Found ({results?.length})
                    </p>

                    <div className="space-y-1 max-h-80 overflow-y-auto custom-scrollbar">
                      {results?.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center px-3 py-3 hover:bg-white/10 rounded-xl cursor-pointer transition-all duration-200 group border border-transparent hover:border-white/10"
                        >
                          {/* Product Image */}
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-slate-800 flex-shrink-0">
                            {product.image_url ? (
                              <img
                                src={product.image_url}
                                alt={product.product_name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Package size={20} className="text-slate-500" />
                              </div>
                            )}
                          </div>

                          {/* Product Details */}
                          <div className="ml-4 flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-semibold text-slate-100 truncate">
                                {product.product_name}
                              </h4>
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                {product.category}
                              </span>
                            </div>

                            <div className="flex items-center text-xs text-slate-400 mt-1 space-x-2">
                              <span className={product.quantity > 0 ? "text-slate-400" : "text-red-400 font-medium"}>
                                {product.quantity > 0 ? `Stock: ${product.quantity} "&" ${product.unity}` : 'Out of Stock'}
                              </span>
                              <span>•</span>
                              <span className="truncate max-w-[150px] italic">{product.unity} Pack</span>
                            </div>
                          </div>

                          {/* Price Tag */}
                          <div className="ml-4 text-right flex-shrink-0">
                            <p className="text-sm font-bold text-emerald-400">
                              ৳{parseFloat(product.price).toLocaleString()}
                            </p>
                            <p className="text-[10px] text-slate-500 line-through">
                              {/* optional: regular price show korate paren */}
                              ৳{(parseFloat(product.price) + 200).toLocaleString()}
                            </p>
                          </div>

                          {/* Hover Arrow Icon */}
                          <div onClick={()=>handleAddToCart({id: product?.id, name: product?.product_name, price: product?.price, quantity: product?.quantity})} className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ShoppingCart size={18} className="transition-transform group-hover/cart:rotate-12" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="bg-white/5 p-3 text-center border-t border-white/5">
                    <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                      See all results for
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}


          {/* badge */}
          <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 text-xs font-semibold px-4 py-1 rounded-full border border-amber-500/20">
            ⚡ Trusted by 5,000+ Smart Retailers
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 leading-tight">
            Stop Losing Cash to <br />
            <span className="text-amber-400">Unpaid Dues</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            The digital ledger that tracks customer credit, automates reminders, and helps you collect payments faster — without paperwork.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <button className="px-8 py-4 bg-amber-500 text-[#202940] font-bold rounded-xl shadow-lg hover:scale-105 transition">
                Open Your Free Ledger
              </button>
            </Link>

            <Link href="/smart-reminder">
              <button className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition">
                See How It Works
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section className="mt-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border p-6 md:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div>
            <p className="text-xs text-slate-500 uppercase">Total Credit</p>
            <h2 className="text-3xl font-bold mt-2">$14,250</h2>
            <p className="text-rose-500 text-sm mt-1">↑ 12% this week</p>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase">Collected</p>
            <h2 className="text-3xl font-bold text-emerald-600 mt-2">$8,490</h2>
            <p className="text-emerald-600 text-sm mt-1">92% recovery rate</p>
          </div>

          <div>
            <p className="text-xs text-slate-500 uppercase">Pending</p>
            <h2 className="text-3xl font-bold text-amber-500 mt-2">18 Customers</h2>
            <p className="text-slate-500 text-sm mt-1">Auto reminders active</p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Built for Shop Owners Who Want Control
          </h2>
          <p className="text-slate-600 mt-3">
            Replace notebooks, spreadsheets, and manual tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "Instant Due Tracking",
              desc: "Track customer credit in real-time with clean dashboards.",
              color: "amber",
              icon: "📊",
            },
            {
              title: "Smart Reminders",
              desc: "Auto SMS & WhatsApp alerts to recover payments faster.",
              color: "emerald",
              icon: "⏰",
            },
            {
              title: "Business Insights",
              desc: "See who pays on time and optimize your cash flow.",
              color: "indigo",
              icon: "📈",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 bg-${f.color}-100`}>
                <span className="text-2xl">{f.icon}</span>
              </div>

              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            Ready to Fix Your Cash Flow?
          </h2>
          <p className="text-slate-400 mt-4">
            Start tracking dues in under 2 minutes. No credit card required.
          </p>

          <Link href="/login">
            <button className="mt-8 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:scale-105 transition">
              Get Started Free
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}