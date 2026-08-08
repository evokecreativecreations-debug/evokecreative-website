# Roadmap

This roadmap is a planning-only document for a future restructure of the Evoke Creative website. No implementation changes are made in this task.

## Phase 0 — Baseline and Freeze

Goal: preserve the current site before any restructuring begins.

Planned actions:
- Record all current page URLs and canonical URLs.
- Capture page titles, meta descriptions, and social sharing metadata.
- Inventory existing images, assets, and content files.
- Confirm the current deployment target remains static and unchanged.

Deliverables:
- A verified inventory of pages, assets, metadata, and links.
- A documented baseline for future comparison.

## Phase 1 — Structure and Organization

Goal: create a cleaner and more maintainable source structure without changing the public experience.

Planned actions:
- Create a new source organization under a dedicated folder such as src/.
- Separate shared styles, shared scripts, and reusable page fragments.
- Preserve current page paths and keep the public output simple.
- Document how content and templates will be managed.

Deliverables:
- A clear target folder structure.
- Shared styles and scripts identified and grouped.
- A plan for reusable header, footer, and CTA components.

## Phase 2 — Shared Design System Extraction

Goal: reduce duplication while maintaining the current branded look.

Planned actions:
- Extract design tokens such as colors, spacing, type scale, radii, and motion values.
- Consolidate repeated button, card, CTA, nav, and footer styles.
- Identify which effects and sections should be standardized across pages.
- Compare the restructured pages visually against the current site.

Deliverables:
- A shared design layer for the site’s visual language.
- Reduced duplication across pages.
- A documented list of shared components.

## Phase 3 — Content and Page Migration

Goal: migrate content in a controlled sequence.

Planned actions:
- Migrate the home page first.
- Migrate about, services, work, and contact pages next.
- Migrate blog and testimonials content after the core pages are stable.
- Migrate case studies and blog detail pages last.
- Preserve URLs, metadata, and internal links at each stage.

Deliverables:
- One migrated page type at a time, with validation after each batch.
- A stable content structure for case studies, blog posts, and testimonials.

## Phase 4 — Accessibility, SEO, and QA

Goal: ensure the restructure does not degrade quality.

Planned actions:
- Review heading hierarchy and page semantics.
- Verify keyboard access and focus styles.
- Check contrast and visible states for buttons and links.
- Verify canonical URLs, metadata, and sitemap integrity.
- Test navigation, images, and link targets on desktop and mobile.

Deliverables:
- A QA checklist for content, layout, and SEO preservation.
- Confirmation that the public site remains discoverable and accessible.

## Phase 5 — Performance and Experience Refinement

Goal: improve perceived speed and usability without overcomplicating the project.

Planned actions:
- Review image sizes and image loading strategy.
- Check animations for unnecessary motion or jank.
- Streamline repeated sections and reduce unnecessary DOM complexity.
- Confirm the site remains fast on a simple static host.

Deliverables:
- An experience review focused on speed, clarity, and usefulness.
- A list of low-risk improvements for future implementation.

## Phase 6 — Deployment Readiness

Goal: prepare for a safe launch if and when the owner approves implementation.

Planned actions:
- Confirm the deployment workflow and hosting assumptions.
- Review all content and asset paths in the built output.
- Validate the final structure locally before any production deployment.
- Coordinate deployment only after explicit approval.

Deliverables:
- A release checklist.
- A deployment plan that preserves the current public URLs.

## Decision Recommendation

Recommendation: avoid introducing a framework in the near term.

The current project is a strong candidate for a static-first improvement strategy rather than a framework migration. A lightweight, static-focused organization will be easier to maintain for a non-developer owner and preserves the existing deployment model. A framework or build tool can be revisited later if the content volume grows significantly or the owner wants more advanced templating and automation.
