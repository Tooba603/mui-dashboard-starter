# Vite + React + MUI starter

Opinionated **Vite + React 19 + Material UI 9** template with **feature-based folders**, **demo auth** (login / signup UI, no backend), **dashboard shell** (sidebar + app bar), **API examples**, **react-hook-form + Yup**, **light/dark mode** (Redux + **redux-persist**), **React Router 7** lazy routes, **react-helmet-async**, and **react-toastify**.

---

## What’s included

| Area | Location |
|------|----------|
| **Bootstrap** | `src/main.jsx` — Redux `PersistGate`, `BrowserRouter`, theme, toasts · `src/app/App.jsx` — `Suspense` + routes |
| **Routes** | `src/app/routes.jsx` — public, auth, protected `/dashboard/*`, catch-all → `/` |
| **Marketing** | `src/features/marketing/` — template home + about (`TemplateShell`) |
| **Auth** | `src/features/auth/` — login & signup pages, Yup schemas |
| **Dashboard** | `src/features/dashboard/` — layout, overview, API demo, forms demo |
| **API** | `src/core/api/client.js` (Axios + `VITE_API_URL` + Bearer from Redux), `jsonPlaceholder.js` (public JSONPlaceholder example) |
| **State** | `src/redux/` — `user` session, `ui` color mode (persisted via `redux-persist`, localStorage) |
| **Theme** | `src/theme/` — palette, typography, shadows, `buildPalette.js` (dark overrides) |
| **UI shell** | `src/shared/components/` — `RequireAuth`, `ThemeModeToggle` · `src/components/loader/` — lazy-route fallback |

### Routes

| Path | Notes |
|------|--------|
| `/` | Marketing / template home |
| `/about` | Sample public page |
| `/login`, `/signup` | Demo auth (no API) |
| `/dashboard` | Protected; overview |
| `/dashboard/api-demo` | JSONPlaceholder + optional `apiClient` probe |
| `/dashboard/forms` | RHF + Yup + MUI `Select` example |
| `*` | Redirects to `/` |

---

## Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm**

---

## Quick start

```bash
npm install
npm run dev
```

Dev and preview default to port **3000** (`vite.config.js`).

### Environment (optional)

Create `.env.development` / `.env.production` as needed:

```env
# Optional — backend base URL for src/core/api/client.js (dashboard API demo)
VITE_API_URL=http://localhost:8000/api
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server + HMR |
| `npm run build` | Production build → `dist/` |
| `npm run build:dev` | `vite build --mode development` |
| `npm run build:prod` | `vite build --mode production` |
| `npm run preview` | Serve `dist/` locally (port 3000 by config) |
| `npm run lint` | ESLint |

---

## Folder architecture (feature-based)

- **`src/app/`** — `App.jsx`, central `routes.jsx`
- **`src/features/<name>/`** — vertical slices: `pages/`, `components/`, optional `schemas/`
- **`src/core/`** — cross-cutting infrastructure (e.g. `core/api`)
- **`src/shared/`** — reused helpers/components across features
- **`src/theme/`**, **`src/redux/`** — global theme and client state
- **`src/components/`** — app-wide pieces not tied to one feature (e.g. route `Suspense` loader)

Add a feature under `src/features/<name>/` and register routes in `src/app/routes.jsx`.

---

## Auth & dashboard (demo)

- **Login** (`/login`): any email + password (≥ 6 characters) dispatches `loginSuccess` and redirects to `/dashboard` (or the saved path if redirected from a protected route).
- **Signup** (`/signup`): Yup-validated fields; redirects to login with a short hint (no API).
- **Dashboard**: `RequireAuth` + `DashboardLayout` with nested routes above.

Replace Redux `loginSuccess` / form `onSubmit` handlers with real API calls when your backend exists.

---

## Build & deploy

- `vite.config.js` splits vendor chunks by top-level `node_modules` package name.
- Ship the **`dist/`** folder to any static host or CDN.

