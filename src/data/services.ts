import {
  Building2,
  Search,
  MessageSquare,
  Hotel,
  Star,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'hmo-management',
    icon: Building2,
    title: 'HMO Management',
    description:
      'Comprehensive management of Houses in Multiple Occupation, ensuring compliance, tenant satisfaction, and maximised rental income.',
    slug: 'hmo-management',
  },
  {
    id: 'deal-sourcing',
    icon: Search,
    title: 'Deal Sourcing',
    description:
      'Identifying high-potential property investment opportunities tailored to your goals and risk profile.',
    slug: 'deal-sourcing',
  },
  {
    id: 'property-consultancy',
    icon: MessageSquare,
    title: 'Property Consultancy',
    description:
      'Expert guidance on property decisions, portfolio strategy, and navigating the complexities of the UK property market.',
    slug: 'property-consultancy',
  },
  {
    id: 'serviced-accommodation',
    icon: Hotel,
    title: 'Serviced Accommodation',
    description:
      'Setting up and managing short-stay accommodation for professionals, contractors, and leisure guests.',
    slug: 'serviced-accommodation',
  },
  {
    id: 'airbnb-setup',
    icon: Star,
    title: 'Airbnb Setup & Optimisation',
    description:
      'Professional listing creation, photography guidance, pricing strategy, and ongoing management to maximise occupancy.',
    slug: 'airbnb-setup',
  },
  {
    id: 'tenant-placement',
    icon: Users,
    title: 'Tenant Placement',
    description:
      'Rigorous tenant sourcing, referencing, and placement to find the right tenants for your property.',
    slug: 'tenant-placement',
  },
];
