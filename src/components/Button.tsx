import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  arrow?: boolean;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  arrow = false,
  as: Tag = 'button',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase font-semibold px-7 py-4 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#C8A45D] focus-visible:outline-offset-2';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#C8A45D] text-[#080808] hover:bg-[#9B793D] active:scale-[0.98]',
    secondary:
      'bg-transparent border border-white text-white hover:bg-white hover:text-[#080808] active:scale-[0.98]',
    outline:
      'bg-transparent border border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#080808] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#C8A45D] hover:text-white underline-offset-4 hover:underline',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (Tag === 'a' || href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {children}
        {arrow && <ArrowRight size={14} />}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
      {arrow && <ArrowRight size={14} />}
    </button>
  );
}
