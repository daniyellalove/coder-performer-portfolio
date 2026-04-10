# Dual-Identity Portfolio

A personal portfolio website combining **front-end developer** and **actor/model** identities in a single codebase, with a live toggle between "dev mode" and "performer mode."

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

### 1. Update your content

Edit `/lib/content.ts` — all copy, project data, and credits live there as typed objects:

```ts
export const personalInfo = {
  name: 'Your Name',           // replace
  email: 'you@email.com',      // replace
  // ...
};
```

### 2. Add project screenshots / headshots

Replace the placeholder thumbnail `<div>` blocks in:
- `ProjectCard.tsx` — use `<Image>` from `next/image` with `project.thumbnail`
- `CreditCard.tsx` — same pattern
- `AboutSection.tsx` — `PerformerStats()` headshot placeholder

### 3. Wire up the contact form

`ContactForm.tsx` has a stub `handleSubmit`. Replace with your preferred service:
- [Resend](https://resend.com) + a Route Handler
- [Formspree](https://formspree.io)
- [EmailJS](https://emailjs.com)

### 4. Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com).

## URL Mode Switching

Append `?mode=dev` or `?mode=performer` to any URL to deep-link directly to a mode. The mode also persists in `localStorage`.

## File Structure

```
/app
  layout.tsx          — root layout, font config, ModeProvider wrapper
  page.tsx            — single-page assembly
  globals.css         — CSS custom properties for theming
/components
  ModeProvider.tsx    — React context + localStorage persistence
  ModeToggle.tsx      — animated toggle switch
  Nav.tsx             — responsive nav with hamburger
  Hero.tsx            — mode-aware hero section
  HeroCode.tsx        — typewriter code block (dev mode)
  FilmSlate.tsx       — clapperboard card (performer mode)
  WorkSection.tsx     — projects / credits grid
  ProjectCard.tsx     — dev project card
  CreditCard.tsx      — performer credit card
  AboutSection.tsx    — bio + skills or stats
  ContactSection.tsx  — contact layout + socials
  ContactForm.tsx     — unified contact form
/lib
  content.ts          — all content as typed data
  types.ts            — shared TypeScript interfaces
```
