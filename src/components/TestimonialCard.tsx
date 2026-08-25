import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  service: string;
  rating: number;
  text: string;
  isPlaceholder?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name, role, service, rating, text, isPlaceholder = false,
}) => (
  <div className="bg-[#111111] border border-white/5 p-10 h-full flex flex-col hover:border-white/10 transition-colors duration-300">
    {isPlaceholder && (
      <div className="mb-5 px-3 py-1 bg-[#151515] border border-white/8 inline-block">
        <span className="text-[#A5A5A5] text-[10px] tracking-widest uppercase">Development Placeholder</span>
      </div>
    )}
    <div className="flex gap-1 mb-6">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={13} className="text-[#C8A45D] fill-[#C8A45D]" />
      ))}
    </div>
    <p className="text-[#D7D7D7] font-inter text-sm leading-relaxed italic flex-grow mb-8">{text}</p>
    <div className="border-t border-white/5 pt-5">
      <p className="text-white font-semibold text-sm">{name}</p>
      <p className="text-[#A5A5A5] text-xs mt-1 font-inter">{role} — {service}</p>
    </div>
  </div>
);
