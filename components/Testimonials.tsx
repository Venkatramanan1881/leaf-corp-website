import { site } from '@/lib/site';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section relative scroll-mt-16 overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-6xl">
        <p className="font-marker text-xl text-leaf-light" data-reveal>Testimonials</p>
        <h2 className="h-display mt-3 text-4xl sm:text-6xl" data-reveal>Client stories of success</h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400" data-reveal>
          See what our clients say about their experience with Leaf Corporation&apos;s services.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <li key={t.name} data-reveal style={{ '--d': `${i * 100}ms` } as React.CSSProperties}>
              <figure className="flex h-full flex-col rounded-[2rem] border border-zinc-800 bg-zinc-900 p-7">
                <span className="font-display text-6xl leading-none text-leaf" aria-hidden="true">&ldquo;</span>
                <blockquote className="flex-1 text-lg leading-relaxed text-zinc-200">{t.quote}</blockquote>
                <figcaption className="mt-6 font-display text-lg font-extrabold uppercase tracking-wide">{t.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
