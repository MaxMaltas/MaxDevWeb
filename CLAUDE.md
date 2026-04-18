# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ARCH.SYS is a personal portfolio website for a DevOps, Cybersecurity & AI professional (Max Maltas). It is a pure frontend React SPA with no backend, no database, and no CMS — all content is managed via static JS data modules.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

No linting, formatting, or test scripts are configured.

## Architecture

**Stack:** React 18 + React Router v6 + Vite 5 + CSS Modules (no TypeScript, no external CSS framework)

**Path alias:** `@` resolves to `./src`

### Data Flow

All content lives in `/src/data/` as plain JS arrays with exported utility functions:

- `projects.js` → `getFeaturedProjects()`, `getAllProjects()`, `getProjectBySlug(slug)`
- `posts.js` → `getFeaturedPost()`, `getRecentPosts()`, `getPostBySlug(slug)`
- `services.js` → services array
- `navigation.js` → nav links + social links

To add/edit site content (projects, blog posts, services), edit only these data files.

### Routing (App.jsx)

| Route | Component |
|---|---|
| `/` | `Home` — composite page assembled from section components |
| `/portfolio` | `Portfolio` |
| `/servicios` | `Servicios` |
| `/blog` | `Blog` |
| `/blog/:slug` | `BlogPost` — looks up post via `getPostBySlug(slug)` |
| `*` | `NotFound` |

Home page anchor links (`#hero`, `#about`, `#contacto`) are handled by the `Sidebar` component using `scrollIntoView` rather than React Router.

### Component Organization

```
src/components/layout/   # Sidebar (nav + mobile menu), Footer
src/components/sections/ # Full-width page sections used in Home and other pages
src/components/ui/       # Reusable primitives: Button, Tag, Cursor, ScrollToTop
src/pages/               # Route-level components
src/hooks/               # useCursor, useTypewriter, useScrollFade
```

Every component has a paired `Component.module.css` — one CSS file per JSX file, no exceptions.

### Design System (src/styles/global.css)

**Color tokens:**
```css
--neon: #00CC7A      /* primary green */
--cyan: #00B4D8      /* secondary */
--purple: #8B5CF6    /* accent */
--gold: #F0C040      /* accent */
```

**Typography:**
- `Bebas Neue` — display/headings
- `JetBrains Mono` — nav, status, mono text
- `DM Sans` — body

**Layout globals:** `.sec-inner` (max-width container), `.sec-divider`, `.sec-intro`, `.fade-up` (scroll animation target), `.scanlines`

**Mobile breakpoint:** `900px` — sidebar collapses to hamburger menu.

**Scroll animations:** Add `.fade-up` to any element. `useScrollFade` attaches an IntersectionObserver that adds the `.visible` class. Use delay helpers `.fade-up-d1` through `.fade-up-d4` for staggered reveals.

### Key Conventions

**Button component** (`src/components/ui/Button.jsx`) — use `to` prop for React Router `<Link>`, `href` for external `<a>`, or neither for a `<button>`. Pass `variant="primary"` for filled style.

**Project/service accent values:** `accent` prop accepts `"neon" | "cyan" | "purple" | "gold"` — maps to CSS custom property colors. `gradient` prop accepts `"devops" | "cyber" | "ai" | "cloud"`.

**No state management library** — all state is local via `useState`. No global store.

**Google Tag Manager** is loaded in `index.html` (GTM-52W32BGX). Analytics events are not tracked manually in JS.
