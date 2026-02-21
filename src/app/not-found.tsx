import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <div className="bg-pattern" />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <Image
          src="/stegg-dino-white.png"
          alt="Stegg"
          width={80}
          height={80}
          className="opacity-30 mb-8"
        />
        <h1 className="font-heading text-8xl font-black text-white/10 mb-2">404</h1>
        <p className="font-heading text-xl font-semibold text-white mb-3">
          Page Not Found
        </p>
        <p className="text-white/40 font-body text-sm mb-8 text-center max-w-sm">
          This message is hidden a bit too well. The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-stegg-accent hover:bg-stegg-light text-stegg-dark font-heading font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Go Home
        </Link>
      </main>
    </>
  );
}
