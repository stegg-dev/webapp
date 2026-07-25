import type { Metadata } from 'next';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Stegg keeps image and message processing private and on your device.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 px-6 pb-24 pt-36">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-kicker">PRIVATE BY DESIGN</p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/40">Last updated: July 24, 2026</p>
        </header>

        <article className="legal-card legal-copy mx-auto max-w-3xl p-7 sm:p-12">
          <h2>The short version</h2>
          <p>
            Stegg does not upload your images, hidden messages, or passwords. Hiding, revealing, and Deep Search run on your device. Stegg has no account system, product analytics SDK, or advertising SDK.
          </p>

          <h2>Images, messages, and passwords</h2>
          <p>
            Images you select, messages you hide or reveal, and passwords you enter are processed locally. Stegg does not operate a server that receives or stores this content. Unsaved working data is discarded when the relevant flow is closed.
          </p>

          <h2>On-device content and reports</h2>
          <p>
            Because Stegg does not receive content processed locally in the app, RUNEWORKS cannot inspect, scan, moderate, decrypt, recover, or delete that content. You control what you create, save, and share.
          </p>
          <p>
            If you contact support or report suspected misuse, do not attach or forward private passwords, private content, or suspected illegal or exploitative material. Send only the non-sensitive details needed for us to understand the report.
          </p>

          <h2>Local app data</h2>
          <p>
            Settings, onboarding state, review and promotion eligibility counters, themes, and optional history records are stored on your device. Clearing history or uninstalling Stegg removes the corresponding local data, subject to normal device backup behavior controlled by Apple or Google.
          </p>

          <h2>No product analytics or advertising</h2>
          <p>
            Stegg does not transmit session activity, feature usage, encode or decode outcomes, Deep Search activity, sharing behavior, paywall activity, or review-prompt activity. Stegg contains no third-party advertising SDK and does not sell personal data.
          </p>

          <h2>The Stegg website</h2>
          <p>
            When you visit stegg.io, the hosting infrastructure necessarily receives standard request information—such as your IP address, browser or device information, requested URL, and timestamps—to deliver and secure the site. Stegg does not add product analytics, advertising trackers, or marketing cookies to the website. The site is hosted by Vercel, whose processing is described in the <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.
          </p>

          <h2>Purchases</h2>
          <p>
            Stegg Pro purchases are processed by the Apple App Store or Google Play. Those stores handle your payment information; Stegg never receives your full card or bank details.
          </p>
          <p>
            Stegg uses RevenueCat to retrieve available purchase offerings and determine whether the anonymous app installation has an active Pro entitlement. RevenueCat and the applicable store may process an app-generated identifier, transaction status, product identifier, receipt or purchase token, and related diagnostic information needed to provide and restore purchases. They do not receive the images, messages, or passwords you process in Stegg.
          </p>
          <p>
            Learn more in the <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a>, <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a>, and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
          </p>

          <h2>Native store reviews</h2>
          <p>
            When Stegg requests a rating, the App Store or Google Play controls whether the native review prompt appears and handles the rating. Stegg records only local timing and eligibility information so it does not ask too often.
          </p>

          <h2>Crash and platform diagnostics</h2>
          <p>
            Apple or Google may provide developers with aggregated or de-identified crash and performance diagnostics according to your device and store settings. Stegg does not intentionally include images, hidden messages, or passwords in crash reports.
          </p>

          <h2>Children</h2>
          <p>Stegg is not directed to children under 13, and we do not knowingly collect personal information from children.</p>

          <h2>Changes</h2>
          <p>We may update this policy as Stegg changes. The date above identifies the latest version.</p>

          <h2>Deleting data</h2>
          <p>
            See the <a href="/data-deletion">Stegg data deletion page</a> for instructions to remove local app data or request deletion of anonymous purchase-service data.
          </p>

          <h2>Contact</h2>
          <p>Questions about privacy can be sent to RUNEWORKS LLC at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
