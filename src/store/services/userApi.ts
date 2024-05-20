import { AUTHORIZE_URL } from "@constants/authorizeApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FavouriteFilmsParams, UserInfoResponse } from "./interfaces";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: AUTHORIZE_URL }),
  endpoints: (builder) => ({
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

export const { useGetUserInfoQuery, useSaveFavouriteFilmsMutation } = userApi;
