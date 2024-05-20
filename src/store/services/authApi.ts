import { UserData } from "@components/AuthorizeForm/interfaces";
import { AUTHORIZE_URL, LOGIN_URL } from "@constants/authorizeApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthorizeResponse,
  FavouriteFilmsParams,
  LoginResponse,
  UserInfoResponse,
} from "./interfaces";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: AUTHORIZE_URL }),
  endpoints: (builder) => ({
    registerUser: builder.query<AuthorizeResponse, UserData>({
      query: (userData) => ({
        url: AUTHORIZE_URL,
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.query<LoginResponse, UserData>({
      query: (userData) => ({
        url: LOGIN_URL,
        method: "POST",
        body: userData,
      }),
    }),
    getUserInfo: builder.query<UserInfoResponse, number>({
      query: (userID) => ({
        url: `${AUTHORIZE_URL}/${userID}`,
        method: "GET",
      }),
    }),
    saveFavouriteFilms: builder.mutation<undefined, FavouriteFilmsParams>({
      query: ({ id, favouriteFilmsIDs }) => ({
        url: `${AUTHORIZE_URL}/${id}`,
        method: "PATCH",
        body: { favouriteFilmsIDs },
        //   invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
      }),
    }),
  }),
});

export const { useLazyRegisterUserQuery, useLazyLoginUserQuery } = authApi;
