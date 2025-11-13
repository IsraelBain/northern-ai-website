# Northern AI - Official Website

[![Indigenous-Owned](https://img.shields.io/badge/Indigenous-Owned-green)](https://northern-ai.ca)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38bdf8)](https://tailwindcss.com/)

Modern, professional website for Northern AI - an Indigenous-owned technology consulting firm specializing in AI, software development, and mechanical engineering.

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

1. **Hero** - Compelling value proposition with animated background
2. **Services** - Software, AI, and Mechanical Engineering consulting
3. **Products** - AI Mineral Exploration Platform showcase
4. **Advantages** - Competitive positioning vs. industry leaders
5. **Team** - Israel and Noah Bain profiles
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

Northern AI is an Indigenous-owned consulting firm specializing in:

- **Software Consulting** - Full-stack development and cloud architecture
- **AI & Machine Learning** - Custom ML models and geospatial AI
- **Mechanical Engineering** - CAD design, thermal analysis, prototyping
- **Mineral Exploration AI** - Revolutionary ML platform competing with industry giants

### Key Differentiators

✅ Indigenous-owned and operated
✅ Canadian sovereignty (government-preferred local tech)
✅ Open data philosophy (no proprietary lock-in)
✅ Junior miner focus (affordable pricing)
✅ Multi-commodity coverage
✅ 78% current prediction accuracy

## 👥 Team

- **Israel Bain** - Co-Founder & CTO (Software, AI, ML)
- **Noah Bain** - Co-Founder & CEO (Mechanical Engineering)

## 📄 License

© 2025 Northern AI. All rights reserved.

## 🤝 Contributing

This is a private repository for Northern AI's official website.

## 📧 Contact

- **Email:** systemsnorthernai@gmail.com
- **Website:** [northern-ai.ca](https://northern-ai.ca) *(coming soon)*

---

**Built with ❤️ by Northern AI** - Indigenous Excellence in Technology
