import { site, whatsappLink } from '@/lib/site';
import EnquiryForm from './EnquiryForm';

export default function ContactSection({ defaultService = '', heading = 'Let’s grow your restaurant', asPage = false }: { defaultService?: string; heading?: string; asPage?: boolean }) {
  const Heading = asPage ? 'h1' : 'h2';
  return (
    <section id="contact" className={`section scroll-mt-24 bg-cream ${asPage ? 'pt-32 md:pt-40' : ''}`}>
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow" data-reveal>Contact Us</p>
          <Heading className="h-display mt-4 text-4xl sm:text-5xl" data-reveal>{heading}</Heading>
          <address className="mt-8 space-y-5 not-italic text-zinc-700" data-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Leaf Corporation</p>
              <p className="mt-1">{site.address.line1}, {site.address.city}, {site.address.region}, India – {site.address.postal}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone</p>
              {site.phones.map((p) => (
                <p key={p.tel}><a className="font-bold hover:text-leaf-dark" href={`tel:${p.tel}`}>{p.display}</a></p>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</p>
              <p><a className="font-bold hover:text-leaf-dark" href={`mailto:${site.email}`}>{site.email}</a></p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Opening Hours</p>
              {site.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-leaf">Chat on WhatsApp</a>
          </address>
        </div>
        <div className="lg:col-span-3" data-reveal>
          <EnquiryForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
