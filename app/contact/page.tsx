import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Leaf Corporation in Coimbatore by phone, WhatsApp, email or the enquiry form.',
  alternates: { canonical: '/contact' },
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  const match = services.find((s) => s.slug === service)?.title ?? '';
  return <ContactSection asPage defaultService={match} heading="Contact Leaf Corporation" />;
}
