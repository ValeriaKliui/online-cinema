export interface Premier {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string | null;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: { country: string }[];
  genres: { country: string }[];
  duration: number;
  premiereRu: string;
}
export interface PremierParams {
  year: number;
  month: string;
}
export interface PremierResponse {
  items: Premier[];
}
export interface Film extends Premier {
  description: string;
  shortDescription: string;
}
