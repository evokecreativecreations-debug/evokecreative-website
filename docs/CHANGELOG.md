# Changelog

## 2026-10-22 — Technical SEO audit remediation (local)

- Removed inline base64 images from all 18 pages; reused the existing logos and generated smaller cacheable WebP derivatives where beneficial. Preserved original artwork and current URLs.
- Added intrinsic width/height to all 151 image references. Homepage portrait and article lead images load eagerly; lower images retain lazy loading.
- Replaced an invalid Google Fonts request with self-hosted WOFF2 files for the existing families, font-display swap, a heading-font preload and bundled SIL OFL licenses.
- Reduced homepage HTML from 484,623 to 29,807 bytes. This is an HTML size reduction, not a measured Core Web Vitals improvement.
- Rewrote homepage/service descriptions around Rameez's work and experience. Retained research-only AI disclosure on Studio and llms.txt; replaced repeated service AI FAQs with direct-designer collaboration answers and synchronized FAQ schema.
- Added contextual links to the Roblox hiring guide, Ascendant Link case study and freelance lessons; expanded Work, Blog and Contact with useful project/selection information.
- Added individual 1200×630 social images for four articles and four case studies using existing artwork.
- Added real sitemap lastmod dates; synchronized four edited articles' visible updates and Article dateModified while preserving datePublished.
- Restored the exact known legacy WordPress logo via a 301 to its recovered image. No speculative portfolio wildcard or unrelated feed-to-home redirect was added.
- Prepared Netlify security/cache headers and a public IndexNow verification file with an explicit submission script. IndexNow dry run validates 18 canonical URLs; no search submission has been sent from this revision.
- Verified 18 pages, 138 local HTTP targets, 151 image references, 32 fragment links, 21 redirects, JSON-LD/visible FAQ agreement and a real missing-page 404. Browser checks passed all 18 pages at actual 1280px/390px widths and five representative pages at 320px; mobile menu/submenu and updated FAQ were exercised.

Search Console checked 22 October: domain property already exists; sitemap Success with 18 discovered URLs, submitted/read 18 October. Pages report last updated 16 October shows 3 indexed URLs and 16 non-indexed records, including older host/URL variants. Links report currently reports zero external links; this does not prove zero links exist on the web.

Changes are local and uncommitted. Live deployment, production header/redirect verification, IndexNow submission, fresh GSC URL inspection, external profile/client links and post-deployment mobile PageSpeed measurements remain separate follow-up work. The direct HTTP live crawl failed at DNS resolution in this execution environment; public homepage content and signed-in GSC were accessible through browser/search tools. No indexing or ranking guarantee.

## Baseline

- Audited the existing static website structure and content.
- Confirmed the repository contains standalone HTML pages with inline CSS and inline JavaScript.
- Documented the current page inventory and recurring design patterns.

## Documentation Work

- Created and populated the documentation set under docs/.
- Added project, architecture, design system, page, content, roadmap, task, workflow, and AI context documents.
- Recorded the current state and known TODOs without inventing unsupported facts.

## Implementation Work

- Extracted shared CSS into external stylesheets under assets/css/ and linked them from all HTML pages.
- Removed the duplicated inline page styles in favor of shared assets while leaving content, URLs, and JavaScript behavior intact.

## Notes

No website implementation files were changed in this documentation-only task.


## 2026-10-17 — Local service-page and search-readiness update

- Added Logo Design and Social Media Design pages with starting packages at $50 USD, visible FAQs, real portfolio imagery, related services and enquiry links.
- Expanded the existing Brand Identity and Roblox UI pages; aligned FAQ markup with visible answers.
- Connected service links across the navigation, Services hub, homepage, case studies and relevant articles.
- Added the missing 1200 × 630 social-sharing image and completed social metadata across the 17 HTML pages.
- Linked Organization, Person and website identities consistently; removed self-serving aggregate rating markup.
- Added keyboard skip links, main landmarks, FAQ state attributes, navigation state and reduced-motion/no-script fallbacks.
- Updated sitemap, llms.txt and legacy redirects. Added an explicit Services hub rewrite to distinguish it from the service-page directory.
- Source checks: 17 pages, canonical/sitemap consistency, local link targets, JSON-LD parsing, FAQ/copy alignment and JavaScript syntax passed.
- Browser checks: seven core/service pages at desktop and 390px mobile widths; no horizontal overflow or broken loaded images observed. Menu and FAQ interaction checked.
- Deployment and GSC inspection deferred at the owner's request. Contact form delivery, actual indexing, rankings and AI citations have not been verified.


## 2026-10-17 — QA corrections after local review

- Removed stray paragraphs from the homepage and portfolio card grids; moved the portfolio service reference into normal page flow.
- Kept the homepage reading link in a full-width footer row.
- Corrected broad Digital/Game service links to the matching Services sections and made the Roblox-specific link explicit.
- Pointed Book a Call navigation links to the verified Calendly discovery-call page.
- Corrected the remaining 1,800+ blog-card project count.
- Added narrow-phone grid sizing, tablet navigation, anchor offsets, and Escape/outside-click menu dismissal.
- Normalized asset URLs and trailing-slash redirects.
- Verified 42 local link/asset targets, 23 fragment links and 35 legacy/trailing-slash redirects; no failures.
- Verified all 17 pages in Chrome at actual 320px, 768px and 1280px viewports, checking relevant grid/card/nav bounds and loaded images. The in-app viewport override did not apply reliably and was excluded from responsive results.
- Clicked all four case-study cards and three blog cards; verified resulting page headings. Checked tablet submenu navigation, Escape dismissal and keyboard FAQ expansion.
- Changes remain local. Contact-message delivery and Netlify production routing have not been tested.


## 2026-10-17 — Solution-led positioning and pricing

- Owner confirmed AI is used for research. Homepage, Studio and service copy now describe AI-assisted research and designer-led execution, without tool names or numerical speed claims.
- Added problem/solution sections and a clear research, design, refinement and handoff process.
- Revised starting packages: Logo Foundation $250, Brand Foundation $750, Social Starter $150 and Roblox UI Starter $350 USD. Each scope states its deliverables and two revision rounds; larger systems are custom quoted.
- Updated service metadata, visible FAQs, Service/Offer JSON-LD and llms.txt to match current pricing.
- Added linked project-package cards to Home and Services while retaining existing navigation and portfolio layouts.
- Pricing reference examples: Cdesigns Marketing logo/identity packages ($495/$1,495); Kate Kowalsky published logo/style-guide and social-design pricing. These are directional benchmarks with different scopes, not a claim of equivalent services or universal US market pricing.
- Local source checks passed for 17 pages; responsive checks passed on the seven changed pages at actual 320, 768 and 1280px Chrome viewports. Deployment remains deferred.


## 2026-10-17 — Professional presentation polish

- Replaced generic hero slogans with specific brand identity/game UI wording and a personal introduction from Rameez.
- Kept research-only AI disclosure in the workflow rather than the hero headline.
- Moved real portfolio work ahead of process and pricing; added project-specific introductory copy and a direct portfolio CTA.
- Made portfolio captions persistently readable on mouse, keyboard and touch; corrected homepage project heading levels.
- Verified Home and Work at actual 320, 768 and 1280px Chrome widths with visible captions and no checked-element overflow. Existing pricing is preserved. No deployment.


## 2026-10-17 — Studio content expansion

- Used the owner's confirmed audiences: existing small businesses, startups, independent game developers and game studios.
- Added a personal studio introduction, audience-specific design needs, collaboration process, research-only AI workflow and two real project examples.
- Linked the relevant services, portfolio and enquiry routes. Updated Studio metadata and AboutPage/Person descriptions to match.
- Retained existing experience/project figures and introduced no new biography, client results or credentials.
- Local checks passed; no deployment.


## 2026-10-17 — Services overview simplification

- Moved the four existing priced packages immediately after the page introduction.
- Reduced repeated service cards to concise Brand, Game UI and Digital sections with service and real project links.
- Grouped secondary offerings into three compact Other design support cards with an enquiry link.
- Broadened the Digital Design heading; preserved section anchors, prices, FAQs, metadata and navigation.
- Changes remain local; deployment is deferred.


## 2026-10-17 — Roblox UI hiring guide

- Added a buyer-focused guide using the supplied Roblox UI keyword cluster: portfolio assessment, HUD/inventory/shop scope, device review, handoff and quote comparison.
- Distinguished visual design from Studio assembly/scripting and clarified current PSD/PNG delivery without claiming Figma services.
- Referenced official Roblox UI documentation; linked the real Fuse project, service/pricing and separate briefing guide.
- Added Article metadata/schema, blog listing, reciprocal briefing link, sitemap/llms discovery and legacy URL redirects.
- Local only; no deployment or ranking claims.


## 2026-10-17 — Blog authors and hiring thumbnail

- Added visible Rameez Ahmed author attribution to all four articles and blog listing cards.
- Replaced the new hiring article card image with a dedicated original SVG checklist graphic, retaining real portfolio images on other cards.
- Existing author schema and original dates retained. Local only.


## 2026-10-18 — Lightweight interaction polish

- Added a 160ms dropdown entrance and subtle portfolio image/caption motion on hover and keyboard focus.
- Added a small independent button lift while preserving existing magnetic transforms.
- Motion respects reduced-motion preferences; pointer hover effects are limited to fine pointers.
- Approximately 2 KB additional CSS, with no added JavaScript, library or network asset.
- Local only; no deployment.


## 2026-10-18 — QA defect corrections

- Fixed Services FAQs 8–12 by including them in the accordion container.
- Replaced the unreachable autoplay testimonial strip with native scrolling and Previous/Next controls; retained seven existing reviews.
- Improved filled CTA text contrast, form status announcements, submission busy state and contact heading hierarchy.
- Guarded decorative cursor/parallax/hover scripts for reduced motion; stopped cursor animation in background tabs and retained a visible native portfolio cursor.
- Externalized 59 case-study images with original pixel dimensions, optimized formats, lazy loading and reserved layout space. Case-study HTML sizes dropped to approximately 68–72 KB.
- Versioned shared stylesheet to load the fixes reliably. No deployment or live-indexing claims.

Validation: all 40 FAQ controls passed; all 18 pages passed responsive checks at 320/768/1280px. Verified 104 local HTTP targets, 33 fragment links and 37 redirects. All 59 optimized assets decoded at original dimensions; all gallery images loaded during browser review. Sampled CTA contrast is now 6.16:1 on purple and 6.63:1 on pink. Reduced-motion preference/background-tab guards passed isolated script tests. Contact inbox delivery, screen-reader end-to-end behavior, deployed Core Web Vitals and Netlify routing remain pending.


## 2026-10-18 — Button-free testimonial loop

- Restored a continuous scrolling presentation without Previous/Next buttons.
- Measured the full seven-card cycle; visual copies are hidden from assistive technology and inert.
- Native touch/keyboard scrolling remains available. Hover/focus pause motion; touch pauses before a delayed resume.
- Reduced-motion users receive all seven reviews in a static responsive grid. Autoplay stops outside the viewport and in hidden tabs.
- Local only; no deployment.


## 2026-10-18 — Google Analytics 4 integration

- Verified Measurement ID G-H9L2DW07PZ in the owner’s Evoke web stream.
- Added one shared deferred loader on all 18 pages; the Google tag loads asynchronously on the production www/non-www domain only.
- Prevented duplicate initialization and excluded localhost/preview traffic. No custom form values or identifying data parameters are added.
- Host gating and single initialization passed isolated tests. Live collection and Realtime verification require deployment; no deployment performed.

## 2026-10-18 — Netlify preview routing fix
- Removed trailing-slash-only redirects after the protected Netlify preview exposed redirect loops. Netlify normalizes trailing slashes before matching rules; canonical tags retain the preferred URLs.
- Retained legacy .html redirects and the Services hub rewrite. Preview must pass before production merge.
