# daash (daily-dash)

A personal, agentic morning dashboard. A set of backend agents pull in the pieces of your day scattered across different services — calendar, coursework, gym plan, to-dos, job postings — cache them in Postgres, and (eventually) hand them to Claude to synthesize into a single daily briefing rendered on a React dashboard.

Status: early build. Database schema is live, the calendar agent works end-to-end, and the frontend has mockup components for each data source. Most agents and the orchestrator are not yet implemented — see [Roadmap](#roadmap).

## How it works

Each data source gets its own **agent**: a small backend function that

1. checks Postgres (`agent_cache`) for a payload that's still within its TTL
2. if fresh, returns the cached payload immediately
3. if stale or missing, fetches live data (via an API or an MCP-connected Claude call), normalizes it into a fixed JSON shape, writes it to the cache, and returns it

An **orchestrator** (planned) will run all agents in parallel, merge their outputs, flag scheduling conflicts, and pass the combined context to Claude for a synthesized daily summary. The frontend then renders that summary.

## Tech stack

| Layer | Tool |
|---|---|
| Frontend | React 19, Vite, TypeScript, Tailwind CSS 4 |
| Backend | TypeScript, `tsx`, `pg` |
| Database | Neon (serverless Postgres) |
| LLM | Claude (`@anthropic-ai/sdk`), via MCP server connections for tool-calling |
| Linting | ESLint + typescript-eslint |

## Project structure

```
daily-dash/
├── src/                        # Vite/React app root (entry point)
├── frontend/
│   ├── src/components/         # Dashboard UI components, one per data source
│   │   ├── GoogleCalendar.tsx
│   │   ├── AssignmentsDue.tsx  # Canvas
│   │   ├── GymTd.tsx           # Gym plan
│   │   ├── TodoList.tsx
│   │   ├── NewApplications.tsx # Job postings
│   │   ├── NewsSummary.tsx
│   │   ├── JournalEntry.tsx
│   │   ├── WeatherWidget.tsx
│   │   ├── Tags.tsx
│   │   └── ...
│   └── tester/                 # Standalone scripts for exercising agents directly
│       └── test-calendar.ts
├── backend/
│   ├── db.ts                   # Shared Neon/Postgres connection pool
│   ├── setup.ts                # Creates DB schema (agent_cache, seen_jobs, conflicts, user_config)
│   └── agents/
│       └── calendarAgent.ts    # First agent: Google Calendar via MCP, cached in Postgres
├── public/
└── ...config files (vite, tailwind, eslint, tsconfig)
```

## Database schema

Set up via `backend/setup.ts`:

- **`agent_cache`** — one row per agent (`agent_id`), storing its last JSON payload, fetch time, and TTL. This is the cache every agent reads/writes.
- **`seen_jobs`** — dedup log of job postings already surfaced, so the jobs agent only reports new listings.
- **`conflicts`** — scheduling conflicts detected by the orchestrator (e.g. gym block overlapping a class), with a `resolved` flag.
- **`user_config`** — slow-changing preferences (wake time, preferred workout window, job filters, deprioritized Canvas courses, etc.).

## Agents

| Agent | Source | Status |
|---|---|---|
| Calendar | Google Calendar, via MCP | Done — `backend/agents/calendarAgent.ts` |
| Canvas | Canvas REST API | Not started |
| Gym plan | User-uploaded PDF (`pdf-parse` / LlamaParse) | Not started |
| To-dos | Notion API or local JSON | Not started |
| Job postings | Web scraper (Playwright / Bright Data), deduped via `seen_jobs` | Not started |
| Orchestrator | Merges all agent outputs, resolves conflicts, synthesizes via Claude | Not started |

Each agent follows the same cache-then-fetch pattern described above, using a 30-minute TTL by default (`ttl_seconds` in `agent_cache`).

## Getting started

Frontend:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Backend:

```bash
cd backend
npm install
cp .env.example .env   # set DATABASE_URL to your Neon connection string
npm run setup           # creates tables in Postgres
```

Test an agent directly (no server needed):

```bash
npx tsx frontend/tester/test-calendar.ts
```

Run it twice in a row — the second run should be near-instant and log `Calendar: using cached data`, confirming the cache is working.

## Scripts

**Root (frontend)**

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

**`backend/`**

| Command | Description |
|---|---|
| `npm run setup` | Create/update Postgres schema via `setup.ts` |

## Roadmap

- [x] Neon Postgres schema (`agent_cache`, `seen_jobs`, `conflicts`, `user_config`)
- [x] Calendar agent with caching
- [ ] Canvas agent
- [ ] Gym PDF-parsing agent
- [ ] To-do agent
- [ ] Job-posting scraper agent with dedup
- [ ] Orchestrator that runs all agents in parallel and synthesizes a briefing via Claude
- [ ] Wire the daily briefing into the frontend dashboard
- [ ] Redis for hot caching / run locking (prevent concurrent orchestrator runs)
