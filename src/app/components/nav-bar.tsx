'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-stegg-dark/80 backdrop-blur-xl border border-white/[0.08] px-6 py-3 shadow-lg">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/stegg-dino-white.png"
              alt="Stegg"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-heading text-xl font-bold tracking-[4px] text-white">
              STEGG
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors">
              How It Works
            </Link>
            <Link href="/faq" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors">
              FAQ
            </Link>
            <Link href="/privacy-policy" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors">
              Privacy
            </Link>
            <a
              href="https://apps.apple.com/ng/app/stegg/id1487379535"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-stegg-accent hover:bg-stegg-light text-stegg-dark font-heading font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(46,204,113,0.3)]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-stegg-dark/95 backdrop-blur-xl border border-white/[0.08] p-6 shadow-lg animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link href="/#features" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/#how-it-works" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link href="/faq" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="/privacy-policy" className="text-sm font-medium text-white/70 hover:text-stegg-accent transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Privacy Policy
              </Link>
              <a
                href="https://apps.apple.com/ng/app/stegg/id1487379535"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stegg-accent hover:bg-stegg-light text-stegg-dark font-heading font-bold text-sm px-5 py-3 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Download on App Store
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}