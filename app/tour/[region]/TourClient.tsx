"use client";

import { useState } from "react";
import StreetViewPanorama from "@/components/StreetViewPanorama";
import TourSidebar from "@/components/TourSidebar";
import TourNav from "@/components/TourNav";
import type { Tour, TourStop } from "@/lib/types";

type Props = {
  tour: Tour;
};

export default function TourClient({ tour }: Props) {
  const [activeStop, setActiveStop] = useState<TourStop>(tour.stops[0]);

  return (
    <main className="grid h-[calc(100vh-3.5rem)] w-full grid-cols-1 grid-rows-[1fr_auto] md:grid-cols-[380px_1fr] md:grid-rows-[1fr_auto]">
      <div className="row-start-2 max-h-[45vh] overflow-hidden md:col-start-1 md:row-span-2 md:row-start-1 md:max-h-none">
        <TourSidebar
          tour={tour}
          activeStopId={activeStop.id}
          onSelect={setActiveStop}
        />
      </div>

      <div className="relative row-start-1 min-h-[55vh] md:col-start-2 md:row-start-1 md:min-h-0">
        <StreetViewPanorama stop={activeStop} />
      </div>

      <div className="row-start-3 md:col-start-2 md:row-start-2">
        <TourNav
          tour={tour}
          activeStopId={activeStop.id}
          onSelect={setActiveStop}
        />
      </div>
    </main>
  );
}
