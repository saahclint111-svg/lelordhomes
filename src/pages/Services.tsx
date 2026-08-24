import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { services } from '../data/services'
import { getRevealProps } from '../lib/motion'

export default function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="Services"
        description="Explore premium property services from Le Lörd Homes, including management, sourcing, consultancy, and short-stay support."
        path="/services"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-3xl" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Services</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Property support with clarity, structure, and a premium finish.</h1>
          <p className="mt-6 text-lg leading-8 text-white-muted">
            Explore the core Le Lörd Homes services across consultancy, management, sourcing, and short-stay operations. Each service is presented with a clear scope and a practical focus.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.slug}
                className="border border-white/10 bg-card p-8 md:p-10"
                {...getRevealProps(Boolean(reduceMotion), index * 0.05)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-gold">{service.eyebrow}</p>
                    <h2 className="mt-4 font-serif text-3xl text-white">{service.title}</h2>
                  </div>
                  <Icon className="mt-1 text-gold" size={28} aria-hidden="true" />
                </div>
                <p className="mt-6 text-lg leading-8 text-white-muted">{service.overview}</p>
                <div className="mt-8">
                  <Button showArrow to={service.route} variant="secondary">
                    View details
                  </Button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
