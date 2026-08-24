export interface Consultation {
  id: string;
  title: string;
  duration: string;
  price: string;
  priceNote: string;
  description: string;
  includes: string[];
  envVar: string; // env var holding the booking URL
  cta: string;
}

export const consultations: Consultation[] = [
  {
    id: 'discovery-call',
    title: 'Complimentary Discovery Call',
    duration: '15 MIN',
    price: 'FREE',
    priceNote: 'No commitment required',
    description:
      'A brief introductory call to understand your property needs and explore how we can help.',
    includes: [
      'Overview of your situation',
      'Introduction to our services',
      'Initial recommendations',
    ],
    envVar: 'VITE_BOOKING_DISCOVERY_URL',
    cta: 'BOOK FREE CALL',
  },
  {
    id: 'property-consultation',
    title: 'Property Consultation',
    duration: '30 MIN',
    price: '£50',
    priceNote: 'Focused session',
    description:
      'A focused session exploring a specific property challenge or opportunity in detail.',
    includes: [
      'In-depth property discussion',
      'Tailored recommendations',
      'Action steps provided',
    ],
    envVar: 'VITE_BOOKING_CONSULTATION_URL',
    cta: 'BOOK SESSION',
  },
  {
    id: 'strategy-session',
    title: 'Property Strategy Session',
    duration: '60 MIN',
    price: '£85',
    priceNote: 'Comprehensive session',
    description:
      'A comprehensive deep-dive into your property goals with a full strategic plan.',
    includes: [
      'Full portfolio or property review',
      'Strategic roadmap',
      'Priority action plan',
      'Follow-up notes provided',
    ],
    envVar: 'VITE_BOOKING_STRATEGY_URL',
    cta: 'BOOK STRATEGY SESSION',
  },
];
