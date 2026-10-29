'use client';

import { useState } from 'react';
import { services, site, whatsappLink } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured';

const field = 'mt-1.5 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30';

export default function EnquiryForm({ defaultService = '' }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [summary, setSummary] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    setStatus('sending');
    setErrors({});
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        return;
      }
      const j = await res.json().catch(() => ({}));
      if (res.status === 422) setErrors(j.fields ?? {});
      setSummary(
        `Hello Leaf Corporation, I'm ${data.name}${data.business ? ` from ${data.business}` : ''}. ${data.message} (Phone: ${data.phone})`,
      );
      setStatus(j.error === 'not_configured' ? 'unconfigured' : res.status === 422 ? 'idle' : 'error');
    } catch {
      setSummary(`Hello Leaf Corporation, I'm ${data.name}. ${data.message} (Phone: ${data.phone})`);
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-[2rem] bg-leaf-light p-8 text-leaf-dark">
        <h3 className="font-display text-2xl font-extrabold">Thank you. Your enquiry has been sent.</h3>
        <p className="mt-2">Our team will get back to you during working hours ({site.hours[0].days}, {site.hours[0].time}).</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-dark mt-6">Send another enquiry</button>
      </div>
    );
  }

  const err = (k: string) => errors[k]?.[0];

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8" aria-describedby="form-status">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-bold">Name *
          <input name="name" required autoComplete="name" className={field} aria-invalid={!!err('name')} />
          {err('name') && <span className="mt-1 block text-sm font-medium text-red-700">{err('name')}</span>}
        </label>
        <label className="block text-sm font-bold">Phone *
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} aria-invalid={!!err('phone')} />
          {err('phone') && <span className="mt-1 block text-sm font-medium text-red-700">{err('phone')}</span>}
        </label>
        <label className="block text-sm font-bold">Email
          <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!err('email')} />
          {err('email') && <span className="mt-1 block text-sm font-medium text-red-700">{err('email')}</span>}
        </label>
        <label className="block text-sm font-bold">Restaurant / business name
          <input name="business" autoComplete="organization" className={field} />
        </label>
        <label className="block text-sm font-bold">City
          <input name="city" list="cities" className={field} />
          <datalist id="cities">{site.cities.map((c) => <option key={c} value={c} />)}</datalist>
        </label>
        <label className="block text-sm font-bold">Service
          <select name="service" defaultValue={defaultService} className={field}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / not sure</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-bold">How can we help? *
        <textarea name="message" required rows={5} className={field} aria-invalid={!!err('message')} />
        {err('message') && <span className="mt-1 block text-sm font-medium text-red-700">{err('message')}</span>}
      </label>

      {/* Honeypot: hidden from people and assistive tech */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn btn-dark w-full disabled:opacity-60 sm:w-auto sm:justify-self-start">
        {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
      </button>

      <div id="form-status" role="status" aria-live="polite">
        {(status === 'unconfigured' || status === 'error') && (
          <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-bold">We couldn&apos;t send that through the form right now.</p>
            <p className="mt-1">Please reach us directly instead:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className="btn btn-leaf !min-h-[44px] text-sm" href={whatsappLink(summary)} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a>
              <a className="btn btn-light !min-h-[44px] text-sm" href={`mailto:${site.email}?subject=${encodeURIComponent('Website enquiry')}&body=${encodeURIComponent(summary)}`}>Email us</a>
              <a className="btn btn-light !min-h-[44px] text-sm" href={`tel:${site.phones[0].tel}`}>Call {site.phones[0].display}</a>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
