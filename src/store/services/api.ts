import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { API_KEY } from "@constants/filmsApi";

const baseQuery = fetchBaseQuery({
  baseUrl: "/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;

    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }
    headers.set("x-api-key", API_KEY);
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "FavouriteFilmsIDs"],
  endpoints: () => ({}),
});
