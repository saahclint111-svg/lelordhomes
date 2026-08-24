import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../data/images'
import Button from '../components/Button'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: 'easeOut' },
})

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '12%'],
  )

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '6%'],
  )

  const motionProps = (delay: number, type: 'up' | 'in' = 'up') =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0 } }
      : type === 'up'
      ? fadeUp(delay)
      : fadeIn(delay)

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      aria-label="Hero – Premium Property Solutions"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
        {...motionProps(0, 'in')}
      >
        <img
          src={images.hero}
          alt="Luxury property exterior"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Cinematic overlay layers */}
      {/* Base dark */}
      <div className="absolute inset-0 bg-[#080808]/55 pointer-events-none" />
      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-transparent to-transparent pointer-events-none" />
      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
      {/* Left edge vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-transparent pointer-events-none" />
      {/* Subtle gold gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A45D]/5 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10"
        style={{ y: textY }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            {...motionProps(0.2)}
            className="text-[#C8A45D] text-[10px] md:text-xs tracking-[0.35em] uppercase font-medium mb-5 md:mb-7 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-[#C8A45D]" aria-hidden="true" />
            Premium Property Solutions
          </motion.p>

          {/* Main heading */}
          <motion.div {...motionProps(0.4)} className="overflow-hidden">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] tracking-tight text-white mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="block">Property</span>
              <span className="block text-[#C8A45D]">Made Easier.</span>
            </h1>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            {...motionProps(0.6)}
            className="text-[#D7D7D7] text-base md:text-lg leading-relaxed max-w-xl mb-8 md:mb-10 font-light"
          >
            Expert property solutions and guidance designed to save you time,
            reduce stress and maximise your investment potential.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...motionProps(0.8)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link to="/services" tabIndex={-1}>
              <Button variant="primary" size="lg" showArrow aria-label="Explore our property services">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact" tabIndex={-1}>
              <Button variant="secondary" size="lg" aria-label="Speak with our team">
                Speak With Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...motionProps(1.2, 'in')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-default select-none"
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-[#C8A45D]/70" />
        </motion.div>
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#A5A5A5]">Scroll</span>
      </motion.div>
    </section>
  )
}
