"use client";

import Link from "next/link";
import type { Tour, TourStop } from "@/lib/types";

type Props = {
  tour: Tour;
  activeStopId: string;
  onSelect: (stop: TourStop) => void;
};

export default function TourSidebar({ tour, activeStopId, onSelect }: Props) {
  const activeStop = tour.stops.find((s) => s.id === activeStopId) ?? tour.stops[0];
  const activeIndex = tour.stops.findIndex((s) => s.id === activeStop.id);

  return (
    <aside className="flex h-full flex-col border-r border-wall/30 bg-ink/95">
      <header className="border-b border-wall/30 px-5 py-4">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest text-parchment/60 hover:text-parchment"
        >
          ← Divided Grounds
        </Link>
        <h1 className="mt-2 font-serif text-2xl text-parchment">{tour.title}</h1>
        <p className="text-sm text-parchment/70">{tour.subtitle}</p>
      </header>

      <nav className="border-b border-wall/30">
        <ol className="divide-y divide-wall/20">
          {tour.stops.map((stop, i) => {
            const isActive = stop.id === activeStop.id;
            return (
              <li key={stop.id}>
                <button
                  type="button"
                  onClick={() => onSelect(stop)}
                  className={`flex w-full items-start gap-3 px-5 py-3 text-left transition ${
                    isActive
                      ? "bg-rust/15 text-parchment"
                      : "text-parchment/80 hover:bg-wall/10"
                  }`}
                >
                  <span
                    className={`mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border text-xs ${
                      isActive
                        ? "border-rust bg-rust text-ink"
                        : "border-wall/60 text-parchment/60"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{stop.name}</span>
                    <span className="block text-xs text-parchment/60">
                      {stop.era}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      <article className="flex-1 overflow-y-auto px-5 py-5">
        <p className="text-xs uppercase tracking-widest text-rust">
          Stop {activeIndex + 1} of {tour.stops.length}
        </p>
        <h2 className="mt-1 font-serif text-xl text-parchment">{activeStop.name}</h2>
        <p className="mt-1 text-xs text-parchment/60">{activeStop.era}</p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-parchment/90">
          {activeStop.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </aside>
  );
}
