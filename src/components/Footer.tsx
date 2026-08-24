import { Camera, MessageCircleMore } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
  { label: 'Property Management', to: '/property-management' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
]

export default function Footer() {
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || ''
  const hasWhatsApp = Boolean(getWhatsAppNumber())
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-background-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_0.8fr_0.8fr] md:px-10">
        <div>
          <p className="font-serif text-2xl text-white">Le Lörd Homes</p>
          <p className="mt-5 max-w-md text-base leading-7 text-white-muted">
            Premium property support for landlords, investors, and hosts who value clear advice, refined presentation, and dependable execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white-muted">
            {instagramUrl ? (
              <a className="inline-flex items-center gap-2 transition hover:text-gold" href={instagramUrl} rel="noreferrer" target="_blank">
                <Camera size={16} aria-hidden="true" />
                Instagram
              </a>
            ) : null}
            {hasWhatsApp ? (
              <a className="inline-flex items-center gap-2 transition hover:text-gold" href={whatsAppHref()} rel="noreferrer" target="_blank">
                <MessageCircleMore size={16} aria-hidden="true" />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Quick Links</p>
          <ul className="mt-5 space-y-3 text-white-muted">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Legal</p>
          <ul className="mt-5 space-y-3 text-white-muted">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link className="transition hover:text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-text-muted md:px-10">
        © {year} Le Lörd Homes. All rights reserved.
      </div>
    </footer>
  )
}
