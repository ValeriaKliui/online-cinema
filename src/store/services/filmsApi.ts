import { COLLECTION_URL, PREMIERS_URL, SEARCH_URL } from "@constants/filmsApi";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "@utils/getBaseQuery";
import {
  CollectionType,
  Film,
  Premier,
  PremierParams,
  ReviewsResponse,
  SearchResponse,
  StaffPerson,
  Video,
  ImagesResponse,
  SimilarFilmsResponse,
} from "./interfaces";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getPremieres: builder.query<Premier[], PremierParams>({
      query: ({ year, month }) => `${PREMIERS_URL}?year=${year}&month=${month}`,
      transformResponse: (response: { items: Premier[] }) => response.items,
    }),
    getInfoAboutFilm: builder.query<Film, number>({
      query: (filmID) => `${filmID}`,
    }),
    searchByKeyword: builder.query<SearchResponse, string>({
      query: (keyword: string) => `${SEARCH_URL}?keyword=${keyword}`,
    }),
    getCollectionByType: builder.query<SearchResponse, string>({
      query: (collectionType: CollectionType) =>
        `${COLLECTION_URL}?type=${collectionType}`,
    }),
    getVideos: builder.query<Video[], number>({
      query: (filmID: number) => `${filmID}/videos`,
      transformResponse: (response: { items: Video[] }) => response.items,
    }),
    getStaffInfo: builder.query<StaffPerson[], number>({
      query: (filmID: number) => `?filmId=${filmID}`,
    }),
    getReviews: builder.query<ReviewsResponse, number>({
      query: (filmID: number) => `${filmID}/reviews?page=1&order=DATE_DESC`,
    }),
    getImages: builder.query<ImagesResponse, number>({
      query: (filmID: number) => `${filmID}/images`,
    }),
    getSimilarFilms: builder.query<SimilarFilmsResponse, number>({
      query: (filmID: number) => `${filmID}/similars`,
    }),
  }),
});

export const {
  useGetPremieresQuery,
  useGetInfoAboutFilmQuery,
  useLazySearchByKeywordQuery,
  useLazyGetCollectionByTypeQuery,
  useGetVideosQuery,
  useGetStaffInfoQuery,
  useGetReviewsQuery,
  useGetImagesQuery,
  useGetSimilarFilmsQuery,
} = filmsApi;
