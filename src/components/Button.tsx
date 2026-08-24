import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  showArrow?: boolean
  as?: 'button' | 'a'
  href?: string
  children: React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#C8A45D] text-[#080808] hover:bg-[#d4b472] border border-[#C8A45D] font-semibold',
  secondary:
    'bg-transparent text-[#C8A45D] border border-[#C8A45D] hover:bg-[#C8A45D]/10',
  outline:
    'bg-transparent text-white border border-white/30 hover:border-[#C8A45D] hover:text-[#C8A45D]',
  ghost:
    'bg-transparent text-[#A5A5A5] hover:text-white border border-transparent',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-xs tracking-widest',
  lg: 'px-8 py-4 text-sm tracking-widest',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      showArrow = false,
      children,
      className = '',
      ...props
    },
    ref,
  ) => {
    const base =
      'inline-flex items-center gap-2 uppercase font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-3 disabled:opacity-50 disabled:pointer-events-none'

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        {children}
        {showArrow && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={14} aria-hidden="true" />
          </motion.span>
        )}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'

export default Button
