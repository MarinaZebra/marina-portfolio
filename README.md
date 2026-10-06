# Marina Pérez — Scientific Portfolio

Static website (HTML, CSS and vanilla JavaScript, no build step), deployed with GitHub Pages.

## Structure

- `index.html` – page skeleton
- `js/content.js` – **all visible content** (texts, projects, career, articles, image references). Edit this file to update the site.
- `js/app.js` – rendering, routing (`#/project/N`, `#/article/N`) and scroll effects
- `css/styles.css` – design
- `assets/img/` – optimised images (`name.jpg` full size, `name-sm.jpg` for cards)

## Adding an image to a project

1. Save the image in `assets/img/` as `my-image.jpg` (max ~1600 px wide) and a smaller `my-image-sm.jpg` (~720 px).
2. In `js/content.js`, add it to the project's `figures` and reference its key in the `figure` field of the sections it should accompany. Use it as `cover` to show it on the card.

## Local preview

```
python -m http.server 8000
```

Open http://localhost:8000.

## Deployment

GitHub Pages serves the `main` branch root directly (Settings → Pages → Deploy from a branch → `main` / root). Every push to `main` republishes the site.
