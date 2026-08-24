import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const hasWhatsApp = Boolean(getWhatsAppNumber())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const shellClassName = useMemo(
    () =>
      [
        'fixed inset-x-0 top-0 z-40 transition duration-300',
        scrolled ? 'border-b border-white/10 bg-background/85 backdrop-blur-xl' : 'bg-transparent',
      ].join(' '),
    [scrolled],
  )

  return (
    <header className={shellClassName}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link className="font-serif text-lg tracking-[0.3em] text-white sm:text-xl" to="/" aria-label="Le Lörd Homes home">
          LE LÖRD HOMES
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))
            return (
              <Link
                key={link.to}
                className={`text-xs uppercase tracking-[0.28em] transition hover:text-gold ${isActive ? 'text-gold' : 'text-white-muted'}`}
                to={link.to}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button showArrow to="/consultations" variant="secondary">
            Book a consultation
          </Button>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex items-center justify-center border border-white/15 p-3 text-white transition hover:border-gold hover:text-gold lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-30 flex min-h-screen flex-col justify-between bg-background px-6 py-8 lg:hidden"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex items-center justify-between">
              <Link className="font-serif text-lg tracking-[0.3em] text-white" to="/">
                LE LÖRD HOMES
              </Link>
              <button
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center border border-white/15 p-3 text-white"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-6" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.36, delay: reduceMotion ? 0 : index * 0.06 }}
                >
                  <Link className="font-serif text-4xl text-white transition hover:text-gold sm:text-5xl" to={link.to}>
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <Button fullWidth showArrow to="/consultations" variant="secondary">
                Book a consultation
              </Button>
              {hasWhatsApp ? (
                <Button fullWidth href={whatsAppHref()} rel="noreferrer" target="_blank" variant="outline">
                  WhatsApp us
                </Button>
              ) : (
                <Button fullWidth to="/contact" variant="outline">
                  Contact us
                </Button>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
