import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center">
            <img
              src="/images/le-lord-logo.png"
              alt="Le Lörd Homes"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            <span
              className="hidden flex-col items-start"
              aria-hidden="true"
            >
              <span className="font-playfair text-xl md:text-2xl font-bold text-white tracking-[0.15em] uppercase">LE LÖRD</span>
              <span className="text-[#C8A45D] text-[9px] tracking-[0.5em] uppercase font-inter font-medium -mt-1">HOMES</span>
            </span>
            <span className="text-[#C8A45D] text-[8px] tracking-[0.55em] uppercase font-inter font-medium mt-0.5">HOMS</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`text-[11px] tracking-[0.2em] uppercase font-inter font-medium transition-colors duration-200 ${
                  location.pathname === to ? 'text-[#C8A45D]' : 'text-[#D7D7D7] hover:text-[#C8A45D]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/consultations"
              className="ml-4 border border-[#C8A45D] text-[#C8A45D] text-[10px] tracking-[0.2em] uppercase font-inter font-medium px-5 py-2.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#080808] flex flex-col pt-24 px-8 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="font-playfair text-3xl font-bold text-white hover:text-[#C8A45D] transition-colors duration-200 block"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 flex flex-col gap-4">
              <Link
                to="/consultations"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center border border-[#C8A45D] text-[#C8A45D] text-sm tracking-widest uppercase font-inter font-medium py-4 hover:bg-[#C8A45D] hover:text-black transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <WhatsAppButton variant="inline" label="WhatsApp Us" className="w-full justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
