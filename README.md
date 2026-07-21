# Accredian Enterprise — Landing Page (Partial Clone)

A responsive, component-driven recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. It includes a full set of landing sections, a sticky responsive navigation, a footer, and a working **lead-capture form backed by a Next.js API route** (the optional bonus).

> Built as a take-home assignment. Focus is on clean structure, reusable components, and thoughtful execution — not pixel-perfect copying.

---

## ✨ Highlights

- **Next.js 15 App Router** with the `app/` directory and React Server Components.
- **TypeScript** end-to-end, including typed content models and the API route.
- **Tailwind CSS v4** with a custom design-token theme (brand palette, shadows, fonts).
- **Faithful section-by-section rebuild** of the real page: Hero, Track Record stats, Partnerships, the Accredian Edge timeline, Domain Expertise, Course Segmentation, Who Should Join, the CAT Framework, How It Works, FAQs, Testimonials, CTA, and footer.
- **Reusable component system** — `Button`, `Heading`/`Hl`, `Reveal`, a custom icon set, and an `EnquiryProvider` modal — composed into feature sections.
- **Scroll-spy navigation** — the active nav link highlights as you scroll (via `IntersectionObserver`), nav clicks smooth-scroll to the matching section, and clicking the logo returns to the top.
- **Fully responsive** — mobile-first layouts and a hamburger menu; the Edge timeline collapses from a desktop zigzag to a vertical list.
- **Lead-capture (bonus) via an Enquiry modal** — every "Enquire Now" / "Contact Us" button opens a modal that posts to a `POST /api/lead` route with server-side validation and in-memory storage (success/error states, plus a `GET /api/lead` endpoint to inspect captured leads).
- **Interactive sections** — tabbed + accordion FAQs and a paginated Testimonials carousel.
- **Scroll-reveal animations**, accessible focus states, `aria` attributes, and an inline SVG favicon.

---

## 🧱 Tech Stack

| Area        | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 15 (App Router)                 |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)    |
| Fonts       | `next/font` (Inter)                     |
| API         | Next.js Route Handlers (`app/api`)      |
| Deployment  | Vercel                                  |

---

## 📁 Project Structure

```
app/
  api/lead/route.ts      # POST (validate + store) & GET (inspect) lead endpoints
  globals.css            # Tailwind v4 import + design tokens + utilities
  layout.tsx             # Root layout, fonts, metadata
  page.tsx               # Landing page — composes all sections in order
  icon.svg               # Favicon
components/
  Navbar.tsx             # Sticky nav: scroll-spy active state, smooth scroll, logo→top
  Footer.tsx             # Footer with socials, contact details, enquire CTA
  Logo.tsx               # "accredian" wordmark + "credentials that matter"
  icons.tsx              # Inline SVG icon set (UI, concept, social icons)
  enquiry/
    EnquiryContext.tsx   # Provider + modal lead form; posts to /api/lead
    EnquireButton.tsx    # Client button that opens the enquiry modal
  ui/
    Button.tsx           # Button + ButtonLink, variants & sizes
    Heading.tsx          # Two-tone section heading (Heading + Hl accent span)
    Reveal.tsx           # Scroll-reveal animation wrapper (client)
  sections/
    Hero.tsx             # "Next-Gen Expertise For Your Enterprise" + visual
    Stats.tsx            # "Our Track Record" — three headline stats
    Clients.tsx          # "Our Proven Partnerships" — client logos
    AccredianEdge.tsx    # 7-point zigzag timeline (vertical list on mobile)
    DomainExpertise.tsx  # "Our Domain Expertise" — specialization grid
    CourseSegmentation.tsx # "Tailored Course Segmentation" — 4 course cards
    WhoShouldJoin.tsx    # Blue panel — 4 target audiences
    CatFramework.tsx     # "The CAT Framework" — Concept/Application/Tools
    HowItWorks.tsx       # "How We Deliver Results" — 3 numbered steps
    Faqs.tsx             # Tabbed categories + accordion (client)
    Testimonials.tsx     # Paginated testimonial carousel (client)
    CtaBand.tsx          # "Want to Learn More…" contact CTA
lib/
  data.ts                # All page content as typed data (single source of truth)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (Node 20/22/24 recommended)
- npm

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

### Try the lead API

```bash
# Submit a lead
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@acme.com","company":"Acme Corp","teamSize":"51-200","interest":"AI & Generative AI"}'

# Inspect captured leads
curl http://localhost:3000/api/lead
```

---

## 🧭 Approach

1. **Matched the real page section-by-section.** The live site is a client-rendered SPA (its HTML returns almost nothing to scrapers), so the structure and copy here were rebuilt from the actual rendered page: Hero → Track Record → Partnerships → Accredian Edge → Domain Expertise → Course Segmentation → Who Should Join → CAT Framework → How It Works → FAQs → Testimonials → CTA → Footer.
2. **Content-first, data-driven.** All copy lives in `lib/data.ts` as typed models. Sections map over data instead of hardcoding markup, so content stays separate from presentation and is easy to edit.
3. **A small design system.** A custom Tailwind v4 `@theme` defines the brand palette (Accredian blue), shadows, and font. Primitives (`Button`, `Heading`/`Hl`, `Reveal`) are composed by every section for consistency and minimal duplication.
4. **Server components by default, client where needed.** Only interactive pieces — `Navbar` (scroll-spy), `Reveal`, `Faqs`, `Testimonials`, and the `EnquiryProvider` modal — are client components; everything else renders on the server.
5. **Navigation UX.** An `IntersectionObserver` scroll-spy highlights the active nav link; nav clicks smooth-scroll to the section (`scroll-margin-top` offsets the fixed header); the logo scrolls back to top.
6. **Bonus fully wired.** Every "Enquire Now"/"Contact Us" button opens a shared modal that validates client-side, posts to a typed `/api/lead` route (validates again server-side, stores the lead, returns 201/422/400), and shows success/error state.
7. **Responsive and accessible.** Mobile-first layouts, keyboard-focusable controls, `aria` attributes, `Escape`/backdrop-close on the modal, and semantic landmarks.

> Per the brief — *"Do not copy templates directly… we are evaluating your thinking and execution"* — the people/course photos are **free-license stock images from [Unsplash](https://unsplash.com/license)** (commercial use, no attribution required), served locally from `public/images/` and optimized via `next/image`. They stand in for Accredian's own copyrighted photography rather than reproducing it. Client names are rendered as styled wordmarks in place of trademarked logos.

---

## 🤖 AI Usage

AI tooling (Claude / Claude Code) was used as a pair-programmer throughout:

**Where AI helped**
- Drafting realistic placeholder copy for an enterprise ed-tech audience.
- Writing the API route with validation and the client form-submission logic.
- Debugging a Tailwind v4 / oxide scanner version mismatch surfaced during the build.

**What I reviewed / improved manually**
- Directed a full rebuild against real screenshots of the live site — matching the exact section order, headings, copy, nav items, brand blue, and the zigzag Edge timeline / CAT framework layouts.
- Chose to route the bonus lead capture through a reusable Enquiry modal (opened by every CTA) instead of a single inline form — cleaner UX and one integration point.
- Tuned the design tokens (Accredian-blue palette, spacing, shadows) and built the scroll-spy + smooth-scroll navigation behavior.
- Centralized all content into a single typed `data.ts` for reusability and maintainability.
- Hardened the API route (dual client+server validation, proper status codes: 201/422/400).
- Verified the production build, ran the server, and tested the API round-trip (valid, invalid, and GET) before shipping.
- Pinned/upgraded dependencies to clear a critical advisory flagged by `npm audit`.

---

## 🔮 Improvements With More Time

- **Persist leads** to a real datastore (Supabase/Postgres or a CRM like HubSpot) instead of in-memory, plus email notifications.
- **Testing** — component tests (React Testing Library) and an API integration test; Playwright for e2e on the form flow.
- **Content/CMS** — move `data.ts` behind a headless CMS so marketing can edit without deploys.
- **Motion & polish** — Framer Motion for richer, orchestrated animations and a proper `prefers-reduced-motion` path.
- **More pages** — dedicated program detail pages, a `/thank-you` route, and dynamic OG images.
- **Analytics & a11y** — Vercel Analytics, event tracking on the CTA, and a full axe/Lighthouse pass.

---

## ☁️ Deployment (Vercel)

This project is a standard Next.js app and deploys to Vercel with zero extra configuration.

```bash
# Option A — Git-based (recommended)
# 1. Push this repo to GitHub
# 2. Import it at https://vercel.com/new — Vercel auto-detects Next.js
# 3. Deploy (no env vars required)

# Option B — Vercel CLI
npm i -g vercel
vercel        # preview
vercel --prod # production
```


