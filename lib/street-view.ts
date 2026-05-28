import type { TourStop } from "@/lib/types";

/** User-contributed 360° photos on Google Maps use pano IDs starting with CAoS */
export function isPhotoSpherePano(panoId?: string): boolean {
  return Boolean(panoId?.startsWith("CAoS") || panoId?.startsWith("CIHM"));
}

export function zoomToFov(zoom = 1): number {
  const levels = [100, 90, 75, 60, 45];
  return levels[Math.min(Math.max(zoom, 0), 4)] ?? 90;
}

export function streetViewEmbedUrl(stop: TourStop, apiKey: string): string {
  const params = new URLSearchParams({
    key: apiKey,
    heading: String(stop.heading ?? 0),
    pitch: String(stop.pitch ?? 0),
    fov: String(zoomToFov(stop.zoom)),
  });

  // Some user-contributed CIHM pano IDs are rejected by Embed API.
  // For those, use location-based Street View instead of pano-based.
  if (stop.panoId && !stop.panoId.startsWith("CIHM")) {
    params.set("pano", stop.panoId);
  } else {
    params.set("location", `${stop.lat},${stop.lng}`);
  }

  return `https://www.google.com/maps/embed/v1/streetview?${params.toString()}`;
}

export function streetViewMapsUrl(stop: TourStop): string {
  if (stop.panoId) {
    return `https://www.google.com/maps/@?api=1&map_action=pano&pano=${encodeURIComponent(stop.panoId)}`;
  }
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${stop.lat},${stop.lng}`;
}
