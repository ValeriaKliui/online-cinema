import { UserData } from '@components/AuthorizeForm/interfaces';
import { AUTHORIZE_URL } from '@constants/authorizeApi';
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { AuthorizeResponse } from './interfaces';

export const authorizeApi = createApi({
  reducerPath: 'authorizeApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTHORIZE_URL }),
  endpoints: (builder) => ({
    registerUser: builder.query<AuthorizeResponse, UserData>({
      query: (userData) => ({
        url: AUTHORIZE_URL,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLazyRegisterUserQuery } = authorizeApi;
