# Operation Liftoff

**Personal Mission Control OS** — a scoped progress tracker that turns goals into structured daily work and uses AI to propose one careful improvement at a time.

> Currently in **Phase 1 (Foundation)**. The public face of the project is the Pre-Flight page while the real dashboard is under active construction.

---

## What it does

1. You input a goal and relevant details.
2. The app turns it into visual, trackable structure (goal cards + linked schedule / checklist).
3. You work through the daily checklist and optionally add notes.
4. The backend periodically packages recent history into a prompt.
5. **Groq** analyzes the data and proposes **one specific, explained change**.
6. You approve or dismiss — nothing is applied automatically.
7. Approved changes update goals and schedule in the database.

This is deliberately designed as a practical, personal tool rather than a generic productivity app.

---

## Current Status

| Phase | Focus                                    | Status      |
| ----- | ---------------------------------------- | ----------- |
| 1     | Next.js dashboard UI + Pre-Flight page   | **Active**  |
| 2     | FastAPI backend + PlanetScale MySQL CRUD | Not started |
| 3     | Goal Planning UI                         | Not started |
| 4     | Groq integration + approve/dismiss flow  | Not started |
| 5     | Auth.js + protected routes               | Not started |
| 6–7   | Mobile (Flutter) / Hardware (ESP32)      | Parked      |

The Pre-Flight page (`/pre-flight`) is the public landing page while the full dashboard is built.  
It is controlled by the `IS_MAINTENANCE_MODE` flag in `src/app/layout.js`.

---

## Tech Stack

| Layer    | Technology                                                  | Notes                          |
| -------- | ----------------------------------------------------------- | ------------------------------ |
| Frontend | Next.js 16 (App Router) + Tailwind CSS v4 + Motion + Lucide | Deployed on Vercel             |
| Backend  | Python FastAPI                                              | Deployed on Railway            |
| Database | PlanetScale (MySQL-compatible)                              | Shared DB with split ownership |
| AI       | Groq                                                        | Structured output, free tier   |
| Auth     | Auth.js (Credentials + Google)                              | Planned for Phase 5            |

**Database ownership split (intentional):**

- Prisma (Next.js side) → only Auth.js tables
- SQLAlchemy (FastAPI side) → all business logic tables (`goals`, `tasks`, `daily_logs`, `task_completions`, `ai_proposals`)

---

## Getting Started (Local Development)

```bash
# Clone the repo
git clone https://github.com/FrozenAlgo/operation-liftoff.git
cd operation-liftoff

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

While `IS_MAINTENANCE_MODE = true` in `src/app/layout.js`, every route will show the Pre-Flight page.  
Set it to `false` when you want to work on the real dashboard routes.

---

## Project Structure (Frontend)

```
src/
├── app/
│   ├── layout.js              # Root layout + maintenance mode switch
│   ├── page.js                # Public gateway
│   ├── pre-flight/            # Public "under construction" page
│   ├── login/
│   └── dashboard/             # Protected app (Command Center, Goals, Applications, Schedule, Insights, Settings)
├── components/
│   ├── preFlightUI.js
│   ├── metricCard.js
│   ├── navbar.js
│   ├── starfieldBackground.js
│   └── styleElements/
└── lib/                       # API helpers & auth helpers (coming)
```

Full detailed structure, database schema, and API endpoints are documented in `Operation_Liftoff_Build_Manual_v2.md`.

---

## Development Philosophy

- **No logic copy-pasting from AI tools.**  
  AI is used only for visual/UI reference. All architecture and business logic is written and understood by hand.
- Prefer small, shippable increments over polished-but-incomplete features.
- The daily job-search Applications block always takes priority over this project.

---

## Roadmap Notes

- Phase 1 focuses on solid UI, routing, and a clean public Pre-Flight face.
- Phase 2 introduces the real backend and database so the frontend can stop using mock data.
- Phase 4 is where the “one carefully explained suggestion” AI behavior is implemented.
- Mobile and hardware (ESP32) ideas are intentionally parked until the core web product is real and useful.

---

## Author

**Muhammad Arham Rehan**  
BSCS — SZABIST Islamabad  
[GitHub](https://github.com/FrozenAlgo) · [Portfolio](https://portfolio-kappa-nine-204xtzt9as.vercel.app/)

---

_Built as a practical learning project and personal operating system._
