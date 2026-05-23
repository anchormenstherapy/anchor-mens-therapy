# Anchor Men's Therapy

Static site for [anchormenstherapy.com](https://anchormenstherapy.com). Online therapy practice serving men across Canada and the United States.

---

## Project Structure

```
/
├── index.html                  Home page
├── toronto.html              Each city page lives at root — URL: /toronto
├── vancouver.html             (and so on for ~32 cities)
├── resources/                  (coming) Blog cluster pages
├── assets/
│   ├── site.css                Shared styles for all pages
│   ├── site.js                 Shared scripts (header scroll, FAQ, nav dropdown)
│   ├── logo.png
│   ├── hero.jpg
│   ├── jordan-caron.jpg
│   ├── james-mitchell.jpeg
│   ├── michael-torres.jpeg
│   └── david-chen.jpeg
├── vercel.json                 Clean-URL config (drops .html from URLs)
└── README.md
```

---

## Adding a new city page

1. Duplicate `toronto.html` → `<city>.html` (lowercase, dashes for spaces, e.g. `cities/new-york.html`).
2. Update `<title>` and `<meta name="description">` for the new city.
3. Find every `<span class="var">Toronto</span>` and replace `Toronto` with the new city name. The `.var` class is invisible — it just marks template anchors.
4. Update any city-specific copy (cost of living lines, neighbourhoods, etc.) where it makes sense.
5. Add the city to the appropriate grid in `locations/canada.html` or `locations/usa.html`:
   - Change `class="city-tile coming"` to `class="city-tile live"`
   - Change `href="#"` to `href="/<city>.html"`
   - Replace the "Coming soon" link text with "View Page" and add the `<span class="arr">→</span>`.

---

## Editing shared layout

All styles live in `assets/site.css`. Edit that once and every page updates. Same for `assets/site.js`.

If a header/footer link changes, you'll need to update every HTML file because the markup is duplicated per page. (Trade-off chosen for static-hosting simplicity.)

---

## Deployment

This repo is auto-deployed by Vercel on every push to `main`. No build step — Vercel serves the files directly.

`vercel.json` turns on **clean URLs**, so:

- `/toronto.html` → `/cities/toronto`
- `/locations/canada.html` → `/locations/canada`

Both forms work; the `.html` form redirects to the clean form.

---

## Local preview

Just open `index.html` in a browser, or run a tiny local server:

```bash
# Python 3
python3 -m http.server 8000

# Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Contact

Built for Jordan Caron, Founder, Anchor Men's Therapy.
