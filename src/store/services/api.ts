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
    headers.set("Access-Control-Allow-Credentials", "true");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set(
      "Access-Control-Allow-Methods",
      "HEAD,GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    headers.set(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, Authorization, Access-Control-Request-Method, Access-Control-Request-Headers, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "FavouriteFilmsIDs"],
  endpoints: () => ({}),
});
