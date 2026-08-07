# Architecture

## Current Structure

The repository is organized as a flat static website project.

Top-level files include:
- Multiple standalone HTML pages such as index.html, about.html, services.html, work.html, contact.html, blog.html, and several case-study and blog detail pages.
- Image assets such as JPG and PNG files used in the site.
- Standard site files such as robots.txt and sitemap.xml.
- Documentation files in the docs/ folder.

## Site Architecture

The site is currently a static HTML website. Each page is self-contained and includes:
- Its own HTML structure.
- An inline <style> block for layout and visual design.
- Inline <script> blocks for page behavior and structured data.
- Meta tags for SEO, social sharing, and canonical URLs.

## Styling and Scripts

Known implementation patterns:
- Inline CSS is used in nearly every HTML page.
- Inline JavaScript is present on many pages for behavior such as cursor effects, reveal-on-scroll interactions, and small UI enhancements.
- No separate global stylesheet or global JavaScript file is visible in the repository.
- The same design patterns repeat across pages, including hero sections, cards, CTA bands, marquee strips, and a sticky navigation header.

## External Dependencies

Observed external dependencies:
- Google Fonts via the Google Fonts stylesheet.
- Remote canonical URLs and social sharing metadata.
- Local image assets for hero images, thumbnails, and icons.

## Repeated Patterns

Repeated patterns across pages include:
- Sticky top navigation.
- Dark gradient background and mesh/glow overlays.
- Repeated card, portfolio, and CTA structures.
- Similar button styles and footer layout.
- Repeated bold heading and monospaced label styling.

## Notes

TODO: Coordinator to define:
- Whether a future build step or component system should be introduced.
- Whether the repeated inline styles should be consolidated later.
