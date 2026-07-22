import type { Metadata } from 'next';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of the Stegg application and Stegg Pro.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 px-6 pb-24 pt-36">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-kicker">RUNEWORKS LLC</p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-white/40">Last updated: July 22, 2026</p>
        </header>

        <article className="legal-card legal-copy mx-auto max-w-3xl p-7 sm:p-12">
          <h2>1. Acceptance</h2>
          <p>By downloading, installing, purchasing, or using Stegg, you agree to these Terms. If you do not agree, do not use the app.</p>

          <h2>2. The service</h2>
          <p>Stegg is a steganography tool that can hide text or images inside other images and attempt to reveal compatible hidden data. The app is licensed for personal and lawful use; it is not sold to you.</p>

          <h2>3. Your responsibility</h2>
          <p>You are responsible for the content you hide, reveal, store, or share and for complying with applicable laws and the rights of others. You must not use Stegg to facilitate unlawful, abusive, exploitative, threatening, defamatory, or infringing activity.</p>

          <h2>4. Security limitations</h2>
          <p>Steganography hides the existence of data but is not a substitute for strong encryption or secure communications. Hidden content may be damaged by editing or compression and may be detectable through statistical analysis. Password protection in Stegg is intended as an additional privacy layer, not as a guarantee suitable for high-risk or life-safety use.</p>

          <h2>5. Stegg Pro</h2>
          <p>Stegg Pro is currently offered as a one-time in-app purchase. Your store displays the localized price before confirmation. Payment, refunds, family sharing, and purchase restoration are governed by the store through which you purchased. Except where applicable law or store policy requires otherwise, purchases are non-refundable.</p>

          <h2>6. Apple App Store and Google Play</h2>
          <p>
            If you obtain Stegg through Apple, your use is also subject to the <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple Standard End User License Agreement</a> and applicable Apple Media Services terms. If you obtain Stegg through Google Play, your use is also subject to the <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer">Google Play Terms of Service</a> and Google Terms of Service.
          </p>
          <p>Those platform terms govern your store account, download, payment, refund, and use of store services. If these Terms conflict with required platform terms on those matters, the applicable platform terms control.</p>

          <h2>7. Intellectual property</h2>
          <p>Stegg, its software, design, graphics, and branding are owned by RUNEWORKS LLC or its licensors and are protected by applicable intellectual-property laws. You may not copy, resell, redistribute, or attempt to circumvent protected features except where the law expressly permits.</p>

          <h2>8. Third-party services</h2>
          <p>Purchases, purchase restoration, and native reviews rely on Apple, Google, and RevenueCat. Their terms and privacy policies also apply to those services.</p>

          <h2>9. Disclaimer</h2>
          <p>Stegg is provided “as is” and “as available,” without warranties of uninterrupted operation, successful recovery, fitness for a particular purpose, or freedom from errors, to the fullest extent permitted by law.</p>

          <h2>10. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, RUNEWORKS LLC will not be liable for indirect, incidental, special, consequential, or punitive damages, loss of data, failed recovery, or unauthorized disclosure arising from use of Stegg.</p>

          <h2>11. Changes and termination</h2>
          <p>We may update Stegg and these Terms or discontinue features. You may stop using the app at any time. We may restrict use where reasonably necessary to protect users, comply with law, or enforce these Terms.</p>

          <h2>12. Contact</h2>
          <p>Questions about these Terms can be sent to RUNEWORKS LLC at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
