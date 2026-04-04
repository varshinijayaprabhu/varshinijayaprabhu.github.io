# Portfolio — Varshini J

Modern, high-performance personal portfolio website built with React and Vite, showcasing my skills, projects, publications, experience, education, and certifications.

---

## 🌐 Live Site

**Platform**: GitHub Pages
**Live URL**: [varshinijayaprabhu.github.io](https://varshinijayaprabhu.github.io)
**Status**: ✅ Active

---

## 📋 Project Overview

A professional portfolio website designed to showcase my journey as a Machine Learning & Full Stack Developer. Built with modern web technologies and optimized for performance.

**Key Features:**

- 🎨 Interactive animated background with particle effects
- ⚡ Smooth framer-motion animations and micro-interactions
- 🗂️ Filterable project showcase with live links
- 📜 Publications & research section
- 🏢 Work experience timeline
- 🎓 Education section with institution cards
- 🏆 Certifications carousel slideshow
- 📬 Functional contact form
- 📱 Fully responsive design

---

## 🗂️ Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Animated landing with name, tagline, and CTA buttons |
| **About** | Professional summary and background |
| **Skills** | Tech stack displayed in a categorized icon grid |
| **Projects** | Filterable cards with GitHub/live links |
| **Publications** | Research papers and technical publications |
| **Education** | Academic background — School, BCA, MCA |
| **Experience** | Internship and work timeline |
| **Certifications** | Slideshow carousel of all certifications |
| **Contact** | Email contact form |

---

## 🎓 Education

| Institution | Qualification | Year |
|---|---|---|
| CMR Institute of Technology (CMRIT) | MCA — Masters of Computer Application | 2024–2026 (Ongoing) |
| Krupanidhi Degree College | BCA — Bachelor of Computer Application (CGPA: 9.15) | 2021–2024 |
| Ujjval Vidyalaya School & Composite PU College | Schooling & Pre-University | 2019 / 2021 |

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=flat-square&logo=css3)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=flat-square&logo=github)

**Core:**
- React 19
- Vite 7
- Vanilla CSS with CSS Variables

**Libraries:**
- Framer Motion — Animations
- tsParticles — Interactive background
- Lottie React — Lottie animations
- `@fontsource` — Self-hosted fonts (Poppins, Playfair Display, Outfit)

---

## 🎨 Design System

- **Color Palette**: Purple (`#915EFF`) + Cyan (`#22D3EE`) gradient
- **Typography**:
  - *Playfair Display* — Serif headings
  - *Poppins* — Body & UI text
  - *Outfit* — Labels & metadata
- **Theme**: Dark mode with glassmorphism-style cards
- **Animations**: Physics-based spring animations via Framer Motion

---

## ⚡ Performance

- ✅ Self-hosted fonts — no external CDN round-trips
- ✅ Code splitting — separate bundles for React, animations, and particles
- ✅ Critical CSS inlined in `index.html` for fast FCP
- ✅ Lazy-loaded below-the-fold components
- ✅ Optimized production build via Vite + esbuild

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/varshinijayaprabhu/varshinijayaprabhu.github.io.git
cd varshinijayaprabhu.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build & Deploy

```bash
# Build the production bundle
npm run build

# Deploy to GitHub Pages (pushes dist/ to main branch)
npx gh-pages -d dist -b main
```

> **Note:** Since this is a GitHub user site (`username.github.io`), GitHub Pages serves from the root of the `main` branch. The deploy command above pushes the compiled `dist/` folder directly to `main`.

---

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets (certificate images, institution logos)
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── InteractiveBackground.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   └── Skills.jsx
│   ├── App.jsx         # Root component with section layout
│   ├── data.js         # Single source of truth for all content
│   ├── index.css       # Global styles & design system
│   └── main.jsx        # App entry point
├── index.html          # HTML shell with critical CSS
├── vite.config.js      # Vite build configuration
└── package.json
```

> ✏️ **To update content** (projects, certifications, education, etc.), edit `src/data.js` — no component changes needed.

---

## 👤 Author

**Varshini J**

- 🌐 Portfolio: [varshinijayaprabhu.github.io](https://varshinijayaprabhu.github.io)
- 📧 Email: varshini.j.512004@gmail.com
- 💼 GitHub: [@varshinijayaprabhu](https://github.com/varshinijayaprabhu)
- 🔗 LinkedIn: [varshinij2004](https://www.linkedin.com/in/varshinij2004/)

---

**Made with React + Vite · Deployed on GitHub Pages**
