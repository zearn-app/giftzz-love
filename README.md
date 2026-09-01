# Giftzz Love — Website Demo

A premium, mobile-first product catalogue + WhatsApp-ordering demo built for
**Giftzz Love** (Madurai, Tamil Nadu · @giftzz_love).

This is a static, self-contained website — no build tools, no server required.

## How to view it
Just double-click `index.html`, or open it in any web browser.
(For the smoothest experience — and for the header search/animations to behave
exactly as on a real host — you can also serve the folder locally, e.g.
`python3 -m http.server` from inside this folder, then visit
`http://localhost:8000`.)

## Files
- `index.html` — all page content and structure
- `styles.css` — the full design system (colors, type, layout, components)
- `script.js` — product data, WhatsApp order-link generation, search/filter,
  the product modal, and small UI interactions
- `assets/logo.png` — the Giftzz Love logo, cropped from the brand's own
  WhatsApp Business profile photo

## What's real vs. placeholder
- The **logo**, **WhatsApp number** (+91 81484 72259), **Instagram handle**
  (@giftzz_love), and business stats (10,000+ orders, 13K+ followers) are real.
- The **7 products**, **prices**, **descriptions**, and **customer reviews**
  are demo/placeholder content, exactly as specified in the brief — written so
  they're easy to find and replace with real product photos, prices and copy.
- The **product illustrations** are custom SVG artwork in the brand's colors
  rather than stock photos or reused customer images — swap in real product
  photography any time by editing the `art` field per product in `script.js`
  or replacing the `<div class="product-media">` markup.
- The **Instagram grid** uses styled placeholder tiles and links out to the
  real profile; it's ready to be wired up to a live Instagram feed embed later.

## Editing products
Open `script.js` and edit the `PRODUCTS` array near the top — each product has
`name`, `price`, `category`, `desc`, `occasions`, `highlights`, and an `art`
object controlling its illustration color + icon. Add or remove products
freely; the grid, filters, search and WhatsApp links all update automatically.

## WhatsApp ordering
Every "Order on WhatsApp" button and the product modal build a
pre-filled message and open `https://wa.me/918148472259?text=...` — no backend,
no payment gateway, exactly as scoped for this demo.
