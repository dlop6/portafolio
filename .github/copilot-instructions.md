# Copilot / AI agent instructions — portafolio

This repository is a small React + Vite portfolio built with Tailwind. The file tree and conventions below are what an AI coding agent should rely on when making edits, adding features, or fixing bugs.

Key facts
- Project type: React (JSX) app bootstrapped for Vite (see `vite.config.js`).
- Entry point: `src/main.jsx` — mounts `App.jsx` (root of routing/layout).
- Styling: Tailwind + PostCSS; configuration in `tailwind.config.js` and `postcss.config.js`. Global styles in `src/index.css`.
- Build & run: `npm install` then `npm run dev` (development), `npm run build` (production), `npm run preview` (local preview). Lint: `npm run lint`.

Important paths & conventions (examples)
- UI and layout: `src/components/layout/Navbar.jsx`, `src/components/layout/Footer.jsx` — prefer small, reusable components.
- Sections: each page section lives in `src/sections/<Name>/` (e.g., `src/sections/Home/Home.jsx`, `src/sections/Contacto/Contacto.jsx`). Keep logic for a section inside that folder when practical.
- Reusable UI: `src/ui/ProjectCard.jsx`, `src/ui/CardSection.jsx`, `src/ui/TerminalBadge.jsx` — update these when changing presentation of repeated UI elements.
- Data sources: `src/data/*` (notably `projectsData.js`, `abilitiesData.js`, `skillsData.js`, `socialLinks.js`) — add or edit entries here rather than hard-coding data into components. Example: to add a project, update `src/data/projectsData.js` and add images under `public/images/<project-folder>`.

Assets & paths
- Static images are served from `public/` — use paths relative to the project root (e.g., `/images/autoseller/...`). Note: some folders in `public/images/` contain spaces (e.g., `finanzas personales`, `music app`). Prefer using hyphenated names when adding new image folders (or URL-encode spaces) to avoid path issues.

Dependencies & integrations to be aware of
- Email sending: uses `@emailjs/browser` in the contact form (`src/sections/Contacto/ContactameForm.jsx`). Keep changes client-only — no server required.
- Animations: `aos` is present; initialization usually occurs in `src/main.jsx` or the top-level section component.
- Navigation/scroll: `react-scroll` is used for section navigation (see `Navbar.jsx` and `react-scroll` usage in sections).

Code style & expectations
- Language: modern JS (ES modules) + JSX. The project uses React 19 and Vite — prefer functional components and hooks.
- Linting: run `npm run lint` locally to check for style issues. Avoid broad style refactors; preserve existing component structure.
- File edits: prefer changing data files (`src/data/*`) for content updates and keeping UI-only changes inside `src/ui` and `src/components`.

Typical workflows for agents
- Add a project: 1) add images to `public/images/<project-folder>` (use hyphens), 2) add metadata to `src/data/projectsData.js`, 3) adjust `src/ui/ProjectCard.jsx` only if the display needs new fields.
- Fix contact form: check `src/sections/Contacto/ContactameForm.jsx`, ensure EmailJS keys are not committed (they should be env/local), and run manual form submission in `dev` to verify.
- Update styles: edit `src/index.css` or `tailwind.config.js`. Re-run `npm run dev` to test HMR.

Testing & verification
- Local dev server: `npm run dev` (Vite HMR). Use browser to test interactive behaviors (AOS, scroll, contact form).
- Build check: `npm run build` then `npm run preview` to test production build.
- Lint: `npm run lint` before creating PRs.

What not to change without confirmation
- Do not rename or move `src/sections/*` folders arbitrarily — many imports use relative paths.
- Avoid changing `public/` image URLs used by `projectsData.js` without updating references.

If you need more context
- Look at `src/main.jsx` and `src/App.jsx` for app mounting, provider wrappers, and global initialization (AOS, theme, etc.).
- Check `src/data/projectsData.js` for the canonical project-format example.

Submit changes as small, focused PRs. After edits that affect UI, run `npm run dev` and verify the edited view in browser.

If anything above is unclear or you'd like more examples (e.g., a full `projectsData.js` schema), tell me which part to expand.
