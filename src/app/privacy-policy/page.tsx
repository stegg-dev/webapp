import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import NavBar from '../components/nav-bar';

export const metadata: Metadata = {
  title: 'Privacy Policy — Stegg',
  description: 'Privacy Policy for the Stegg steganography app',
};

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-xl font-bold text-white mb-4">{title}</h2>
      <div className="text-white/70 font-body text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'February 21, 2026';

  return (
    <>
      <div className="bg-pattern" />
      <NavBar />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <p className="font-heading text-sm font-semibold tracking-[3px] text-stegg-accent uppercase mb-3">
              Legal
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/40 font-body text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 sm:p-12 opacity-0 animate-fade-in delay-200">
            <PolicySection title="General Information">
              <p>
                At Stegg, we respect your privacy and are committed to protecting it. 
                Our app is designed with a privacy-first approach — we do not collect, use, store, 
                or share any personal data from our users.
              </p>
              <p>
                All steganography operations (encoding and decoding) happen entirely on your device. 
                Your images and messages never leave your phone and are never transmitted to any server.
              </p>
            </PolicySection>

            <PolicySection title="Data Collection">
              <p>
                <strong className="text-white">Stegg does not collect:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1.5 ml-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Location data</li>
                <li>Photos or images you process through the app</li>
                <li>Messages or text you hide or extract</li>
                <li>Usage analytics or behavioral data</li>
                <li>Device identifiers for tracking purposes</li>
              </ul>
            </PolicySection>

            <PolicySection title="Third-Party Services">
              <p>
                Stegg may display advertisements through Google AdMob for free-tier users. 
                AdMob may collect certain data as described in{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stegg-accent hover:text-stegg-light underline underline-offset-2 transition-colors"
                >
                  Google&apos;s Privacy Policy
                </a>.
                Premium users who upgrade to Stegg Pro do not see any advertisements.
              </p>
              <p>
                In-app purchases are processed through Apple&apos;s App Store, which is subject to{' '}
                <a 
                  href="https://www.apple.com/legal/privacy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stegg-accent hover:text-stegg-light underline underline-offset-2 transition-colors"
                >
                  Apple&apos;s Privacy Policy
                </a>.
              </p>
            </PolicySection>

            <PolicySection title="On-Device Processing">
              <p>
                All image encoding and decoding operations are performed locally on your device. 
                Stegg does not use cloud processing, remote servers, or any form of network 
                communication to process your images or messages. Your data stays on your device at all times.
              </p>
            </PolicySection>

            <PolicySection title="Future Updates">
              <p>
                Should we decide to collect any data in the future, this privacy policy will be 
                updated accordingly with clear notice provided to users. We advise users to review 
                this page periodically for any changes. Changes to this privacy policy are effective 
                when posted on this page.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p>
                If you have any questions about Stegg or this privacy policy, please contact us at{' '}
                <a 
                  href="mailto:support@runeworks.io" 
                  className="text-stegg-accent hover:text-stegg-light underline underline-offset-2 transition-colors"
                >
                  support@runeworks.io
                </a>.
              </p>
            </PolicySection>
          </div>

          {/* Back to home */}
          <div className="text-center mt-10 opacity-0 animate-fade-in delay-300">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-stegg-accent font-body text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/stegg-dino-white.png" alt="Stegg" width={20} height={20} className="opacity-40" />
              <span className="font-heading text-xs font-semibold tracking-[3px] text-white/30">STEGG</span>
            </div>
            <p className="text-xs text-white/20 font-body">
              &copy; {new Date().getFullYear()} RUNEWORKS LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
