# Fatima Ezzahra Adnibi — Data Analyst Portfolio

Angular 16 single-page portfolio generated from the CV content (BI / Data
Analyst profile).

## Stack
- Angular 16 (NgModule-based, standalone components not used)
- SCSS with a design-token system in `src/styles.scss`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (data/labels)

## Structure
```
src/app/
  data/portfolio-data.ts      <- all CV content lives here (edit this to update text)
  components/
    nav/                      <- sticky nav
    hero/                     <- hero + "live dashboard" signature widget
    experience/               <- collapsible timeline (real chronological order)
    skills/                   <- skill groups as tag clusters + certifications/languages
    projects/                 <- academic/independent project cards
    education/                <- education timeline
    footer/                   <- contact section
```

## Run locally
```bash
npm install
npm start          # serves on http://localhost:4200
```

## Build for production
```bash
npm run build
# output in dist/portfolio — deploy as a static site (Netlify, Vercel, GitHub Pages, etc.)
```

## Editing content
Everything text-based (name, experience, skills, projects, education) is in
`src/app/data/portfolio-data.ts`. No need to touch the components to update
copy — just edit that file.

## Notes
- The hero's "weekly_dashboard_load" panel is decorative (CSS-animated bars),
  not a real data connection — it's there to visually establish the BI/Data
  Analyst identity at a glance.
- Fonts load from Google Fonts at runtime (linked in `index.html`), so an
  internet connection is needed the first time the page is opened.
