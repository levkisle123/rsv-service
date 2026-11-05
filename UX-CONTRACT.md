# UP Service interaction contract

Locale ru-RU, business timezone Europe/Saratov. User approved demonstration data pending actual business information. Authority: UP_Service_TZ_site.pdf and user instruction to retain demo data. Configuration source: hosted D1 via worker/up-api.ts; standalone preview uses SQLite in up-service/server.mjs.

| Capability | Canonical owner | Policy and verification |
|---|---|---|
| Select/Listbox | Native labelled select | OS-owned popup accepted for vehicle/service choices; keyboard and narrow viewport QA |
| Date and time | Native date/time input | OS popup accepted; desired time is a request, not a confirmed appointment |
| Form | public/form-validation.js, public/up.js | novalidate with localized inline errors, aria-invalid/describedby, first-invalid focus; server revalidates |
| Dialog | Native dialog | showModal, accessible title, inert background, Escape, focus restoration to triggering CTA |
| Scrollbar | public/up.css + public/motion.css | Global thin visible track/thumb; hover/active and forced-colors fallback |
| Feedback | Inline role=status | Quote/booking/save status region; no native alert/confirm/prompt |
| Motion | public/motion.js + public/motion.css | Reveal, offscreen pause, footer toggle, OS reduced-motion preference takes priority |

Booking: validate → pending disabled button → persisted test receipt. A future real launch requires manual administrator confirmation of time. Failed requests retain input and idempotency key. In demo mode, server discards entered name, phone, car and comment, stores anonymized test data and sends no notifications. Receipt is returned only after database persistence. No personal data in logs or analytics. Source: worker/up-api.ts demo guard and booking handler. No lifecycle deletion UI.

Calculator: demo examples only (4000 ₽ base, 5 l, 700 ₽ per extra litre). Server quote is authoritative. Unknown vehicle/invalid volume requires manual clarification. Result transfers into shared booking; it is not an approved commercial offer. Source: lib/up-config.mjs.

Hosted admin: Sites ChatGPT identity header must match UP_ADMIN_EMAIL stored as a Sites secret. Every admin API request validates identity; anonymous access returns 401. Standalone local preview uses an environment password, never a shipped default. No shared public admin credential. Configuration save stays in editor and reports success/error; bookings bounded to latest 100. Source: worker/up-api.ts and standalone server. HTTPS gallery and source links validated on server. Demo mode cannot be disabled from editor.

Legal and launch: policies and requisites are conspicuous placeholders. No real personal data or payments accepted. Business contact/offer/gallery/review/integration/legal inputs must be approved before production launch. Empty reviews use an honest pending-content state. These edits do not change access, payment or retention policy.
