# Dorcas Adeboye: portfolio

Personal portfolio site. Next.js 15 (App Router), TypeScript, Tailwind CSS v4. Every page is static.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Editing content

All copy lives in `src/content/`. No page code needs to change to update content.

| File | What it holds |
|---|---|
| `site.ts` | Name, contacts, navigation, certifications, education, tools |
| `case-studies.ts` | Case studies (Work pages) |
| `experience.ts` | Roles and contributions (Experience page) |
| `projects.ts` | Projects and their screenshots |
| `skills.ts` | Skills and the work that proves each one |

Images are in `public/images/`. The résumé download is `public/dorcas-adeboye-cv.pdf`; replace that file to update it.

## Environment variables (optional)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Final site URL, used for SEO, sitemap and social previews |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID. Without it, the contact form opens the visitor's email app instead |

## Deploy

Import the repo into Vercel, add the variables above, then turn on **Analytics** in the Vercel project settings.
