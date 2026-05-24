import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/*Hero Section*/}
      <section className="bg-[#202940] text-white py-20 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20">
            Trusted by 5,000+ Smart Retailers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-6">
            Stop Losing Cash to <span className="text-amber-500">Unpaid Dues</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            The digital ledger that tracks shop customer credit, automates payment alerts, and gets paid 3x faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <button className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-[#202940] font-bold rounded-lg shadow-lg hover:bg-amber-600 transition-all text-base transform hover:-translate-y-0.5">
                Open Your Free Ledger
              </button>
            </Link>
            <Link href="/smart-reminder">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-slate-600 font-medium rounded-lg hover:bg-slate-800 transition-all text-base">
                See How Alerts Work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="px-6 -mt-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pb-4 sm:pb-0">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Credit Given</p>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">$14,250.00</h3>
              <span className="text-xs text-rose-600 font-medium">↑ 12% this week</span>
            </div>
            <div className="py-4 sm:py-0 sm:pl-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Collected This Month</p>
              <h3 className="text-3xl font-bold text-emerald-600 mt-1">$8,490.00</h3>
              <span className="text-xs text-emerald-600 font-medium">✔ 92% recovery rate</span>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Reminders</p>
              <h3 className="text-3xl font-bold text-amber-500 mt-1">18 Customers</h3>
              <span className="text-xs text-slate-500 font-medium">Automated SMS scheduled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Designed Specifically for Shop Owners
          </h2>
          <p className="text-slate-600 mt-2">Ditch the paper notebook. Protect your cash flow with modern tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Due Management</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Add customers, log purchases, and track pending dues instantly. Never question an outstanding balance again.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6">
              ⏰
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Reminders</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Send professional, localized SMS and WhatsApp reminders with auto-generated payment collection links.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl mb-6">
              📈
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Store Insights & Analytics</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Identify your most reliable buyers and spot critical credit trends before they hurt your store inventory.
            </p>
          </div>
        </div>
      </section>

      {/* Promotional CTA */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to fix your shop’s cash flow?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
            Setup takes less than two minutes. Zero credit card required to begin recording your store ledgers.
          </p>
          <Link href="/login">
            <button className="px-6 py-3 bg-white text-slate-950 font-semibold rounded hover:bg-slate-100 transition-colors">
              Get Started Securely
            </button>
          </Link>
        </div>
      </section>

      

    </div>
  );
}