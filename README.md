# Northern AI - Official Website

[![Indigenous-Owned](https://img.shields.io/badge/Indigenous-Owned-green)](https://northern-ai.ca)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)](https://tailwindcss.com/)

Modern, professional website for Northern AI - an Indigenous-owned AI mineral prospectivity company serving junior gold exploration companies in Ontario and Quebec.

## 🌟 Features

- **Glassmorphism UI Design** - Modern, sleek interface with glass-like components
- **Dark Theme** - Forest green and gray color scheme with futuristic aesthetics
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Floating elements, fade-ins, and interactive hover effects
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Built with Vite for lightning-fast load times

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 🏗️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion (optional) + CSS animations
- **Icons:** Heroicons (via SVG)

## 📁 Project Structure

```
northern-ai-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Main navigation with glassmorphism
│   │   ├── Hero.jsx          # Landing section with CTA
│   │   ├── Services.jsx      # Consulting services showcase
│   │   ├── Products.jsx      # AI mineral exploration platform
│   │   ├── Team.jsx          # Team profiles (Israel & Noah)
│   │   ├── Advantages.jsx    # Competitive advantages
│   │   ├── Contact.jsx       # Contact form and info
│   │   ├── Footer.jsx        # Site footer
│   │   └── Logo.jsx          # Mountain-themed SVG logo
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles and utilities
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Colors

- **Forest Green:** `#2d5a3d` (Primary)
- **Gray Dark:** `#1a1e25` (Background)
- **Emerald Accents:** `#4ade80`, `#22c55e` (Highlights)

### Typography

- System font stack for optimal performance
- Responsive font sizes (mobile-first approach)
- Gradient text effects for emphasis

## 🌐 Sections

1. **Hero** - AI-powered mineral prospectivity for junior explorers
2. **Services** - Software Development and AI Mineral Prospectivity
3. **Products** - AI Mineral Exploration Platform with pricing
4. **Advantages** - Competitive positioning vs. Goldspot and KoBold
5. **Team** - Israel Bain profile (Founder & CTO)
6. **Contact** - Form and contact information
7. **Footer** - Quick links and company info

## 🔧 Customization

### Updating Content

Edit the respective component files in `src/components/` to update content, add team members, or modify services.

### Styling

Modify `tailwind.config.js` to adjust colors, add animations, or customize the design system.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Update navigation links in `src/components/Navigation.jsx`

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deployment Platforms

- **Vercel:** Connect your repo for automatic deployments
- **Netlify:** Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages:** Use the `gh-pages` branch
- **AWS S3 + CloudFront:** Upload `dist/` to S3 bucket

## 🎯 About Northern AI

Northern AI is an Indigenous-owned AI mineral prospectivity company specializing in:

- **AI Mineral Prospectivity** - Proven AI model for drill target ranking (78% validated accuracy)
- **Software Development** - Custom geospatial software for mineral exploration
- **Junior Miner Focus** - Affordable targeting at $10K-$50K (not Goldspot's $100K+)
- **Fast Delivery** - 2-week turnaround from property data to drill targets

### Key Differentiators

✅ 78% validated accuracy (AUC 0.78, spatially validated)
✅ Indigenous-owned and operated (100%)
✅ $10K-$50K pricing (not $100K+ like Goldspot)
✅ 2-week delivery (not 3+ months)
✅ Junior miner focused (Ontario & Quebec gold explorers)
✅ Open data philosophy (no proprietary lock-in)

## 👥 Team

- **Israel Bain** - Founder & CTO (Software, AI, ML, Geospatial Analytics)

## 📄 License

© 2025 Northern AI. All rights reserved.

## 🤝 Contributing

This is a private repository for Northern AI's official website.

## 📧 Contact

- **Email:** systemsnorthernai@gmail.com
- **Phone:** 236-380-1394
- **Website:** [northern-ai.ca](https://northern-ai.ca) *(coming soon)*

---

**Built with ❤️ by Northern AI** - Indigenous Excellence in Technology
