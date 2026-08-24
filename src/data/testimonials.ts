// Testimonial placeholders — clearly marked, not fake reviews.
// Replace with real verified client testimonials before launching.

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  service: string;
  rating: number;
  text: string;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: '[Client Name]',
    role: '[Client Role / Landlord / Investor]',
    service: 'HMO Management',
    rating: 5,
    text: '[This is a placeholder. Replace with a real verified client testimonial before publishing.]',
    photo: undefined,
  },
  {
    id: 'testimonial-2',
    name: '[Client Name]',
    role: '[Client Role / Landlord / Investor]',
    service: 'Property Consultancy',
    rating: 5,
    text: '[This is a placeholder. Replace with a real verified client testimonial before publishing.]',
    photo: undefined,
  },
  {
    id: 'testimonial-3',
    name: '[Client Name]',
    role: '[Client Role / Landlord / Investor]',
    service: 'Deal Sourcing',
    rating: 5,
    text: '[This is a placeholder. Replace with a real verified client testimonial before publishing.]',
    photo: undefined,
  },
];
