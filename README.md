# Personal Website

A feminine-professional personal website built with Next.js App Router, TypeScript, and Tailwind CSS. All content is centralized in a single file for easy updates.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- lucide-react
- clsx + tailwind-merge

## Quick Start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Content Editing
All primary content lives in `src/content/siteContent.ts`.

Update:
- Personal info, bio, location
- Social links
- Experience timeline
- Portfolio projects
- Blog posts
- Resources
- Hub cards

Image placeholders live in `public/images/`.

## Contact Form Setup
The contact form UI is a placeholder.

Options to connect submissions:
1. Formspree
   - Create a Formspree form and replace the `form` action + method in `src/app/contact/page.tsx`.
2. Resend
   - Add an API route in `src/app/api/contact/route.ts` and call Resend.

## SEO Notes
- Update the base URL in `src/app/sitemap.ts` and `src/app/robots.ts`.
- Update `metadataBase` in `src/app/layout.tsx`.
- Replace `public/og-image.svg` and `public/icon.svg` with your own assets.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Go to Vercel and import the repo.
3. Vercel auto-detects Next.js. Click Deploy.

### Custom Domain
1. In Vercel, open your project settings and add your custom domain.
2. Vercel will provide DNS records.
3. Add those DNS records in your domain registrar.
4. Wait for DNS to propagate.

## Local Development
- `npm run dev` starts the dev server.
- `npm run build` creates a production build.
- `npm run start` runs the production build.
