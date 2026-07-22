import Image from 'next/image';
import Link from 'next/link';
import { SUPPORT_EMAIL } from '../site-config';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/stegg-icon-dark.png" alt="" width={38} height={38} className="rounded-xl" />
            <div>
              <p className="font-heading font-bold tracking-[0.28em] text-white">STEGG</p>
              <p className="text-xs font-semibold tracking-[0.18em] text-white/40">A SOFTWARE BY RUNEWORKS</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/45">
            Private steganography for ordinary photos. Image processing stays on your device.
          </p>
        </div>
        <div className="md:text-right">
          <nav className="mb-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60 md:justify-end">
            <Link href="/faq">FAQ</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/data-deletion">Data deletion</Link>
            <Link href="/terms">Terms</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </nav>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} RUNEWORKS LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
