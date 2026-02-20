# Hume Dental Associates - React Website

A modern, responsive single-page dental clinic website built with React, Vite, and Tailwind CSS.

## 🦷 Overview

This is a React-based single-page website for Hume Dental Associates, featuring a clean and modern design with smooth scrolling navigation, creative typography elements, interactive cards, and a professional aesthetic suitable for a dental practice.

## ✨ Features

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Single Page Design** - All content in one seamless page with smooth scroll navigation
- **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- **Interactive Components** - Service selection, dentist picker, booking form
- **Mobile Navigation** - Collapsible hamburger menu

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Fonts** - Inter & Playfair Display
- **Material Symbols** - Icons

## 📁 Project Structure

```
dental/
├── index.html              # Entry HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global styles
│   └── components/
│       ├── Navbar.jsx      # Navigation component
│       ├── Hero.jsx        # Hero section
│       ├── Dentists.jsx    # Dentists section
│       ├── Services.jsx    # Services section
│       ├── Reviews.jsx     # Reviews section
│       ├── Booking.jsx     # Booking form section
│       └── Footer.jsx      # Footer component
└── plans/
    └── dental-website-plan.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Page Sections

1. **Hero Section** (`#home`) - Creative headline with inline images and CTA
2. **Feature Cards** - Online Consultations, Best Dentists, 20+ Clinics
3. **Our Dentists** (`#dentists`) - 3 dentist profiles with photos and bios
4. **Services** (`#services`) - 6 service cards in a responsive grid
5. **Reviews** (`#reviews`) - 6 patient testimonials in masonry layout
6. **Booking Form** (`#booking`) - Appointment booking with service/dentist selection
7. **Footer** - Contact info and quick links

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark Background | `#1f2025` | Navigation, sections |
| Accent Teal | `#2b84aa` | Primary buttons, highlights |
| Accent Teal Hover | `#226f90` | Button hover states |
| Accent Teal Light | `#eef6f9` | Selected state backgrounds |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📋 Components

### Navbar
- Sticky navigation with scroll shadow effect
- Mobile hamburger menu
- Smooth scroll to sections

### Hero
- Creative typography with inline images
- Feature cards with hover effects
- CTA button

### Dentists
- Profile cards with photos
- Hover animations
- Book appointment links

### Services
- 6 service cards in grid layout
- Icon animations on hover
- Learn more links

### Reviews
- Masonry grid layout
- Star ratings
- Patient avatars

### Booking
- Service selection (radio buttons)
- Dentist selection (horizontal scroll)
- Contact form
- Booking summary sidebar

### Footer
- Quick links
- Services list
- Contact information

---

**Note**: This website uses external CDN links for Google Fonts and Material Symbols. An internet connection is required for proper styling and icon display.
