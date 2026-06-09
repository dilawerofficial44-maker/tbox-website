# TBox AI — Website

AI-native agency website built with React + Vite.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

Open `http://localhost:5173` to see the site.

---

## 📁 Project Structure

```
tbox-ai-website/
├── index.html                  ← HTML entry + Google Fonts
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                ← React entry point
    ├── App.jsx                 ← Root component (imports all sections)
    ├── index.css               ← Global styles + CSS variables (edit theme here)
    └── components/
        ├── Navbar.jsx          ← Fixed navbar with mobile menu
        ├── Hero.jsx            ← Hero section (headline, CTAs, stats)
        ├── Stats.jsx           ← Metrics strip + client logos
        ├── Services.jsx        ← 3 service verticals (AI Agent / Engineering / Strategy)
        ├── CaseStudies.jsx     ← 3 project case studies with expandable details
        ├── HowWeWork.jsx       ← 6-step process with interactive panel
        ├── Testimonials.jsx    ← Client quotes with metrics
        ├── Team.jsx            ← Team member cards
        ├── Blog.jsx            ← Article cards + newsletter signup
        ├── Contact.jsx         ← Contact form with validation
        └── Footer.jsx          ← Footer with links + tech stack
```

---

## 🎨 Customization Guide

### Change colors / theme
Edit CSS variables in `src/index.css` — the `:root` block at the top:
```css
:root {
  --accent-green: #00E5A0;   /* ← Primary brand color */
  --accent-orange: #FF5C35;  /* ← Secondary accent */
  --bg-primary: #060608;     /* ← Page background */
  /* ... */
}
```

### Update content
Each component file has a clearly marked data array at the top:
- `Navbar.jsx` → `navLinks[]`
- `Hero.jsx` → `stats[]`
- `Stats.jsx` → `metrics[]`
- `Services.jsx` → `services[]`
- `CaseStudies.jsx` → `caseStudies[]`
- `HowWeWork.jsx` → `steps[]`
- `Testimonials.jsx` → `testimonials[]`
- `Team.jsx` → `members[]`
- `Blog.jsx` → `posts[]`
- `Contact.jsx` → `CONTACT_EMAIL` constant

### Connect the contact form
In `Contact.jsx`, replace the mock submission with a real service:
```jsx
// Option A: Formspree
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});

// Option B: EmailJS
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

---

## 🤖 Using with GitHub Copilot

This project is structured for easy Copilot collaboration:

1. **Each component is self-contained** — Copilot can edit one without breaking others
2. **Data arrays are at the top** — easy for Copilot to find and update
3. **CSS variables** — ask Copilot to update theme colors by referencing `index.css`
4. **Inline comments** mark every editable section

Example Copilot prompts:
- *"Add a new service card to Services.jsx for 'Dedicated AI Team' with blue accent"*
- *"Add a 4th case study to CaseStudies.jsx for a fintech client"*
- *"Make the Navbar sticky with a gradient background on scroll"*
- *"Add a pricing section component between Team and Blog"*
- *"Connect the Contact form to Formspree with ID xyz123"*

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite 5** — Dev server & bundler
- **Google Fonts** — Syne (headings) + DM Sans (body) + JetBrains Mono (code)
- **Pure CSS** — No UI library needed (all styles are inline or in index.css)

---

## 📦 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the dist/ folder into Netlify dashboard
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/tbox-ai-website"
npm run build && npx gh-pages -d dist
```

---

## 📄 License

MIT — use and modify freely.
