import { motion } from 'framer-motion';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
const bookingUrl = import.meta.env.VITE_BOOKING_URL as string | undefined;

export default function ContactCTA() {
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hi+Le+L%C3%B6rd+Homes%2C+I%27ve+visited+your+website+and+I%27d+like+to+enquire+about+your+property+services.`
    : '#';

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-[#080808] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24 border-t border-[rgba(200,164,93,0.08)]"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8">
        <motion.p
          className="font-body text-xs tracking-[0.3em] uppercase text-[#C8A45D] flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
          GET IN TOUCH
          <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
        </motion.p>

        <motion.h2
          id="contact-cta-heading"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide text-white leading-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          LET'S TALK <span className="text-[#C8A45D]">PROPERTY.</span>
        </motion.h2>

        <motion.p
          className="font-body text-[#A5A5A5] text-base sm:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you have a question, need a consultation, or want to discuss your property plans — we're here and happy to help.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {whatsappNumber && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
            >
              WHATSAPP US
            </a>
          )}
          <a
            href={bookingUrl ?? '/consultations'}
            className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
          >
            BOOK A CONSULTATION
          </a>
          <a
            href="/contact"
            className="font-body text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 border border-white text-white hover:bg-white hover:text-[#080808] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2"
          >
            SEND AN ENQUIRY
          </a>
        </motion.div>
      </div>
    </section>
  );
}
