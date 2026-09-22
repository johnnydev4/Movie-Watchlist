# Movie Watchlist

A movie search and watchlist app built with HTML, CSS, and vanilla JavaScript — my Scrimba solo project, powered by [The OMDB API](https://www.omdbapi.com/).

![Movie Watchlist screenshot](./images/screenshot.png)
<!-- Reemplazá con tu propio screenshot; subilo a la carpeta images/ -->

🔗 **Live demo:** [add-your-live-link-here](#)
<!-- Si lo publicás con GitHub Pages, pegá el link acá -->

## About

Search for any movie, browse full details (poster, rating, runtime, genre, plot), and save the ones you want to watch to a dedicated watchlist page. Saved movies persist across sessions using localStorage, so your list is still there next time you open the app.

## Features

- 🔍 Search movies by title via the OMDB API
- 🎬 Full movie details fetched in parallel with `Promise.all()` (rating, runtime, genre, plot)
- ➕ Add movies to a watchlist with duplicate prevention
- 🗑️ Remove movies from the watchlist
- 💾 Watchlist persists across pages and sessions via `localStorage`
- 🖼️ Empty states for "no search yet" and "empty watchlist"
- 🎥 Fullscreen autoplaying background video
- 📱 Responsive search bar with custom-styled input and button

## Tech Stack

- HTML5
- CSS3 (Flexbox, `object-fit`, custom scrollbar hiding, fixed-position background video)
- JavaScript (`async`/`await`, `Promise.all()`, `fetch`, `localStorage`, array methods: `.map()`, `.find()`, `.some()`, `.filter()`)
- [The OMDB API](https://www.omdbapi.com/)

## Project Structure

```
movie-watchlist/
├── index.html
├── watchlist.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── watchlist.js
├── images/
│   ├── header-video.mp4
│   ├── body-video.mp4
│   └── no-data-initial.png
└── README.md
```

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/johnnydev4/movie-watchlist.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.
4. Get a free API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx) and swap it into `js/script.js`.

## What I Learned

- Chaining multiple `fetch` calls: search first, then fetch full details per result
- Handling concurrent async requests with `Promise.all()` instead of resolving one at a time
- Reading and writing structured data (arrays of objects) to `localStorage` with `JSON.stringify()` / `JSON.parse()`
- A real persistence bug: `index.html` was starting with an empty array on every load instead of syncing with what was already saved, silently wiping out movies removed from the other page — fixed by reading from `localStorage` on init
- Event delegation with `data-*` attributes to identify which movie a click belongs to, across dynamically rendered cards
- Preventing duplicate entries with `.some()`
- Positioning a fullscreen background video correctly (`vw`/`vh` units vs. `%`, `object-fit: cover`)

## Author

**johnnydev4**
[GitHub](https://github.com/johnnydev4)
