'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  // Use a sensible static fallback for SSR, then update on the client
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Customers', href: '/customers' },
        { label: 'Reminders', href: '/smart-reminder' },
        { label: 'Analytics', href: '/analytics' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Contact Status', href: '/status' },
      ],
    },
  ];

  return (
    <footer className="bg-[#202940] border-t border-white/[0.07] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ── Top Section ── */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-[34px] h-[34px] bg-amber-500 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#202940] fill-none stroke-2">
                  <rect x="3" y="3" width="7" height="9" rx="1.5"/>
                  <rect x="14" y="3" width="7" height="5" rx="1.5"/>
                  <rect x="14" y="12" width="7" height="9" rx="1.5"/>
                  <rect x="3" y="16" width="7" height="5" rx="1.5"/>
                </svg>
              </div>
              <span className="text-white font-bold text-[17px] tracking-tight">
                Ledger<span className="text-amber-500">Flow</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Automate your ledger tracking, manage your modern customers seamlessly, and keep your business finances crystal clear.
            </p>
          </div>

          {/* Dynamic Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-1">
              <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase text-[11px] opacity-80">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-400 hover:text-amber-500 text-[13.5px] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.07] w-full mb-6" />

        {/* ── Bottom Section ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} LedgerFlow. All rights reserved.
          </p>
          
          {/* Socials / Built-With badges */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 bg-[#1a2236] border border-white/10 px-2.5 py-1 rounded-md text-[11px]">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

