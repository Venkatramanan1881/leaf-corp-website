import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, whatsappLink } from '@/lib/site';
import { Arrow, ServiceIcon } from '@/components/Icons';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: `${s.headline}. ${s.description}`.slice(0, 200), alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="section bg-cream pt-32 md:pt-44">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
            <Link href="/" className="hover:text-leaf-dark">Home</Link> / <Link href="/#services" className="hover:text-leaf-dark">Services</Link> / <span aria-current="page" className="font-bold text-ink">{s.title}</span>
          </nav>
          <span className="mt-8 grid h-16 w-16 place-items-center rounded-2xl bg-leaf-light text-leaf-dark"><ServiceIcon name={s.icon} /></span>
          <h1 className="h-display mt-6 text-4xl sm:text-6xl">{s.title}</h1>
          <p className="mt-4 font-display text-2xl font-bold text-leaf-dark">{s.headline}</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700">{s.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/contact?service=${s.slug}`} className="btn btn-dark">Enquire about this service <Arrow /></Link>
            <a href={whatsappLink(`Hello Leaf Corporation, I'd like to know more about ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-light">WhatsApp us</a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-extrabold">Other services</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="block rounded-3xl border border-zinc-200 p-6 transition hover:border-leaf hover:shadow-md">
                  <span className="font-display text-xl font-extrabold">{o.title}</span>
                  <span className="mt-1 block text-zinc-600">{o.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
