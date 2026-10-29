import { site } from '@/lib/site';
import { Pin } from './Icons';

export default function Story() {
  return (
    <section id="story" className="section scroll-mt-16 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow" data-reveal>Story</p>
          <h2 className="h-display mt-4 text-4xl sm:text-6xl" data-reveal>Our journey unveiled</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700" data-reveal>{site.about}</p>
          <p className="mt-4 leading-relaxed text-zinc-600" data-reveal>{site.commitment}</p>
        </div>

        <div data-reveal className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-9">
          <h3 className="font-display text-2xl font-extrabold">Cities with our footprint</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {site.cities.map((c) => (
              <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-leaf-light px-4 py-2 text-sm font-bold text-leaf-dark">
                <Pin /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
