# Tasqly Support Page

A single-page, mobile-first **Support** site for **Tasqly (Gig Flow)** — built with Vite + React and styled with Tailwind CSS.

## Run locally

```bash
cd tasqly-support-page
npm install
npm run dev
```

## Build (static)

```bash
npm run build
```

The static site outputs to `dist/`.

## Deploy

### GitHub Pages

- Build locally (or via CI) and publish `dist/`.
- If you use a project site (`https://username.github.io/repo/`), set Vite `base` in `vite.config.ts`.

### Vercel

- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

### Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Customize before publishing

- **Support email**: update `SUPPORT_EMAIL_HERE` in `src/App.tsx`
- **App version**: update `CURRENT_VERSION` in `src/App.tsx`
- **Open Graph URL**: update `og:url` in `index.html`
- **Social preview image**: replace `og:image` in `index.html` with a real image (1200×630 recommended)
- **(Optional) Links**: add App Store / marketing links in the header or footer
