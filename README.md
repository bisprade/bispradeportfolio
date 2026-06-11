# Portfolio - React + Vite

This portfolio has been successfully converted from Next.js to React with Vite.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server (fast HMR and optimized builds)
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Helmet Async** - SEO meta tags management

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000` with hot module replacement.

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── App.tsx              # Main app component with React Router setup
├── main.tsx             # Entry point with providers
├── pages/               # Page components (route handlers)
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── WorkPage.tsx
│   ├── ContactPage.tsx
│   └── CommsAcademyPage.tsx
├── components/          # Reusable UI components
│   ├── layout/          # Navigation, Footer
│   ├── home/            # Home page sections
│   ├── about/           # About page content
│   ├── work/            # Work/portfolio components
│   ├── contact/         # Contact page content
│   └── case-study/      # Case study layout
├── lib/                 # Utilities and data
│   ├── utils.ts         # Helper functions
│   └── case-studies/    # Case study data
└── app/
    └── globals.css      # Global styles and Tailwind imports
```

## Key Changes from Next.js

### Routing
- **Before**: Next.js App Router with file-based routing (`app/` directory)
- **After**: React Router DOM with explicit route definitions in `App.tsx`

### SEO/Meta Tags
- **Before**: Next.js Metadata API
- **After**: React Helmet Async for dynamic meta tags

### Build Tool
- **Before**: Next.js built-in bundler
- **After**: Vite (faster dev server, optimized production builds)

### Fonts
- **Before**: Next.js Font Optimization (`next/font/google`)
- **After**: Google Fonts CDN import in CSS

### Images
- **Before**: Next.js Image component with automatic optimization
- **After**: Standard `<img>` tags (consider adding image optimization if needed)

### Links
- **Before**: Next.js `<Link>` component
- **After**: React Router `<Link>` component

### File Structure
- **Before**: Pages in `app/` directory with `page.tsx` files
- **After**: Pages in `src/pages/` directory as regular components

## Performance Considerations

- Vite provides extremely fast HMR during development
- Production builds are optimized with code splitting
- Consider adding:
  - Image optimization library (e.g., `vite-imagetools`)
  - PWA support if needed
  - Additional route-based code splitting

## Deployment

The `dist/` folder contains static files that can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static file server

Make sure to configure your hosting to handle client-side routing (redirect all routes to `index.html`).

## Scripts Reference

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (runs TypeScript check + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking without emitting files
