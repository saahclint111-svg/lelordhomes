import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Consultations', to: '/consultations' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
];

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const instagram = import.meta.env.VITE_INSTAGRAM_URL;

  return (
    <footer className="bg-[#080808] border-t border-white/[0.04] pt-20 pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-14 mb-20">
          {/* Brand */}
          <div>
            <img
              src="/images/le-lord-logo.png"
              alt="Le Lörd Homes"
              className="h-9 w-auto object-contain mb-5"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fb) fb.style.display = 'block';
              }}
            />
            <div className="hidden">
              <p className="text-white font-sans font-bold text-lg tracking-[0.12em] uppercase">LE LÖRD HOMES</p>
            </div>
            <p className="text-[#5a5a5a] font-sans font-light text-sm leading-relaxed max-w-xs">
              Professional property solutions designed around clarity, quality and confidence.
            </p>
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Lörd Homes on Instagram"
                className="inline-flex items-center gap-2 text-[#5a5a5a] hover:text-[#C8A45D] transition-colors mt-6"
              >
                <InstagramIcon size={16} />
              </a>
            )}
          </div>

          {/* Navigate */}
          <div>
            <p className="text-white text-[10px] tracking-[0.3em] uppercase font-sans font-medium mb-7">Navigate</p>
            <ul className="space-y-3.5">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-[#5a5a5a] text-sm font-sans hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-[10px] tracking-[0.3em] uppercase font-sans font-medium mb-7">Contact</p>
            <ul className="space-y-3.5 mb-8">
              {import.meta.env.VITE_EMAIL && (
                <li>
                  <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-[#5a5a5a] text-sm font-sans hover:text-white transition-colors">
                    {import.meta.env.VITE_EMAIL}
                  </a>
                </li>
              )}
              {import.meta.env.VITE_PHONE && (
                <li>
                  <a href={`tel:${import.meta.env.VITE_PHONE}`} className="text-[#5a5a5a] text-sm font-sans hover:text-white transition-colors">
                    {import.meta.env.VITE_PHONE}
                  </a>
                </li>
              )}
            </ul>
            <Link
              to="/consultations"
              className="border border-[#C8A45D]/60 text-[#C8A45D] text-[10px] tracking-[0.2em] uppercase font-sans font-medium px-5 py-2.5 hover:bg-[#C8A45D] hover:text-black transition-all duration-300 inline-block"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#3a3a3a] text-xs font-sans">© 2026 Le Lörd Homes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-[#3a3a3a] text-xs font-sans hover:text-[#A5A5A5] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
