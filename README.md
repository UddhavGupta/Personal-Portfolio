# guptau.com

Personal site for Uddhav Gupta. Plain static HTML and CSS: no framework, no build step, no dependencies.

## Edit
Everything lives in `index.html`. Images are in `img/` (WebP), fonts are self-hosted in `fonts/`.

## Preview locally
    python3 -m http.server 8000
Then open http://localhost:8000

## Deploy
Push to `main`. Vercel serves the folder as-is (see `vercel.json`).

## After deploying
- Google Search Console: verify `guptau.com` as a Domain property (TXT record in Cloudflare), then submit `https://guptau.com/sitemap.xml`.
- Bing Webmaster Tools: import from Search Console.
- When content changes, update `<lastmod>` in `sitemap.xml`.
