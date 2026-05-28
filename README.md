# Divided Grounds — A Cold War Virtual Tour

A virtual, look-around tour of the places where the Cold War split a country, a city, and a single people. Built for an AP World History project. Version 1 covers **Germany** (Berlin, 1945–1989) and **Korea** (the 38th parallel and DMZ, 1945–present).

The site is a [Next.js](https://nextjs.org) (App Router) app styled with Tailwind CSS and uses the Google Maps JavaScript API's Street View Panorama to let visitors stand at each location and look around in 360°, GeoGuessr-style.

## Quick start (local)

You need Node.js 18.18+ (Node 20 or 22 recommended) and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Get a free Google Maps API key (see below) and create a local environment file:

   ```bash
   cp .env.local.example .env.local
   ```

   Open `.env.local` and paste your key after `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=`.

3. Start the dev server:

   ```bash
   npm run dev
   ```

   If you see `500` errors or `a[d] is not a function` in the terminal, stop the server and run:

   ```bash
   npm run dev:clean
   ```

   That deletes the `.next` cache and restarts (safe fix after adding new routes or tour data).

   Open [http://localhost:3000](http://localhost:3000).

## Get a Google Maps API key

The Street View panorama is loaded client-side and needs a key.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/) and create a project.
2. In **APIs & Services → Library**, enable **Maps JavaScript API** and **Maps Embed API**. (Street View is included in both; user-contributed 360° photos such as Pyongyang and Dorasan Station use the Embed API.)
3. In **APIs & Services → Credentials**, click **Create credentials → API key**.
4. Click the new key to restrict it:
   - **Application restrictions → HTTP referrers (websites).** Add:
     - `http://localhost:3000/*`
     - `https://*.vercel.app/*`
     - Your custom domain if you have one
   - **API restrictions → Restrict key → Maps JavaScript API** and **Maps Embed API**.
5. Copy the key into `.env.local` (local) and Vercel's Environment Variables (production).

A billing account is required by Google, but Maps gives a monthly free credit that easily covers a class project's traffic.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo. Vercel detects Next.js automatically — accept the defaults.
3. Before the first deploy, add the environment variable:
   - Key: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Value: your Google Maps API key
4. Deploy. Each push to the main branch will redeploy.

No `vercel.json` is required.

## Project structure

```
app/
  page.tsx                  # Home (regions overview)
  layout.tsx                # Metadata and global styles
  tour/[region]/page.tsx    # Tour route (currently only /tour/germany)
  tour/[region]/TourClient.tsx
  not-found.tsx
components/
  StreetViewPanorama.tsx    # Google Street View viewer
  TourSidebar.tsx           # Stop list and active description
  TourNav.tsx               # Previous / Next stop bar
data/
  tours/germany.ts          # Germany stops
  tours/korea.ts            # Korea stops
lib/
  google-maps.ts            # Maps JS API loader (singleton)
  types.ts                  # TourStop, Tour types
```

## Adding a new stop or a new region

- **New stop in Germany:** add an entry to the `stops` array in `data/tours/germany.ts`. Each stop needs `id`, `name`, `lat`, `lng`, `era`, `summary`, and `description`. Optional `heading` (0–360°), `pitch` (-90 to 90), and `zoom` (0–5) control the camera's starting angle — tune them by opening the page, dragging the view, and copying the angle into the data file.
- **New region:** create `data/tours/<region>.ts`, register it in `app/tour/[region]/page.tsx`, and add a card on the home page.

## Editing the writing

All historical copy lives in `data/tours/germany.ts`. Use `\n\n` between paragraphs in `description`; the sidebar splits on that.

## Notes and limitations

- The Google Maps API key is shipped to the browser (this is standard for client-side Maps). The HTTP-referrer restriction is what prevents abuse — don't skip it.
- If a stop has no Street View coverage within 80 meters, the viewer shows a fallback "Open in Google Maps" link. Adjust `lat`/`lng` in the data file to a nearby road where Street View exists.
- Static export: `npm run build` prerenders `/` and `/tour/germany` as static HTML. The Street View viewer is hydrated client-side.
