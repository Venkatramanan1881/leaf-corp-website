import Link from 'next/link';
import { services } from '@/lib/site';
import { Arrow, ServiceIcon } from './Icons';

export default function Services() {
  return (
    <section id="services" className="section scroll-mt-16 bg-cream">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal>Services</p>
        <h2 className="h-display mt-4 text-4xl sm:text-6xl" data-reveal>Welcome to our site</h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600" data-reveal>
          Elevate the potential of your restaurant&apos;s e-commerce operations with our expert consultancy services.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.slug} data-reveal style={{ '--d': `${i * 100}ms` } as React.CSSProperties}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-leaf hover:shadow-xl"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-light text-leaf-dark"><ServiceIcon name={s.icon} /></span>
                <h3 className="mt-6 font-display text-2xl font-extrabold">{s.title}</h3>
                <p className="mt-2 flex-1 text-zinc-600">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-leaf-dark">
                  Learn more <Arrow className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
