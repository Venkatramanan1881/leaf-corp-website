import Image from 'next/image';
import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import { Arrow } from './Icons';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <Image
        src={site.heroImage.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.14]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/70 to-cream" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="eyebrow mx-auto" data-reveal>
          <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" /> Restaurant Business Consultancy · Coimbatore
        </p>

        <h1 className="h-display mt-6 text-[clamp(2.9rem,10vw,7.5rem)]" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
          Grow your
          <br />
          vision
          <span className="block text-leaf">online.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl" data-reveal style={{ '--d': '160ms' } as React.CSSProperties}>
          {site.subtitle}. We help restaurants optimize and manage their <strong className="text-ink">online presence</strong>, delivery and dine-in with strategies built around your goals.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" data-reveal style={{ '--d': '240ms' } as React.CSSProperties}>
          <Link href="/contact" className="btn btn-dark w-full sm:w-auto">Start Now <Arrow /></Link>
          <Link href="/#services" className="btn btn-light w-full sm:w-auto">Explore Services</Link>
        </div>

        <dl className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-left" data-reveal style={{ '--d': '320ms' } as React.CSSProperties}>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Our Clients</dt>
            <dd className="font-display text-xl font-extrabold">{site.partnerships} Partnerships</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Footprint</dt>
            <dd className="font-display text-xl font-extrabold">{site.cities.length} Cities</dd>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-leaf-dark underline underline-offset-4">
            Chat on WhatsApp
          </a>
        </dl>
      </div>
    </section>
  );
}
