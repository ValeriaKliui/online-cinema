import {
  API_KEY,
  FILMS_BASE_URL,
  FILMS_URL_V1,
} from '@constants/filmsApi';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { filmsApi } from '@store/services/filmsApi';

export const rawBaseQuery = fetchBaseQuery({
  prepareHeaders: (headers) => headers.set('x-api-key', API_KEY),
});

export const dynamicBaseQuery: BaseQueryFn<
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
