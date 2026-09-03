# TaxEdge Web

Web application for TaxEdge — GST, income tax, loans, insurance, payments and
documents for Indian businesses.

## Stack

React 19 · TypeScript · Vite · React Router · Zustand · Axios · Zod · plain CSS

## Getting started

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173 with `VITE_ENABLE_MOCKS=true`, so every
screen works without a backend. **Demo OTP: `123456`** (any valid 10-digit
mobile and any password signs you in).

Point it at a real API by editing `.env.development`:

```
VITE_API_BASE_URL=http://localhost:8000/api
VITE_ENABLE_MOCKS=false
```

## Scripts

| Command             | What it does                     |
|---------------------|----------------------------------|
| `npm run dev`       | Dev server with HMR              |
| `npm run build`     | Type-check and build to `dist/`  |
| `npm run preview`   | Serve the production build       |
| `npm run typecheck` | `tsc -b`                         |
| `npm run lint`      | `oxlint`                         |

## Structure

```
src/
├── app/       routing, providers, layouts
├── core/      api client, auth, config, errors, storage
├── modules/   one folder per business domain
├── shared/    UI kit, hooks, utils, types, theme
├── store/     global Zustand slices
└── styles/    reset, global, utilities
```

`src/modules/gst` is the reference module — copy its shape.
See [ARCHITECTURE.md](./ARCHITECTURE.md) for the layer rules.

## Status

| Module | State |
|---|---|
| authentication | login, register, OTP, passcode, create profile |
| dashboard | stats, quick services, activity, deadlines |
| gst | list, filters, registration form, returns table, detail + timeline |
| itr, loans, insurance, payments, documents, applications, profile, chat, support | scaffolded (types, api, service, hook, page, route) |
