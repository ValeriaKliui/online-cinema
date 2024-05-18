import { User, UserState } from "@store/slices/userSlice/interfaces";

export interface Premier {
  kinopoiskId: number;
  nameRu?: string;
  nameEn?: string | null;
  nameOriginal?: string | null;
  year?: number | null;
  posterUrl?: string;
  posterUrlPreview: string;
  countries?: { country: string }[];
  genres?: { country: string }[];
  duration: number;
  premiereRu: string;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
  filmLength?: number;
}
export interface PremierParams {
  year: number;
  month: string;
}
export interface PremierResponse {
  items: Premier[];
}
export interface Film extends Premier {
  description?: string;
  shortDescription: string;
}

export interface SearchResponse {
  films: Film[];
  total: number;
  pagesCount: number;
  searchFilmsCountResult: number;
}

export type CollectionResponse = Omit<SearchResponse, "films"> & {
  items: Film[];
};
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

export type AuthorizeResponse = UserState;
export type FavouriteFilmsParams = Pick<UserState, "favouriteFilmsIDs"> &
  Pick<User, "id">;
export type LoginResponse = UserState;

export interface StaffPerson {
  staffId: number;
  nameRu: string;
  description: string;
  posterUrl: string;
  professionKey: PROFESSIONS;
}
export enum PROFESSIONS {
  DIRECTOR = "Режиссер",
  ACTOR = "Актер",
  PRODUCER = "Продюсер",
  WRITER = "Сценарист",
  OPERATOR = "Оператор",
  COMPOSER = "Композитор",
  DESIGN = "Художник",
}
export interface ReviewsResponse {
  total: number;
  totalPages: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  items: [
    {
      kinopoiskId: number;
      date: string;
      positiveRating: number;
      negativeRating: number;
      author: string;
      title: string;
      description: string;
    },
  ];
}
export interface ImagesResponse {
  total: number;
  totalPages: number;
  items: { imageUrl: string; previewUrl: string }[];
}
export interface SimilarFilmsResponse {
  total: number;
  items: { filmId: number; nameRu: string; posterUrlPreview: number }[];
}

export enum GENRES {
  THRILLER = 1,
  DRAMA = 2,
  CRIME = 3,
  MELODRAMA = 4,
  DETECTIVE = 5,
  FANTASTIC = 6,
  ADVENTURE = 7,
  WESTERN = 10,
  COMEDY = 13,
  HORROR = 17,
  CARTOONS = 18,
}
export enum GENRES_NAMES {
  THRILLER = "триллер",
  DRAMA = "драма",
  CRIME = "криминал",
  MELODRAMA = "мелодрама",
  DETECTIVE = "детектив",
  FANTASTIC = "фантастика",
  ADVENTURE = "приключения",
  WESTERN = "вестерн",
  COMEDY = "комедия",
  HORROR = "ужасы",
}
export interface FilterParams {
  genres?: GENRES;
  page?: number;
  keyword?: string;
}
export interface FilmInfoResponse {
  films: Film[];
}
export interface FilmsByFilterResponse {
  total: string;
  totalPages: string;
  items: Film[];
}
export interface SearchParams {
  page?: number;
  keyword: string;
}
