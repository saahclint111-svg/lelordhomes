import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  variant?: 'floating' | 'inline';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hi Le Lörd Homes, I've visited your website and I'd like to enquire about your property services.",
  className = '',
  label = 'WhatsApp Us',
  variant = 'inline',
}) => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!number) {
    if (variant === 'floating') return null;
    return (
      <span className={`inline-flex items-center gap-2 text-[#A5A5A5] text-sm ${className}`} title="WhatsApp not configured">
        <MessageCircle size={16} />
        {label}
      </span>
    );
  }

  const clean = number.replace(/\D/g, '');
  const url = `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 rounded-full ${className}`}
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] text-white font-inter font-medium tracking-widest uppercase text-sm px-8 py-4 hover:bg-[#128C7E] transition-colors duration-300 ${className}`}
    >
      <MessageCircle size={16} />
      {label}
    </a>
  );
};
