# Migration Inventory

This document is a planning-only inventory for the Evoke Creative website. It records the current repository structure and observed patterns before any files are moved, renamed, extracted, or otherwise changed.

## Scope and guardrails

- Repository inspected: root HTML pages, top-level assets, docs, robots.txt, and sitemap.xml.
- No website implementation files were modified.
- No files were moved, renamed, deleted, or extracted.
- No URLs were changed.
- No HTML was changed.
- No CSS or JavaScript was extracted.
- No commit or push was made.

## 1. HTML pages and likely purpose

The repository contains 14 root HTML pages.

| File | Likely purpose | Evidence used |
| --- | --- | --- |
| index.html | Home / landing page | Page title and file name |
| about.html | About / profile page | Page title and file name |
| services.html | Services page | Page title and file name |
| work.html | Portfolio / work landing page | Page title and file name |
| contact.html | Contact page | Page title and file name |
| blog.html | Blog index / article listing page | Page title and file name |
| testimonials.html | Testimonials / social proof page | Page title and file name |
| case-study-fuse-a-brainrot.html | Case study page | Page title and file name |
| case-study-jacyjo-branding.html | Case study page | Page title and file name |
| case-study-social-media-kits.html | Case study page | Page title and file name |
| case-study-ascendant-link.html | Case study page | Page title and file name |
| blog-brief-to-final-delivery.html | Blog post | Page title and file name |
| blog-freelance-design-lessons.html | Blog post | Page title and file name |
| blog-how-to-brief-a-game-ui-designer.html | Blog post | Page title and file name |

TODO: Coordinator to verify if any page title or heading should be interpreted differently.

## 2. Image and file assets and where they are referenced

Top-level asset files found in the repository root:

| Asset | Observed references | Notes |
| --- | --- | --- |
| android-chrome-192x192.png | Referenced from most HTML pages | Likely favicon / app-icon asset |
| android-chrome-512x512.png | Referenced from most HTML pages | Likely favicon / app-icon asset |
| apple-touch-icon.png | Referenced from most HTML pages | Likely Apple touch icon |
| favicon-16x16.png | Referenced from most HTML pages | Likely favicon variant |
| favicon-32x32.png | Referenced from most HTML pages | Likely favicon variant |
| favicon.ico | Referenced from most HTML pages | Primary favicon |
| brief-delivery-hero.jpg | Referenced from blog-brief-to-final-delivery.html | Observed direct reference |
| brief-delivery-thumb.jpg | No direct reference found by exact filename match | TODO: Coordinator to verify whether this asset is unused or referenced through a different path |
| brief-game-ui-hero.jpg | Referenced from blog-how-to-brief-a-game-ui-designer.html | Observed direct reference |
| brief-game-ui-thumb.jpg | Referenced from blog.html | Observed direct reference |
| freelancing-hero.jpg | Referenced from blog-freelance-design-lessons.html | Observed direct reference |
| freelancing-thumb.jpg | Referenced from blog.html | Observed direct reference |

### Notable path observations

- The HTML files currently reference image files at the repository root, not from a nested assets/images directory.
- Some blog pages appear to reference image paths that do not match the repository filenames exactly, for example blog.html references paths under images/ that are not present as a directory in the repo.
- This is a likely restructuring risk because asset paths may break if files are reorganized without careful path mapping.

TODO: Coordinator to verify the intended image folder structure and whether the current image paths are intentional or stale.

## 3. Inline <style> blocks

Each HTML page appears to contain one large inline <style> block. Some pages also contain an additional smaller style block.

| File | Inline style blocks | Approximate size | Shared or page-specific? |
| --- | ---: | ---: | --- |
| about.html | 1 | ~20.0 KB | Large block appears to carry the shared site design system; likely shared but duplicated across pages |
| blog-brief-to-final-delivery.html | 1 | ~21.1 KB | Large block appears to match the shared site design system |
| blog-freelance-design-lessons.html | 1 | ~21.1 KB | Large block appears to match the shared site design system |
| blog-how-to-brief-a-game-ui-designer.html | 1 | ~21.1 KB | Large block appears to match the shared site design system |
| blog.html | 1 | ~21.1 KB | Large block appears to match the shared site design system |
| case-study-ascendant-link.html | 1 | ~21.4 KB | Large block appears to match the shared site design system |
| case-study-fuse-a-brainrot.html | 1 | ~21.7 KB | Large block appears to match the shared site design system |
| case-study-jacyjo-branding.html | 1 | ~22.1 KB | Large block appears to match the shared site design system |
| case-study-social-media-kits.html | 1 | ~21.8 KB | Large block appears to match the shared site design system |
| contact.html | 1 | ~22.2 KB | Large block appears to match the shared site design system |
| index.html | 1 | ~23.0 KB | Large block appears to match the shared site design system |
| services.html | 2 | ~20.0 KB + ~0.8 KB | Main block appears shared; second block appears smaller and likely page-specific or supplemental |
| testimonials.html | 1 | ~20.0 KB | Large block appears to match the shared site design system |
| work.html | 1 | ~20.1 KB | Large block appears to match the shared site design system |

### Observed CSS duplication pattern

The large inline style block is present in nearly every page and appears to contain the same broad site design foundation:
- dark theme and gradient backdrop
- custom cursor styling
- sticky nav styling
- button styles
- card / portfolio item styles
- footer styling
- marquee / reveal utilities
- magnetic hover styles

This is the strongest candidate for external CSS consolidation.

## 4. Inline <script> blocks

Inline scripts are present in most pages, and some pages contain multiple blocks.

| File | Inline script blocks | Approximate size | Shared or page-specific? |
| --- | ---: | ---: | --- |
| about.html | 2 | ~0.75 KB + ~4.46 KB | Larger block appears repeated across many pages; likely shared interaction logic |
| blog-brief-to-final-delivery.html | 2 | ~0.70 KB + ~4.46 KB | Same repeated pattern as other pages |
| blog-freelance-design-lessons.html | 2 | ~0.73 KB + ~4.46 KB | Same repeated pattern as other pages |
| blog-how-to-brief-a-game-ui-designer.html | 2 | ~0.74 KB + ~4.46 KB | Same repeated pattern as other pages |
| blog.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| case-study-ascendant-link.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| case-study-fuse-a-brainrot.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| case-study-jacyjo-branding.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| case-study-social-media-kits.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| contact.html | 1 | ~5.83 KB | Larger block appears repeated or similar to other pages |
| index.html | 2 | ~0.83 KB + ~5.33 KB | Larger block appears repeated or similar to other pages |
| services.html | 4 | ~1.28 KB + ~2.71 KB + ~0.48 KB + ~4.46 KB | Multiple blocks; some appear supplemental and some appear repeated |
| testimonials.html | 1 | ~4.46 KB | Same repeated pattern as other pages |
| work.html | 1 | ~4.46 KB | Same repeated pattern as other pages |

### Observed JavaScript duplication pattern

A repeated ~4.46 KB script block appears across many pages. The repository evidence strongly suggests this block carries shared interaction behavior such as:
- custom cursor movement
- hover / magnetic effect
- reveal-on-scroll behavior
- scroll-state behavior for nav or UI

TODO: Coordinator to verify the exact script contents and whether any smaller script blocks are page-specific metadata or behavior.

## 5. Shared CSS patterns appearing across multiple pages

The repository shows repeated styling patterns across many pages. These are the strongest candidates for shared CSS extraction:

- Global dark theme, gradient, and mesh/glow background treatment
- Custom cursor styles and hover states
- Sticky navigation and nav CTA button styling
- Shared button styles
- Repeated card / portfolio item styling
- Repeated CTA band / section styling
- Shared footer styling and social icon styling
- Marquee / scrolling track animation
- Reveal-on-scroll utility classes
- Magnetic hover wrapper styling

## 6. Shared JavaScript patterns appearing across multiple pages

The repository shows repeated JavaScript patterns across many pages. These are the strongest candidates for shared JavaScript extraction:

- Mouse / cursor movement behavior
- Magnetic hover behavior
- Reveal-on-scroll behavior
- Scroll-state behavior for nav or UI elements
- Shared light interaction / motion behavior

TODO: Coordinator to verify whether any page-specific script content should be preserved separately.

## 7. Header / navigation / footer patterns across pages

Observed pattern summary:

- Nearly every page includes a sticky top navigation.
- Navigation appears to link to core pages: Home, About, Services, Work, Blog, Contact.
- The navigation also includes a prominent contact CTA or similar action button.
- Nearly every page includes a footer with branding, copyright text, and social links.
- The footer structure and social-icon treatment appear visually consistent across pages.

This is a good candidate for later standardization, but the current inventory does not prove whether the exact markup is identical on every page.

TODO: Coordinator to verify whether any page uses a slightly different header/footer composition.

## 8. Internal page links that could be affected by restructuring

The current HTML pages use relative links to other pages. The links most likely to be affected by any restructuring are:

### Core site pages
- index.html -> about.html
- index.html -> services.html
- index.html -> work.html
- index.html -> blog.html
- index.html -> contact.html

### Shared page navigation links
- about.html -> index.html
- about.html -> services.html
- about.html -> work.html
- about.html -> blog.html
- about.html -> contact.html

- services.html -> index.html
- services.html -> about.html
- services.html -> work.html
- services.html -> blog.html
- services.html -> contact.html

- work.html -> index.html
- work.html -> about.html
- work.html -> services.html
- work.html -> blog.html
- work.html -> contact.html

- blog.html -> index.html
- blog.html -> about.html
- blog.html -> services.html
- blog.html -> work.html
- blog.html -> contact.html

- contact.html -> index.html
- contact.html -> about.html
- contact.html -> services.html
- contact.html -> work.html
- contact.html -> blog.html

### Case study and blog links
- work.html -> case-study-fuse-a-brainrot.html
- work.html -> case-study-jacyjo-branding.html
- work.html -> case-study-social-media-kits.html
- work.html -> case-study-ascendant-link.html

- blog.html -> blog-how-to-brief-a-game-ui-designer.html
- blog.html -> blog-brief-to-final-delivery.html
- blog.html -> blog-freelance-design-lessons.html

### Page-level CTA links
- Several pages link back to contact.html and work.html from hero or CTA sections.

This inventory shows that link preservation is a major migration risk and should be validated after any file move or path change.

## 9. Asset paths that could be affected

Asset paths in the current repository are mostly relative and root-based.

### Existing paths observed
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- brief-delivery-hero.jpg
- brief-delivery-thumb.jpg
- brief-game-ui-hero.jpg
- brief-game-ui-thumb.jpg
- freelancing-hero.jpg
- freelancing-thumb.jpg

### Risks
- Any move into a new folder structure will require updated relative paths.
- The current repository does not appear to have an assets/images subfolder, so a move to a new assets/ structure would require path updates in every affected HTML file.
- The current blog pages appear to reference image paths that differ from the repository filenames; this should be treated as a path-mapping risk.

TODO: Coordinator to verify the intended final asset organization before any path changes are made.

## 10. SEO-sensitive elements

The repository contains the following SEO-sensitive elements and related files:

### Title tags
- Present in all inspected HTML pages.
- These are page-specific and should be preserved during migration.

### Meta description
- Observed in the repository, but the inventory did not verify every page individually.
- TODO: Coordinator to verify which pages include a meta description and which values should be preserved.

### Canonical URLs
- Canonical links are present in the HTML files inspected.
- These should be preserved exactly during migration.

### Open Graph and Twitter metadata
- Observed in the home page and likely elsewhere.
- TODO: Coordinator to verify the full coverage and exact values for each page.

### JSON-LD / structured data
- Present in multiple pages as inline script blocks.
- These should be preserved exactly because they may affect search appearance and rich results.

### robots.txt
- Present at the repository root.
- Current content references the live sitemap URL.
- Should be preserved.

### sitemap.xml
- Present at the repository root.
- Contains published page URLs for the live site.
- Should be preserved and updated only with careful review.

## 11. Recommended order for extracting

The recommended extraction order is:

1. CSS first
   - Extract shared visual styles from the large repeated inline style blocks first.
   - Keep page-specific overrides separate until the shared foundation is stable.
   - This is the safest and highest-value consolidation step.

2. JavaScript second
   - Extract the repeated interaction logic after CSS is stabilized.
   - Keep page-specific scripts separate until the shared behavior is verified.
   - This reduces the risk of breaking motion and interaction behavior.

3. Images and assets last
   - Move image files into a logical assets/images structure only after HTML references are mapped.
   - This should be done carefully because path changes are the most likely source of broken references.

## Summary

The current website is a straightforward static site with:
- many root-level HTML pages
- repeated inline CSS and JavaScript
- a consistent shared visual language
- a clear need for CSS and JS consolidation
- a high risk of path breakage if assets are moved without a controlled inventory

This inventory is intended to guide a safe migration plan before any implementation changes are made.
