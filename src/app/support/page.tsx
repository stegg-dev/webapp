import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help with hiding, revealing, Deep Search, sharing, and Stegg Pro purchases.',
  alternates: { canonical: '/support' },
};

const help = [
  ['A secret will not reveal', 'Confirm you selected the original PNG when possible and entered the exact password. If the image was cropped, resized, or screenshotted, try Deep Search.'],
  ['A shared image stopped working', 'Messaging and social apps often recompress photos. Use Discreet Share as a file, or Social-Proof mode when the destination may alter the image.'],
  ['Deep Search takes time', 'Deep Search checks many possible regions and dimensions. Keep Stegg open, watch the progress indicator, or cancel safely and try a cleaner copy of the image.'],
  ['Stegg Pro is missing', 'Open Settings or the Pro screen and choose Restore Purchases while signed into the same Apple or Google account used to buy Pro.'],
];

export default function SupportPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 px-6 pb-24 pt-36">
        <header className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">STEGG SUPPORT</p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-6xl">Let’s get your secret through.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">Fast answers for sharing, recovery, and purchases—without sending us your private images or messages.</p>
        </header>

        <section className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          {help.map(([title, body]) => (
            <article key={title} className="legal-card p-7">
              <h2 className="font-heading text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{body}</p>
            </article>
          ))}
        </section>

        <section className="download-stage mx-auto mt-10 max-w-5xl text-center">
          <h2 className="font-heading text-3xl font-bold">Still stuck?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/55">Email the device model, app version, and what happened. Please do not send a sensitive image, hidden message, or password.</p>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Stegg%20Support`} className="store-button store-button-primary mt-7 px-6 py-4 text-base">Email {SUPPORT_EMAIL}</a>
          <div className="mt-6"><Link href="/faq" className="text-sm font-semibold text-stegg-accent">Browse the FAQ →</Link></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
