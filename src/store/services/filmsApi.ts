import {
  COLLECTION_URL,
  PREMIERS_URL,
  SEARCH_URL,
} from '@constants/filmsApi';
import { createApi } from '@reduxjs/toolkit/query/react';
import { dynamicBaseQuery } from '@utils/getBaseQuery';
import {
  CollectionType,
  Film,
  Premier,
  PremierParams,
  SearchResponse,
} from './interfaces';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getPremieres: builder.query<Premier[], PremierParams>({
      query: ({ year, month }) =>
        `${PREMIERS_URL}?year=${year}&month=${month}`,
      transformResponse: (response: { items: Premier[] }) =>
        response.items,
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
  }),
});

export const {
  useGetPremieresQuery,
  useGetInfoAboutFilmQuery,
  useLazySearchByKeywordQuery,
  useLazyGetCollectionByTypeQuery,
} = filmsApi;
