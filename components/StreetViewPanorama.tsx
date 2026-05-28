"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadGoogleMaps } from "@/lib/google-maps";
import {
  isPhotoSpherePano,
  streetViewEmbedUrl,
  streetViewMapsUrl,
} from "@/lib/street-view";
import type { TourStop } from "@/lib/types";

type Props = {
  stop: TourStop;
};

type LoadState =
  | { kind: "loading" }
  | { kind: "ready" }
  | { kind: "no-coverage" }
  | { kind: "error"; message: string };

export default function StreetViewPanorama({ stop }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const useEmbed = isPhotoSpherePano(stop.panoId);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const panoramaRef = useRef<google.maps.StreetViewPanorama | null>(null);
  const requestIdRef = useRef(0);
  const [mapsReady, setMapsReady] = useState(false);
  const [state, setState] = useState<LoadState>({ kind: "loading" });

  const mapsLink = streetViewMapsUrl(stop);

  // Photo spheres (user-contributed 360°) render via Maps Embed API — the JS
  // Panorama widget often shows a black screen for these IDs.
  useEffect(() => {
    if (!useEmbed) return;
    setState({ kind: "loading" });
  }, [useEmbed, stop.id, stop.panoId, stop.heading, stop.pitch, stop.zoom]);

  // Standard Google car-captured Street View via Maps JavaScript API.
  useEffect(() => {
    if (useEmbed) return;

    let cancelled = false;
    let statusListener: google.maps.MapsEventListener | null = null;

    loadGoogleMaps()
      .then((google) => {
        if (cancelled || !containerRef.current) return;

        const panorama = new google.maps.StreetViewPanorama(
          containerRef.current,
          {
            addressControl: false,
            fullscreenControl: true,
            motionTracking: false,
            motionTrackingControl: false,
            showRoadLabels: false,
            linksControl: true,
          }
        );
        panoramaRef.current = panorama;

        statusListener = panorama.addListener("status_changed", () => {
          if (cancelled) return;
          const status = panorama.getStatus();
          if (status === google.maps.StreetViewStatus.OK) {
            setState({ kind: "ready" });
          } else if (status === google.maps.StreetViewStatus.ZERO_RESULTS) {
            setState({ kind: "no-coverage" });
          }
        });

        setMapsReady(true);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message =
          err instanceof Error ? err.message : "Failed to load Google Maps.";
        setState({ kind: "error", message });
      });

    return () => {
      cancelled = true;
      statusListener?.remove();
      panoramaRef.current = null;
      setMapsReady(false);
    };
  }, [useEmbed]);

  const goToStop = useCallback(
    async (target: TourStop) => {
      const panorama = panoramaRef.current;
      if (!panorama) return;

      const requestId = ++requestIdRef.current;
      setState({ kind: "loading" });

      const google = await loadGoogleMaps();
      if (requestId !== requestIdRef.current) return;

      const applyPov = () => {
        panorama.setPov({
          heading: target.heading ?? 0,
          pitch: target.pitch ?? 0,
        });
        panorama.setZoom(target.zoom ?? 1);
      };

      const service = new google.maps.StreetViewService();

      const finish = (pano?: string | null) => {
        if (requestId !== requestIdRef.current) return;
        if (pano) {
          panorama.setPano(pano);
        } else {
          panorama.setPosition({ lat: target.lat, lng: target.lng });
        }
        applyPov();
      };

      if (target.panoId) {
        service.getPanorama({ pano: target.panoId }, (data, status) => {
          if (status === google.maps.StreetViewStatus.OK && data?.location?.pano) {
            finish(data.location.pano);
          } else {
            finish(target.panoId);
          }
        });
        return;
      }

      service.getPanorama(
        { location: { lat: target.lat, lng: target.lng }, radius: 500 },
        (data, status) => {
          if (status === google.maps.StreetViewStatus.OK && data?.location?.pano) {
            finish(data.location.pano);
          } else {
            finish(null);
          }
        }
      );
    },
    []
  );

  useEffect(() => {
    if (useEmbed || !mapsReady) return;
    goToStop(stop);
  }, [useEmbed, mapsReady, stop, goToStop]);

  if (useEmbed) {
    if (!apiKey) {
      return (
        <EmbedFallback
          mapsLink={mapsLink}
          message="Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY for embedded panoramas."
        />
      );
    }

    let embedSrc: string;
    try {
      embedSrc = streetViewEmbedUrl(stop, apiKey);
    } catch {
      embedSrc = "";
    }

    return (
      <div className="relative h-full w-full bg-ink">
        {embedSrc ? (
          <iframe
            key={stop.id}
            title={`Street View: ${stop.name}`}
            src={embedSrc}
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setState({ kind: "ready" })}
            onError={() =>
              setState({
                kind: "error",
                message:
                  "Could not load this 360° view. Enable the Maps Embed API for your Google Cloud key.",
              })
            }
          />
        ) : null}

        {state.kind !== "ready" && (
          <Overlay state={state} mapsLink={mapsLink} />
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-ink">
      <div ref={containerRef} className="h-full w-full" />
      {state.kind !== "ready" && (
        <Overlay state={state} mapsLink={mapsLink} />
      )}
    </div>
  );
}

function Overlay({
  state,
  mapsLink,
}: {
  state: LoadState;
  mapsLink: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/70 px-6 text-center">
      <div className="pointer-events-auto max-w-md rounded-lg border border-wall/40 bg-ink/90 p-5 text-sm text-parchment shadow-xl">
        {state.kind === "loading" && (
          <p className="animate-pulse">Loading Street View…</p>
        )}

        {state.kind === "no-coverage" && (
          <div className="space-y-3">
            <p className="font-semibold text-parchment">
              No Street View coverage at this point.
            </p>
            <p className="text-parchment/70">
              Google hasn&apos;t mapped a panorama near this stop. You can still
              view the location externally.
            </p>
            <MapsLink href={mapsLink} />
          </div>
        )}

        {state.kind === "error" && (
          <div className="space-y-3">
            <p className="font-semibold text-rust">Street View failed to load</p>
            <p className="text-parchment/80">{state.message}</p>
            <MapsLink href={mapsLink} />
          </div>
        )}
      </div>
    </div>
  );
}

function EmbedFallback({
  mapsLink,
  message,
}: {
  mapsLink: string;
  message: string;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-ink px-6">
      <div className="max-w-md space-y-3 text-center text-sm text-parchment">
        <p className="font-semibold text-rust">{message}</p>
        <MapsLink href={mapsLink} />
      </div>
    </div>
  );
}

function MapsLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded border border-rust px-3 py-1.5 text-parchment hover:bg-rust/20"
    >
      Open in Google Maps
    </a>
  );
}
