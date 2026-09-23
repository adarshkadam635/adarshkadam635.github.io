<div align="center">

# Adarsh Kadam — AI Engineer Portfolio

**Building intelligent systems that think, retrieve, reason, and automate.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey)](#license)

[Live Demo](#) · [Report a Bug](https://github.com/adarshkadam635/adarsh-kadam-portfolio/issues) · [Connect on LinkedIn](https://linkedin.com/in/adarshkadam635)

</div>

---

## Overview

This repository powers my personal portfolio — a single-page, dark-themed site built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**, animated with **Framer Motion**. It presents my work as an AI Engineer across Agentic AI, Generative AI, RAG systems, and production machine learning, and includes a small rule-based chat widget that can answer visitor questions about my background.

## Features

- **Cinematic hero** — large split typography with a photo breaking through the name, animated with Framer Motion.
- **Agentic runtime visual** — an animated node/edge diagram illustrating a typical agent → RAG → tools → deployment flow.
- **Data-driven content** — all profile, experience, project, skill, and certification data lives in one typed file ([`data/portfolio.ts`](data/portfolio.ts)), so updating content never touches JSX.
- **Project case studies** — each project renders architecture flow, tech stack, and measurable outcomes.
- **Portfolio Assistant** — a lightweight, dependency-free Q&A widget that answers common questions about my skills and projects.
- **Fully responsive** — tuned from mobile through ultra-wide breakpoints.
- **SEO-ready** — structured `Person` JSON-LD schema, metadata, and Open Graph tags baked into the layout.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | `next/font/google` (Fraunces display serif) |

## Project Structure

```
app/
  layout.tsx        Root layout, metadata, fonts, JSON-LD
  page.tsx           The single-page portfolio (hero, sections, contact)
  globals.css        Tailwind base styles
components/
  Navbar.tsx          Sticky navigation
  HeroNetwork.tsx      Animated agentic-runtime diagram
  SectionHeading.tsx   Reusable section headers
  PortfolioAssistant.tsx  Rule-based Q&A widget
data/
  portfolio.ts        All profile, experience, project & skills content
public/
  profile.png, resume.pdf, favicon.svg, ...
```

## Getting Started

**Prerequisites:** Node.js 18.18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js/ESLint checks |

## SEO

SEO is configured centrally so there's a single source of truth for every crawler-facing detail:

| Asset | Location | Purpose |
|---|---|---|
| Site constants | [`lib/site.ts`](lib/site.ts) | Base URL, title, description, keywords (override the URL with `NEXT_PUBLIC_SITE_URL`) |
| Metadata | [`app/layout.tsx`](app/layout.tsx) | Title template, description, keywords, canonical, Open Graph, Twitter cards, robots directives, theme color |
| Structured data | [`app/layout.tsx`](app/layout.tsx) | JSON-LD `@graph` with `Person`, `WebSite`, `ProfilePage` and an `ItemList` of projects |
| Sitemap | [`app/sitemap.ts`](app/sitemap.ts) | Generates `/sitemap.xml` at build time |
| Robots | [`public/robots.txt`](public/robots.txt) | Allows all crawlers, points to the sitemap |
| Social card | `public/og.png` | 1200×630 Open Graph / Twitter preview image |

The page also maintains a strict heading hierarchy (a single `<h1>`, then `<h2>`/`<h3>`), descriptive `alt` text on every image, and a WebP hero image for a fast LCP.

## Deployment (GitHub Pages)

The project is configured for static export (`output: 'export'`), so `npm run build` emits a fully static site into `out/` — including `sitemap.xml`, `robots.txt` and `og.png`.

```bash
npm run build     # outputs to ./out
```

Publish the contents of `out/` to GitHub Pages. A `.nojekyll` file is included so Pages doesn't strip the `_next/` asset directory.

> **Note:** If you deploy to a *project* repository (e.g. `github.com/<user>/<repo>`) instead of a user site, add `basePath: '/<repo>'` to [`next.config.mjs`](next.config.mjs) and set `NEXT_PUBLIC_SITE_URL` accordingly.

## Editing Content

Everything you see on the page — bio, stats, experience, projects, skills, certifications, and education — is sourced from [`data/portfolio.ts`](data/portfolio.ts). Update that file and the UI updates automatically; no need to touch component code.

## What's Inside

- **Agentic AI** — autonomous research agents with multi-step reasoning and tool calling
- **Generative AI** — LLM applications built on OpenAI, Claude, and Gemini
- **RAG Systems** — production retrieval pipelines with LangChain, Pinecone, and LlamaIndex
- **Computer Vision** — real-time deep learning systems (CNN, LSTM, GRU, ResNet)
- **AI Automation** — agent-driven workflows connecting CRMs, messaging platforms, and APIs

## Contact

- **Email:** adarshkadam635@gmail.com
- **LinkedIn:** [linkedin.com/in/adarshkadam635](https://linkedin.com/in/adarshkadam635)
- **GitHub:** [github.com/adarshkadam635](https://github.com/adarshkadam635)

## License

MIT © Adarsh Kadam
