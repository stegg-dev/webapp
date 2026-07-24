import Image from 'next/image';
import Link from 'next/link';
import NavBar from './components/nav-bar';
import SiteFooter from './components/site-footer';
import StoreButtons from './components/store-buttons';

const trustPoints = ['On-device processing', 'No account', 'No product analytics', 'Core decode stays free'];

const steps = [
  {
    number: '01',
    title: 'Choose a photo',
    body: 'Start with an ordinary image from your library. Nothing is uploaded to Stegg.',
  },
  {
    number: '02',
    title: 'Hide your secret',
    body: 'Add a message—or, with Pro, an entire image. A password adds another layer of privacy.',
  },
  {
    number: '03',
    title: 'Share your way',
    body: 'Send only the file for discretion, or include a simple invite that helps the recipient decode it.',
  },
];

const features = [
  ['Social-Proof mode', 'Prepare images for real-world sharing when a service may recompress them.'],
  ['Deep Search', 'Recover hidden data from many crops, resizes, and screenshots that ordinary decoding misses.'],
  ['Open with Stegg', 'Receive an image from another app and route it directly into Reveal.'],
  ['Password protection', 'Lock hidden messages so the recipient needs the same password to reveal them.'],
  ['Discreet sharing', 'Share the stegged file alone without adding explanatory text.'],
  ['Private by design', 'Images, messages, filenames, and passwords stay off Stegg servers.'],
];

export default function Home() {
  return (
    <>
      <div className="ambient-grid" />
      <NavBar />

      <main className="relative z-10 overflow-hidden">
        <section className="hero-section px-6 pb-24 pt-36 sm:pt-44">
          <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="relative z-10">
              <div className="eyebrow mb-7">PRIVATE BY DESIGN · AN APP BY RUNEWORKS</div>
              <h1 className="max-w-4xl font-heading text-5xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.6rem]">
                A secret can look like
                <span className="hero-emphasis"> any other photo.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/62 sm:text-xl">
                Stegg hides messages and photos inside ordinary images. Everything happens on your device, and the result still looks completely normal.
              </p>
              <div className="mt-9">
                <StoreButtons />
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/42">
                <span>Free to hide and reveal</span>
                <span>One-time Pro upgrade</span>
                <span>No subscription</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Stegg hides a message inside an ordinary photo">
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />
              <div className="phone-card phone-card-back">
                <Image src="/screenshots/02-invisible-result.png" alt="The original and Stegg image look the same" width={1080} height={1920} priority />
              </div>
              <div className="phone-card phone-card-front">
                <Image src="/screenshots/01-hide-a-secret.png" alt="Hide a secret message inside a photo with Stegg" width={1080} height={1920} priority />
              </div>
              <div className="floating-proof floating-proof-top">
                <span className="proof-dot" />
                No cloud processing
              </div>
              <div className="floating-proof floating-proof-bottom">Looks ordinary. Carries a secret.</div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-black/10 px-6 py-5">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-stegg-accent" />
                {point}
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="section-shell px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="section-kicker">HIDDEN IN PLAIN SIGHT</p>
              <h2 className="section-title">The photo stays familiar. The secret travels inside it.</h2>
              <p className="section-copy">
                Stegg changes tiny pieces of image data that your eyes do not notice. The recipient opens the image with Stegg to reveal what you placed inside.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map((step) => (
                <article key={step.number} className="story-card">
                  <span className="story-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>

            <div className="comparison-stage mt-16">
              <div className="comparison-copy">
                <p className="section-kicker">THE REVEAL</p>
                <h3 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">Same picture. More than meets the eye.</h3>
                <p className="mt-5 leading-relaxed text-white/58">
                  No account. No upload. No Stegg database containing your secrets. The file itself carries the hidden data.
                </p>
                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-stegg-accent">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-stegg-accent/15">✓</span>
                  Processed locally on your device
                </div>
              </div>
              <div className="comparison-image">
                <Image src="/screenshots/02-invisible-result.png" alt="A Stegg comparison showing an unchanged-looking image" width={1080} height={1920} />
              </div>
            </div>
          </div>
        </section>

        <section id="deep-search" className="section-shell section-dark px-6 py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="feature-shot-wrap">
              <div className="feature-shot">
                <Image src="/screenshots/04-screenshot-recovery.png" alt="Deep Search recovering a hidden image from a screenshot" width={1080} height={1920} />
              </div>
              <div className="search-pulse"><span>⌕</span></div>
            </div>
            <div>
              <p className="section-kicker">DEEP SEARCH</p>
              <h2 className="section-title">When the image changed, Stegg searches deeper.</h2>
              <p className="section-copy">
                Crops, resizes, borders, and screenshots can move the hidden data. Deep Search checks likely image regions and encoder sizes to recover many files ordinary decoding cannot find.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Crops', 'Resizes', 'Screenshots', 'UI borders'].map((item) => (
                  <div key={item} className="mini-proof"><span>✓</span>{item}</div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/38">
                Recovery depends on how much the image changed, so keeping the original file is always best.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="section-shell px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="section-kicker">BUILT FOR REAL SHARING</p>
              <h2 className="section-title mx-auto max-w-3xl">Privacy should feel simple—not technical.</h2>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {features.map(([title, body], index) => (
                <article key={title} className="feature-tile">
                  <span className="feature-index">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pro" className="section-shell px-6 pb-28">
          <div className="pro-stage mx-auto max-w-6xl">
            <div className="pro-copy">
              <div className="eyebrow mb-6">STEGG PRO · ONE PAYMENT</div>
              <h2 className="section-title">Hide more. Blend in better.</h2>
              <p className="section-copy">
                Unlock image-in-image hiding, a working calculator disguise, custom themes, and alternate icons. One purchase—no recurring subscription.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-white/68">
                {['Hide an entire photo inside another', 'Disguise Stegg behind a calculator', 'Customize themes and app icons', 'Keep core decode free for recipients'].map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-stegg-accent">✦</span>{item}</li>
                ))}
              </ul>
              <p className="mt-7 text-sm text-white/38">Your store shows the localized lifetime price before purchase.</p>
            </div>
            <div className="pro-shots">
              <div className="pro-shot pro-shot-left"><Image src="/screenshots/05-image-in-image-pro.png" alt="Stegg Pro image-in-image hiding" width={1080} height={1920} /></div>
              <div className="pro-shot pro-shot-right"><Image src="/screenshots/06-calculator-disguise.png" alt="Stegg Pro calculator disguise" width={1080} height={1920} /></div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-28">
          <div className="download-stage mx-auto max-w-5xl text-center">
            <Image src="/stegg-icon-dark.png" alt="Stegg" width={92} height={92} className="mx-auto rounded-[1.8rem] shadow-2xl" />
            <p className="section-kicker mt-8">AN APP BY RUNEWORKS</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-black tracking-tight text-white sm:text-6xl">Hide your first secret. Keep it off the cloud.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">Free core hiding and revealing. Private on-device processing. Stegg Pro is a one-time upgrade.</p>
            <div className="mt-9 flex justify-center"><StoreButtons /></div>
            <Link href="/privacy-policy" className="mt-7 inline-block text-sm font-semibold text-stegg-accent hover:text-white">Read our plain-language privacy promise →</Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
