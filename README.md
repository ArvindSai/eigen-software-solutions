# Eigen Software Solutions — website

Vue 3 + Vite site, deployed via GitHub Actions to GitHub Pages.
Reimplemented in our own Vue code from the Lovable preview at
https://eigen-agent-foundry.lovable.app — Lovable’s code is not used.

## Build plan

- **Build 1 — skeleton ONLY (this build):** Vue 3 + Vite scaffold,
  global styling/theme, header, footer, base layout / middle content
  shell. No content sections.
- **Build 2:** Hero section.
- **Later builds, in order:** Capabilities, Systems (interactive
  agent-run demo), Proof (case studies), Model, Writing, Start/contact.
  Testimonials / writing notes live inside the same content shell.

## Develop

```sh
npm install
npm run dev
npm run build
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and deploys to
GitHub Pages. Repo name / GitHub account still to be confirmed; the
Vite `base` is `./` so asset paths work on a project Pages site
regardless of repo name.
