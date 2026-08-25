# Le Lörd Homes

Premium property consultancy website for Le Lörd Homes — built with Vite, React, TypeScript, Tailwind CSS and Framer Motion.

## Tech Stack

- **Vite** — build tooling and dev server
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — animations
- **React Router** — client-side routing
- **Lucide React** — icons
- **React Helmet Async** — per-page SEO metadata

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values relevant to your deployment:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_WHATSAPP_NUMBER` | WhatsApp contact number (international format, digits only) |
| `VITE_BOOKING_URL` | External booking link for the complimentary discovery call |
| `VITE_STRIPE_PAYMENT_LINK_30` | Stripe payment link for the 30-minute consultation |
| `VITE_STRIPE_PAYMENT_LINK_60` | Stripe payment link for the 60-minute strategy session |
| `VITE_EMAIL` | Contact email shown in the footer |
| `VITE_PHONE` | Contact phone number shown in the footer |
| `VITE_INSTAGRAM_URL` | Instagram profile link shown in the footer |

## Scripts

- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run Oxlint

## Project Structure

```
src/
  data/        # Static content (services, consultations, testimonials, images)
  components/  # Reusable UI components
  sections/    # Page sections composed of components
  layouts/      # Shared page layout (navbar, footer, WhatsApp button)
  pages/       # Route-level pages
```
