import { motion } from 'framer-motion';

const points = [
  'REDUCE STRESS',
  'SAVE TIME',
  'MAKE INFORMED DECISIONS',
  'MAXIMISE PROPERTY POTENTIAL',
];

export default function BrandIntroduction() {
  return (
    <section
      aria-labelledby="brand-intro-heading"
      className="bg-[#080808] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#C8A45D] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
              THE LE LÖRD APPROACH
            </p>
            <h2
              id="brand-intro-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide leading-tight text-white"
            >
              PROPERTY,
              <br />
              <span className="text-[#C8A45D]">MADE EASIER.</span>
            </h2>
          </motion.div>

          {/* Right — text + points */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="font-body text-[#A5A5A5] text-base sm:text-lg leading-relaxed mb-10">
              At Le Lörd Homes, we provide professional property solutions that give landlords, investors and property owners the clarity, strategy and support they need to navigate the market with confidence.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 font-body text-xs tracking-[0.2em] uppercase font-semibold text-white"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  <span className="inline-block mt-[5px] w-4 h-px bg-[#C8A45D] flex-shrink-0" aria-hidden="true" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
