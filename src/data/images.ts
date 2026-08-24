/**
 * Central image registry for Le Lörd Homes.
 * Replace these URLs with actual Le Lörd Homes property images when available.
 */
export const images = {
  /**
   * Hero section background image.
   * Replace with the actual Le Lörd Homes hero property photograph.
   */
  hero: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',

  /**
   * OG / social sharing image (1200×630).
   * Replace with branded social card.
   */
  ogImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
} as const

export type ImageKey = keyof typeof images
