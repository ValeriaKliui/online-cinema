export interface Premier {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string | null;
  year: number | null;
  posterUrl: string;
  posterUrlPreview: string;
  countries: { country: string }[];
  genres: { country: string }[];
  duration: number;
  premiereRu: string;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
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

export type SearchedFilm = Omit<Film, 'kinopoiskId'> & {
  filmId: number;
};

export interface SearchResponse {
  items: SearchedFilm[];
  total: number;
  totalPages: number;
}
export enum CollectionType {
  TOP_POPULAR_ALL = 'TOP_POPULAR_ALL',
  TOP_POPULAR_MOVIES = 'TOP_POPULAR_MOVIES',
  TOP_250_TV_SHOWS = 'TOP_250_TV_SHOWS',
  TOP_250_MOVIES = 'TOP_250_MOVIES',
  VAMPIRE_THEME = 'VAMPIRE_THEME',
  COMICS_THEME = 'COMICS_THEME',
  CLOSES_RELEASES = 'CLOSES_RELEASES',
  FAMILY = 'FAMILY',
  OSKAR_WINNERS = 'OSKAR_WINNERS_2021',
  LOVE_THEME = 'LOVE_THEME',
  ZOMBIE_THEME = 'ZOMBIE_THEME',
  CATASTROPHE_THEME = 'CATASTROPHE_THEME',
  KIDS_ANIMATION_THEME = 'KIDS_ANIMATION_THEME',
}
