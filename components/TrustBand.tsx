import { site } from '@/lib/site';

export default function TrustBand() {
  const stats = [
    { v: site.partnerships, l: 'Client partnerships' },
    { v: String(site.cities.length), l: 'Cities across Tamil Nadu & Pondicherry' },
    { v: site.yearsLabel, l: 'Years in the restaurant industry' },
  ];
  return (
    <section className="relative z-[2] border-y border-zinc-800 bg-zinc-950 px-4 py-14 text-white sm:px-6 md:py-20 lg:px-8" aria-label="Leaf Corporation at a glance">
      <div className="mx-auto max-w-6xl">
        <p className="font-marker text-xl text-leaf-light sm:text-2xl" data-reveal>Your growth partner in the restaurant industry</p>
        <dl className="mt-8 grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.l} data-reveal style={{ '--d': `${i * 90}ms` } as React.CSSProperties} className="border-l-2 border-leaf pl-5">
              <dd className="font-display text-5xl font-extrabold sm:text-6xl">{s.v}</dd>
              <dt className="mt-1 text-sm text-zinc-400">{s.l}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
