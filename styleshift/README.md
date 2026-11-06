# StyleShift website

Buildless static site for GitHub Pages. Open a local preview from the parent repository:

```sh
python3 -m http.server 8086 --bind 127.0.0.1
```

Visit http://127.0.0.1:8086/styleshift/. No install or build is required. All website fonts and images are self-hosted. `theme.js` applies the website-only appearance preference before paint; `script.js` controls the language specimen.

## Product and release sources

The website presents published version 2.0.0. The live Chrome Web Store listing was verified on 2026-11-06: version 2.0.0, updated November 6, 2026. The hero status, install notes, structured data, and changelog are updated together. The interface images remain development captures, as their caption states. For future releases, verify the live listing before updating all release labels together.

Reference checkout: `/Users/a.kalatehmeimari/Code/styleshift` (read-only during this website task).

- Design: `src/index.css`, `tailwind.config.ts`, `src/components/brand-icon.tsx`, popup/options components.
- Features: ordered stack, font catalog, CSS editor, storage and i18n implementation.
- Release history: `CHANGELOG.md`; 2.0 changes: completed tickets under `docs/redesign/tickets/`.
- Release status: `docs/store/v2.0.0/STATUS.md`.
- Canonical store ID: `mcaoegkknaepofhmlljnemngbkemmkea`.

## Assets

- `assets/brand-dark.png` / `brand-light.png`: approved extension artwork copied unchanged from `public/icons/dark/icon128.png` / `light/icon128.png`. Dark artwork is used on light backgrounds, light artwork on dark backgrounds. The dark artwork is the refreshed charcoal tile with a white S and orange accent, replacing the original orange S.
- `assets/ui/fonts-light.png` / `fonts-dark.png`: unchanged 420×600 captures from `docs/store/v2.0.0/captures/fonts-light.png` / `docs/redesign/evidence/preview-rtl/after-en-dark.png`. The light capture includes the refreshed dark artwork. These are actual implemented UI shown with development Chrome API mocks, not installed-extension QA. The visible caption identifies the development preview.
- The language specimen and CSS/typography examples are website illustrations, not extension screenshots. The specimen follows one Inter → Vazirmatn → system fallback stack for every language.
- Fonts copied unchanged from the extension: Inter 400/700, Vazirmatn 400, JetBrains Mono 400. License files sit alongside them. Official Inter and Vazirmatn license texts were retrieved from their upstream repositories; JetBrains Mono's license was bundled with the extension.
- The prior `assets/hero.jpg`, `icon.png` and `logo.png` are retained to preserve existing assets and inbound references. The redesigned page does not use them.

The website has no analytics or external font dependency. The product privacy copy explicitly allows network requests from user-authored CSS.
