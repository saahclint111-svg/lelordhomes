# Le Lörd Homes

Premium property solutions website — built with React, Vite, TypeScript and Tailwind CSS.

## Tech Stack

- React 19
- Vite 8
- TypeScript 6
- Tailwind CSS (v4 via @tailwindcss/vite)
- Framer Motion
- Lucide React
- React Router DOM

## Getting Started

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable | Description |
|---|---|
| `VITE_WHATSAPP_NUMBER` | WhatsApp number for contact button |
| `VITE_PHONE` | Phone number displayed in footer |
| `VITE_EMAIL` | Email address displayed in footer |
| `VITE_INSTAGRAM_URL` | Instagram profile URL |
| `VITE_BOOKING_URL` | Default booking/consultation URL |
| `VITE_BOOKING_DISCOVERY_URL` | Booking URL for discovery call |
| `VITE_BOOKING_CONSULTATION_URL` | Booking URL for property consultation |
| `VITE_BOOKING_STRATEGY_URL` | Booking URL for strategy session |
| `VITE_CONTACT_ENDPOINT` | Contact form submission endpoint |

## Project Structure

```
src/
  components/    # Reusable UI components
  sections/      # Homepage sections
  pages/         # Route-level pages
  layouts/       # Layout wrappers
  data/          # Static data (services, consultations, testimonials, images)
  hooks/         # Custom React hooks
  lib/           # Utilities
  assets/        # Static assets
  styles/        # Global CSS
public/
  images/        # Replace with actual Le Lörd Homes images
```
