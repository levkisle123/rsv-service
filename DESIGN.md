# UP Service

## Authority and intent
UP_Service_TZ_site.pdf, 7 pages, supersedes the earlier RSV brand. User authorizes demo content while business information is pending. Public site remains explicitly labelled as a demo. No fabricated testimonials or service premises. Editorial automotive design: cinematic hero, large quiet typography, precise technical illustrations, functional booking.

## Tokens and runtime ownership
public/up.css owns brand colors: black #101010, graphite #1C1C1C, yellow #F5CE27, white #FFFFFF. Manrope is served locally. public/motion.css extends the same tokens, responsive grids, global scrollbar and motion. No second design system. Shared button, secondary link, form, dialog and focus styles are used on all routes. Administrative fields share the public form style.

## Image and composition rules
Hero car artwork appears once. Impeller editorial image appears once in About; explicitly an illustration pending real photographs. Service cards use five original SVG engineering scenes, never duplicate hero photographs. These are decorative illustrations, not claims about actual equipment. Two large service cards followed by three smaller cards; one column on narrow viewports. Owner gallery, once supplied, is driven by config.

## Motion
public/motion.js owns shared IntersectionObserver entry and offscreen pause behavior. Reveal: 850 ms, cubic-bezier(.16,1,.3,1), 65 ms stagger capped at 195 ms; touch movement 20 px. Hero entrance 2.2 s once, low-opacity light sweep 12 s. Service diagrams animate slowly only in view. Buttons use short sheen and arrow feedback; no magnetic targets, scroll interception or cursor replacement. All content is visible by default if motion JS fails. Footer toggle pauses all decorative movement; reduced-motion always wins and immediately reveals content. Native page transitions progressively enhance supported browsers.

## Current delivery
Demo booking, calculator and owner administration remain functional. Actual phone, schedule, logo, photos, legal information, offer approval and notification integrations are pending owner input. Demo anonymization remains enforced server-side.
