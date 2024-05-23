import { AUTHORIZE_URL, LOGIN_URL } from "@constants/authorizeApi";
import { api } from "./api";
import { LoginResponse, UserInfoResponse } from "./interfaces";
import { UserData } from "@components/AuthorizeForm/interfaces";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (userData) => ({
        url: AUTHORIZE_URL,
        method: "POST",
        body: userData,
      }),
    }),
    login: build.mutation<LoginResponse, UserData>({
      query: (userData) => ({
        url: LOGIN_URL,
        method: "POST",
        body: userData,
      }),
    }),
    getUserInfo: build.query<UserInfoResponse, number | string>({
      query: (userID) => ({
        url: `${AUTHORIZE_URL}/${userID}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
} = userApi;

// import { AUTHORIZE_URL } from "@constants/authorizeApi";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { FavouriteFilmsParams, UserInfoResponse } from "./interfaces";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({ baseUrl: AUTHORIZE_URL }),
//   endpoints: (builder) => ({
//     getUserInfo: builder.query<UserInfoResponse, number>({
//       query: (userID) => ({
//         url: `${AUTHORIZE_URL}/${userID}`,
//         method: "GET",
//       }),
//     }),
//     saveFavouriteFilms: builder.mutation<undefined, FavouriteFilmsParams>({
//       query: ({ id, favouriteFilmsIDs }) => ({
//         url: `${AUTHORIZE_URL}/${id}`,
//         method: "PATCH",
//         body: { favouriteFilmsIDs },
//         //   invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
//       }),
//     }),
//   }),
// });

// export const { useGetUserInfoQuery, useSaveFavouriteFilmsMutation } = userApi;
