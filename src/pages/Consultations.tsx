import { motion, useReducedMotion } from 'framer-motion'
import { CalendarClock, CreditCard } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { getRevealProps } from '../lib/motion'
import { createConsultationMessage, getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

const consultations = [
  {
    title: 'Discovery Call',
    duration: '15 min',
    price: 'Free',
    description: 'A brief initial conversation to understand your property question and whether further support is the right fit.',
    bookingUrl: import.meta.env.VITE_BOOKING_DISCOVERY_URL || '',
    paymentUrl: '',
  },
  {
    title: 'Consultation',
    duration: '30 min',
    price: '£50',
    description: 'A focused discussion for specific property questions, operational issues, or a single decision that needs clarity.',
    bookingUrl: import.meta.env.VITE_BOOKING_CONSULTATION_URL || '',
    paymentUrl: import.meta.env.VITE_STRIPE_PAYMENT_LINK_30 || '',
  },
  {
    title: 'Strategy Session',
    duration: '60 min',
    price: '£85',
    description: 'A longer session for deeper strategic planning across sourcing, management, portfolio direction, or short-stay operations.',
    bookingUrl: import.meta.env.VITE_BOOKING_STRATEGY_URL || '',
    paymentUrl: import.meta.env.VITE_STRIPE_PAYMENT_LINK_60 || '',
  },
]

export default function Consultations() {
  const reduceMotion = useReducedMotion()
  const hasWhatsApp = Boolean(getWhatsAppNumber())

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="Consultations"
        description="Book a discovery call, consultation, or strategy session with Le Lörd Homes."
        path="/consultations"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-3xl" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Consultations</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Focused conversations for clearer property decisions.</h1>
          <p className="mt-6 text-lg leading-8 text-white-muted">
            Choose the consultation format that best suits the depth of support you need. Where booking links are not yet connected, alternative enquiry routes remain available.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {consultations.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex h-full flex-col border border-white/10 bg-card p-8"
              {...getRevealProps(Boolean(reduceMotion), index * 0.06)}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-serif text-3xl text-white">{item.title}</p>
                <CalendarClock className="text-gold" size={24} aria-hidden="true" />
              </div>
              <div className="mt-6 flex items-end justify-between border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.28em] text-text-muted">{item.duration}</p>
                <p className="font-serif text-4xl text-white">{item.price}</p>
              </div>
              <p className="mt-6 flex-1 text-lg leading-8 text-white-muted">{item.description}</p>
              <div className="mt-8 space-y-3">
                {item.bookingUrl ? (
                  <Button fullWidth href={item.bookingUrl} rel="noreferrer" showArrow target="_blank" variant="primary">
                    Book now
                  </Button>
                ) : hasWhatsApp ? (
                  <Button fullWidth href={whatsAppHref(createConsultationMessage(item.title))} rel="noreferrer" target="_blank" variant="primary">
                    Enquire on WhatsApp
                  </Button>
                ) : (
                  <Button fullWidth showArrow to="/contact" variant="primary">
                    Make an enquiry
                  </Button>
                )}
                {item.paymentUrl ? (
                  <Button fullWidth href={item.paymentUrl} rel="noreferrer" target="_blank" variant="secondary">
                    <CreditCard size={16} aria-hidden="true" />
                    Pay securely
                  </Button>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
