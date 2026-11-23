# Estefani Ruiz — Portfolio

Built with [Astro](https://astro.build) from the Figma file "Estefani Ruiz Portfolio".

- **Edit links, email, CV and projects:** `src/data/site.ts`
- **Images:** drop them into `public/assets/` (texture.png, sparkle.png, memoji.png, polaroid.png, collage.png)
- **Design tokens:** `scripts/tokens.json` (exported from Figma variables) → run `python3 scripts/build-tokens.py` → `src/styles/tokens.css`
- Light/dark: add `class="theme-dark"` to any section to switch it to dark mode, like in Figma.

Hosted on Vercel; every push to `main` redeploys automatically.
