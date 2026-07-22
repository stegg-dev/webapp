import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="ambient-grid" />
      <Image src="/stegg-icon-dark.png" alt="Stegg" width={84} height={84} className="rounded-[1.65rem] opacity-70 shadow-2xl" />
      <p className="section-kicker mt-8">404 · VERY WELL HIDDEN</p>
      <h1 className="mt-3 font-heading text-4xl font-black tracking-tight text-white sm:text-6xl">We couldn&apos;t reveal this page.</h1>
      <p className="mt-5 max-w-md text-white/50">The address may have changed, or the page may never have existed.</p>
      <Link href="/" className="store-button store-button-primary mt-8 px-6 py-4 text-base">Return to Stegg</Link>
    </main>
  );
}
