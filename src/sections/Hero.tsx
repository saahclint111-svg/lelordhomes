import { motion, useReducedMotion } from 'framer-motion';
import { images } from '../data/images';
import Button from '../components/Button';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const animated = !shouldReduceMotion;

  const fadeUp = (delay: number) => ({
    initial: animated ? { opacity: 0, y: 32 } : false as const,
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  });

  return (
    <section
      aria-label="Hero"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.heroProperty})` }}
        initial={animated ? { opacity: 0, scale: 1.04 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.65) 50%, rgba(8,8,8,0.82) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, rgba(200,164,93,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="font-body text-xs tracking-[0.35em] uppercase text-[#C8A45D] mb-6 flex items-center gap-3"
            {...fadeUp(0.2)}
          >
            <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
            PREMIUM PROPERTY SOLUTIONS
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[1.05] text-white mb-8"
            {...fadeUp(0.4)}
          >
            PROPERTY
            <br />
            <span className="text-[#C8A45D]">MADE EASIER.</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            className="font-body text-[#D7D7D7] text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
            {...fadeUp(0.6)}
          >
            Expert property solutions and guidance designed to save you time, reduce stress and maximise your investment potential.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            {...fadeUp(0.75)}
          >
            <Button as="a" href="/services" variant="primary" arrow>
              EXPLORE OUR SERVICES
            </Button>
            <Button as="a" href="/contact" variant="secondary">
              SPEAK WITH US
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={animated ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          aria-hidden="true"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-[#A5A5A5]">
            SCROLL
          </span>
          <motion.span
            className="block w-px h-12 bg-gradient-to-b from-[#C8A45D] to-transparent"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
