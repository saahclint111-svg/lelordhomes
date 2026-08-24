import { Star } from 'lucide-react'

interface TestimonialProps {
  name: string
  role?: string
  service?: string
  rating: number
  testimonial: string
  image?: string
  isPlaceholder?: boolean
}

export default function TestimonialCard({
  name,
  role,
  service,
  rating,
  testimonial,
  image,
  isPlaceholder = false,
}: TestimonialProps) {
  return (
    <article className="flex h-full flex-col border border-white/10 bg-card p-8 shadow-[var(--shadow-elevated)]">
      <div className="mb-6 flex items-center gap-4">
        {image ? (
          <img alt={name} className="h-14 w-14 rounded-full object-cover" src={image} />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-background-secondary text-sm font-semibold text-gold">
            {name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)}
          </div>
        )}
        <div>
          <p className="font-serif text-xl text-white">{name}</p>
          {role ? <p className="text-sm text-text-muted">{role}</p> : null}
        </div>
      </div>

      <div className="mb-5 flex items-center gap-1 text-gold" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className={index < rating ? 'fill-current' : 'text-white/20'} size={16} />
        ))}
      </div>

      {service ? <p className="mb-4 text-xs uppercase tracking-[0.28em] text-gold">{service}</p> : null}
      <p className="flex-1 text-base leading-7 text-white-muted">“{testimonial}”</p>
      {isPlaceholder ? <p className="mt-6 text-sm text-text-muted">Review pending — placeholder content ready for a live client testimonial.</p> : null}
    </article>
  )
}
