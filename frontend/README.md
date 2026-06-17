# Job Matching Platform — Frontend

A Next.js frontend for the Job Matching Platform, providing separate dashboards for job seekers, employers, and admins. Built as an internship project at **Damina Tech**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (React) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | JWT (stored in localStorage) |

---

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── login/page.tsx        # Login
│   │   ├── register/page.tsx     # Register
│   │   ├── dashboard/page.tsx    # User dashboard
│   │   ├── profile/page.tsx      # Job seeker profile
│   │   ├── jobs/
│   │   │   ├── page.tsx          # Jobs list
│   │   │   └── [id]/page.tsx     # Job details
│   │   ├── applications/page.tsx # My applications
│   │   └── admin/page.tsx        # Admin panel
│   ├── components/               # Shared UI components
│   └── lib/                      # API helpers, auth utils
├── public/
├── .env.local
└── package.json
```

---

## Pages

| Page | Route | Who Sees It |
|---|---|---|
| Home | `/` | Everyone |
| Register | `/register` | Everyone |
| Login | `/login` | Everyone |
| Dashboard | `/dashboard` | Logged-in users |
| Profile | `/profile` | Job seeker |
| Jobs List | `/jobs` | Everyone |
| Job Details | `/jobs/:id` | Everyone |
| Post a Job | `/jobs/new` | Employer |
| My Applications | `/applications` | Job seeker |
| Admin Panel | `/admin` | Admin |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local
# Set your backend API URL

# 3. Start development server
npm run dev
```

### Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Features Implemented

| Week | Feature | Status |
|---|---|---|
| Week 1 | Project setup & routing | ✅ Done |
| Week 2 | Register & Login pages | ✅ Done |
| Week 3 | Job seeker profile form | ✅ Done |
| Week 4 | Job listing & post job form | ✅ Done |
| Week 5 | Apply button & My Applications page | ✅ Done |
| Week 6 | Employer dashboard (applicants) | 🔄 Upcoming |
| Week 7 | Recommended Jobs page | 🔄 Upcoming |
| Week 8 | Admin panel UI | 🔄 Upcoming |

---

## Author

**Hanan** — Intern at Damina Tech  
Supervisor: Mr. Ararso
