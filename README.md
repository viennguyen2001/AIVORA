# AIVORA Sight Shopify theme

A modular Shopify Online Store 2.0 theme that recreates the design language and page rhythm of Virasight while exposing the system as reusable theme settings, sections, blocks, snippets, and JSON templates.

## Structure

- `layout/theme.liquid` — global document shell and design tokens.
- `config/settings_schema.json` — global brand, color, spacing, width, and radius controls.
- `sections/` — merchant-editable modules and header/footer section groups.
- `snippets/` — reusable icons and product card.
- `templates/` — home, fully modular product, collection, page, and cart layouts.
- `assets/theme.css` and `assets/theme.js` — system styles and small progressive interactions.
- `locales/` — English and Vietnamese storefront strings.

## Install

Upload the theme folder as a ZIP in Shopify Admin, or use Shopify CLI:

```sh
shopify theme dev --store your-store.myshopify.com
```

See `DESIGN_SYSTEM.md` for token roles and component rules.

The default product template contains 10 independently configurable sections and a 14-type block stack inside the purchase area.
