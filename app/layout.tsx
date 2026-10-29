import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import '@fontsource/permanent-marker';
import './globals.css';
import { site } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Reveal from '@/components/Reveal';

export const viewport: Viewport = { themeColor: '#161816', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Restaurant Business Consultancy, Coimbatore`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', siteName: site.name, locale: 'en_IN', url: site.url,
    title: `${site.name} | ${site.tagline}`, description: site.subtitle,
    images: [{ url: site.logo.src, width: site.logo.width, height: site.logo.height, alt: `${site.name} logo` }],
  },
  twitter: { card: 'summary', title: `${site.name} | ${site.tagline}`, description: site.subtitle },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  logo: site.logo.src,
  description: site.description,
  email: site.email,
  telephone: site.phones.map((p) => p.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: site.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification', dayOfWeek: h.open, opens: h.opens, closes: h.closes,
  })),
  areaServed: site.cities.map((c) => ({ '@type': 'City', name: c })),
  sameAs: [site.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Reveal />
      </body>
    </html>
  );
}
