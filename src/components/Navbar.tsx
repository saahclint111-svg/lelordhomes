import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Contact', href: '/contact' },
];

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi+Le+L%C3%B6rd+Homes%2C+I%27ve+visited+your+website+and+I%27d+like+to+enquire+about+your+property+services.`
    : '#';

  return (
    <>
      {/* Main navbar */}
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[rgba(200,164,93,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
            aria-label="Le Lörd Homes — home"
          >
            <span className="font-display text-base md:text-lg tracking-[0.2em] text-white font-semibold">
              LE L<span className="text-[#C8A45D]">Ö</span>RD HOMES
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`font-body text-xs tracking-[0.18em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm ${
                    location.pathname === link.href
                      ? 'text-[#C8A45D]'
                      : 'text-[#D7D7D7] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            {bookingUrl ? (
              <a
                href={bookingUrl}
                className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
              >
                BOOK A CONSULTATION
              </a>
            ) : (
              <Link
                to="/consultations"
                className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-3 border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
              >
                BOOK A CONSULTATION
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-white focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
            aria-label="Navigation menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col px-8 pt-28 pb-12 overflow-y-auto"
          >
            <nav aria-label="Mobile navigation">
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i, duration: 0.4, ease: 'easeOut' }}
                  >
                    <Link
                      to={link.href}
                      className={`block font-display text-3xl tracking-wide py-3 border-b border-[rgba(200,164,93,0.1)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm ${
                        location.pathname === link.href
                          ? 'text-[#C8A45D]'
                          : 'text-white hover:text-[#C8A45D]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 mt-10">
                {bookingUrl ? (
                  <a
                    href={bookingUrl}
                    className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 bg-[#C8A45D] text-[#080808] text-center hover:bg-[#9B793D] transition-all duration-300"
                  >
                    BOOK A CONSULTATION
                  </a>
                ) : (
                  <Link
                    to="/consultations"
                    className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 bg-[#C8A45D] text-[#080808] text-center hover:bg-[#9B793D] transition-all duration-300"
                  >
                    BOOK A CONSULTATION
                  </Link>
                )}
                {whatsappNumber && (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-6 py-4 border border-white text-white text-center hover:bg-white hover:text-[#080808] transition-all duration-300"
                  >
                    WHATSAPP US
                  </a>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
