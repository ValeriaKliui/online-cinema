export interface Film {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: [];
  genres: [];
  duration: number;
  premiereRu: string;
}
export interface PremierParams {
  year: number;
  month: string;
}
export interface PremierResponse {
  items: Film[];
}
