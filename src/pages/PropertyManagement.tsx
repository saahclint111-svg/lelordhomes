import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { getRevealProps } from '../lib/motion'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

export default function PropertyManagement() {
  const reduceMotion = useReducedMotion()
  const hasWhatsApp = Boolean(getWhatsAppNumber())

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="Property Management"
        description="Enquire about property management and related services with Le Lörd Homes."
        path="/property-management"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-4xl" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Property enquiries</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">HAVE A PROPERTY? LET&apos;S TALK.</h1>
          <p className="mt-6 text-lg leading-8 text-white-muted">
            Share a few details about your property and the kind of support you are looking for. We&apos;ll use the information to understand your enquiry more clearly.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div {...getRevealProps(Boolean(reduceMotion), 0.05)}>
            <ContactForm mode="property" submitLabel="Send property enquiry" />
          </motion.div>

          <motion.aside className="space-y-6" {...getRevealProps(Boolean(reduceMotion), 0.1)}>
            <div className="border border-white/10 bg-card p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-gold">What to include</p>
              <ul className="mt-6 space-y-4 text-white-muted">
                <li>Location and current use of the property.</li>
                <li>The service you are interested in most.</li>
                <li>Any operational or strategic questions you would like to discuss.</li>
              </ul>
            </div>
            <div className="border border-gold/30 bg-background-secondary p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-gold">Prefer a direct conversation?</p>
              <p className="mt-4 text-lg leading-8 text-white-muted">
                If WhatsApp is configured, you can start with a quick message instead and share the essentials there.
              </p>
              <div className="mt-6">
                {hasWhatsApp ? (
                  <Button href={whatsAppHref()} rel="noreferrer" target="_blank" variant="secondary">
                    WhatsApp us
                  </Button>
                ) : (
                  <Button to="/contact" variant="secondary">
                    Go to contact page
                  </Button>
                )}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
