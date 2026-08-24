import { motion, useReducedMotion } from 'framer-motion'
import { Camera, Mail, MessageCircleMore, Phone } from 'lucide-react'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { getRevealProps } from '../lib/motion'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

export default function Contact() {
  const reduceMotion = useReducedMotion()
  const phone = import.meta.env.VITE_PHONE || ''
  const email = import.meta.env.VITE_EMAIL || ''
  const instagram = import.meta.env.VITE_INSTAGRAM_URL || ''
  const whatsappNumber = getWhatsAppNumber()

  const contactMethods = [
    whatsappNumber
      ? { label: 'WhatsApp', value: whatsappNumber, href: whatsAppHref(), icon: MessageCircleMore }
      : null,
    phone ? { label: 'Telephone', value: phone, href: `tel:${phone}`, icon: Phone } : null,
    email ? { label: 'Email', value: email, href: `mailto:${email}`, icon: Mail } : null,
    instagram ? { label: 'Instagram', value: 'Open profile', href: instagram, icon: Camera } : null,
  ].filter(Boolean)

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO
        title="Contact"
        description="Get in touch with Le Lörd Homes by WhatsApp, telephone, email, Instagram, or enquiry form."
        path="/contact"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-3xl" {...getRevealProps(Boolean(reduceMotion))}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Contact</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">Let&apos;s Talk Property</h1>
          <p className="mt-6 text-lg leading-8 text-white-muted">
            Choose the contact route that suits you best. Only configured contact details appear below, keeping the page accurate until launch settings are in place.
          </p>
        </motion.div>

        {contactMethods.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method, index) => {
              if (!method) return null
              const Icon = method.icon
              return (
                <motion.a
                  key={method.label}
                  className="border border-white/10 bg-card p-6 transition hover:border-gold/40"
                  href={method.href}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  {...getRevealProps(Boolean(reduceMotion), index * 0.05)}
                >
                  <Icon className="text-gold" size={22} aria-hidden="true" />
                  <p className="mt-5 text-xs uppercase tracking-[0.28em] text-text-muted">{method.label}</p>
                  <p className="mt-3 text-lg text-white">{method.value}</p>
                </motion.a>
              )
            })}
          </div>
        ) : (
          <motion.div className="mt-12 border border-white/10 bg-card p-6 text-white-muted" {...getRevealProps(Boolean(reduceMotion), 0.04)}>
            Contact details have not been configured yet. You can still prepare the enquiry workflow using the form below.
          </motion.div>
        )}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...getRevealProps(Boolean(reduceMotion), 0.06)}>
            <ContactForm mode="contact" submitLabel="Send enquiry" />
          </motion.div>
          <motion.aside className="space-y-6" {...getRevealProps(Boolean(reduceMotion), 0.1)}>
            <div className="border border-gold/30 bg-background-secondary p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-gold">Next steps</p>
              <h2 className="mt-4 font-serif text-3xl text-white">Prefer to book or message directly?</h2>
              <div className="mt-6 flex flex-col gap-4">
                <Button showArrow to="/consultations" variant="primary">
                  Book a consultation
                </Button>
                {whatsappNumber ? (
                  <Button href={whatsAppHref()} rel="noreferrer" target="_blank" variant="secondary">
                    WhatsApp us
                  </Button>
                ) : (
                  <Button to="/property-management" variant="secondary">
                    Property enquiry
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
