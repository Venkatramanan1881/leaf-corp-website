import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import TrustBand from '@/components/TrustBand';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBand />
      <Services />
      <Clients />
      <Story />
      <Testimonials />
      <ContactSection />
    </>
  );
}
