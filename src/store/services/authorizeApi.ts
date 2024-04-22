import { AUTHORIZE_URL } from '@constants/authorizeApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const authorizeApi = createApi({
  reducerPath: 'authorizeApi',
  baseQuery: fetchBaseQuery({ baseUrl: AUTHORIZE_URL }),
  endpoints: () => ({}),
});
