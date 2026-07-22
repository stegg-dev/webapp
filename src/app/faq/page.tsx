import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about Stegg, steganography, sharing, Deep Search, privacy, and Stegg Pro.',
  alternates: { canonical: '/faq' },
};

const questions: Array<[string, React.ReactNode]> = [
  [
    'What is steganography?',
    <p key="steg">Steganography hides the existence of data inside something ordinary. Stegg places compatible hidden data inside image pixels while keeping the visible picture essentially unchanged.</p>,
  ],
  [
    'Does Stegg upload my photos or messages?',
    <p key="privacy">No. Hiding, revealing, and Deep Search happen on your device. Stegg has no account system, product analytics SDK, or advertising SDK. Purchase status is handled through Apple or Google and RevenueCat without sending them your image or message content.</p>,
  ],
  [
    'Why does Stegg use PNG files?',
    <p key="png">PNG is lossless, so it preserves the small pixel changes that carry a Stegg. JPEG and many social apps alter pixels during compression, which can damage hidden data.</p>,
  ],
  [
    'How should I share a stegged image?',
    <div key="share" className="space-y-2"><p>Sharing as a file is the safest option. In Stegg, use Discreet Share for only the file or Invite to Decode when the recipient may need an explanation and download link.</p><p>If the destination commonly recompresses images, try Social-Proof mode—but no method can guarantee survival through every platform transformation.</p></div>,
  ],
  [
    'Can Stegg recover a screenshot?',
    <p key="screenshot">Often, yes. Deep Search can inspect likely photo regions, borders, crops, resizes, and common encoder dimensions. Recovery depends on how much changed and is never guaranteed, so preserve the original file whenever possible.</p>,
  ],
  [
    'What is Deep Search?',
    <p key="deep">Direct Reveal checks the most likely format quickly. Deep Search performs a broader, cancellable search across candidate regions and dimensions when the image has been changed by a screenshot, crop, border, or resize.</p>,
  ],
  [
    'Is password protection the same as strong encryption?',
    <p key="password">No. Stegg password protection is an additional privacy layer intended to prevent casual access. Steganography and Stegg&apos;s password layer should not replace audited encryption or secure communications for high-risk secrets.</p>,
  ],
  [
    'What stays free?',
    <p key="free">Core message hiding, revealing, Social-Proof sharing, and Deep Search stay free so recipients can decode what you send. Stegg Pro adds image-in-image hiding, calculator disguise, themes, and alternate app icons.</p>,
  ],
  [
    'Is Stegg Pro a subscription?',
    <p key="pro">No. Stegg Pro is a one-time purchase. The App Store or Google Play shows your localized lifetime price before you confirm.</p>,
  ],
  [
    'How do I restore Stegg Pro?',
    <p key="restore">Choose Restore Purchases from the Pro screen or Settings while signed into the same Apple or Google account used for the original purchase. If it still does not appear, contact support with your platform and app version—never your receipt, password, or hidden content.</p>,
  ],
];

export default function FAQPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 px-6 pb-24 pt-36">
        <header className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">QUESTIONS, REVEALED</p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-6xl">Stegg, sharing, and privacy.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">What Stegg can do, what can damage hidden data, and where your information goes.</p>
        </header>

        <section className="mx-auto mt-14 max-w-3xl space-y-3">
          {questions.map(([question, answer]) => (
            <details key={question} className="faq-item">
              <summary>{question}</summary>
              <div className="faq-answer">{answer}</div>
            </details>
          ))}
        </section>

        <section className="download-stage mx-auto mt-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold">Need a human?</h2>
          <p className="mt-4 text-white/55">Visit support or email RUNEWORKS. Please keep private images, messages, and passwords out of support requests.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/support" className="store-button store-button-primary px-6 py-4 text-base">Open support</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="store-button store-button-secondary px-6 py-4 text-base">{SUPPORT_EMAIL}</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
