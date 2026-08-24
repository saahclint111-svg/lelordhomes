import { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

const areasOfFocus = [
  'HMO Management',
  'Deal Sourcing',
  'Property Consultancy',
  'Serviced Accommodation',
  'Airbnb Optimisation',
];

export default function FounderSection() {
  const [imgError, setImgError] = useState(false);

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi%2C+I%27d+like+to+speak+with+Isaac+about+my+property+needs.`
    : bookingUrl ?? '/consultations';

  return (
    <section
      aria-labelledby="founder-heading"
      className="bg-[#111111] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="relative aspect-[4/5] overflow-hidden bg-[#151515] flex items-center justify-center max-w-sm mx-auto lg:mx-0 w-full"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {!imgError && images.founderPhoto ? (
              <img
                src={images.founderPhoto}
                alt="Isaac Umoren — Founder of Le Lörd Homes"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="font-display text-5xl text-[rgba(200,164,93,0.2)]">IU</span>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#A5A5A5]">Photo Coming Soon</p>
              </div>
            )}
            {/* Gold accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A45D] to-transparent" aria-hidden="true" />
          </motion.div>

          {/* Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C8A45D] flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
              MEET THE FOUNDER
            </p>

            <div>
              <h2 id="founder-heading" className="font-display text-4xl sm:text-5xl font-semibold tracking-wide text-white">
                ISAAC UMOREN
              </h2>
              <p className="font-body text-sm tracking-[0.15em] uppercase text-[#A5A5A5] mt-2">
                Founder / Property Consultant
              </p>
            </div>

            <div className="w-12 h-px bg-[#C8A45D]" aria-hidden="true" />

            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#C8A45D] mb-3">Areas of Focus</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                {areasOfFocus.map((area) => (
                  <li key={area} className="font-body text-sm text-[#D7D7D7] flex items-center gap-3">
                    <span className="inline-block w-3 h-px bg-[#C8A45D] flex-shrink-0" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappHref}
              target={whatsappNumber ? '_blank' : undefined}
              rel={whatsappNumber ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase font-semibold px-7 py-4 bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D] transition-all duration-300 self-start focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
            >
              SPEAK WITH ISAAC
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
