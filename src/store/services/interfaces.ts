import { User, UserState } from "@store/slices/userSlice/interfaces";

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
  filmLength: number;
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

export type SearchedFilm = Omit<Film, "kinopoiskId"> & {
  filmId: number;
};

export interface SearchResponse {
  items: SearchedFilm[];
  total: number;
  totalPages: number;
}
export interface Video {
  name: string;
  site: string;
  url: string;
}
export enum CollectionType {
  TOP_POPULAR_ALL = "TOP_POPULAR_ALL",
  TOP_POPULAR_MOVIES = "TOP_POPULAR_MOVIES",
  TOP_250_TV_SHOWS = "TOP_250_TV_SHOWS",
  TOP_250_MOVIES = "TOP_250_MOVIES",
  VAMPIRE_THEME = "VAMPIRE_THEME",
  COMICS_THEME = "COMICS_THEME",
  CLOSES_RELEASES = "CLOSES_RELEASES",
  FAMILY = "FAMILY",
  OSKAR_WINNERS = "OSKAR_WINNERS_2021",
  LOVE_THEME = "LOVE_THEME",
  ZOMBIE_THEME = "ZOMBIE_THEME",
  CATASTROPHE_THEME = "CATASTROPHE_THEME",
  KIDS_ANIMATION_THEME = "KIDS_ANIMATION_THEME",
}
export type UserInfoResponse = Pick<User, "id"> &
  Pick<UserState, "favouriteFilmsIDs">;

export type AuthorizeResponse = Pick<UserState, "user">;
export type FavouriteFilmsParams = Pick<UserState, "favouriteFilmsIDs"> &
  Pick<User, "id">;
export type LoginResponse = Pick<AuthorizeResponse, "accessToken">;
