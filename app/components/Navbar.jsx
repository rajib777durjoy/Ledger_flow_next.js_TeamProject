// components/Navbar.jsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Show, SignInButton, UserButton, useUser } from '@clerk/nextjs';


const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/customers', label: 'Customers', icon: '👥' },
  { href: '/smart-reminder', label: 'Reminders', badge: 18 },
  { href: '/analytics', label: 'Analytics' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
  console.log('user', user)

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) {
      console.log('hello loading false !!')
      return;
    }
    const fullname = user?.fullName;
    const id = user?.id;
    const imageUrl = user?.imageUrl;
    const emailAddresse = user?.emailAddresses[0]?.emailAddress;
    const user_obj = { id, fullname, imageUrl, emailAddresse }
    const insartUserList = async () => {
  const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_obj),
      });
      const data = await res.json();
      console.log('data',data)
    }
    insartUserList();
  }, [isLoaded, isSignedIn, user])

  return (
    <nav className="bg-[#202940] border-b border-white/[0.07] sticky top-0 z-50">

      {/* ── Main Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-[34px] h-[34px] bg-amber-500 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-[#202940] fill-none stroke-2">
              <rect x="3" y="3" width="7" height="9" rx="1.5" />
              <rect x="14" y="3" width="7" height="5" rx="1.5" />
              <rect x="14" y="12" width="7" height="9" rx="1.5" />
              <rect x="3" y="16" width="7" height="5" rx="1.5" />
            </svg>
          </div>
          <span className="text-white font-bold text-[17px] tracking-tight">
            Ledger<span className="text-amber-500">Flow</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, badge }) => (
            <li key={href}>
              <Link href={href}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-all ${pathname === href
                  ? 'text-amber-500 bg-amber-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.07]'
                  }`}>
                {label}
                {badge && (
                  <span className="bg-amber-500/15 text-amber-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/25">
                    {badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer text-slate-400 hover:bg-white/[0.07] hover:text-white transition-all">
            🔔
            <span className="absolute top-1.5 right-1.5 w-[7px] h-[7px] bg-amber-500 rounded-full border-[1.5px] border-[#202940]" />
          </div>

          <div className="w-px h-5 bg-white/10 mx-1" />
          <Show when="signed-out">
            <SignInButton className='text-white font-bold px-4 py-1.5 rounded-lg text-[13px] bg-transparent' />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
          <Link href="/dashboard"
            className="bg-amber-500 text-[#202940] font-bold px-4 py-1.5 rounded-lg text-[13px] hover:bg-amber-600 transition-all whitespace-nowrap">
            Open Free Ledger →
          </Link>
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] border border-white/12 rounded-lg hover:bg-white/[0.07] transition-all">
          <span className={`block w-5 h-[2px] bg-slate-300 rounded transition-all duration-300 origin-center ${isOpen ? 'translate-y-[7px] rotate-45 !bg-amber-500' : ''}`} />
          <span className={`block w-5 h-[2px] bg-slate-300 rounded transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-slate-300 rounded transition-all duration-300 origin-center ${isOpen ? '-translate-y-[7px] -rotate-45 !bg-amber-500' : ''}`} />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div className={`md:hidden bg-[#1a2236] border-t border-white/[0.06] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>

        <div className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label, badge }) => (
            <Link key={href} href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${pathname === href
                ? 'bg-amber-500/10 text-amber-500'
                : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`}>
              {label}
              {badge && (
                <span className="bg-amber-500/15 text-amber-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/25 ml-auto">
                  {badge}
                </span>
              )}
            </Link>
          ))}

          {/* Quick stats strip */}
          <div className="flex gap-2 mt-2 mb-1">
            <div className="flex-1 bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Pending</p>
              <p className="text-amber-500 font-bold text-sm mt-0.5">$14,250</p>
            </div>
            <div className="flex-1 bg-white/[0.04] border border-white/[0.07] rounded-xl p-2.5">
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Collected</p>
              <p className="text-emerald-400 font-bold text-sm mt-0.5">$8,490</p>
            </div>
          </div>

          <div className="h-px bg-white/[0.07] my-1" />

          <Link href="/login" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center py-2.5 rounded-xl text-sm font-medium text-slate-300 border border-white/15 hover:bg-white/[0.06] transition-all">
            Sign In
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}
            className="flex items-center justify-center py-3 rounded-xl text-sm font-bold bg-amber-500 text-[#202940] hover:bg-amber-600 transition-all">
            Open Free Ledger →
          </Link>
        </div>
      </div>

    </nav>
  );
}

