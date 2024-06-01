import {
  COLLECTION_URL,
  FILMS_BASE_URL,
  PREMIERS_URL,
  SEARCH_URL,
  STAFF_URL,
} from "@constants/filmsApi";
import { getFiltersUrl } from "@utils/getFiltersUrl";
import { api } from "../api";
import { fetchInfoAboutFilms } from "../apiUtils";

import {
  CollectionResponse,
  FilmsByFilterResponse,
  FilmsInfoResponse,
  FilterParams,
  ImagesResponse,
  PremierParams,
  ReviewsParams,
  ReviewsResponse,
  SearchParams,
  SearchResponse,
  SimilarFilmsResponse,
} from "./interfaces";
import { CollectionType, Film, Premier, StaffPerson } from "../entities";

export const filmsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPremieres: builder.query<Premier[], PremierParams>({
      query: ({ year, month }) => ({
        url: `${PREMIERS_URL}?year=${year}&month=${month}`,
      }),
      transformResponse: (response: { items: Premier[] }) => response.items,
    }),
    getInfoAboutFilm: builder.query<Film, number>({
      query: (filmID) => `${FILMS_BASE_URL}/${filmID}`,
    }),
    getInfoAboutFilms: builder.query<FilmsInfoResponse, number[]>({
      queryFn: (ids) => {
        const promises = ids.map((id) => {
          return fetchInfoAboutFilms(id);
        });

        return Promise.allSettled(promises)
          .then((results) =>
            results.map(
              (result) => result.status === "fulfilled" && result.value,
            ),
          )
          .then((values) => ({ data: values }));
      },
    }),
    searchByKeyword: builder.query<SearchResponse, SearchParams>({
      query: ({ keyword, page = 1 }: SearchParams) =>
        `${SEARCH_URL}?keyword=${keyword}&page=${page}`,
    }),
    getCollectionByType: builder.query<CollectionResponse, string>({
      query: (collectionType: CollectionType) =>
        `${COLLECTION_URL}?type=${collectionType}`,
    }),
    getStaffInfo: builder.query<StaffPerson[], number>({
      query: (filmID: number) => `${STAFF_URL}?filmId=${filmID}`,
    }),
    getReviews: builder.query<ReviewsResponse, ReviewsParams>({
      query: ({ kinopoiskId, page = 1 }) =>
        `${FILMS_BASE_URL}/${kinopoiskId}/reviews?page=${page}&order=DATE_DESC`,
    }),
    getImages: builder.query<ImagesResponse, number>({
      query: (filmID: number) => `${FILMS_BASE_URL}/${filmID}/images`,
    }),
    getSimilarFilms: builder.query<SimilarFilmsResponse, number>({
      query: (filmID: number) => `${FILMS_BASE_URL}/${filmID}/similars`,
    }),
    getFilmsByFilters: builder.query<FilmsByFilterResponse, FilterParams>({
      query: (options: FilterParams) =>
        `${FILMS_BASE_URL}${getFiltersUrl(options)}`,
    }),
  }),
});

export const {
  useGetPremieresQuery,
  useGetInfoAboutFilmQuery,
  useLazySearchByKeywordQuery,
  useLazyGetCollectionByTypeQuery,
  useGetStaffInfoQuery,
  useGetReviewsQuery,
  useGetImagesQuery,
  useGetSimilarFilmsQuery,
  useGetInfoAboutFilmsQuery,
  useLazyGetFilmsByFiltersQuery,
  useSearchByKeywordQuery,
} = filmsApi;
