import { API_KEY, FILMS_BASE_URL, PREMIERS_URL } from "@constants/filmsApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: FILMS_BASE_URL,
    prepareHeaders: (headers) => headers.set("x-api-key", API_KEY),
  }),
  endpoints: (builder) => ({
    getPremieres: builder.query<string, string>({
      query: ({ year, month }) => `${PREMIERS_URL}?year=${year}&month=${month}`,
    }),
  }),
});

export const { useGetPremieresQuery } = filmsApi;
