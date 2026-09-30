# AIVORA Sight design system

## Direction

The theme uses a product-led, high-contrast visual system inspired by Virasight's current storefront: white canvas, near-black typography, full-bleed product imagery, large editorial headlines, pill actions, and restrained amber accents.

## Token roles

- `canvas`: page and primary surfaces.
- `surface`: quiet product tiles, input backplates, and grouped content.
- `ink`: primary text and solid actions.
- `muted`: supporting copy and metadata.
- `line`: dividers and control boundaries.
- `accent`: focus rings, selected details, and rare highlights. It is not a general background color.
- `radius-card`: media, product cards, and large content containers.
- `radius-control`: form fields and compact controls.
- `section-space`: vertical rhythm shared by every section.

All global tokens can be adjusted in Theme settings. Each homepage module is an Online Store 2.0 section and can be reordered, removed, duplicated, and edited without code.

## Components

- Announcement, responsive header, mobile dialog menu, footer, and service strip.
- Hero carousel with desktop/mobile media, accessible controls, autoplay opt-in, and reduced-motion handling.
- Category path cards, collection tabs, product cards, editorial split, image-with-text, FAQ/contact, product gallery, collection grid, cart, and standard page.

## Product system

The product template contains independent sections for the purchase area, highlights, media story, full description, use cases, specifications, comparison, testimonials, FAQ, and product recommendations. Merchants can reorder or remove each section in Theme Editor.

The purchase column is a reorderable block stack with vendor, title, rating, price, SKU, description, variant picker, inventory state, quantity, buy buttons, trust list, collapsible tabs, sharing, app blocks, custom Liquid, dividers, and spacers.

Variant changes update the form ID, price, compare-at price, badge, SKU, availability, inventory treatment, add-to-cart state, URL, and featured media without reloading. The gallery supports images, hosted and external video, 3D models, thumbnails, counters, and optional zoom.

## Accessibility

Visible `:focus-visible` rings, semantic headings, native `dialog` and `details`, labeled controls, keyboard-operable tabs/carousel controls, and reduced-motion support are included.
