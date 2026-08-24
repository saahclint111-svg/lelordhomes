import { Star } from 'lucide-react';
import type { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="bg-[#151515] border border-[rgba(200,164,93,0.15)] p-8 flex flex-col gap-5 h-full"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? 'text-[#C8A45D] fill-[#C8A45D]' : 'text-[#A5A5A5]'}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className="font-body text-[#D7D7D7] text-sm leading-relaxed flex-1 italic">
        "{testimonial.text}"
      </blockquote>

      <div className="flex items-center gap-4 pt-4 border-t border-[rgba(200,164,93,0.1)]">
        {testimonial.photo ? (
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#111111] border border-[rgba(200,164,93,0.2)] flex items-center justify-center">
            <span className="font-display text-xs text-[#C8A45D]">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-body text-xs tracking-[0.15em] uppercase font-semibold text-white">{testimonial.name}</p>
          <p className="font-body text-xs text-[#A5A5A5]">{testimonial.role}</p>
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-[#C8A45D] mt-0.5">{testimonial.service}</p>
        </div>
      </div>
    </article>
  );
}
