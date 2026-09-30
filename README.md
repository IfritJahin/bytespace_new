# ByteSpace

A responsive landing page for ByteSpace, an online learning platform, built from the "ByteSpace New Check" Figma design. Login and Signup pages are included as the bonus task.

**Live site:** https://bytespace-new-ten.vercel.app

## What's included

**Landing page** (`/`)

- **Hero:** navbar (with a menu button on mobile), course search, partner logos and floating stat cards
- **Course catalog:** category tabs that filter the courses, and the "Explore learning" section. Searching in the Hero filters these courses too (the query is kept in the URL as `?q=`).
- **Growth stats:** student, course and creator counts that count up when scrolled into view, and the "Create & Manage Courses" feature block
- **Creators:** the creator feature section
- **Testimonials**
- **Footer:** newsletter form (shows a confirmation when submitted) and link columns

**Auth pages (bonus)**

- `/login` and `/signup` share one layout (`AuthShell`) and one form component (`AuthForm`). The forms validate input in the browser. They are not connected to a backend yet, so submitting shows a notice instead of creating an account.

Every section is responsive, from phone width up to the 1440px desktop design.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) with React 19
- TypeScript
- Tailwind CSS 4
- `next/image` for image optimisation
- Deployed on Vercel

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command         | What it does                   |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the dev server           |
| `npm run build` | Create a production build      |              |

## Project structure

```
app/
  page.tsx            Landing page, which puts the sections together
  login/page.tsx      Login page
  signup/page.tsx     Signup page
components/
  Navbar.tsx, Hero.tsx, CourseCatalog.tsx, ExploreLearning.tsx,
  GrowthState.tsx, CreatorsFeature.tsx, Testimonials.tsx, Footer.tsx
  CourseCard.tsx      Course card used in the catalog, growth section and auth pages
  HappyStudents.tsx   "Happy Students" rating card with theme and size options
  auth/
    AuthShell.tsx     Shared two-column layout for login and signup
    AuthForm.tsx      Form built from a list of fields
lib/
  courses.ts          Course data shared by every course card
public/               Images, icons and fonts
```

### Reusable components

- **`CourseCard`** takes a course from `lib/courses.ts`, so course data lives in one place.
- **`HappyStudents`** has `theme` (`light` or `lime`) and `size` (`fluid`, `sm` or `responsive`) options, which cover the three places the card appears in the design. Rating, review count, avatars and the count label are all props:

  ```tsx
  <HappyStudents theme="lime" size="sm" rating={4.8} reviews={512} className="w-[280px]" />
  ```

- **`AuthForm`** builds the login and signup forms from a list of fields.

## Git workflow

Each section was built on its own branch (for example `Hero_branch`, `components/growthstate`, `components/signup`) and merged into `main` through a pull request. `main` is never committed to directly.

## Not included yet

- The login, signup and newsletter forms are not connected to a backend.- Some footer links point to `#` because the design has no pages for them.

