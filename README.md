# Looped Marketing Site

Public marketing foundation for **Looped Event OS** — built as a standalone Next.js app (separate from the main LoopedEventOS product repo).

## Stack

- Next.js 16 (App Router, `src/`)
- Tailwind CSS v4
- Framer Motion (animations)
- Radix UI (`NavigationMenu`, `Dialog`)
- Lucide icons

## Scripts

```bash
npm install
npm run dev
npm run build
```

## GitHub

Target organisation/repo name: **`LoopedCreativeEngine/LoopedMarketingSite`** (local npm package name is `looped-marketing-site` because npm disallows capital letters in package names).

## Design

Brand tokens live in `src/styles/design-system.ts`. Global CSS variables are in `src/app/globals.css`.

## Deploy

Link the repo to Vercel and deploy, or run `npx vercel` from this directory after logging in.
