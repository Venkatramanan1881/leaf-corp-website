import Image from 'next/image';
import { site } from '@/lib/site';

export default function Clients() {
  return (
    <section id="clients" className="section scroll-mt-16 border-y border-zinc-100 bg-white">
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow mx-auto" data-reveal>Our Clients</p>
        <h2 className="h-display mt-4 text-3xl sm:text-5xl" data-reveal>{site.partnerships} partnerships and counting</h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {site.clients.map((c, i) => (
            <li
              key={c.src}
              data-reveal
              style={{ '--d': `${(i % 5) * 60}ms` } as React.CSSProperties}
              className="grid aspect-[4/3] place-items-center rounded-3xl border border-zinc-200 bg-white p-4 transition hover:border-leaf hover:shadow-md"
            >
              <Image src={c.src} alt={c.name} width={240} height={180} sizes="(max-width: 640px) 45vw, 200px" className="max-h-full w-auto object-contain" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
