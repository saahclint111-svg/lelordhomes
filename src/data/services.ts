import {
  BedDouble,
  Building2,
  Compass,
  KeyRound,
  Search,
  Users,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceDetail {
  slug: 'hmo-management' | 'deal-sourcing' | 'property-consultancy' | 'serviced-accommodation' | 'airbnb' | 'tenant-placement'
  title: string
  shortTitle: string
  eyebrow: string
  route: string
  intro: string
  overview: string
  whatItInvolves: string[]
  whoItsFor: string[]
  benefits: string[]
  howItWorks: string[]
  icon: LucideIcon
}

export const services: ServiceDetail[] = [
  {
    slug: 'hmo-management',
    title: 'HMO Management',
    shortTitle: 'HMO Management',
    eyebrow: 'Multi-let operations',
    route: '/services/hmo-management',
    intro:
      'Structured support for landlords operating multi-let properties, with attention to compliance, tenant coordination, and day-to-day operational detail.',
    overview:
      'Le Lörd Homes supports HMO operators who need a clear, organised approach to managing shared accommodation. The focus is on operational consistency, tenant experience, and keeping essential management processes on track.',
    whatItInvolves: [
      'Ongoing coordination of tenant communication and occupancy matters.',
      'Support with compliance, licensing checkpoints, and documentation workflows.',
      'Maintenance coordination and issue tracking across shared spaces and rooms.',
      'Oversight of the day-to-day management rhythm required for multi-let properties.',
    ],
    whoItsFor: [
      'Landlords with existing HMO stock who want a more hands-on management structure.',
      'Investors transitioning single lets into multi-let strategies.',
      'Owners who need clearer operational systems for shared accommodation.',
    ],
    benefits: [
      'A more organised management process for complex properties.',
      'Clearer communication across tenants, contractors, and ownership.',
      'Practical support designed around the realities of HMO operations.',
    ],
    howItWorks: [
      'An initial review of the property setup and management priorities.',
      'Agreement on the scope of operational support required.',
      'Ongoing coordination, reporting, and practical management follow-through.',
    ],
    icon: Building2,
  },
  {
    slug: 'deal-sourcing',
    title: 'Deal Sourcing',
    shortTitle: 'Deal Sourcing',
    eyebrow: 'Investor acquisitions',
    route: '/services/deal-sourcing',
    intro:
      'Targeted sourcing support for investors seeking suitable opportunities, informed by strategy, due diligence, and local market context.',
    overview:
      'Deal sourcing is about more than simply finding listings. Le Lörd Homes works with investors who want a more considered process around identifying opportunities, assessing fit, and moving forward with greater clarity.',
    whatItInvolves: [
      'Opportunity sourcing aligned to investment criteria and preferred strategy.',
      'Initial review of location, property fundamentals, and positioning.',
      'Due diligence support to help assess suitability before commitment.',
      'Discussion around potential strategy fit, including HMO and short-let angles where relevant.',
    ],
    whoItsFor: [
      'Investors who want sourcing support without a one-size-fits-all approach.',
      'Buyers exploring off-market or harder-to-find opportunities.',
      'Landlords looking to expand with more structured acquisition support.',
    ],
    benefits: [
      'A more deliberate process around identifying suitable opportunities.',
      'Practical support in reviewing deals before moving ahead.',
      'Better visibility on how a property may align with your overall strategy.',
    ],
    howItWorks: [
      'A conversation to clarify your criteria, budget, and target areas.',
      'Active sourcing and shortlist creation based on the agreed brief.',
      'Review, discussion, and next-step support around suitable opportunities.',
    ],
    icon: Search,
  },
  {
    slug: 'property-consultancy',
    title: 'Property Consultancy',
    shortTitle: 'Property Consultancy',
    eyebrow: 'Strategic guidance',
    route: '/services/property-consultancy',
    intro:
      'Straightforward, practical consultancy for landlords and investors who want to make better-informed property decisions.',
    overview:
      'Le Lörd Homes provides property consultancy for clients who need clear thinking, outside perspective, and support working through specific property questions. The emphasis is on practical guidance rather than generic advice.',
    whatItInvolves: [
      'Portfolio and strategy discussions tailored to your goals and current position.',
      'Support thinking through management models, operational direction, and next steps.',
      'Guidance on property positioning for HMO, serviced accommodation, or rental use.',
      'Focused advice on specific property decisions where clarity is needed.',
    ],
    whoItsFor: [
      'Landlords reviewing the direction of an existing portfolio.',
      'Investors weighing up different operational or acquisition strategies.',
      'Property owners who want a more experienced sounding board before acting.',
    ],
    benefits: [
      'Clearer decision-making around property strategy and execution.',
      'A grounded external perspective on operational or investment questions.',
      'Consultancy that stays practical, focused, and commercially aware.',
    ],
    howItWorks: [
      'An initial consultation to understand the challenge or objective.',
      'A focused review of the property context, strategy, or opportunity.',
      'Practical recommendations and clear next-step discussion.',
    ],
    icon: Compass,
  },
  {
    slug: 'serviced-accommodation',
    title: 'Serviced Accommodation',
    shortTitle: 'Serviced Accommodation',
    eyebrow: 'Short-stay operations',
    route: '/services/serviced-accommodation',
    intro:
      'Operational support for short-term let properties, from listing oversight to guest-facing coordination and pricing rhythm.',
    overview:
      'Serviced accommodation requires a responsive operating model. Le Lörd Homes supports hosts and owners who want a more polished setup for short-term stays, with attention to guest experience and day-to-day management detail.',
    whatItInvolves: [
      'Listing oversight and presentation management across relevant platforms.',
      'Guest communication workflows before, during, and after stays.',
      'Pricing strategy support informed by seasonality and local demand.',
      'Coordination of turnover, standards, and operational follow-up.',
    ],
    whoItsFor: [
      'Owners launching or refining a short-stay property.',
      'Hosts who need more structure around day-to-day operations.',
      'Landlords exploring flexible rental models for suitable properties.',
    ],
    benefits: [
      'A more consistent experience for guests and owners alike.',
      'Better operational organisation around fast-moving short lets.',
      'Support that keeps presentation, communication, and coordination aligned.',
    ],
    howItWorks: [
      'A review of the property, goals, and existing setup.',
      'Agreement on the operational support required.',
      'Ongoing management input across listing, guest, and turnover workflows.',
    ],
    icon: BedDouble,
  },
  {
    slug: 'airbnb',
    title: 'Airbnb Setup & Optimisation',
    shortTitle: 'Airbnb Setup & Optimisation',
    eyebrow: 'Listing performance',
    route: '/services/airbnb',
    intro:
      'Support in launching or refining Airbnb listings through better presentation, positioning, and guest communication structure.',
    overview:
      'A strong Airbnb setup depends on how the property is presented, described, priced, and managed. Le Lörd Homes helps owners shape a more professional listing presence while improving the systems around it.',
    whatItInvolves: [
      'Listing creation or refinement with attention to structure and clarity.',
      'Guidance on photography, styling, and presentation priorities.',
      'Pricing and guest communication support to create a smoother experience.',
      'Practical recommendations for improving listing confidence and consistency.',
    ],
    whoItsFor: [
      'Owners preparing a property for Airbnb for the first time.',
      'Hosts looking to refine an existing listing and operating approach.',
      'Operators who want a more premium, organised presentation online.',
    ],
    benefits: [
      'A more polished listing that reflects the quality of the property.',
      'Stronger operational foundations around communication and pricing.',
      'Clear, practical direction without overcomplicating the setup.',
    ],
    howItWorks: [
      'An initial review of the property and current listing position.',
      'A plan covering setup, optimisation, and communication priorities.',
      'Implementation support and refinement around the agreed actions.',
    ],
    icon: KeyRound,
  },
  {
    slug: 'tenant-placement',
    title: 'Tenant Placement',
    shortTitle: 'Tenant Placement',
    eyebrow: 'Lettings support',
    route: '/services/tenant-placement',
    intro:
      'A professional tenant placement process focused on finding suitable occupiers and creating a smooth move-in journey.',
    overview:
      'Tenant placement is about more than filling a property quickly. Le Lörd Homes supports landlords who want a careful, professional approach to marketing, communication, referencing, and handover.',
    whatItInvolves: [
      'Support attracting and engaging prospective tenants for suitable properties.',
      'Coordination around viewings, communication, and applicant progression.',
      'Referencing and tenancy setup support to prepare for occupation.',
      'Structured handover support to help the move-in process run smoothly.',
    ],
    whoItsFor: [
      'Landlords who want help securing suitable tenants with a professional process.',
      'Owners letting a property for the first time.',
      'Property operators who need a more organised tenancy setup workflow.',
    ],
    benefits: [
      'A smoother progression from enquiry to move-in.',
      'Better structure around communication, referencing, and handover.',
      'Support designed to keep the lettings process calm and clear.',
    ],
    howItWorks: [
      'A review of the property, target tenant profile, and timing.',
      'Marketing, applicant handling, and progression support.',
      'Tenancy setup coordination and move-in preparation.',
    ],
    icon: Users,
  },
]

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<ServiceDetail['slug'], ServiceDetail>
