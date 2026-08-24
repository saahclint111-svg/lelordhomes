import type { MotionProps } from 'framer-motion'

export function getRevealProps(reduceMotion: boolean, delay = 0): MotionProps {
  if (reduceMotion) {
    return {}
  }

  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }
}
