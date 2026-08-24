import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'HMO Management', to: '/services#hmo-management' },
  { label: 'Deal Sourcing', to: '/services#deal-sourcing' },
  { label: 'Property Consultancy', to: '/services#property-consultancy' },
  { label: 'Serviced Accommodation', to: '/services#serviced-accommodation' },
  { label: 'Airbnb Setup & Optimisation', to: '/services#airbnb-optimisation' },
  { label: 'Tenant Placement', to: '/services#tenant-placement' },
];

export const Footer: React.FC = () => {
  const instagram = import.meta.env.VITE_INSTAGRAM_URL;

  return (
    <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-1">
              <img
                src="/images/le-lord-logo.png"
                alt="Le Lörd Homes"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = 'block';
                }}
              />
              <div className="hidden">
                <p className="font-playfair text-2xl font-bold text-white tracking-[0.15em] uppercase">LE LÖRD</p>
                <p className="text-[#C8A45D] text-[9px] tracking-[0.5em] uppercase font-inter -mt-1">HOMES</p>
              </div>
            </div>
            <p className="text-[#C8A45D] text-[8px] tracking-[0.55em] uppercase font-inter font-medium mb-4">HOMS</p>
            <p className="text-[#A5A5A5] text-sm font-inter leading-relaxed mb-4">
              PROPERTY MADE EASIER.
            </p>
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center gap-2 text-[#A5A5A5] hover:text-[#C8A45D] transition-colors">
                <InstagramIcon size={18} />
              </a>
            )}
          </div>

          {/* Nav */}
          <div>
            <p className="text-white text-xs tracking-widest uppercase font-inter font-medium mb-6">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-[#A5A5A5] text-sm font-inter hover:text-[#C8A45D] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs tracking-widest uppercase font-inter font-medium mb-6">Services</p>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-[#A5A5A5] text-sm font-inter hover:text-[#C8A45D] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-xs tracking-widest uppercase font-inter font-medium mb-6">Contact</p>
            <ul className="space-y-3 mb-8">
              {import.meta.env.VITE_EMAIL && (
                <li>
                  <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-[#A5A5A5] text-sm font-inter hover:text-[#C8A45D] transition-colors">
                    {import.meta.env.VITE_EMAIL}
                  </a>
                </li>
              )}
              {import.meta.env.VITE_PHONE && (
                <li>
                  <a href={`tel:${import.meta.env.VITE_PHONE}`} className="text-[#A5A5A5] text-sm font-inter hover:text-[#C8A45D] transition-colors">
                    {import.meta.env.VITE_PHONE}
                  </a>
                </li>
              )}
            </ul>
            <Link to="/consultations" className="border border-[#C8A45D] text-[#C8A45D] text-[10px] tracking-widest uppercase font-inter px-4 py-2.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300 inline-block">
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A5A5A5] text-xs font-inter">© 2026 Le Lörd Homes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[#A5A5A5] text-xs font-inter hover:text-[#C8A45D] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[#A5A5A5] text-xs font-inter hover:text-[#C8A45D] transition-colors">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="text-[#A5A5A5] text-xs font-inter hover:text-[#C8A45D] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
