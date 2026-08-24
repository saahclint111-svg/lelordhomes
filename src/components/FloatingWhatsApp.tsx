import { MessageCircleMore } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { getWhatsAppNumber, whatsAppHref } from '../lib/whatsapp'

export default function FloatingWhatsApp() {
  const reduceMotion = useReducedMotion()
  const hasNumber = Boolean(getWhatsAppNumber())

  if (!hasNumber) return null

  return (
    <motion.a
      aria-label="Open WhatsApp chat"
      className="group fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 border border-gold/60 bg-background px-4 py-3 text-sm font-medium text-white shadow-[var(--shadow-elevated)]"
      href={whatsAppHref()}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      target="_blank"
      rel="noreferrer"
      whileHover={reduceMotion ? undefined : { y: -2 }}
    >
      <motion.span
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
        transition={reduceMotion ? undefined : { duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      >
        <MessageCircleMore className="text-gold" size={20} aria-hidden="true" />
      </motion.span>
      <span className="hidden sm:block">WhatsApp</span>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-white/10 bg-card px-3 py-2 text-xs uppercase tracking-[0.22em] text-white group-hover:block">
        Message us
      </span>
    </motion.a>
  )
}
