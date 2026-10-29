'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, services } from '@/lib/site';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#story', label: 'Our Story' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:h-16 sm:px-6 ${
          scrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-white/70 backdrop-blur'
        }`}
      >
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Image src={site.logo.src} alt="" width={34} height={38} className="h-9 w-auto" priority />
          <span className="font-display text-lg font-extrabold tracking-tight">Leaf<span className="text-leaf"> Corporation</span></span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-leaf-light hover:text-leaf-dark">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={`tel:${site.phones[0].tel}`} className="btn btn-dark hidden !min-h-[40px] !px-5 text-sm sm:inline-flex">
            Call Now
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-white ring-1 ring-black/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-4 shadow-2xl lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg font-bold hover:bg-leaf-light">
                  {l.label}
                </Link>
              </li>
            ))}
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)} className="block rounded-2xl px-8 py-2 text-sm font-medium text-zinc-600 hover:bg-leaf-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${site.phones[0].tel}`} className="btn btn-dark mt-3 w-full">Call {site.phones[0].display}</a>
        </div>
      )}
    </header>
  );
}
