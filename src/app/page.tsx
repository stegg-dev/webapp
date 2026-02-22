import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/nav-bar';

function FeatureCard({ icon, title, description, delay, pro }: { icon: React.ReactNode; title: string; description: string; delay: string; pro?: boolean }) {
  return (
    <div className={`glass-card glass-card-hover p-8 opacity-0 animate-fade-in-up ${delay} relative`}>
      <div className="w-14 h-14 rounded-2xl bg-stegg-accent/15 flex items-center justify-center mb-5">
        {icon}
      </div>
      <div className="flex items-center gap-2.5 mb-3">
        <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
        {pro && (
          <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 font-heading font-bold text-[10px] tracking-wider px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
            PRO
          </span>
        )}
      </div>
      <p className="text-white/60 text-sm leading-relaxed font-body">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description, delay }: { number: string; title: string; description: string; delay: string }) {
  return (
    <div className={`flex gap-5 opacity-0 animate-fade-in-up ${delay}`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-stegg-accent/15 border border-stegg-accent/20 flex items-center justify-center">
        <span className="font-heading text-lg font-bold text-stegg-accent">{number}</span>
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-white mb-1.5">{title}</h3>
        <p className="text-white/60 text-sm leading-relaxed font-body">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="bg-pattern" />
      <NavBar />

      <main className="relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 animate-fade-in">
              <Image
                src="/stegg-dino-white.png"
                alt="Stegg Logo"
                width={140}
                height={140}
                priority
                className="mx-auto animate-float drop-shadow-[0_0_40px_rgba(46,204,113,0.15)]"
              />
            </div>

            {/* Wordmark */}
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-black tracking-[12px] text-white mb-4 opacity-0 animate-fade-in delay-200">
              STEGG
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-body italic text-stegg-accent/80 mb-6 opacity-0 animate-fade-in delay-300">
              Secret Messages. Hidden in Plain Sight.
            </p>

            {/* Description */}
            <p className="max-w-xl mx-auto text-white/60 font-body text-base sm:text-lg leading-relaxed mb-10 opacity-0 animate-fade-in delay-400">
              Hide any message inside any image using steganography. 
              The image looks completely untouched — only Stegg can reveal what&apos;s hidden inside.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in delay-500">
              <a
                href="https://apps.apple.com/ng/app/stegg/id1487379535"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-stegg-accent hover:bg-stegg-light text-stegg-dark font-heading font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:-translate-y-1"
              >
                <Image src="/appstore-icon.png" alt="" width={24} height={24} />
                Download on App Store
              </a>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-stegg-accent/50 text-white font-heading font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-stegg-accent/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section id="features" className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-heading text-sm font-semibold tracking-[3px] text-stegg-accent uppercase mb-3 opacity-0 animate-fade-in">
                Features
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white opacity-0 animate-fade-in delay-100">
                Everything you need for digital privacy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                title="Hide Messages in Images"
                description="Pick any photo, type your secret message — Stegg hides it in the pixels using LSB steganography. The image looks completely identical."
                delay="delay-200"
              />
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                title="Extract Hidden Messages"
                description="Got a stegged image? Crack it open and reveal the hidden message inside. Only Stegg knows how to read the invisible data."
                delay="delay-300"
              />
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                title="Image in Image"
                description="Hide an entire photo inside another photo. The cover image looks perfectly normal while concealing a secret image inside."
                delay="delay-400"
                pro
              />
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                title="Password Protection"
                description="Encrypt your secret messages with a password. Even if someone discovers the hidden data, they can't read it without the key."
                delay="delay-500"
              />
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="Resilient Mode"
                description="Uses 2 bits per channel instead of 1 for more robust encoding. Your hidden data survives mild compression and quality loss."
                delay="delay-600"
              />
              <FeatureCard
                icon={<svg className="w-7 h-7 text-stegg-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                title="Invisible to the Eye"
                description="Stegged images are visually identical to the originals. No one can tell your photo carries a hidden message just by looking at it."
                delay="delay-700"
              />
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="how-it-works" className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-heading text-sm font-semibold tracking-[3px] text-stegg-accent uppercase mb-3 opacity-0 animate-fade-in">
                How It Works
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white opacity-0 animate-fade-in delay-100">
                Three simple steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <StepCard
                  number="1"
                  title="Choose an Image"
                  description="Pick any photo from your camera roll. Larger images can hold more data — a 1000×1000 image fits roughly 60,000 words."
                  delay="delay-200"
                />
                <StepCard
                  number="2"
                  title="Type Your Secret"
                  description="Write your message and optionally set a password. Stegg compresses and encrypts it before embedding."
                  delay="delay-300"
                />
                <StepCard
                  number="3"
                  title="Share Safely"
                  description="Save or share the stegged PNG. Send as a file attachment, via AirDrop, email, or cloud storage to preserve the hidden data."
                  delay="delay-400"
                />
              </div>

              {/* Visual */}
              <div className="glass-card p-10 flex flex-col items-center justify-center opacity-0 animate-fade-in delay-300">
                <div className="relative">
                  <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-stegg-mid/50 to-stegg-dark/50 border border-white/10 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  {/* Hidden message overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-stegg-accent/20 backdrop-blur-sm border border-stegg-accent/30 rounded-xl px-4 py-2">
                    <p className="text-stegg-accent text-xs font-heading font-bold tracking-wider">SECRET INSIDE</p>
                  </div>
                </div>
                <p className="mt-10 text-white/40 text-sm font-body text-center">
                  The image looks identical.<br />The message is invisible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-12 sm:p-16 glow-accent opacity-0 animate-fade-in">
              <Image
                src="/stegg-dino-white.png"
                alt="Stegg"
                width={80}
                height={80}
                className="mx-auto mb-6 opacity-60"
              />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to hide your first message?
              </h2>
              <p className="text-white/60 font-body text-lg mb-8 max-w-md mx-auto">
                Download Stegg for free and start hiding secret messages in your photos today.
              </p>
              <a
                href="https://apps.apple.com/ng/app/stegg/id1487379535"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-stegg-accent hover:bg-stegg-light text-stegg-dark font-heading font-bold text-base px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.3)] hover:-translate-y-1"
              >
                <Image src="/appstore-icon.png" alt="" width={24} height={24} />
                Download on App Store
              </a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="px-6 py-12 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Image src="/stegg-dino-white.png" alt="Stegg" width={24} height={24} className="opacity-50" />
                <span className="font-heading text-sm font-semibold tracking-[3px] text-white/40">STEGG</span>
              </div>
              <div className="flex items-center gap-8">
                <Link href="/faq" className="text-sm text-white/40 hover:text-stegg-accent transition-colors font-body">
                  FAQ
                </Link>
                <Link href="/privacy-policy" className="text-sm text-white/40 hover:text-stegg-accent transition-colors font-body">
                  Privacy Policy
                </Link>
                <a href="mailto:support@runeworks.io" className="text-sm text-white/40 hover:text-stegg-accent transition-colors font-body">
                  Contact
                </a>
              </div>
              <p className="text-xs text-white/25 font-body">
                &copy; {new Date().getFullYear()} RUNEWORKS LLC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
