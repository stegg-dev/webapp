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
          <p className="mt-4 text-sm text-white/40">Last updated: July 24, 2026</p>
        </header>

        <article className="legal-card legal-copy mx-auto max-w-3xl p-7 sm:p-12">
          <h2>1. Acceptance</h2>
          <p>By downloading, installing, purchasing, or using Stegg, you agree to these Terms. If you do not agree, do not use the app.</p>

          <h2>2. The service</h2>
          <p>Stegg is a general-purpose, on-device steganography tool that can hide text or images inside other images and attempt to reveal compatible hidden data. The app is licensed for personal and lawful use; it is not sold to you. Stegg is not a messaging service, social network, content-hosting service, or emergency service.</p>

          <h2>3. On-device operation and user control</h2>
          <p>In the current version of Stegg, images, messages, and passwords are processed locally on your device. RUNEWORKS does not operate a relay or storage service for that content and does not receive, select, transmit, host, review, decrypt, recover, or control it. You decide what to process, where to save it, who receives it, and which third-party service—if any—you use to share it. Those third-party services have their own terms and policies.</p>

          <h2>4. Your responsibility and content rights</h2>
          <p>You are solely responsible for content you hide, reveal, save, or share and for the consequences of doing so. You must have all rights, permissions, and lawful authority required for that content and must respect the privacy, intellectual-property, publicity, and other rights of every affected person. Hiding content does not make the content or its use lawful, private, anonymous, or authorized.</p>

          <h2>5. Prohibited conduct</h2>
          <p>You must not use Stegg to create, possess, conceal, facilitate, solicit, or distribute unlawful or abusive material or activity. Prohibited uses include child sexual abuse or exploitation material; grooming or sexual exploitation of a minor; non-consensual intimate imagery or sexual extortion; human trafficking or exploitation; credible threats, stalking, harassment, or doxxing; fraud, impersonation, malware, unauthorized access, or unlawful surveillance; infringement of intellectual-property, privacy, or publicity rights; or assisting or concealing any criminal activity. You also must not encourage another person to engage in prohibited conduct using Stegg.</p>

          <h2>6. Reporting and safety</h2>
          <p>Because Stegg processes content locally, RUNEWORKS generally cannot see, identify, block, remove, or recover content created or shared with the app. If you report suspected misuse, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with non-sensitive details, but do not attach or forward suspected illegal or exploitative material. For immediate danger, contact local emergency services or the appropriate authorities.</p>
          <p>RUNEWORKS may restrict access to services it controls, preserve or disclose information available to it, respond to valid legal process, and make reports when required by applicable law. Nothing in these Terms promises that RUNEWORKS can identify a user or moderate content that never leaves that user&apos;s device.</p>

          <h2>7. Security limitations</h2>
          <p>Steganography hides the existence of data but is not a substitute for strong encryption or secure communications. Hidden content may be damaged by editing or compression and may be detectable through statistical analysis. Password protection in Stegg is intended as an additional privacy layer, not as a guarantee suitable for high-risk or life-safety use.</p>

          <h2>8. Stegg Pro</h2>
          <p>Stegg Pro is currently offered as a one-time in-app purchase. Your store displays the localized price before confirmation. Payment, refunds, family sharing, and purchase restoration are governed by the store through which you purchased. Except where applicable law or store policy requires otherwise, purchases are non-refundable.</p>

          <h2>9. Apple App Store and Google Play</h2>
          <p>
            If you obtain Stegg through Apple, your use is also subject to the <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Apple Standard End User License Agreement</a> and applicable Apple Media Services terms. If you obtain Stegg through Google Play, your use is also subject to the <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer">Google Play Terms of Service</a> and Google Terms of Service.
          </p>
          <p>Those platform terms govern your store account, download, payment, refund, and use of store services. If these Terms conflict with required platform terms on those matters, the applicable platform terms control.</p>

          <h2>10. Intellectual property</h2>
          <p>Stegg, its software, design, graphics, and branding are owned by RUNEWORKS LLC or its licensors and are protected by applicable intellectual-property laws. You may not copy, resell, redistribute, or attempt to circumvent protected features except where the law expressly permits.</p>

          <h2>11. Third-party services</h2>
          <p>Purchases, purchase restoration, and native reviews rely on Apple, Google, and RevenueCat. Their terms and privacy policies also apply to those services.</p>

          <h2>12. Disclaimer</h2>
          <p>Stegg is provided “as is” and “as available,” without warranties of uninterrupted operation, successful recovery, fitness for a particular purpose, or freedom from errors, to the fullest extent permitted by law.</p>

          <h2>13. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, RUNEWORKS LLC will not be liable for indirect, incidental, special, consequential, or punitive damages, loss of data, failed recovery, unauthorized disclosure, or another person&apos;s content or conduct arising from use of Stegg.</p>

          <h2>14. Indemnification</h2>
          <p>To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless RUNEWORKS LLC and its owners, employees, and contractors from claims, liabilities, damages, judgments, losses, and reasonable costs arising from your unlawful use of Stegg, content you create or share, or your violation of these Terms or another person&apos;s rights. This section does not apply where prohibited by law or to the extent a claim results from RUNEWORKS&apos;s own unlawful conduct.</p>

          <h2>15. Changes and termination</h2>
          <p>We may update Stegg and these Terms or discontinue features. You may stop using the app at any time. We may restrict use where reasonably necessary to protect users, comply with law, or enforce these Terms.</p>

          <h2>16. Contact</h2>
          <p>Questions about these Terms or reports of suspected misuse can be sent to RUNEWORKS LLC at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Do not attach private passwords, private content, or suspected illegal or exploitative material.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
