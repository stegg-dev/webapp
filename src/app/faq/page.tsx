import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import NavBar from '../components/nav-bar';

export const metadata: Metadata = {
  title: 'FAQ — Stegg',
  description: 'Frequently asked questions about Stegg steganography app',
};

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <details className="group glass-card mb-4 overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
        <h3 className="font-heading text-base font-semibold text-white pr-4">{question}</h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stegg-accent/10 flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
          <svg className="w-4 h-4 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-white/60 font-body text-sm leading-relaxed">
        {answer}
      </div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <>
      <div className="bg-pattern" />
      <NavBar />

      <main className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <p className="font-heading text-sm font-semibold tracking-[3px] text-stegg-accent uppercase mb-3">
              Support
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/50 font-body text-base max-w-md mx-auto">
              Everything you need to know about Stegg and steganography
            </p>
          </div>

          {/* Warning Banner */}
          <div className="glass-card mb-8 p-6 border-stegg-gold/20 opacity-0 animate-fade-in delay-100" style={{ borderColor: 'rgba(255, 215, 0, 0.2)' }}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-500/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-yellow-400 mb-1">Important: Image Compression</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">
                  Most social media and messaging apps compress images, which destroys hidden data. 
                  Always share stegged images as files (not photos) or use AirDrop, email, or cloud storage.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="opacity-0 animate-fade-in delay-200">
            <FAQItem
              question="What is steganography?"
              answer={
                <p>
                  Steganography is the practice of hiding secret data inside ordinary-looking files. 
                  Stegg uses LSB (Least Significant Bit) steganography to hide messages in the pixels 
                  of an image. The image looks completely identical to the human eye — only Stegg can 
                  reveal what&apos;s hidden inside.
                </p>
              }
            />

            <FAQItem
              question="Why does Stegg output PNG images?"
              answer={
                <p>
                  PNG is a lossless image format, meaning every pixel is preserved exactly as-is. 
                  JPEG and other lossy formats change pixel values during compression, which destroys 
                  the hidden data. Stegg always outputs PNG to ensure your secret messages remain intact.
                </p>
              }
            />

            <FAQItem
              question="Will my message survive if I send the image via iMessage or WhatsApp?"
              answer={
                <div className="space-y-3">
                  <p>It depends! Many messaging apps re-compress images, converting them to JPEG, which destroys hidden data. For reliable delivery:</p>
                  <div className="space-y-1.5">
                    <p className="text-stegg-accent/80">✅ Send as a file/document attachment (not photo)</p>
                    <p className="text-stegg-accent/80">✅ Use AirDrop (preserves original PNG)</p>
                    <p className="text-stegg-accent/80">✅ Use email attachments</p>
                    <p className="text-stegg-accent/80">✅ Upload to cloud storage (Google Drive, iCloud)</p>
                    <p className="text-stegg-accent/80">✅ Use &quot;Resilient Mode&quot; for mild compression</p>
                  </div>
                  <p className="text-red-400/70">❌ Sending as a regular photo in iMessage/WhatsApp may compress it</p>
                </div>
              }
            />

            <FAQItem
              question='What is "Resilient Mode"?'
              answer={
                <div className="space-y-3">
                  <p>
                    Resilient Mode uses 2 bits per color channel instead of 1, making the hidden data 
                    more resistant to mild image compression or quality loss. The tradeoff is that the 
                    image may show very subtle visual artifacts and the capacity is the same but data 
                    recovery is more reliable.
                  </p>
                  <p><strong className="text-white/80">Use Resilient Mode when:</strong></p>
                  <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>The image might get mildly re-saved or converted</li>
                    <li>You want extra safety for important messages</li>
                  </ul>
                  <p>
                    Note: Even Resilient Mode cannot survive aggressive JPEG compression. 
                    Always send as PNG when possible.
                  </p>
                </div>
              }
            />

            <FAQItem
              question="How much text can I hide?"
              answer={
                <p>
                  It depends on the image size. Each pixel can hide 3 bits of data (one in each color 
                  channel). A 1000×1000 image can hide about 375 KB of text — that&apos;s roughly 
                  375,000 characters, or about 60,000 words! Stegg also compresses your message 
                  before hiding it, so you can often fit even more.
                </p>
              }
            />

            <FAQItem
              question="Is the password encryption secure?"
              answer={
                <p>
                  Stegg uses XOR encryption with key derivation from your password. This provides 
                  reasonable privacy for casual use — it prevents someone from simply running Stegg 
                  on the image to read your message. For truly sensitive data, we recommend also 
                  encrypting your message before hiding it in Stegg.
                </p>
              }
            />

            <FAQItem
              question="Can someone detect a stegged image?"
              answer={
                <p>
                  To the human eye, a stegged image looks identical to the original. However, 
                  statistical analysis tools (steganalysis) can sometimes detect that LSB 
                  steganography was used. For casual privacy, Stegg is excellent. For high-security 
                  use cases, consider additional layers of protection.
                </p>
              }
            />

            <FAQItem
              question='What is "Hide Image in Image"?'
              answer={
                <p>
                  This premium feature lets you hide an entire photo inside another photo. The cover 
                  image looks completely normal, but contains a secret image that only Stegg can 
                  reveal. The secret image is compressed and embedded in the pixels of the cover 
                  image. The cover image needs to be significantly larger than the secret image to 
                  have enough pixel capacity.
                </p>
              }
            />

            <FAQItem
              question="Do screenshots work?"
              answer={
                <p>
                  No. Taking a screenshot of a stegged image will not preserve the hidden data. 
                  Screenshots re-render the image to your screen&apos;s pixel grid and apply 
                  compression, which destroys the LSB data. Always share the original file.
                </p>
              }
            />
          </div>

          {/* Contact CTA */}
          <div className="glass-card p-8 mt-12 text-center opacity-0 animate-fade-in delay-300">
            <h3 className="font-heading text-lg font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-white/50 font-body text-sm mb-5">
              We&apos;re happy to help. Reach out anytime.
            </p>
            <a
              href="mailto:support@runeworks.io"
              className="inline-flex items-center gap-2 bg-stegg-accent/15 hover:bg-stegg-accent/25 text-stegg-accent font-heading font-semibold text-sm px-6 py-3 rounded-xl border border-stegg-accent/20 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Us
            </a>
          </div>

          {/* Back to home */}
          <div className="text-center mt-10 opacity-0 animate-fade-in delay-400">
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
