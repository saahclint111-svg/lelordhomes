import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  href,
  arrow = false,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const base = 'inline-flex items-center gap-2 font-inter font-medium tracking-widest uppercase text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer disabled:opacity-50';

  const variants: Record<string, string> = {
    primary: 'bg-[#C8A45D] text-black px-8 py-4 hover:bg-[#9B793D] focus-visible:ring-[#C8A45D]',
    secondary: 'bg-transparent text-[#C8A45D] border border-[#C8A45D] px-8 py-4 hover:bg-[#C8A45D] hover:text-black focus-visible:ring-[#C8A45D]',
    outline: 'bg-transparent text-white border border-white/30 px-8 py-4 hover:border-[#C8A45D] hover:text-[#C8A45D] focus-visible:ring-white',
    ghost: 'bg-transparent text-[#A5A5A5] px-4 py-2 hover:text-[#C8A45D] focus-visible:ring-[#C8A45D]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
        {arrow && <ArrowRight size={16} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {arrow && <ArrowRight size={16} />}
    </button>
  );
};
