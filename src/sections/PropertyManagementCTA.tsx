import { motion } from 'framer-motion';
import { images } from '../data/images';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

export default function PropertyManagementCTA() {
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi+Le+L%C3%B6rd+Homes%2C+I%27ve+visited+your+website+and+I%27d+like+to+enquire+about+property+management.`
    : '#';

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative w-full py-32 md:py-40 px-6 sm:px-10 lg:px-16 xl:px-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.ctaProperty})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.7) 60%, rgba(8,8,8,0.85) 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 10% 90%, rgba(200,164,93,0.08) 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8">
        <motion.p
          className="font-body text-xs tracking-[0.3em] uppercase text-[#C8A45D] flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
          PROPERTY MANAGEMENT
          <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
        </motion.p>

        <motion.h2
          id="cta-heading"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          HAVE A PROPERTY?
          <br />
          <span className="text-[#C8A45D]">LET'S TALK.</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#D7D7D7] text-base sm:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're an experienced landlord or just starting out, we're here to help you manage, grow and optimise your property portfolio.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/contact"
            className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
          >
            PROPERTY MANAGEMENT ENQUIRY
          </a>
          {whatsappNumber ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 border border-white text-white hover:bg-white hover:text-[#080808] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
            >
              WHATSAPP US
            </a>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
