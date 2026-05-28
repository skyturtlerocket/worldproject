"use client";

import dynamic from "next/dynamic";
import type { Tour } from "@/lib/types";

const TourClient = dynamic(() => import("./TourClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center bg-ink text-parchment">
      <p className="animate-pulse text-sm uppercase tracking-widest">
        Loading tour…
      </p>
    </div>
  ),
});

type Props = {
  tour: Tour;
};

export default function TourLoader({ tour }: Props) {
  return <TourClient tour={tour} />;
}
