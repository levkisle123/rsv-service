# UP Service visual refinement verification

- Production build: official Sites build helper, succeeded from canonical project root.
- TypeScript: `node node_modules/typescript/bin/tsc --noEmit --incremental false`, passed. Development mirror under up-service/up-hosted is excluded; canonical hosted worker is typechecked.
- JavaScript syntax: up.js, service-art.js, motion.js and form-validation.js passed node --check.
- Backend regression: standalone test.mjs passed quote boundaries, admin denial, config persistence, receipt idempotency, demo anonymization and page metadata.
- Browser: desktop hero and services checked; 390 × 844 mobile checked, document width 380 px, no horizontal overflow. Five service SVGs, only two distinct photographic illustrations in the visible home page.
- Booking: service-specific CTA opens native titled dialog; invalid submit displays Russian inline errors and focuses first invalid field. Escape restores CTA focus.
- Mobile menu opens; native brand selection works by keyboard; BMW 6 l quote returns 4700 ₽ (4000 + 700).
- Motion toggle verified: no hidden reveal blocks, computed transition duration 0 s when disabled. OS reduced-motion override implemented in CSS and JS. Offscreen diagrams pause via IntersectionObserver.

## Static audit interpretation
Premium strict auditor was run against public/ and saved to outputs/motion-audit.json. It reports 15 `affordance.actionless-button` findings. The auditor only recognizes inline onclick attributes for literal HTML and cannot resolve external JavaScript bindings. These are reviewed false positives: booking CTAs use the document delegated [data-book] handler; menu and calculator controls use up.js; motion-toggle uses motion.js; close uses native dialog handler; admin logout/refresh/add controls use admin.js. No inline onclick duplicates were added to satisfy this limitation. All other detected form and scrollbar issues were corrected. Static audit alone does not establish runtime accessibility.

Real business details, offer approval, photographs, reviews, legal text, notifications and analytics remain launch inputs. This revision preserves the existing labelled, anonymized demo mode.

## Home hero revision
- Cause reproduced in browser: old 1672×941 image rendered 1199×1080 due to fixed HTML height and CSS-only width. New picture keeps height:auto with native aspect ratio.
- New image master verified at 1672×941, lossless WebP 1,219,022 bytes. No artificial 4K claim or interpolation.
- Desktop and 390×844 mobile screenshots inspected; 320 px width also checked. Photo geometry matches its native aspect ratio within rounding. No horizontal document overflow.
- Hero styling consolidated into public/hero.css; Oswald display and Manrope supporting text loaded locally. Static introduction reserves layout before configuration fetch. Existing owner-edited headline falls back safely to plain text.
