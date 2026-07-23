# Oblivion

Anurag Kumar's portfolio site. A Spring Boot API serving a React frontend —
systems that hold, when everything tends toward oblivion.

```
oblivion/
├── backend/    Spring Boot 3 (Java 17) REST API
└── frontend/   React 18 + Vite
```

## Running it

### Backend (needs Java 17+ and Maven)

```bash
cd backend
mvn spring-boot:run
```

Runs on `http://localhost:8080`. Endpoints:

- `GET /api/profile`
- `GET /api/education`
- `GET /api/experience`
- `GET /api/projects`
- `GET /api/skills`
- `GET /api/stats`
- `POST /api/contact` — body: `{ "name", "email", "message" }`

### Frontend (needs Node 18+)

```bash
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173` and expects the backend at
`http://localhost:8080` (configurable via `VITE_API_BASE_URL` — copy
`.env.example` to `.env` to change it).

For a production build: `npm run build` outputs static files to
`frontend/dist`, which you can serve from any static host (or point Spring
Boot at, if you'd rather ship a single deployable).

## Before you publish this

Search the codebase for `TODO` — a few things are placeholders on purpose:

- `backend/.../data/PortfolioData.java` — your real email, GitHub, LinkedIn,
  resume link, and exact employment dates.
- `frontend/public/` — drop a `resume.pdf` here if you want the résumé link
  in the profile data to resolve to something real.
- The contact form currently just logs submissions server-side
  (`ContactController`). Wire in an email send (e.g. JavaMailSender) or a
  database write when you're ready to actually receive messages.

## Extending it

All content lives as plain data in `PortfolioData.java` — no database, no
migrations. Add a project, a job, a skill group, by editing the lists there
and restarting the backend. The frontend just renders whatever the API
returns, so it picks up changes automatically.
