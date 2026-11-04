# Oblivion — Project Reference

Everything you need to pick this back up: structure, stack, data schema, design
tokens, and what's still left to do. Pair this with `README.md` (run
instructions) — this doc is about the *shape* of the project, not how to boot it.

---

## 1. Overview

Oblivion is Anurag Kumar's portfolio site: a Spring Boot REST API serving
static content, consumed by a React SPA. No database — all content lives as
plain Java data in one file. Two independently-runnable apps, talking over
HTTP on localhost during dev.

```
Browser  ──►  React (Vite, :5173)  ──►  Spring Boot API (:8080)  ──►  in-memory data
```

---

## 2. Tech stack

| Layer | Choice | Version |
|---|---|---|
| Backend language | Java | 17 |
| Backend framework | Spring Boot (`spring-boot-starter-web`, `-validation`) | 3.3.2 |
| Backend build | Maven | — |
| Backend data | In-memory records (`PortfolioData.java`) — no DB | — |
| Frontend framework | React | 18.3.1 |
| Frontend build tool | Vite | 5.4.x |
| Frontend styling | Plain CSS with custom properties (no framework) | — |
| Frontend HTTP | native `fetch`, no axios/react-query | — |

No ORM, no auth, no persistence layer — intentionally minimal. See §7 for
what you'd bolt on if this grows past a portfolio.

---

## 3. Project structure

```
oblivion/
├── README.md                  Run instructions
├── PROJECT_NOTES.md           This file
│
├── backend/
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/oblivion/portfolio/
│       │   ├── OblivionApplication.java     Spring Boot entry point
│       │   ├── config/
│       │   │   └── WebConfig.java           CORS setup (reads allowed origins from properties)
│       │   ├── controller/
│       │   │   ├── PortfolioController.java GET endpoints (profile/education/experience/projects/skills/stats)
│       │   │   └── ContactController.java   POST /api/contact
│       │   ├── data/
│       │   │   └── PortfolioData.java       ⭐ ALL SITE CONTENT LIVES HERE
│       │   ├── model/
│       │   │   ├── Profile.java
│       │   │   ├── Education.java
│       │   │   ├── Achievement.java
│       │   │   ├── Experience.java
│       │   │   ├── Project.java
│       │   │   ├── SkillGroup.java
│       │   │   ├── Stat.java
│       │   │   ├── ContactRequest.java      incoming, validated
│       │   │   └── ContactResponse.java     outgoing ack
│       │   └── exception/
│       │       └── GlobalExceptionHandler.java  turns validation errors into JSON
│       └── resources/
│           └── application.properties       port, CORS origins
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── .env.example                VITE_API_BASE_URL
    ├── public/                     static assets (drop resume.pdf here)
    └── src/
        ├── main.jsx                 React root
        ├── App.jsx                  fetches all data, owns loading/error state, lays out sections
        ├── index.css                ⭐ ALL STYLES + DESIGN TOKENS LIVE HERE
        ├── api/
        │   └── client.js            fetch wrapper, one function per endpoint
        └── components/
            ├── Navbar.jsx
            ├── Hero.jsx              renders <NodeMap /> + status line + CTAs
            ├── NodeMap.jsx           ⭐ signature SVG (career path as constellation)
            ├── About.jsx
            ├── Experience.jsx        renders timeline from experience[]
            ├── Stats.jsx             telemetry strip (LeetCode count etc.)
            ├── Skills.jsx            renders grouped chips
            ├── Projects.jsx          renders project cards
            ├── Contact.jsx           form + POST to /api/contact + validation error display
            └── Footer.jsx
```

**The two files you'll touch most:** `PortfolioData.java` (what the site
says) and `index.css` (how it looks). Everything else is plumbing that
shouldn't need to change for content updates.

---

## 4. API schema

Base URL: `http://localhost:8080` (dev). All responses are JSON, no auth,
CORS restricted to `app.cors.allowed-origins` in `application.properties`
(currently `localhost:5173` and `localhost:3000`).

### `GET /api/profile` → `Profile`
```json
{
  "name": "string",
  "title": "string",
  "location": "string",
  "tagline": "string",
  "bio": "string",
  "email": "string",
  "github": "string (url)",
  "linkedin": "string (url)",
  "resumeUrl": "string (path)",
  "status": "string"
}
```

### `GET /api/education` → `Education`
```json
{ "institution": "string", "degree": "string", "duration": "string", "detail": "string" }
```

### `GET /api/achievements` → `Achievement[]`
```json
{ "title": "string", "description": "string", "detail": "string" }
```

### `GET /api/experience` → `Experience[]`
```json
{
  "company": "string",
  "role": "string",
  "start": "string",
  "end": "string",
  "location": "string",
  "highlights": ["string"],
  "stack": ["string"]
}
```

### `GET /api/projects` → `Project[]`
```json
{
  "name": "string",
  "tagline": "string",
  "description": "string",
  "stack": ["string"],
  "repoUrl": "string | null",
  "liveUrl": "string | null"
}
```

### `GET /api/skills` → `SkillGroup[]`
```json
{ "category": "string", "items": ["string"] }
```

### `GET /api/stats` → `Stat[]`
```json
{ "value": "string", "label": "string", "detail": "string" }
```

### `POST /api/contact`
Request body (`ContactRequest`, validated):
```json
{ "name": "string, required, ≤120 chars", "email": "string, required, valid email", "message": "string, required, ≤2000 chars" }
```
Success (200) → `ContactResponse`:
```json
{ "success": true, "message": "Thanks - your message has been received." }
```
Validation failure (400):
```json
{ "success": false, "errors": { "email": "Enter a valid email address" } }
```
Currently the handler only **logs** the message server-side (see
`ContactController`) — no email send, no persistence yet.

All models are Java `record`s — Jackson serializes them via their accessor
methods automatically, no DTO mapping layer needed.

---

## 5. Design tokens (`frontend/src/index.css`)

The whole visual language is CSS custom properties on `:root`. Change these
and the entire site re-themes.

| Token | Value | Used for |
|---|---|---|
| `--void` | `#0a0e16` | page background |
| `--panel` | `#131822` | cards, chips, nav dropdown |
| `--panel-border` | `#232a38` | borders, dividers |
| `--starlight` | `#ece8dc` | primary text |
| `--ash` | `#8a9099` | secondary/muted text |
| `--signal` | `#d9a657` | primary accent (CTA, node-map dots, stat values) |
| `--horizon` | `#5fa8b0` | secondary accent (eyebrows, links, focus ring) |
| `--danger` | `#e08585` | form error states |
| `--font-display` | `Fraunces` | hero name, section H2/H3 |
| `--font-body` | `Manrope` | paragraph text |
| `--font-mono` | `JetBrains Mono` | eyebrows, nav, chips, stat labels, status line |

Fonts load via a Google Fonts `@import` at the top of `index.css` — no local
font files. Naming convention on classes is loose BEM (`.block__element`,
`.block__element--modifier`); every selector is class-based (no bare element
selectors for spacing) so nothing you add will unexpectedly collide.

**The signature element** is `NodeMap.jsx` — hand-coded SVG, not a chart
library. Nodes and edges are plain arrays (`NODES`, `EDGES`, `STARS`) at the
top of the file, so adding a fifth career milestone is just adding a node and
an edge, no redesign needed.

---

## 6. Known placeholders (search for `TODO`)

| Location | What to fill in |
|---|---|
| `backend/.../data/PortfolioData.java` | Real email, GitHub URL, LinkedIn URL, exact Planview start date, real repo URLs for ExpenseIQ/Oblivion |
| `frontend/public/` | Drop a `resume.pdf` here to make `resumeUrl` resolve |
| `ContactController.java` | Wire in an actual email send or DB write — right now it only logs |

---

## 7. If you extend this later

- **Add a project/job/skill**: edit the relevant list in `PortfolioData.java`
  and restart the backend. The frontend just renders whatever the API
  returns — no frontend changes needed for content-only updates.
- **Add a new section**: create a component in `frontend/src/components/`,
  add matching styles to `index.css`, wire it into `App.jsx`. If it needs its
  own data, add a model + a field on an existing endpoint (or a new one) in
  the backend.
- **Persistence for contact messages**: swap the `log.info(...)` line in
  `ContactController` for a `JavaMailSender` call or a JPA repository write —
  would mean adding `spring-boot-starter-mail` or `-data-jpa` + a DB driver
  to `pom.xml`.
- **Deploying**: `npm run build` in `frontend/` outputs static files to
  `dist/`; `mvn package` in `backend/` produces a runnable jar. They can ship
  to separate hosts (e.g., Vercel/Netlify + Render/Railway) as long as CORS
  and `VITE_API_BASE_URL` point at each other correctly, or you can serve the
  built frontend as static resources from the Spring Boot jar itself.
