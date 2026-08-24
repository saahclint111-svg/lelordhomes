# Le Lörd Homes

Luxury property services website built with React, TypeScript, and Vite.

## Technology Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS (v4 via @tailwindcss/vite)
- Framer Motion
- Lucide React
- React Router DOM

## Installation

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

```
VITE_WHATSAPP_NUMBER=
VITE_PHONE=
VITE_EMAIL=
VITE_INSTAGRAM_URL=
VITE_BOOKING_URL=
VITE_CONTACT_ENDPOINT=
```

## Project Structure

```
src/
  pages/          # Route-level page components
  components/     # Reusable UI components
  sections/       # Page sections
  layouts/        # Layout wrappers
  data/           # Static data / content
  hooks/          # Custom React hooks
  lib/            # Utility functions
  assets/         # Static assets (images, fonts)
  styles/         # Additional style files
```
