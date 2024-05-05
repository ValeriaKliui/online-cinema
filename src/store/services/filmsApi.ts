import { COLLECTION_URL, PREMIERS_URL, SEARCH_URL } from "@constants/filmsApi";
import { createApi } from "@reduxjs/toolkit/query/react";
import { dynamicBaseQuery } from "@utils/getBaseQuery";
import { fetchInfoAboutFilms } from "./fetchInfoAboutFilms";
import {
  CollectionType,
  Film,
  Premier,
  PremierParams,
  SearchResponse,
  Video,
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
    getInfoAboutFilms: builder.query<undefined, number[]>({
      queryFn: (ids) => {
        const promises = ids.map((id) => {
          return fetchInfoAboutFilms(id);
        });
        return Promise.all(promises).then((results) => {
          return { data: results };
        });
      },
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
    getStaffInfo: builder.query<undefined, number>({
      query: (filmID: number) => `filmID=${filmID}`,
    }),
  }),
});

export const {
  useGetPremieresQuery,
  useGetInfoAboutFilmQuery,
  useLazySearchByKeywordQuery,
  useLazyGetCollectionByTypeQuery,
  useGetVideosQuery,
  useGetInfoAboutFilmsQuery,
} = filmsApi;
