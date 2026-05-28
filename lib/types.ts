export type TourStop = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  /** Google Street View panorama ID — most reliable way to load a stop */
  panoId?: string;
  heading?: number;
  pitch?: number;
  zoom?: number;
  era: string;
  summary: string;
  description: string;
};

export type Tour = {
  region: string;
  title: string;
  subtitle: string;
  intro: string;
  stops: TourStop[];
};
