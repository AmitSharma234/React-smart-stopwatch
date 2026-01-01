# Copilot / AI Agent Instructions

Purpose: Help an automated coding agent quickly become productive in this simple React + Vite codebase by describing the structure, workflows, conventions, and known gotchas.

## Quick facts ✅
- Framework: React 19 + Vite (entry: `src/main.jsx`).
- Dev server: `npm run dev` (Vite HMR). Build: `npm run build`. Preview build: `npm run preview`.
- Lint: `npm run lint` (ESLint configured in `eslint.config.js`).

## Where to look first 🔎
- `src/main.jsx` — app entry, mounts to `<div id="root">` in `index.html`.
- `src/App.jsx` — top-level component.
- `src/` — all UI components live here (e.g., `props.jsx`, `Buttoninline.jsx`, `btn/btn.jsx`).
- `src/index.css` — global/external CSS used by many components.
- `src/btn/btn.module.css` — example of CSS Modules usage.
- `package.json`, `vite.config.js`, `eslint.config.js` — tooling and scripts.

## Project patterns & conventions 🔧
- File extensions: `.jsx` for React components.
- Exports: components use **default exports** consistently (e.g., `export default Button`).
- CSS styles demonstrated in three ways:
  - Inline styles: `Buttoninline.jsx` (example: `style={Styles}` where `Styles` is an object).
  - Global/external CSS: `index.css` and `Buttonex.jsx` using `className="btn"`.
  - CSS Modules: `src/btn/btn.module.css` and `btn.jsx` with `import Styles from './btn.module.css'` and `className={Styles.btn}`.
- Prop validation: `src/props.jsx` uses `prop-types` style `Component.propTypes` and `Component.defaultProps` (see the file for the exact pattern).
- Linting rule detail: `eslint.config.js` applies to `**/*.{js,jsx}` and sets a `no-unused-vars` ignore pattern `^[A-Z_]` (this is an intentional project choice).

## Actionable gotchas & discovered issues ⚠️
- `prop-types` is used in `src/props.jsx`, but `prop-types` is **not listed in `package.json`** dependencies — add it when working on PropTypes changes.
- Some component functions and JSX elements have typos (for example `header.jsx` uses `<hedaer>`). Be careful editing those files or run the app to catch runtime/DOM mistakes.
- `package.json` replaces `vite` with `rolldown-vite` via `overrides` — environment or plugin issues may behave differently than a standard Vite install.
- There are no tests or CI configuration present; expect manual verification steps (run dev server / lint) for validation.

## Recommended agent behavior (concrete, not generic) 💡
- When making code changes:
  - Run `npm run lint` to surface ESLint issues.
  - Run `npm run dev` and verify UI in browser (HMR ensures fast observation).
  - If adding `prop-types` style code, ensure `prop-types` is added to `package.json` and installed.
- When adding new components:
  - Use `.jsx` files and follow the existing pattern of default exports.
  - Match the project's styling approach: use global CSS (`index.css`) for simple site-wide styles or CSS Modules for component-local styles (see `src/btn/`).
- Use the exact examples found in the project when modifying code:
  - CSS Module import: `import Styles from './btn.module.css'` and usage `className={Styles.btn}` (see `src/btn/btn.jsx`).
  - Inline style object: `const Styles = { backgroundColor: 'blue', ... }` and `<button style={Styles}>` (see `Buttoninline.jsx`).
  - PropTypes definition pattern: `Component.propTypes = { ... }` and `Component.defaultProps = { ... }` (see `src/props.jsx`).

## If you need to change build or tooling 🔩
- `vite.config.js` contains the plugin setup: `@vitejs/plugin-react`.
- Any change to dev tooling should be validated with `npm run dev` (dev server) and `npm run build` (production build + `npm run preview`).

## Contact & follow-ups
- No contributor file or contact information is in the repo; if you make behavior-changing edits, add a clear commit message and ask the human reviewer to run `npm run dev` and `npm run lint` locally.

---

If you'd like, I can: (1) add a short checklist to automatically run in PRs (lint + dev smoke test), or (2) open a PR that adds `prop-types` to `package.json` and fixes the minor typos I found. Which would you prefer?