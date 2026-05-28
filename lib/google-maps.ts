import { Loader } from "@googlemaps/js-api-loader";

let loaderPromise: Promise<typeof google> | null = null;

export function loadGoogleMaps(): Promise<typeof google> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps can only load in the browser."));
  }

  if (loaderPromise) return loaderPromise;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return Promise.reject(
      new Error(
        "Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. Copy .env.local.example to .env.local and add your key, or set it in Vercel's Environment Variables."
      )
    );
  }

  const loader = new Loader({
    apiKey,
    version: "weekly",
    libraries: ["streetView"],
  });

  loaderPromise = loader.load();
  return loaderPromise;
}
