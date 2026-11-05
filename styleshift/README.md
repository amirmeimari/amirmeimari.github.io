# StyleShift website

Buildless static site for GitHub Pages. Open a local preview from the parent repository:

```sh
python3 -m http.server 8086 --bind 127.0.0.1
```

Visit http://127.0.0.1:8086/styleshift/. No install or build is required. All website fonts and images are self-hosted. `theme.js` applies the website-only appearance preference before paint; `script.js` controls the language specimen.

## Product and release sources

The website reflects the extension's implemented 2.0 interface, with the upcoming release clearly distinguished from published 1.2.0. Before announcing a release, confirm publication in the Chrome Web Store and update the hero status, install notes, structured data, and changelog together. No release dates are inferred.

Reference checkout: `/Users/a.kalatehmeimari/Code/styleshift` (read-only during this website task).

- Design: `src/index.css`, `tailwind.config.ts`, `src/components/brand-icon.tsx`, popup/options components.
- Features: ordered stack, font catalog, CSS editor, storage and i18n implementation.
- Release history: `CHANGELOG.md`; 2.0 changes: completed tickets under `docs/redesign/tickets/`.
- Release status: `docs/store/v2.0.0/STATUS.md`.
- Canonical store ID: `mcaoegkknaepofhmlljnemngbkemmkea`.

## Assets

- `assets/brand-dark.png`: original orange-on-charcoal artwork retained for the light website theme. `assets/brand-dark-mode.png`: the updated charcoal tile with a white S and orange accent, copied unchanged from the extension’s `public/icons/dark/icon128.png`, used for the dark website theme and its favicon. `assets/brand-light.png` is retained as the previous dark-theme artwork.
- `assets/ui/fonts-light.png` / `fonts-dark.png`: unchanged 420×600 captures from `docs/redesign/evidence/preview-rtl/after-en-light.png` / `after-en-dark.png`. These are actual implemented UI shown with development Chrome API mocks, not installed-extension QA. The visible caption identifies the development preview.
- The language specimen and CSS/typography examples are website illustrations, not extension screenshots. The specimen follows one Inter → Vazirmatn → system fallback stack for every language.
- Fonts copied unchanged from the extension: Inter 400/700, Vazirmatn 400, JetBrains Mono 400. License files sit alongside them. Official Inter and Vazirmatn license texts were retrieved from their upstream repositories; JetBrains Mono's license was bundled with the extension.
- The prior `assets/hero.jpg`, `icon.png` and `logo.png` are retained to preserve existing assets and inbound references. The redesigned page does not use them.

The website has no analytics or external font dependency. The product privacy copy explicitly allows network requests from user-authored CSS.
