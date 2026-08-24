import { ArrowRight } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

export interface ButtonProps {
  children: ReactNode
  className?: string
  variant?: Variant
  showArrow?: boolean
  fullWidth?: boolean
  to?: string
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLElement>) => void
  ariaLabel?: string
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 border px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-55'

const variantClasses: Record<Variant, string> = {
  primary: 'border-gold bg-gold text-background hover:border-white hover:bg-white',
  secondary: 'border-gold bg-transparent text-gold hover:bg-gold hover:text-background',
  outline: 'border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-background',
  ghost: 'border-transparent bg-transparent px-0 text-white hover:text-gold',
}

function Content({ children, showArrow }: Pick<ButtonProps, 'children' | 'showArrow'>) {
  return (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </>
  )
}

export default function Button({
  children,
  className,
  variant = 'primary',
  showArrow = false,
  fullWidth = false,
  to,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const mergedClassName = [
    baseClasses,
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    disabled ? 'pointer-events-none opacity-55' : '',
    className || '',
  ]
    .join(' ')
    .trim()

  function handleInteraction(event: MouseEvent<HTMLElement>) {
    if (disabled) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    onClick?.(event)
  }

  if (to) {
    return (
      <Link
        aria-disabled={disabled}
        aria-label={ariaLabel}
        className={mergedClassName}
        onClick={handleInteraction}
        tabIndex={disabled ? -1 : undefined}
        to={to}
      >
        <Content showArrow={showArrow}>{children}</Content>
      </Link>
    )
  }

  if (href) {
    return (
      <a
        aria-disabled={disabled}
        aria-label={ariaLabel}
        className={mergedClassName}
        href={href}
        onClick={handleInteraction}
        rel={rel}
        tabIndex={disabled ? -1 : undefined}
        target={target}
      >
        <Content showArrow={showArrow}>{children}</Content>
      </a>
    )
  }

  return (
    <button aria-label={ariaLabel} className={mergedClassName} disabled={disabled} onClick={handleInteraction} type={type}>
      <Content showArrow={showArrow}>{children}</Content>
    </button>
  )
}
