# daily-dash

A minimal frontend starter built with a modern React stack.

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | [React](https://react.dev) | 19 |
| Language | [TypeScript](https://www.typescriptlang.org) | 6 |
| Build tool | [Vite](https://vite.dev) | 8 |
| Styling | [Tailwind CSS](https://tailwindcss.com) | 4 |
| Linting | [ESLint](https://eslint.org) + typescript-eslint | 10 / 8 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
daily-dash/
├── public/          # Static assets served as-is
├── src/
│   ├── main.tsx     # App entry point
│   ├── App.tsx      # Root component
│   └── index.css    # Global styles / Tailwind base
├── index.html       # HTML entry point
├── vite.config.ts   # Vite configuration
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```
