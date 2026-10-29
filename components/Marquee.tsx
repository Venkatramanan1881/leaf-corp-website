import { site } from '@/lib/site';

export default function Marquee() {
  const items = [...site.ticker, ...site.ticker];
  return (
    <div className="relative z-10 -my-4 overflow-hidden py-8" aria-hidden="true">
      <div className="-mx-4 -rotate-2 overflow-hidden bg-leaf py-4 shadow-xl">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="font-display text-sm font-extrabold uppercase tracking-wider text-white sm:text-base">
              {t} <span className="ml-10 opacity-60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
