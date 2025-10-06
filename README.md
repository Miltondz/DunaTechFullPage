<div align="center">
  <h1>🌊 Dunatech - Corporate Website</h1>
  <p><strong>Ingenio que Construye, Data que Impulsa</strong></p>
  
  <p>
    <a href="#features"><strong>Features</strong></a> ·
    <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#deployment"><strong>Deployment</strong></a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  </p>
</div>

---

## 📚 About

**Dunatech** is a modern, SEO-optimized corporate website for a technology consulting and software development company based in Santiago, Dominican Republic. The site showcases services, team expertise, client testimonials, and provides an engaging user experience with animated visuals and responsive design.

### 🎯 Key Highlights

- 🚀 **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- 🎨 **Beautiful UI**: Dark-themed futuristic design with animated gradients
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD
- ⚡ **Performance**: Fast loading with optimized bundle size (87KB gzipped)
- 🌍 **Multilingual Ready**: Structured for easy i18n implementation

---

## ✨ Features

### 🏠 Pages

- **Home**: Hero section, features showcase, testimonials, and services overview
- **About Us**: Company history, mission/vision, team profiles, and certifications
- **Services**: 4 main services with detailed benefits, features, and technologies
- **Applications**: Portfolio of software products and solutions
- **Contact**: Contact form with information and location details

### 🛠️ Core Features

- ✅ Interactive service navigation with tabs
- ✅ Animated SVG illustrations
- ✅ Dynamic testimonials carousel
- ✅ Contact form with validation
- ✅ Toast notification system
- ✅ Scroll-to-top functionality
- ✅ Particle background effects
- ✅ HUD-style design overlays

### 🔍 SEO Features

- ✅ Optimized meta tags for all pages
- ✅ Open Graph and Twitter Card tags
- ✅ JSON-LD structured data (Schema.org)
- ✅ Canonical URLs
- ✅ robots.txt configured
- ✅ sitemap.xml generated
- ✅ Geo tags for local SEO
- ✅ Dynamic meta updates per page

---

## 💻 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|----------|
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.8.2 | Type safety |
| **React Router** | 6.25.1 | Client-side routing |
| **Vite** | 6.2.0 | Build tool & dev server |
| **Tailwind CSS** | 3.x (CDN) | Styling framework |

### Design & Assets

- **Fonts**: Space Grotesk, Orbitron (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Animations**: Custom Tailwind keyframes
- **Color Scheme**: Dark theme with orange primary (#FF9500)

### Development Tools

- **ESM Imports**: Native ES modules
- **CDN Loading**: React & Router from aistudiocdn.com
- **Hot Reload**: Vite HMR
- **Path Aliases**: `@/` pointing to project root

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Git**: For version control

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/dunatech/website.git
cd website
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** (optional)

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here  # If using AI features
```

4. **Start development server**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🏭 Project Structure

```
DunaTechFullPage/
├── public/                # Static assets
│   ├── robots.txt        # SEO crawling rules
│   └── sitemap.xml       # Site structure for search engines
├── components/           # React components
│   ├── About.tsx         # About page content
│   ├── Services.tsx      # Services with tabs
│   ├── Hero.tsx          # Landing hero section
│   ├── HeroImage.tsx     # Animated SVG illustration
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Contact form & info
│   ├── Header.tsx        # Navigation bar
│   ├── Footer.tsx        # Site footer
│   ├── Layout.tsx        # Page wrapper
│   └── ...               # Other components
├── pages/                # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ApplicationsPage.tsx
│   └── ContactPage.tsx
├── App.tsx               # Main app component
├── index.tsx             # Entry point
├── types.ts              # TypeScript interfaces
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies
├── WARP.md               # Warp AI context
└── SEO-IMPROVEMENTS.md   # SEO documentation
```

---

## 📦 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag & drop the `dist/` folder to Netlify

### Deploy to GitHub Pages

Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

Then:
```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:username/repo.git main:gh-pages
```

---

## 🎨 Customization

### Colors

Edit colors in `index.html` (Tailwind config):

```javascript
colors: {
  primary: "#FF9500",          // Orange accent
  "background-dark": "#1A2332", // Dark blue background
  "text-dark": "#F5F5DC",       // Beige text
  // ... more colors
}
```

### Content

- **Services**: Edit `components/Services.tsx` > `servicesData` array
- **Testimonials**: Edit `components/Testimonials.tsx` > `testimonials` array
- **Contact Info**: Edit `components/Contact.tsx`
- **About Team**: Edit `components/About.tsx`

### SEO

- **Meta tags**: Edit `index.html` and page-specific `useEffect` in `pages/*.tsx`
- **Sitemap**: Update `public/sitemap.xml`
- **Robots**: Modify `public/robots.txt`

---

## 🔍 SEO Checklist

### Before Launch

- [ ] Update domain in all canonical URLs
- [ ] Create Open Graph images (1200x630px)
- [ ] Create Twitter Card images (1200x600px)
- [ ] Update contact information
- [ ] Test all forms
- [ ] Verify all links work

### After Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics 4
- [ ] Configure Google Tag Manager
- [ ] Create Google My Business profile
- [ ] Test with Google Rich Results Test
- [ ] Validate Open Graph tags
- [ ] Check PageSpeed Insights

---

## 📈 Performance

### Current Metrics

- **Bundle Size**: 294 KB (87 KB gzipped)
- **Build Time**: ~1 second
- **Modules**: 55 transformed
- **Lighthouse Score**: 90+ (estimated)

### Optimization Tips

- Images are loaded via CDN
- Fonts preconnected for faster loading
- CSS in Tailwind CDN (no build overhead)
- React lazy loading ready for route splitting

---

## 👥 Team

**Founder & CEO**: Milton Díaz
- 13+ years in software development
- Certified in Google Cloud (AI/ML)
- Expert in .NET, Blazor, and Cloud Architecture

---

## 📝 License

Copyright © 2024 Dunatech. All rights reserved.

This project is proprietary software. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 📧 Contact

- **Website**: https://dunatech.com
- **Email**: info@dunatech.com
- **Phone**: +1 (809) 123-4567
- **Location**: Santiago, República Dominicana
- **LinkedIn**: [Dunatech](https://linkedin.com/company/dunatech)

---

## 🚀 Future Roadmap

- [ ] Implement blog section
- [ ] Add language switcher (ES/EN)
- [ ] Integrate CMS for content management
- [ ] Add case studies section
- [ ] Implement newsletter signup
- [ ] Add FAQ page with Schema markup
- [ ] Create admin dashboard
- [ ] Integrate backend API for forms

---

<div align="center">
  <p><strong>Made with ❤️ by Dunatech Team</strong></p>
  <p>
    <a href="https://dunatech.com">Website</a> ·
    <a href="https://linkedin.com/company/dunatech">LinkedIn</a> ·
    <a href="mailto:info@dunatech.com">Contact</a>
  </p>
</div>
