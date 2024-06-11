import {
  Film,
  FilmByFilter,
  FilmCollection,
  GENRES,
  Premier,
  ReviewData,
  SimilarFilm,
  Video,
} from "../entities";

export interface SearchParams {
  page?: number;
  keyword: string;
}
export interface SearchResponse {
  films: Film[];
  pagesCount: number;
  searchFilmsCountResult: number;
}

export interface FilmsByFilterResponse {
  total: string;
  totalPages: string;
  items: FilmByFilter[];
}
export interface FilterParams {
  genres?: GENRES;
  page?: number;
  keyword?: string;
}

export interface PremierParams {
  year: number;
  month: string;
}
export interface PremierResponse {
  items: Premier[];
  total: number;
}

export type CollectionResponse = {
  items: FilmCollection[];
  total: string;
  totalPages: string;
};

export interface ReviewsParams {
  kinopoiskId: number;
  page?: number | string;
}
export interface ReviewsResponse {
  total: number;
  totalPages: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  items: ReviewData[];
}

export interface ImagesResponse {
  total: number;
  totalPages: number;
  items: { imageUrl: string; previewUrl: string }[];
}

export interface SimilarFilmsResponse {
  total: number;
  items: SimilarFilm[];
}

export type FilmsInfoResponse = Film[];

export interface VideosResponse {
  total: number;
  items: Video[];
}
