import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Contact', href: '/contact' },
]

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || '/consultations'

function whatsappLink() {
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`
    : 'https://wa.me/'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#C8A45D]/20'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Le Lörd Homes – return to homepage"
            className="flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-4"
          >
            <span
              className="font-heading text-[#C8A45D] tracking-[0.2em] text-sm md:text-base font-medium uppercase select-none"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Le Lörd Homes
            </span>
          </Link>

          {/* Desktop links */}
          <ul
            className="hidden lg:flex items-center gap-8"
            role="list"
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-4 ${
                      active ? 'text-[#C8A45D]' : 'text-[#D7D7D7] hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#C8A45D] transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={BOOKING_URL}
              className="inline-block text-[11px] tracking-[0.18em] uppercase font-medium text-[#C8A45D] border border-[#C8A45D]/60 px-5 py-2.5 transition-all duration-300 hover:bg-[#C8A45D]/10 hover:border-[#C8A45D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-4"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-lg flex flex-col"
          >
            <div className="flex-1 flex flex-col items-start justify-center px-8 pt-20 pb-12 gap-8">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-6" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.35 }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-3xl font-heading font-medium text-white hover:text-[#C8A45D] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="flex flex-col gap-3 w-full max-w-xs pt-4 border-t border-white/10"
              >
                <a
                  href={BOOKING_URL}
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center text-xs tracking-widest uppercase font-medium text-[#C8A45D] border border-[#C8A45D]/60 px-5 py-3.5 hover:bg-[#C8A45D]/10 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D]"
                >
                  Book a Consultation
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-medium text-white bg-[#25D366]/10 border border-[#25D366]/40 px-5 py-3.5 hover:bg-[#25D366]/20 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366]"
                >
                  <MessageCircle size={14} aria-hidden="true" />
                  WhatsApp Us
                </a>
              </motion.div>
            </div>

            {/* Subtle gold accent at bottom */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#C8A45D]/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
