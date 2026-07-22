'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#deep-search', label: 'Deep Search' },
  { href: '/#pro', label: 'Stegg Pro' },
  { href: '/privacy-policy', label: 'Privacy' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="nav-shell mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/stegg-icon-dark.png" alt="Stegg" width={38} height={38} className="rounded-xl shadow-lg" priority />
          <div className="leading-none">
            <span className="block font-heading text-lg font-black tracking-[0.28em] text-white">STEGG</span>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.2em] text-white/35">BY RUNEWORKS</span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/60 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/download" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#082b22] transition hover:-translate-y-0.5 hover:bg-[#d8ffe9]">
            Download
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18 18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="nav-shell mx-auto mt-2 max-w-6xl p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/download" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-stegg-accent px-4 py-3 text-center text-sm font-bold text-[#082b22]">
              Download Stegg
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
