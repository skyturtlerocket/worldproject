"use client";

import type { Tour, TourStop } from "@/lib/types";

type Props = {
  tour: Tour;
  activeStopId: string;
  onSelect: (stop: TourStop) => void;
};

export default function TourNav({ tour, activeStopId, onSelect }: Props) {
  const idx = tour.stops.findIndex((s) => s.id === activeStopId);
  const prev = idx > 0 ? tour.stops[idx - 1] : null;
  const next = idx < tour.stops.length - 1 ? tour.stops[idx + 1] : null;
  const current = tour.stops[idx] ?? tour.stops[0];

  return (
    <div className="flex items-center justify-between gap-3 border-t border-wall/30 bg-ink/95 px-4 py-3">
      <button
        type="button"
        onClick={() => prev && onSelect(prev)}
        disabled={!prev}
        className="rounded border border-wall/40 px-3 py-1.5 text-sm text-parchment transition hover:border-rust hover:text-parchment disabled:opacity-30"
      >
        ← {prev ? prev.name : "Start"}
      </button>

      <div className="text-center text-xs uppercase tracking-widest text-parchment/60">
        <div className="text-parchment">
          {idx + 1} / {tour.stops.length}
        </div>
        <div className="hidden sm:block">{current.summary}</div>
      </div>

      <button
        type="button"
        onClick={() => next && onSelect(next)}
        disabled={!next}
        className="rounded border border-wall/40 px-3 py-1.5 text-sm text-parchment transition hover:border-rust hover:text-parchment disabled:opacity-30"
      >
        {next ? next.name : "End"} →
      </button>
    </div>
  );
}
