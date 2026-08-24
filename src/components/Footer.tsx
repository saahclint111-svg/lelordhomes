import { Link } from 'react-router-dom';

const phone = import.meta.env.VITE_PHONE as string | undefined;
const email = import.meta.env.VITE_EMAIL as string | undefined;
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL as string | undefined;

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Consultations', href: '/consultations' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'HMO Management', href: '/services#hmo-management' },
  { label: 'Deal Sourcing', href: '/services#deal-sourcing' },
  { label: 'Property Consultancy', href: '/services#property-consultancy' },
  { label: 'Serviced Accommodation', href: '/services#serviced-accommodation' },
  { label: 'Airbnb Setup & Optimisation', href: '/services#airbnb-setup' },
  { label: 'Tenant Placement', href: '/services#tenant-placement' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#080808] border-t border-[rgba(200,164,93,0.1)] pt-16 pb-8 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link to="/" className="focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm self-start">
              <span className="font-display text-lg tracking-[0.2em] text-white font-semibold">
                LE L<span className="text-[#C8A45D]">Ö</span>RD HOMES
              </span>
            </Link>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#A5A5A5]">
              PROPERTY MADE EASIER.
            </p>
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Lörd Homes on Instagram"
                className="font-body text-xs tracking-[0.15em] uppercase text-[#C8A45D] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 self-start mt-2"
              >
                Instagram
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs tracking-[0.25em] uppercase text-[#C8A45D] mb-5">Navigation</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-[#A5A5A5] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs tracking-[0.25em] uppercase text-[#C8A45D] mb-5">Services</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#A5A5A5] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs tracking-[0.25em] uppercase text-[#C8A45D] mb-5">Contact</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="font-body text-sm text-[#A5A5A5] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="font-body text-sm text-[#A5A5A5] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {email}
                  </a>
                </li>
              )}
              {!phone && !email && (
                <li className="font-body text-sm text-[#A5A5A5]">Contact details coming soon.</li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(200,164,93,0.1)] mb-8" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#A5A5A5]">
            © 2026 Le Lörd Homes. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="list-none p-0 m-0 flex flex-wrap gap-5 justify-center sm:justify-end">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-xs text-[#A5A5A5] hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
