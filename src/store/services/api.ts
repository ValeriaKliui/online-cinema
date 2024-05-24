import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { BASE_URL } from "@constants/api";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.accessToken;

    if (token) {
      headers.set("authentication", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery,
  tagTypes: ["User", "FavouriteFilmsIDs"],
  endpoints: () => ({}),
});
