# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Duna Tech Full Page** is a corporate website for Duna Tech, showcasing their software development services, IT consulting, and technology solutions. The site is built as a single-page application (SPA) with React 19, TypeScript, and Vite, featuring a dark-themed futuristic design with animated gradients and particle effects.

The website content is in Spanish and targets potential clients interested in software architecture, web development, and IT consulting services.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts Vite dev server on `http://localhost:3000` (configured to bind to `0.0.0.0`)

### Build for Production
```bash
npm run build
```
Compiles TypeScript and builds optimized production bundle to `dist/`

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

### Install Dependencies
```bash
npm install
```

## Architecture Overview

### Application Structure

This is a **React-based SPA** using React Router for navigation with a component-driven architecture:

```
App.tsx (Root)
  └─ Layout (Persistent wrapper)
      ├─ Header (Fixed navigation)
      ├─ ParticleBackground (Animated background)
      ├─ Footer (Site-wide footer)
      ├─ Popup (Global notification system)
      ├─ ScrollToTopButton (Floating UI element)
      └─ Routes (Page content)
          ├─ HomePage (/)
          ├─ AboutPage (/sobre-nosotros)
          ├─ ServicesPage (/servicios)
          ├─ ApplicationsPage (/aplicaciones)
          └─ ContactPage (/contacto)
```

### Key Architectural Patterns

**1. Layout Wrapper Pattern**
- `Layout.tsx` wraps all pages and manages shared UI elements (header, footer, popup)
- Handles global state for popup notifications via props drilling
- Conditionally renders particle background and manages dark mode
- Homepage receives special styling treatment (no top padding)

**2. State Management**
- Uses React's built-in `useState` for local component state
- Popup state managed in `App.tsx` and passed down to `Layout.tsx`
- No external state management library (Redux, Zustand, etc.)
- Contact form success triggers popup via callback: `onFormSubmit` prop

**3. Routing Strategy**
- React Router v6 with Spanish route names
- Routes defined in `App.tsx`
- `ScrollToTopOnNavigate` component ensures scroll position resets on navigation
- Mobile menu closes automatically on route change

**4. Styling Approach**
- **No CSS files**: All styling via Tailwind CSS utility classes
- Tailwind config embedded in `index.html` via CDN (`cdn.tailwindcss.com`)
- Custom theme with Duna Tech brand colors (primary orange `#FF9500`, dark blue `#0E294B`)
- Dark mode enforced by default in `Layout.tsx` (adds `dark` class to `document.documentElement`)
- Custom animations: `gradientWave`, `glow`, `float`, `slideInUp`, `fadeOut`
- Material Symbols icons for UI elements

**5. TypeScript Types**
- Centralized type definitions in `types.ts`
- Key interfaces: `CarouselSlide`, `CountdownTime`, `PopupType` enum, `PopupProps`
- Component props defined inline or imported from types file

### Component Categories

**Page Components** (`pages/`)
- Top-level route components
- Compose multiple feature components
- Handle page-specific effects (e.g., `document.title` updates)

**Layout Components**
- `Layout.tsx`: Master wrapper with global UI elements
- `Header.tsx`: Responsive navigation with mobile hamburger menu
- `Footer.tsx`: Site footer

**Feature Components** (`components/`)
- `Hero.tsx`: Landing section for homepage
- `Carousel.tsx`: Service/application showcase slider
- `Contact.tsx`: Contact page with form and contact info (used by ContactPage)
- `ContactForm.tsx`: Standalone contact form component (may be used elsewhere)
- `Popup.tsx`: Toast-style notification system (supports success/error types)
- `ParticleBackground.tsx`: Animated particle effect
- `Countdown.tsx`: Countdown timer component
- `NotifyForm.tsx`: Notification signup form
- `About.tsx`: About section component
- `Services.tsx`: Services section component
- `Applications.tsx`: Applications section component
- `Teasers.tsx`: Feature teasers/preview cards

**Utility Components**
- `ScrollToTopButton.tsx`: Floating "back to top" button
- `ScrollToTopOnNavigate.tsx`: Route change scroll handler

### Environment Variables

The app expects a `GEMINI_API_KEY` environment variable (configured in `.env.local`):
- Vite loads env vars via `loadEnv()`
- Exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY` in code
- Set this when running locally (see README.md)

### Import Aliasing

TypeScript and Vite configured with `@/` alias pointing to project root:
- Example: `import Layout from '@/components/Layout'`
- Defined in both `tsconfig.json` and `vite.config.ts`

### Browser Module Loading

The project uses **import maps** (defined in `index.html`) to load React and React Router from CDN:
- React 19 from `aistudiocdn.com`
- No bundled node_modules for these dependencies in production
- Vite handles local development bundling

## Design System Notes

**Colors:**
- Primary: `#FF9500` (orange) - CTAs, highlights, accents
- Background Dark: `#1A2332` - Main background
- Text Dark: `#F5F5DC` (beige) - Text on dark backgrounds
- Error Red: `#EF5350` - Error states
- Light Blue: `#4FC3F7` - Hover states
- Dark Blue: `#0E294B` - Text on light backgrounds

**Typography:**
- Display/Headings: Space Grotesk (Google Fonts)
- Special Headings: Orbitron (bold futuristic font)
- Body: System fonts (Segoe UI, etc.)

**Animations:**
- Background gradient animation: 25s infinite wave
- Text glow effects on headings
- Float animation for floating elements
- Slide-in animations for popups
- Custom HUD-style borders with corner accents on overlays

## Development Guidelines

### Adding New Routes
1. Create page component in `pages/`
2. Add route to `App.tsx` `<Routes>` block
3. Add navigation link to `navLinks` array in `Header.tsx`
4. Use Spanish route names for consistency

### Working with Forms
- Forms should use `handleSubmit` with `e.preventDefault()`
- On success, trigger popup via callback pattern (see `ContactPage.tsx` → `Contact.tsx`)
- The `Contact.tsx` component receives `onFormSubmit` callback prop and resets form after submission
- Form inputs use `.form-input` class for consistent styling with focus effects
- Contact form includes project type selection dropdown

### Using the Popup System
- Popup state managed in `App.tsx`
- Pass popup config to `Layout.tsx`
- Types: `PopupType.Success` or `PopupType.Error`
- Popup auto-dismisses after animation or user clicks close

### Adding Components
- Feature components go in `components/`
- Use TypeScript with explicit prop interfaces
- Follow existing naming conventions (PascalCase for components)
- Leverage Tailwind classes for styling (no separate CSS files)

### Path Imports
- Prefer `@/` alias for imports from project root
- Example: `import type { PopupType } from '@/types'`

## Notes

- The site enforces dark mode universally (no light mode toggle)
- Content is in Spanish (target market: Spanish-speaking clients)
- Mobile-first responsive design with breakpoints at `md:` (768px)
- No backend integration yet (contact form triggers success popup but doesn't send data)
- Originally generated via Google AI Studio (see README for AI Studio link)
- Dependencies need to be installed before first run (`npm install`)
