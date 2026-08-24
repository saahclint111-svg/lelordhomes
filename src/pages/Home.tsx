import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'
import TestimonialCard from '../components/TestimonialCard'
import { HERO_IMAGE } from '../data/images'
import { services } from '../data/services'
import { getRevealProps } from '../lib/motion'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

const testimonials = [
  {
    name: 'Client Testimonial',
    role: 'Landlord',
    service: 'HMO Management',
    rating: 5,
    testimonial: 'Placeholder review copy ready for your first approved testimonial. This card keeps the layout polished until live client feedback is available.',
  },
  {
    name: 'Client Testimonial',
    role: 'Investor',
    service: 'Deal Sourcing',
    rating: 5,
    testimonial: 'A premium placeholder that can be replaced with real words later without needing any design or spacing changes across the section.',
  },
  {
    name: 'Client Testimonial',
    role: 'Host',
    service: 'Serviced Accommodation',
    rating: 5,
    testimonial: 'This placeholder keeps the homepage ready for launch preparation while making it clear that real reviews still need to be added.',
  },
]

export default function Home() {
  const reduceMotion = useReducedMotion()
  const hasWhatsApp = Boolean(getWhatsAppNumber())

  return (
    <>
      <SEO
        title="Home"
        description="Le Lörd Homes offers premium property support across management, consultancy, sourcing, and short-stay operations."
        path="/"
      />

      <section className="relative isolate flex min-h-[calc(100vh-6rem)] items-end overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img alt="Luxury property exterior" className="h-full w-full object-cover" src={HERO_IMAGE} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.4),rgba(8,8,8,0.9)_55%,rgba(8,8,8,1))]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:py-24">
          <motion.div className="max-w-3xl" {...getRevealProps(Boolean(reduceMotion), 0.05)}>
            <p className="text-xs uppercase tracking-[0.38em] text-gold">Premium property solutions</p>
            <h1 className="mt-6 font-serif text-5xl leading-none text-white sm:text-7xl lg:text-[5.6rem]">
              PROPERTY
              <br />
              MADE EASIER.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white-muted sm:text-xl">
              Expert property solutions for landlords, investors, and hosts seeking practical support, refined presentation, and a more organised way to operate.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button showArrow to="/services" variant="primary">
                Explore our services
              </Button>
              {hasWhatsApp ? (
                <Button href={whatsAppHref()} rel="noreferrer" target="_blank" variant="outline">
                  Speak with us
                </Button>
              ) : (
                <Button to="/contact" variant="outline">
                  Speak with us
                </Button>
              )}
            </div>
          </motion.div>

          <a className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-white-muted transition hover:text-gold" href="#services-overview">
            <span>Scroll</span>
            <motion.span animate={reduceMotion ? undefined : { y: [0, 6, 0] }} transition={reduceMotion ? undefined : { duration: 1.8, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown size={16} />
            </motion.span>
          </a>
        </div>
      </section>

      <section className="bg-background py-24" id="services-overview">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div className="max-w-2xl" {...getRevealProps(Boolean(reduceMotion))}>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Services</p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Property support shaped around how you work.</h2>
            <p className="mt-5 text-lg leading-8 text-white-muted">
              From HMO operations to sourcing, consultancy, and short-stay setup, each service is designed to offer clear, professional support without unnecessary complexity.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.article
                  key={service.slug}
                  className="flex h-full flex-col border border-white/10 bg-card p-8"
                  {...getRevealProps(Boolean(reduceMotion), index * 0.05)}
                >
                  <Icon className="text-gold" size={28} aria-hidden="true" />
                  <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gold">{service.eyebrow}</p>
                  <h3 className="mt-4 font-serif text-3xl text-white">{service.title}</h3>
                  <p className="mt-4 flex-1 leading-7 text-white-muted">{service.intro}</p>
                  <div className="mt-6">
                    <Button showArrow to={service.route} variant="ghost">
                      Explore service
                    </Button>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-background-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <motion.div {...getRevealProps(Boolean(reduceMotion))}>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">About Le Lörd Homes</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl text-white sm:text-5xl">Professional property guidance with an editorial eye for detail.</h2>
          </motion.div>
          <motion.div className="space-y-6" {...getRevealProps(Boolean(reduceMotion), 0.08)}>
            <p className="text-lg leading-8 text-white-muted">
              Le Lörd Homes works across consultancy, management, sourcing, and short-stay support with a premium, minimal, and practical approach. The goal is simple: make property easier to navigate and easier to manage.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button showArrow to="/about" variant="secondary">
                Learn more
              </Button>
              <Button to="/about/founder" variant="ghost">
                Meet the founder
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.div className="max-w-2xl" {...getRevealProps(Boolean(reduceMotion))}>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Testimonials</p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Designed for real client feedback, ready for launch preparation now.</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div key={`${item.role}-${index}`} {...getRevealProps(Boolean(reduceMotion), index * 0.05)}>
                <TestimonialCard {...item} isPlaceholder />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-background-secondary py-24">
        <motion.div className="mx-auto max-w-4xl px-6 text-center md:px-10" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Consultations</p>
          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Need clarity on your next property decision?</h2>
          <p className="mt-5 text-lg leading-8 text-white-muted">
            Book a consultation for focused advice on operations, strategy, or a specific property question.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button showArrow to="/consultations" variant="primary">
              Book a consultation
            </Button>
            <Button to="/property-management" variant="outline">
              Have a property? Let&apos;s talk
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
