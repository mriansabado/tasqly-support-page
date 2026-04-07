# Tasqly Support Page

A single-page, mobile-first **Support** site for **Tasqly** — built with Vite + React and styled with Tailwind CSS.

## Run locally

```bash
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

- **Support email / company / privacy dates**: constants at top of `src/App.tsx` (`SUPPORT_EMAIL`, `COMPANY_NAME`, `SUPPORT_SITE_URL`, `PRIVACY_*`)
- **App Store URL**: `APP_STORE_LINK_HERE` in `src/App.tsx`
- **App version**: `CURRENT_VERSION` in `src/App.tsx`
- **Open Graph URL**: update `og:url` in `index.html`
- **Social preview image**: replace `og:image` in `index.html` with a real image (1200×630 recommended)
