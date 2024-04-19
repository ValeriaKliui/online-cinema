import {
  API_KEY,
  FILMS_BASE_URL,
  FILMS_URL,
  PREMIERS_URL,
} from "@constants/filmsApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PremierParams, PremierResponse } from "./interfaces";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: FILMS_BASE_URL,
    prepareHeaders: (headers) => headers.set("x-api-key", API_KEY),
  }),
  endpoints: (builder) => ({
    getPremieres: builder.query<PremierResponse, PremierParams>({
      query: ({ year, month }) => `${PREMIERS_URL}?year=${year}&month=${month}`,
    }),
    getInfoAboutFilm: builder.query<PremierResponse, number>({
      query: (filmID) => `${FILMS_URL}/${filmID}`,
    }),
  }),
});

export const { useGetPremieresQuery, useGetInfoAboutFilmQuery } = filmsApi;
