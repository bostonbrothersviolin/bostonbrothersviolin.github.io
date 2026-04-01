# Boston Brothers — Website Fill-In Guide

## File Structure
```
bostonbrothers/
├── index.html      ← Main site (all sections)
├── style.css       ← All styles
├── script.js       ← Interactions (cursor, nav, lightbox, form)
├── photos/         ← CREATE this folder, drop your images in here
│   ├── hero.jpg
│   ├── about-main.jpg
│   ├── about-accent.jpg
│   ├── gallery-1.jpg  through  gallery-9.jpg
│   ├── break.jpg       (full-width dramatic photo)
│   └── reel-thumb-1.jpg  (optional Instagram reel thumbnails)
└── videos/         ← CREATE this folder if using a video hero
    └── hero.mp4    (optional)
```

---

## Quick Checklist — What to Replace

### 1. Hero Photo / Video
In `index.html`, find the comment:
```
╔══════════════════════════════════════════════╗
║  REPLACE THIS BLOCK WITH YOUR HERO IMAGE     ║
```
Replace the placeholder `<div>` with:
```html
<img src="photos/hero.jpg" alt="Boston Brothers" class="hero-img" />
```

### 2. About Photos
Find `photos/about-main.jpg` and `photos/about-accent.jpg` comments.
Replace the `.img-placeholder` divs with:
```html
<img src="photos/about-main.jpg"   alt="The Brothers" class="about-img-main" />
<img src="photos/about-accent.jpg" alt="Performance"  class="about-img-accent" />
```

### 3. Band Bio
Search for `<!-- REPLACE with your real bio -->` and update the text in the two `<p class="about-body">` tags.

### 4. Stats
Search for `[ # ]` and fill in your real numbers (years together, shows played, cities toured).

### 5. Social Links
Search for `YOURUSERNAME`, `YOURCHANNEL`, `YOURID` and replace with real handles/IDs.
Appears in: About section, Schedule section, Footer, Contact section.

### 6. Gallery Photos
Replace each:
```html
<div class="img-placeholder"><span>Photo 1…</span></div>
```
With:
```html
<img src="photos/gallery-1.jpg" alt="On stage" />
```
Keep the outer `.gallery-item` div and its size classes (`.tall`, `.wide`).

### 7. YouTube Videos
Find `YOUTUBE_VIDEO_ID_1`, `_2`, `_3` and replace with your real video IDs.
The ID is the part after `?v=` in the YouTube URL.
Example: `youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

### 8. Instagram Reels
For each reel, either:
- **Option A (embed):** Go to Instagram → the reel → `···` → Embed → copy the `<blockquote>` code, paste it inside `.media-thumb`, remove the placeholder div.
- **Option B (link thumbnail):**
```html
<a href="https://www.instagram.com/reel/YOUR_ID/" target="_blank">
  <img src="photos/reel-thumb-1.jpg" alt="Reel title" />
  <div class="play-btn">▶</div>
</a>
```

### 9. Show Dates
Search for `<!-- REPLACE placeholder text with your real show details -->`.
Fill in the `show-mon`, `show-day`, `.show-venue`, `.show-loc`, `.show-time` fields.
Replace `href="#"` with your ticketing URL (Eventbrite, Tixr, etc.).
Add or remove `.show-row` blocks as needed.

### 10. Full-Width Photo Break
Find `photos/break.jpg`. Replace the `.break-ph` placeholder with:
```html
<img src="photos/break.jpg" alt="Boston Brothers" class="break-img" />
```

### 11. Contact Email
Replace `booking@bostonbrothers.com` with your real booking email.

### 12. Contact Form (optional — enable real submissions)
The form currently simulates a send with a setTimeout.
To make it real, use **Formspree** (free):
1. Sign up at formspree.io
2. Replace `<form ... onsubmit="handleSubmit(event)">` with:
   `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
3. Remove the `onsubmit` attribute and the `handleSubmit` function from `script.js`.

### 13. Quote
In the photo-break section, update:
```
"Two violins. One voice."
```
with any quote or tagline you'd like.

---

## Color / Style Tweaks
All colors are CSS variables at the top of `style.css`:
```css
:root {
  --cream:    #f5f0e8;   /* page background */
  --navy:     #1c2b4a;   /* primary dark */
  --gold:     #b8955a;   /* accent */
  --midnight: #0d1321;   /* dark sections */
}
```
Change these to adjust the entire site's palette instantly.

---

## Hosting
The site is plain HTML/CSS/JS — no build step required.
Drop the folder onto any host:
- **Netlify** (free): drag & drop the folder at netlify.com/drop
- **GitHub Pages** (free): push to a repo, enable Pages
- **Squarespace / Wix**: these require their own builders — ask your web person
- **Your own domain**: upload via FTP to any shared host

---

*Built for Boston Brothers · Violin Duo*
