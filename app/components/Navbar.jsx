'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();

  const role = 'customer'; // later: replace with DB role

  // optional: user sync API
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const payload = {
      id: user.id,
      fullname: user.fullName,
      imageUrl: user.imageUrl,
      email: user.emailAddresses?.[0]?.emailAddress,
    };

    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  }, [isLoaded, isSignedIn, user]);

  const linkClass = (path) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition ${pathname === path
      ? 'text-amber-500 bg-amber-500/10'
      : 'text-slate-300 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav className="bg-[#202940] w-full  border-b border-white/10 sticky top-0 z-50">
      <div className="w-[90%] mx-auto  h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold">
          Ledger<span className="text-amber-500">Flow</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">

          {/* Common */}
          <li>
            <Link className={linkClass('/')} href="/">Home</Link>
          </li>

          <li>
            <Link className={linkClass('/Shoplist')} href="/Shoplist">
              Shop List
            </Link>
          </li>
          {role === 'customer' && (
            <>
              <li>
                <Link className={linkClass('/my-shops')} href="/my-shops">
                  Following Shops
                </Link>
              </li>
            </>
          )}
          {role === 'shopkeeper' && (
            <>
              <li>
                <Link className={linkClass('/due-customers')} href="/due-customers">
                  Due Customers
                </Link>
              </li>
            </>
          )}

          {/* CUSTOMER ROLE */}
          {role === 'customer' && (
            <>
              <li>
                <Link className={linkClass('/CustomerDashboard')} href="/CustomerDashboard">
                  Dashboard
                </Link>
              </li>
            </>
          )}

          {/* SHOPKEEPER ROLE */}
          {role === 'shopkeeper' && (
            <>
              <li>
                <Link className={linkClass('/shop/dashboard')} href="/shop/dashboard">
                  Dashboard
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isSignedIn ? <UserButton /> : <SignInButton />}

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-[#1a2236]">
          <Link className={linkClass('/')} href="/">Home</Link>
          <Link className={linkClass('/Shoplist')} href="/Shoplist">
            Shop List
          </Link>
          {role === 'customer' && (
            <>
              <li>
                <Link className={linkClass('/customer/my-shops')} href="/my-shops">
                  Following Shops
                </Link>
              </li>
            </>
          )}
          {role === 'shopkeeper' && (
            <>
              <li>
                <Link className={linkClass('/shop/due-customers')} href="/due-customers">
                  Due Customers
                </Link>
              </li>
            </>
          )}

          {role === 'customer' && (
            <Link className={linkClass('/CustomerDashboard')} href="/CustomerDashboard">
              Dashboard
            </Link>
          )}

          {role === 'shopkeeper' && (
            <Link className={linkClass('/shop/dashboard')} href="/shop/dashboard">
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
