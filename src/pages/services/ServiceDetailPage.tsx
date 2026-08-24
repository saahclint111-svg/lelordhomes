import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import SEO from '../../components/SEO'
import type { ServiceDetail } from '../../data/services'
import { getRevealProps } from '../../lib/motion'
import { createServiceMessage, getWhatsAppNumber, whatsAppHref } from '../../lib/whatsapp'

interface ServiceDetailPageProps {
  service: ServiceDetail
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 text-white-muted">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-7">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const reduceMotion = useReducedMotion()
  const hasWhatsApp = Boolean(getWhatsAppNumber())
  const Icon = service.icon

  return (
    <section className="bg-background py-20 md:py-24">
      <SEO title={service.title} description={service.intro} path={service.route} />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div className="max-w-4xl" {...getRevealProps(Boolean(reduceMotion))}>
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-muted" aria-label="Breadcrumb">
            <Link className="transition hover:text-white" to="/">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link className="transition hover:text-white" to="/services">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">{service.eyebrow}</p>
          <h1 className="mt-4 font-serif text-5xl text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-white-muted">{service.overview}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.article className="border border-white/10 bg-card p-8" {...getRevealProps(Boolean(reduceMotion), 0.03)}>
            <div className="mb-6 flex items-center gap-3">
              <Icon className="text-gold" size={24} aria-hidden="true" />
              <h2 className="font-serif text-3xl text-white">What it involves</h2>
            </div>
            <DetailList items={service.whatItInvolves} />
          </motion.article>
          <motion.article className="border border-white/10 bg-card p-8" {...getRevealProps(Boolean(reduceMotion), 0.08)}>
            <h2 className="font-serif text-3xl text-white">Who it&apos;s for</h2>
            <div className="mt-6">
              <DetailList items={service.whoItsFor} />
            </div>
          </motion.article>
          <motion.article className="border border-white/10 bg-card p-8" {...getRevealProps(Boolean(reduceMotion), 0.1)}>
            <h2 className="font-serif text-3xl text-white">Benefits</h2>
            <div className="mt-6">
              <DetailList items={service.benefits} />
            </div>
          </motion.article>
          <motion.article className="border border-white/10 bg-card p-8" {...getRevealProps(Boolean(reduceMotion), 0.14)}>
            <h2 className="font-serif text-3xl text-white">How it works</h2>
            <div className="mt-6">
              <DetailList items={service.howItWorks} />
            </div>
          </motion.article>
        </div>

        <motion.div className="mt-16 border border-gold/30 bg-background-secondary p-8 md:p-10" {...getRevealProps(Boolean(reduceMotion), 0.16)}>
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Next steps</p>
          <h2 className="mt-4 font-serif text-4xl text-white">Let&apos;s discuss your property goals.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white-muted">
            If you would like to discuss this service in more detail, book a consultation or send a direct WhatsApp enquiry where configured.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button showArrow to="/consultations" variant="primary">
              Book consultation
            </Button>
            {hasWhatsApp ? (
              <Button href={whatsAppHref(createServiceMessage(service.title))} rel="noreferrer" target="_blank" variant="secondary">
                WhatsApp enquiry
              </Button>
            ) : (
              <Button to="/contact" variant="secondary">
                Contact us
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
