import { notFound } from "next/navigation";
import { germanyTour } from "@/data/tours/germany";
import { koreaTour } from "@/data/tours/korea";
import type { Tour } from "@/lib/types";
import TourLoader from "./TourLoader";

const tours: Record<string, Tour> = {
  germany: germanyTour,
  korea: koreaTour,
};

export function generateStaticParams() {
  return Object.keys(tours).map((region) => ({ region }));
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const tour = tours[region];
  if (!tour) notFound();

  return <TourLoader tour={tour} />;
}
