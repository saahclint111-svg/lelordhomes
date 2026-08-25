import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]'
            : 'bg-[#080808]/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Le Lörd Homes — Home">
            <img
              src="/images/le-lord-logo.png"
              alt="Le Lörd Homes"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            <span className="hidden text-white font-sans font-bold text-lg tracking-[0.12em] uppercase" aria-hidden="true">
              LE LÖRD HOMES
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-[11px] tracking-[0.14em] uppercase font-sans font-medium transition-colors duration-200 ${
                  location.pathname === to ? 'text-[#C8A45D]' : 'text-[#888] hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/consultations"
              className="ml-2 border border-[#C8A45D]/70 text-[#C8A45D] text-[10px] tracking-[0.16em] uppercase font-sans font-medium px-4 py-2 hover:bg-[#C8A45D] hover:text-black hover:border-[#C8A45D] transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-30 bg-[#080808] flex flex-col pt-18 px-5 sm:px-6 pb-10 overflow-y-auto"
          >
            <div className="max-w-[420px] w-full mx-auto mt-8 rounded-2xl border border-white/10 bg-[#101010] p-6">
              <nav className="flex flex-col">
                {navLinks.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={`font-sans text-lg font-semibold tracking-[0.08em] uppercase transition-colors duration-200 block py-3 border-b border-white/6 ${
                        location.pathname === to ? 'text-[#C8A45D]' : 'text-white hover:text-[#C8A45D]'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/consultations"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center block border border-[#C8A45D] text-[#C8A45D] text-[11px] tracking-[0.16em] uppercase font-sans font-medium py-3.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
