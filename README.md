# Saumitra Panchal — Portfolio v2

A modern, interactive portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for static export and GitHub Pages hosting.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production (static export)
npm run build
```

The `out/` folder contains the fully static site ready for GitHub Pages.

---

## 📁 Asset Setup

Place your files in `public/assets/`:

```
public/
└── assets/
    ├── pdf/
    │   ├── Resume - Saumitra - Mar 26.pdf
    │   ├── To Whomsoever It May Concern.pdf
    │   ├── Reference_Letter_Saumitra_Dbox.pdf
    │   └── Employment-Reference Mer.pdf
    └── img/
        ├── me.png
        ├── testimonial1.png
        ├── testimonial2.png
        └── testimonial3.png
```

---

## 🌐 GitHub Pages Deployment

### Option A — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Option B — Deploy manually

```bash
npm run build
# Upload the ./out folder to your gh-pages branch
```

### Subpath deployment (username.github.io/repo-name)

Uncomment in `next.config.ts`:
```ts
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

---

## 🎨 Customisation

### Update certifications
Edit `src/data/certifications.ts` — replace placeholder entries with your real certs.

### Update references
Edit `src/data/references.ts` — update `pdfPath` to point to your actual files in `public/assets/pdf/`.

### Change the terminal script
Edit `src/components/sections/HeroTerminal.tsx` — the `SCRIPT` array at the top is your terminal dialogue.

### Color scheme
Edit `src/app/globals.css` — all colours are CSS variables at the top of the file.

---

## 🛠 Tech Stack

- **Next.js 14** — static export mode
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling
- **Framer Motion** (optional, add for page transitions)
- **Embla Carousel** — references carousel
- **Google Fonts** — Syne (display) + JetBrains Mono + DM Sans

---

## 📋 Sections

| # | Section | Notes |
|---|---------|-------|
| 1 | Hero Terminal | Auto-types a playful intro |
| 2 | About | Animated counters on scroll |
| 3 | Skills | Animated skill bars + services |
| 4 | Work | Filterable project cards |
| 5 | Certifications | Expandable card grid |
| 6 | References | Embla carousel + PDF links |
| 7 | Contact / CTA | Contact cards + CV download |
