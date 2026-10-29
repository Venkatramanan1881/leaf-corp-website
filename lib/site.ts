// Single source of truth for all business content.
// Everything here comes from https://www.leafcorporation.in/ unless marked ASSUMED / MISSING.

const wix = (id: string) => `https://static.wixstatic.com/media/${id}`;

export const site = {
  name: 'Leaf Corporation',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leafcorporation.in',
  tagline: 'Grow Your Vision',
  subtitle: 'Your growth partner in the restaurant industry',
  description:
    'Leaf Corporation is a Coimbatore-based business consultancy with over a decade of experience in the restaurant industry: online business management, digital marketing, advertising, restaurant restructuring and dine-in strategy.',
  about:
    'Leaf Corporation, a dedicated business consultancy, brings over a decade of experience to the restaurant industry. We specialize in online business management, digital marketing, advertising, restaurant restructuring, and dine-in strategy. Our commitment is to enrich and grow businesses through innovative solutions and strategic guidance.',
  welcome:
    "Elevate the potential of your Restaurant's e-commerce operations with our expert consultancy services. Our commitment lies in helping you optimize and manage your online presence, while delivering customized strategies that meet your unique goals.",
  commitment:
    'At Leaf Corporation, we are dedicated to empowering your business with innovative solutions and expert guidance. Our commitment to excellence and personalized service ensures that your growth and success are our top priorities.',
  logo: { src: wix('d1dea9_fa433200044f45ef95a68b415db07a02~mv2.png'), width: 204, height: 231 },
  heroImage: { src: wix('11062b_71bdfb4b0a894eb8857e67969c0b7549~mv2.jpg'), width: 1225, height: 1845 },
  address: {
    line1: 'KSTS Complex, P & T Colony, Koundampalayam',
    city: 'Coimbatore',
    region: 'Tamil Nadu',
    postal: '641030',
    country: 'IN',
  },
  phones: [
    { display: '+91 80125 30795', tel: '+918012530795' },
    { display: '+91 97916 25773', tel: '+919791625773' },
  ],
  // ASSUMED: the site lists no WhatsApp number. The first listed phone is used. Confirm with client.
  whatsapp: '918012530795',
  email: 'admin@leafcorporation.in',
  hours: [
    { days: 'Mon – Fri', time: '10:00 am – 7:00 pm', open: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '19:00' },
    { days: 'Saturday', time: '10:00 am – 6:00 pm', open: ['Saturday'], opens: '10:00', closes: '18:00' },
  ],
  social: { linkedin: 'https://in.linkedin.com/company/leaf-corporation' },
  legal: [
    { label: 'Privacy Policy', href: 'https://www.leafcorporation.in/english-privacy-policy' },
    { label: 'Terms & Conditions', href: 'https://www.leafcorporation.in/english-terms-conditions' },
    { label: 'Refund Policy', href: 'https://www.leafcorporation.in/english-refund-policy' },
    { label: 'Accessibility Statement', href: 'https://www.leafcorporation.in/accessibility-statement' },
  ],
  partnerships: '250+',
  yearsLabel: '10+',
  cities: [
    'Coimbatore', 'Chennai', 'Madurai', 'Erode', 'Salem', 'Tirunelveli', 'Trichy',
    'Karaikudi', 'Dharmapuri', 'Pondicherry', 'Theni', 'Thoothukudi', 'Pudukkottai',
  ],
  // Keyword ticker, derived from the "Our Journey Unveiled" paragraph.
  ticker: [
    'Online Business Management', 'Digital Marketing', 'Advertising',
    'Restaurant Restructuring', 'Dine-in Strategy', 'Delivery & Reservations',
  ],
  clients: [
    { name: 'Client logo (name not given on source site)', src: wix('d1dea9_cc36a23c752b4b31b8963879809baf33~mv2.png') },
    { name: 'AAsife', src: wix('d1dea9_139b80d62e3a44e9a00be7b027d93f79~mv2.jpg') },
    { name: 'Cake By', src: wix('d1dea9_3484163f244344d093f3e9102f94363b~mv2.jpg') },
    { name: 'Happy Ending', src: wix('d1dea9_27b07c87d62c4ae0a17af241f2d8c9ff~mv2.png') },
    { name: 'China Valley', src: wix('d1dea9_6f773981cc8847ae9c4d54e39a304fab~mv2.jpeg') },
    { name: 'Heavense Park Chennai', src: wix('d1dea9_2ad0f6ccb4a6472d94fbfb5b3be88ff9~mv2.png') },
    { name: 'Momolicious', src: wix('d1dea9_fe3399411ba44183883ac5b67c31d6c6~mv2.png') },
    { name: 'Salem RR Biriyani', src: wix('d1dea9_0433b451d27d4ea7b7f1505cdbf3a41c~mv2.jpg') },
    { name: 'Shree Aishwaryam', src: wix('d1dea9_cfe6a2fcca54448493acea584bcb4835~mv2.jpg') },
  ],
  // Verbatim from the source site. First names only; no business names or dates are given.
  testimonials: [
    { name: 'Preethi', quote: "Leaf Corporation's expert team provided outstanding marketing insights, boosting our revenue." },
    { name: 'Santhosh', quote: 'The restaurant restructuring services from Leaf Corporation revitalized our business operations.' },
    { name: 'Ashok', quote: "Thanks to Leaf Corporation's dine-in strategies, our restaurant saw a significant increase in footfall." },
  ],
};

export type Service = {
  slug: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  icon: 'megaphone' | 'refresh' | 'globe';
};

// Prices on the source site's service pages are Wix template placeholders (₹10 / ₹400), so none are shown.
export const services: Service[] = [
  {
    slug: 'marketing',
    title: 'Marketing',
    headline: 'Boost Your Online Presence In Aggregators',
    summary: 'Boost Your Online Presence In Aggregators',
    description:
      'Transform your online presence with marketing services. We provide tailored strategies to enhance your brand visibility, engage your audience, and drive growth through effective online campaigns.',
    icon: 'megaphone',
  },
  {
    slug: 'restaurant-restructuring',
    title: 'Restaurant Restructuring',
    headline: 'Revitalize Your Restaurant: Boost Efficiency & Profits',
    summary: 'Revitalize Your Restaurant: Boost Efficiency & Profits',
    // MISSING: the source site has no description for this service; only the headline is used.
    description:
      'Restaurant restructuring is one of Leaf Corporation’s core consultancy services. Get in touch to discuss what it would involve for your restaurant.',
    icon: 'refresh',
  },
  {
    slug: 'online-business-management',
    title: 'Online Business Management',
    headline: 'Optimize Delivery & Reservations',
    summary: 'Optimize Delivery & Reservations',
    description:
      "Efficiently manage your restaurant or hotel's online services, including reservations, deliveries, and customer interactions. Our experts will guide you through using innovative tools to improve customer experience and increase business efficiency.",
    icon: 'globe',
  },
];

export const whatsappLink = (text = "Hello Leaf Corporation, I'd like to enquire about your services.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
