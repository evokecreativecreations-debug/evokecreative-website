# Architecture

This document is a planning-only proposal for restructuring the current Evoke Creative website while preserving its current visual design and functionality.

## A. Current Structure

The repository is currently a flat static website project with many standalone HTML pages at the root. Each page contains its own HTML structure, inline CSS, and inline JavaScript. The site uses local image assets, standard SEO files, and shared visual patterns such as a sticky navigation bar, dark gradient background, card-based layouts, CTA bands, and a footer.

Current characteristics:
- The site is multi-page and static.
- Pages include home, about, services, work, contact, blog, testimonials, case-study pages, and blog detail pages.
- Styling is embedded directly in each page.
- JavaScript behavior is embedded directly in each page.
- Navigation, footer, hero styles, button styles, portfolio cards, and marquee sections repeat across pages.
- Canonical URLs, social metadata, and JSON-LD structured data are present on many pages.
- The deployment target is a static host, and the current site is compatible with Netlify-style static hosting.

## B. Problems

The current structure is visually strong, but it is difficult to maintain over time:
- CSS is duplicated across many pages, making visual changes slow and error-prone.
- JavaScript is duplicated across pages, which increases maintenance cost and makes behavior inconsistent.
- Assets are mixed at the root, which makes organization and future updates harder.
- Page content, layout, and presentation are tightly coupled in each file.
- Case studies and blog posts are treated as one-off pages rather than a structured content system.
- A non-developer owner would have to edit HTML directly in many places to make simple changes.
- Relative path changes would be risky if files are moved or reorganized without a clear migration plan.
- SEO and schema preservation must be handled carefully to avoid broken search visibility.

## C. Proposed Structure

The recommended target is to remain a plain static HTML/CSS/JavaScript website, compatible with Netlify and the existing local Python HTTP server. The architecture should stay simple enough for a non-developer owner to understand and maintain.

Suggested target structure:

```text
/
├── index.html
├── about.html
├── services.html
├── work.html
├── contact.html
├── blog.html
├── testimonials.html
├── case-study-ascendant-link.html
├── case-study-fuse-a-brainrot.html
├── case-study-jacyjo-branding.html
├── case-study-social-media-kits.html
├── blog-brief-to-final-delivery.html
├── blog-freelance-design-lessons.html
├── blog-how-to-brief-a-game-ui-designer.html
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── js/
│   │   ├── main.js
│   │   └── interactions.js
│   └── images/
│       ├── hero/
│       ├── portfolio/
│       ├── blog/
│       ├── icons/
│       └── brand/
├── docs/
├── robots.txt
└── sitemap.xml
```

### Recommended organization principles
- Keep public HTML URLs stable and preserve the current page names.
- Consolidate repeated CSS into maintainable external CSS files.
- Consolidate repeated JavaScript into maintainable external JavaScript files.
- Organize images and other assets into logical folders.
- Avoid introducing a framework, build system, JSON content system, or HTML partial system.
- Keep the structure understandable to a non-developer.
- Preserve Netlify compatibility and the existing local static preview workflow.
- Preserve SEO, canonical URLs, sitemap entries, schema markup, navigation, and existing functionality.

## D. Migration Plan

This should be executed as a phased migration where each phase can be tested and committed independently.

1. Phase 1 — Baseline and safety
- Capture the current URLs, canonical URLs, sitemap entries, image paths, and page titles.
- Inventory all existing pages, CSS blocks, JavaScript blocks, and image assets.
- Confirm that no production deployment or Netlify configuration is changed during planning.
- Result: a clean baseline that can be compared against later changes.

2. Phase 2 — Create shared asset folders
- Create the assets/ directory with css/, js/, and images/ subfolders.
- Move image files into logical folders without changing public page URLs.
- Keep the HTML pages intact at first and reference the new asset paths only after they are verified.
- Result: assets are organized without affecting the published site.

3. Phase 3 — Extract shared CSS
- Create external CSS files for shared base styles, reusable components, and page-specific overrides.
- Move repeated styles such as typography, buttons, cards, layout grids, hero sections, navigation, footer, and CTA bands into these files.
- Update pages to link to the new CSS files while preserving the existing design.
- Result: each page loads shared CSS from a single maintainable source.

4. Phase 4 — Extract shared JavaScript
- Create external JavaScript files for shared behaviors such as navigation, cursor effects, reveal-on-scroll, hover animations, and other repeated interactions.
- Move repeated scripts out of inline blocks and into shared files.
- Verify that behavior remains the same on a representative set of pages.
- Result: interactive behavior is centralized and easier to maintain.

5. Phase 5 — Migrate one page type at a time
- Migrate the home page first.
- Then about, services, work, and contact pages.
- Then blog and testimonial pages.
- Then case-study and blog-detail pages.
- Keep each page group isolated so issues can be diagnosed quickly.
- Result: changes are incremental and low-risk.

6. Phase 6 — Preserve SEO and content integrity
- Keep public page URLs stable.
- Preserve canonical URLs, title tags, meta descriptions, and schema markup.
- Preserve robots.txt and sitemap.xml structure during the transition.
- Verify internal links and asset paths after each batch of pages is updated.
- Result: search visibility and site navigation remain intact.

7. Phase 7 — Final validation and cleanup
- Review the site across desktop and mobile breakpoints.
- Check navigation, images, link targets, and interactive behaviors.
- Remove any temporary duplication or obsolete inline CSS/JS only after the new structure is verified.
- Result: the site is simplified and easier to maintain without changing its public experience.

## E. Risk Register

| Risk | Why it matters | Prevention |
| --- | --- | --- |
| Broken internal links | The site has many pages and relative links | Keep URLs stable and verify every link after each migration step |
| Broken image paths | Images are used across case studies, blogs, and content pages | Move assets into a centralized structure and test each page after migration |
| SEO regression | Canonical URLs and metadata are important | Preserve titles, descriptions, canonical links, and schema markup exactly during migration |
| Inconsistent visual output | The design is highly customized | Extract styles incrementally and compare with the original pages at each stage |
| JavaScript behavior drift | Cursor, reveal, and hover interactions are part of the experience | Move behavior only after each page is tested in isolation |
| Over-engineering | The project is currently static and simple | Avoid adding a framework, build tooling, or content system |
| Deployment mismatch | Netlify and static hosting require predictable paths | Keep the output structure simple and test local serving before deployment |

## F. Recommendation

Recommendation: remain a plain static HTML/CSS/JavaScript site.

This repository is already a strong fit for a simple static architecture. The best next step is to improve maintainability by consolidating shared CSS and JavaScript into external files and organizing assets into logical folders, while preserving the existing page URLs and current functionality. This approach keeps the project understandable for a non-developer, compatible with Netlify and the local Python server, and avoids unnecessary complexity.

## E. Risk Register

| Risk | Why it matters | Prevention |
| --- | --- | --- |
| Broken internal links | The site has many pages and relative links | Keep URLs stable and verify every link after each migration step |
| Broken image paths | Images are used across case studies, blogs, and content pages | Move assets into a centralized structure and test each page after migration |
| SEO regression | Canonical URLs and metadata are important | Preserve titles, descriptions, canonical links, and schema markup exactly during migration |
| Inconsistent visual output | The design is highly customized | Extract styles incrementally and compare with the original pages at each stage |
| JavaScript behavior drift | Cursor, reveal, and hover interactions are part of the experience | Move behavior only after each page is tested in isolation |
| Page-specific content getting lost | Case studies and blog posts are content-heavy | Keep each page’s content mapped before restructuring |
| Over-engineering | The project is currently static and simple | Avoid adding a framework unless the owner later needs stronger content workflows |
| Deployment mismatch | Netlify and static hosting require predictable paths | Keep the output structure simple and test local serving before deployment |

## F. Recommendation

Recommendation: remain static HTML/CSS/JS.

This repository is already a static, multi-page marketing site with strong visual consistency and no evidence that a framework is required today. A framework would add complexity for a non-developer owner and increase the amount of tooling needed to maintain the site. The better path is to keep the project static while improving organization through shared CSS, shared JavaScript, and structured content sources. A lightweight build step can be considered later if the owner wants automated partial inclusion or asset bundling, but it should not be introduced as a requirement for the current restructuring.
