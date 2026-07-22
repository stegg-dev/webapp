import type { Metadata } from 'next';
import NavBar from '../components/nav-bar';
import SiteFooter from '../components/site-footer';
import { SUPPORT_EMAIL } from '../site-config';

export const metadata: Metadata = {
  title: 'Data Deletion',
  description: 'How to delete local Stegg data and request deletion of purchase-service data.',
  alternates: { canonical: '/data-deletion' },
};

export default function DataDeletionPage() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />
      <main className="relative z-10 px-6 pb-24 pt-36">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="section-kicker">YOUR DATA, YOUR CONTROL</p>
          <h1 className="mt-3 font-heading text-4xl font-black tracking-tight sm:text-6xl">Delete Stegg data</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Stegg has no account and never uploads the images, messages, or passwords you process.
          </p>
        </header>

        <article className="legal-card legal-copy mx-auto max-w-3xl p-7 sm:p-12">
          <h2>Delete data stored on your device</h2>
          <p>
            Clear optional history from Stegg&apos;s settings. To remove all local settings, onboarding state, review counters, and other app data, delete Stegg from your device. Your photos and exported Stegg files remain wherever you saved them until you delete them there.
          </p>

          <h2>Request deletion of purchase-service data</h2>
          <p>
            Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Stegg%20Data%20Deletion%20Request`}>{SUPPORT_EMAIL}</a> with the subject “Stegg Data Deletion Request.” Tell us whether you use iPhone or Android and include your anonymous RevenueCat app user ID, if available. Do not send an image, hidden message, password, receipt, or payment details.
          </p>
          <p>
            We will verify what can be matched to your anonymous installation and request deletion from RevenueCat. We aim to respond within 30 days. Because Stegg has no account, data may not be recoverable after deletion and a Pro entitlement may need to be restored through the store.
          </p>

          <h2>What is deleted or retained</h2>
          <p>
            The request covers the anonymous purchase-service customer record and associated entitlement information controlled by RUNEWORKS. Apple and Google separately control store transaction records and may retain them for legal, tax, fraud-prevention, and purchase-restoration purposes under their own policies. RUNEWORKS may retain a minimal record of the deletion request when required to document compliance.
          </p>

          <h2>Need help?</h2>
          <p>
            Contact RUNEWORKS LLC at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
