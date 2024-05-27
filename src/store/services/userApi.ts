import {
  AUTHORIZE_URL,
  FAVOURITE_FILMS_URL,
  LOGIN_URL,
} from '@constants/authorizeApi';
import { api } from './api';
import {
  LoginResponse,
  RemoveFromFavouriteParams,
  UserInfoResponse,
} from './interfaces';
import { UserData } from '@components/AuthorizeForm/interfaces';
import { checkIfUserFavFilmsExists } from './apiUtils';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (userData) => ({
        url: AUTHORIZE_URL,
        method: 'POST',
        body: userData,
      }),
    }),
    login: build.mutation<LoginResponse, UserData>({
      query: (userData) => ({
        url: LOGIN_URL,
        method: 'POST',
        body: userData,
      }),
    }),
    getUserInfo: build.query<UserInfoResponse, number | string>({
      query: (userID) => ({
        url: `${AUTHORIZE_URL}/${userID}`,
        method: 'GET',
      }),
    }),
    getFavoriteFilmsIDs: build.query<number[], number>({
      query: (userID) => ({
        url: `${FAVOURITE_FILMS_URL}/${userID}`,
        method: 'GET',
        providesTags: ['FavouriteFilmsIDs'],
      }),
    }),
    updateUserFavouriteFilms: build.mutation<
      void,
      RemoveFromFavouriteParams
    >({
      async queryFn({ id, favouriteFilmsIDs, userExists }) {
        const baseData = {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        };

        if (userExists)
          fetch(`${FAVOURITE_FILMS_URL}/${id}`, {
            ...baseData,
            method: 'PATCH',
            body: JSON.stringify({ favouriteFilmsIDs }),
          });
        else {
          fetch(`${FAVOURITE_FILMS_URL}`, {
            ...baseData,
            method: 'POST',
            body: JSON.stringify({ id, favouriteFilmsIDs }),
          });
        }
      },
      invalidatesTags: ['FavouriteFilmsIDs'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserInfoQuery,
  useLazyGetUserInfoQuery,
  useGetFavoriteFilmsIDsQuery,
  useUpdateUserFavouriteFilmsMutation,
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
