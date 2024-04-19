import {
  API_KEY,
  FILMS_BASE_URL,
  FILMS_URL,
  PREMIERS_URL,
} from '@constants/filmsApi';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { Film, Premier, PremierParams } from './interfaces';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: FILMS_BASE_URL,
    prepareHeaders: (headers) => headers.set('x-api-key', API_KEY),
  }),
  endpoints: (builder) => ({
    getPremieres: builder.query<Premier[], PremierParams>({
      query: ({ year, month }) =>
        `${PREMIERS_URL}?year=${year}&month=${month}`,
      transformResponse: (response: { items: Premier[] }) =>
        response.items,
    }),
    getInfoAboutFilm: builder.query<Film, number>({
      query: (filmID) => `${FILMS_URL}/${filmID}`,
    }),
  }),
});

export const { useGetPremieresQuery, useGetInfoAboutFilmQuery } =
  filmsApi;
