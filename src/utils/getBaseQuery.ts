import {
  API_KEY,
  FILMS_BASE_URL,
  FILMS_URL_V1,
  STAFF_URL,
} from "@constants/filmsApi";
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { filmsApi } from "@store/services/filmsApi";

const defineUrl = (api: BaseQueryApi) => {
  if (api.endpoint === filmsApi.endpoints.searchByKeyword.name)
    return FILMS_URL_V1;
  if (api.endpoint === filmsApi.endpoints.getStaffInfo.name) return STAFF_URL;
  return (
    FILMS_BASE_URL +
    (api.endpoint === filmsApi.endpoints.getFilmsByFilters.name ? "" : "/")
  );
};

export const rawBaseQuery = fetchBaseQuery({
  prepareHeaders: (headers) => headers.set("x-api-key", API_KEY),
});

export const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const url = defineUrl(api);

  const finalUrl = url + args;
  const adjustedArgs =
    typeof args === "string" ? finalUrl : { ...args, url: finalUrl };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};
