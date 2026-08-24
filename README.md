# Le Lörd Homes

Premium property solutions website built with React, Vite, TypeScript, and Tailwind CSS.

## Technology Stack

- **React 19** – UI library
- **Vite 8** – build tool and dev server
- **TypeScript** – type safety
- **Tailwind CSS v4** – utility-first styling
- **Framer Motion** – animations
- **Lucide React** – icons
- **React Router v6** – client-side routing

## Getting Started

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `VITE_WHATSAPP_NUMBER` | WhatsApp business number (digits only, include country code) |
| `VITE_PHONE` | Display phone number |
| `VITE_EMAIL` | Contact email address |
| `VITE_INSTAGRAM_URL` | Instagram profile URL |
| `VITE_BOOKING_URL` | External booking / calendar URL |
| `VITE_CONTACT_ENDPOINT` | Contact form submission endpoint |

## Project Structure

```
src/
  components/   # Reusable UI components (Navbar, Button, …)
  sections/     # Page sections (Hero, …)
  pages/        # Route-level page components
  layouts/      # Layout wrappers (MainLayout)
  data/         # Static data and image registry
  hooks/        # Custom React hooks
  lib/          # Utilities and helpers
  assets/       # Static assets imported by components
  styles/       # Global CSS and design tokens
public/
  images/       # Public images (drop final assets here)
```

## Images

Image URLs are centralised in `src/data/images.ts`.  
Replace placeholder Unsplash URLs with actual Le Lörd Homes photography when available.
