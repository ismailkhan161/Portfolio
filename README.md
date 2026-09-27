# Ismail Khan | Full Stack Developer Portfolio

A full-stack portfolio: **React.js (Vite)** frontend, **Node.js + Express.js** REST API, **MongoDB** for contact messages.
Frontend and backend are separate apps so each deploys on its own.

## Project structure

```text
portfolio/
├── frontend/                     React + Vite single-page app
│   ├── index.html                SEO, Open Graph, favicon, no-flash theme script
│   ├── public/                   favicon.svg, robots.txt (put screenshots in public/screenshots/)
│   ├── .env.example              VITE_API_URL
│   └── src/
│       ├── config/site.js        YOUR details and links (edit this first)
│       ├── data/                 skills.js, journey.js, projects.js (fallback copy)
│       ├── components/           Navbar, Hero, About, Skills, Architecture, Projects,
│       │                         ProjectCard, ProjectModal, Journey, Contact, Footer, ...
│       ├── hooks/                useTheme, useActiveSection, useProjects
│       ├── services/api.js       fetch wrapper (timeout, typed errors)
│       ├── utils/                validation, links, motion helpers
│       └── styles/               tokens.css (colors/fonts), base, layout, sections
└── backend/
    ├── server.js                 loads env, connects to MongoDB, starts the server
    ├── app.js                    Express app: helmet, CORS, JSON parsing, routes, errors
    ├── config/                   env.js (validation), db.js (Mongoose connection)
    ├── controllers/              contactController.js, projectController.js
    ├── models/ContactMessage.js  name, email, message, createdAt
    ├── routes/                   /api/contact, /api/projects, /api/health
    ├── middleware/               validateContact, rateLimiter, notFound, errorHandler
    ├── data/projects.js          project list served by GET /api/projects
    └── .env.example              PORT, MONGODB_URI, CLIENT_URL
```

## Run it locally

Requires Node.js 18+ and a MongoDB database (a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster works, or a local `mongod`).

```bash
# 1. Backend
cd backend
cp .env.example .env        # then set MONGODB_URI
npm install
npm run dev                 # http://localhost:5000

# 2. Frontend (new terminal)
cd frontend
cp .env.example .env        # VITE_API_URL=http://localhost:5000
npm install
npm run dev                 # http://localhost:5173
```

## Make it yours

Search the project for `ADD_` to find every placeholder. Buttons that still point at a placeholder are shown
inactive (dimmed, not clickable) instead of linking somewhere broken, and become live as soon as you fill them in.

| Placeholder | Where to set it |
| --- | --- |
| `ADD_YOUR_EMAIL`, `ADD_GITHUB_URL`, `ADD_LINKEDIN_URL`, `ADD_CV_URL` | `frontend/src/config/site.js` |
| `ADD_LIVE_DEMO_URL`, `ADD_GITHUB_URL` (per project) | `backend/data/projects.js` **and** `frontend/src/data/projects.js` |
| Project screenshots | add files to `frontend/public/screenshots/`, then list them in `screenshots: [{ src, alt }]` |
| Add a technology | append `{ name, icon }` to a group in `frontend/src/data/skills.js` |
| Colors / fonts | `frontend/src/styles/tokens.css` |

**About the two project files:** the site loads projects from `GET /api/projects` (backend is the source of truth) and
falls back to the copy in `frontend/src/data/projects.js` if the API cannot be reached, so the page is never empty
(useful when a free backend is asleep). Keep the two files in sync.

**Open Graph image:** `index.html` has title/description tags. Once you have a domain, add `og:url` and an `og:image`
(a 1200x630 image) so links preview nicely when shared.

## API

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Status and database connection state |
| `GET` | `/api/projects` | `{ success, data: [...projects] }` |
| `POST` | `/api/contact` | Body `{ name, email, message }`. `201` on success, `400` with `{ errors: { field: message } }` when invalid, `429` when rate limited |

Messages are stored in the `contactmessages` collection. Read them in Atlas (Browse Collections) or with `mongosh`.

## Deploy to the cloud

Deploy the **backend first** (the frontend needs its URL), then the frontend.

### 1. Database: MongoDB Atlas
1. Create a free cluster and a database user (username + password).
2. Network Access: allow your host's IPs. For platforms without fixed IPs, `0.0.0.0/0` is the common choice; keep the password strong.
3. Copy the connection string (`mongodb+srv://...`) and put your database user's password in it.

### 2. Backend (Render, Railway, Fly.io, or any Node host)
- Root directory: `backend`
- Build command: `npm install`
- **Start command: `npm start`**
- Environment variables:

| Variable | Value |
| --- | --- |
| `MONGODB_URI` | your Atlas connection string |
| `CLIENT_URL` | your frontend's public URL, e.g. `https://your-site.vercel.app` (no trailing slash; comma-separate several) |
| `NODE_ENV` | `production` |
| `PORT` | usually injected by the host; leave it unset unless told otherwise |

Check it: open `https://<your-backend>/api/health`. It should return `{"status":"ok","database":"connected"}`.

### 3. Frontend (Vercel, Netlify, Cloudflare Pages, or Render Static Site)
- Root directory: `frontend`
- **Build command: `npm run build`**
- Output directory: `dist`
- Environment variable: `VITE_API_URL` = your backend's public URL (no trailing slash)

`VITE_` variables are baked in at build time, so **redeploy the frontend after changing `VITE_API_URL`**.
The site is a single page, so no rewrite rules are needed.

### Production checklist
- [ ] `/api/health` reports `database: connected`
- [ ] Send a test message from the live site and confirm it appears in the `contactmessages` collection
- [ ] `CLIENT_URL` matches the frontend URL exactly (scheme + domain, no trailing slash), otherwise the browser blocks requests (CORS)
- [ ] Every `ADD_` placeholder replaced
- [ ] No `.env` file committed (they are git-ignored; only `.env.example` files are tracked)

Free backend tiers may sleep when idle, so the first request can take 30-60 seconds. The contact form allows 30 seconds
before it reports an error, and the project list falls back to the bundled copy.

## Notes on the design
- Light and dark themes follow the visitor's system setting on first visit, then remember the toggle.
- Animations respect `prefers-reduced-motion`; the particle background is disabled entirely in that mode.
- Security basics: `helmet`, CORS allow-list, 10 kB body limit, server-side validation, rate limiting on `/api/contact`,
  and no secrets in the frontend.
