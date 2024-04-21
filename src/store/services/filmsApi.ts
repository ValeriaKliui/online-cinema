import {
  API_KEY,
  COLLECTION_URL,
  FILMS_BASE_URL,
  FILMS_URL_V1,
  PREMIERS_URL,
  SEARCH_URL,
} from '@constants/filmsApi';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {
  CollectionType,
  Film,
  Premier,
  PremierParams,
  SearchResponse,
} from './interfaces';

const rawBaseQuery = fetchBaseQuery({
  prepareHeaders: (headers) => headers.set('x-api-key', API_KEY),
});

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const changedUrl =
    api.endpoint === filmsApi.endpoints.searchByKeyword.name
      ? FILMS_URL_V1
      : FILMS_BASE_URL;
  const finalUrl = changedUrl + args;
  const adjustedArgs =
    typeof args === 'string' ? finalUrl : { ...args, url: finalUrl };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

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
