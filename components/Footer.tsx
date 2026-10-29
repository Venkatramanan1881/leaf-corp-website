import Image from 'next/image';
import Link from 'next/link';
import { site, services, whatsappLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black px-4 py-12 text-white sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src={site.logo.src} alt="" width={40} height={45} className="h-11 w-auto" />
            <span className="font-display text-2xl font-extrabold">Leaf Corporation</span>
          </div>
          <p className="mt-4 max-w-md text-zinc-400">{site.subtitle}. {site.address.city}, {site.address.region}.</p>
          <p className="mt-6 font-marker text-2xl text-leaf-light">Grow Your Vision</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link className="text-zinc-300 hover:text-white" href={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
            <li><Link className="text-zinc-300 hover:text-white" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Contact</h2>
          <address className="mt-4 space-y-2 not-italic text-zinc-300 [overflow-wrap:anywhere]">
            <p>{site.address.line1}, {site.address.city}, {site.address.region} {site.address.postal}</p>
            {site.phones.map((p) => (
              <p key={p.tel}><a className="hover:text-white" href={`tel:${p.tel}`}>{p.display}</a></p>
            ))}
            <p><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><a className="hover:text-white" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp us</a></p>
            <p><a className="hover:text-white" href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </address>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Leaf Corporation. All rights reserved.</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {site.legal.map((l) => (
            <li key={l.href}><a className="hover:text-white" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
