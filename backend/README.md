# Job Matching Platform — Backend

A NestJS REST API that connects job seekers with employers using a skill-based matching system. Built as an internship project at **Damina Tech**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | NestJS (TypeScript) |
| Database | PostgreSQL |
| ORM | TypeORM |
| Auth | JWT (JSON Web Tokens) |
| Runtime | Node.js |

---

## Project Structure

```
backend/
├── src/
│   ├── auth/           # Registration, login, JWT strategy
│   ├── users/          # User model & role management
│   ├── profiles/       # Job seeker profile (skills, education, experience)
│   ├── jobs/           # Job posting CRUD (employer)
│   ├── applications/   # Job application system
│   ├── matching/       # Skill-based recommendation engine
│   ├── admin/          # Admin panel (user/job management, stats)
│   └── main.ts
├── .env
├── package.json
└── tsconfig.json
```

---

## Modules

### Auth
- `POST /auth/register` — Register as job seeker or employer
- `POST /auth/login` — Login and receive JWT token

### Users
- Role-based access control (job seeker / employer / admin)

### Profiles
- `POST /profiles` — Create job seeker profile
- `GET /profiles/:id` — Get profile
- `PATCH /profiles/:id` — Update profile (skills, education, experience)

### Jobs
- `POST /jobs` — Employer posts a job
- `GET /jobs` — List all jobs (public)
- `GET /jobs/:id` — Get job details
- `PATCH /jobs/:id` — Update job
- `DELETE /jobs/:id` — Delete job

### Applications
- `POST /applications` — Job seeker applies to a job
- `GET /applications/my` — View my applications
- `GET /applications/job/:jobId` — Employer views applicants
- `PATCH /applications/:id/status` — Accept or reject applicant

### Matching
- `GET /matching/jobs` — Recommended jobs for logged-in job seeker
- `GET /matching/candidates/:jobId` — Recommended candidates for a job

### Admin
- `GET /admin/users` — List all users
- `DELETE /admin/users/:id` — Delete/block user
- `GET /admin/jobs` — Manage all jobs
- `GET /admin/stats` — Platform statistics

---

## ER Diagram

> See [`/docs/er-diagram.png`](./docs/er-diagram.png) for the full Entity-Relationship Diagram.

**Key Entities:** `User` → `Profile` → `Skills` ↔ `Job` ← `Application`

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env
# Fill in your DB credentials and JWT secret

# 3. Run the database (Docker)
docker compose up -d

# 4. Start the server
npm run start:dev
```

### Environment Variables (`.env`)

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=job_matching
JWT_SECRET=your_jwt_secret
```

---

## Progress

| Week | Feature | Status |
|---|---|---|
| Week 1 | Project setup & architecture | ✅ Done |
| Week 2 | Authentication (register/login/JWT) | ✅ Done |
| Week 3 | Job seeker profile | ✅ Done |
| Week 4 | Employer + job posting | ✅ Done |
| Week 5 | Job application system | ✅ Done |
| Week 6 | Employer dashboard | 🔄 Upcoming |
| Week 7 | Matching system | 🔄 Upcoming |
| Week 8 | Admin dashboard | 🔄 Upcoming |

---

## Author

**Hanan** — Intern at Damina Tech  
Supervisor: Mr. Ararso
