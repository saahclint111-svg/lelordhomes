import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { getRevealProps } from '../lib/motion'

const sections = [
  {
    title: 'Our Approach',
    copy:
      'Le Lörd Homes takes a clear, thoughtful approach to property support. The focus is on helping clients move with more confidence through strategy, operations, and presentation rather than overwhelming them with noise.',
  },
  {
    title: 'Who We Help',
    copy:
      'The service is designed for landlords, investors, hosts, and property owners who want dependable support across consultancy, sourcing, management, and short-stay operations.',
  },
  {
    title: 'What We Believe',
    copy:
      'Good property support should feel precise, calm, and commercially aware. Advice should be practical. Systems should be organised. Communication should be straightforward.',
  },
  {
    title: 'Why Clients Choose Le Lörd Homes',
    copy:
      'Clients come for grounded property thinking, premium presentation, and help that respects the operational detail behind every property decision. The emphasis stays on clarity, professionalism, and useful execution.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="About"
        description="Learn more about Le Lörd Homes and its practical, premium approach to property consultancy and operations."
        path="/about"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-4xl" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">About</p>
          <h1 className="mt-6 font-serif text-5xl leading-none text-white sm:text-7xl">PROPERTY MADE EASIER.</h1>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              className="border border-white/10 bg-card p-8 md:p-10"
              {...getRevealProps(Boolean(reduceMotion), index * 0.06)}
            >
              <h2 className="font-serif text-3xl text-white">{section.title}</h2>
              <p className="mt-5 text-lg leading-8 text-white-muted">{section.copy}</p>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-16 flex flex-col gap-4 sm:flex-row" {...getRevealProps(Boolean(reduceMotion), 0.1)}>
          <Button showArrow to="/services" variant="primary">
            Explore services
          </Button>
          <Button to="/about/founder" variant="outline">
            Meet the founder
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
