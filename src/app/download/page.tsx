import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import StoreButtons from '../components/store-buttons';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download Stegg for iPhone or follow the Android launch.',
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 flex min-h-[85vh] items-center px-6 pb-24 pt-36">
        <section className="download-stage mx-auto w-full max-w-4xl text-center">
          <Image src="/stegg-icon-dark.png" alt="Stegg" width={104} height={104} className="mx-auto rounded-[2rem] shadow-2xl" priority />
          <p className="section-kicker mt-8">PRIVATE ON-DEVICE STEGANOGRAPHY</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-black tracking-tight sm:text-6xl">Take Stegg with you.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">Stegg is available now on iPhone. Android is coming soon.</p>
          <div className="mt-9 flex justify-center"><StoreButtons /></div>
          <p className="mt-7 text-sm text-white/38">Want Android launch news? <a className="font-semibold text-stegg-accent" href={`mailto:${SUPPORT_EMAIL}?subject=Stegg%20Android`}>Email {SUPPORT_EMAIL}</a>.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
