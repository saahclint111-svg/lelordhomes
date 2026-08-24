import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../../components/Button'
import SEO from '../../components/SEO'
import { FOUNDER_IMAGE } from '../../data/images'
import { getRevealProps } from '../../lib/motion'

const focusAreas = [
  'Property Consultancy',
  'HMO Management',
  'Deal Sourcing',
  'Serviced Accommodation',
  'Airbnb Consultancy',
]

export default function Founder() {
  const [hasImageError, setHasImageError] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="Founder"
        description="Meet Isaac Umoren, founder and property consultant at Le Lörd Homes."
        path="/about/founder"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10">
        <motion.div {...getRevealProps(Boolean(reduceMotion))}>
          {hasImageError ? (
            <div className="flex min-h-[560px] items-center justify-center border border-white/10 bg-card p-10 text-center text-white-muted">
              Founder image placeholder — add <span className="mx-2 text-gold">/public/images/founder-isaac-umoren.jpg</span> before launch.
            </div>
          ) : (
            <img
              alt="Isaac Umoren"
              className="min-h-[560px] w-full border border-white/10 object-cover"
              onError={() => setHasImageError(true)}
              src={FOUNDER_IMAGE}
            />
          )}
        </motion.div>

        <motion.div className="self-center" {...getRevealProps(Boolean(reduceMotion), 0.08)}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Founder</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">ISAAC UMOREN</h1>
          <p className="mt-4 text-lg uppercase tracking-[0.18em] text-white-muted">Founder / Property Consultant</p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white-muted">
            Le Lörd Homes is centred on practical property support, strategic thinking, and a premium client experience. This page intentionally stays factual and concise, keeping the focus on service areas rather than adding unverified biography.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Focus areas</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="border border-gold/30 px-4 py-2 text-sm text-white-muted">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button showArrow to="/consultations" variant="primary">
              Book a consultation
            </Button>
            <Button to="/contact" variant="outline">
              Make an enquiry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
