import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";
import { userApi } from "@store/services/userApi";
import { ACCESS_TOKEN } from "@constants/user";

const accessToken = localStorage.getItem(ACCESS_TOKEN);

const initialState: UserState = {
  user: null,
  accessToken,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.register.matchPending, () => {
        console.log("register pending");
      })
      .addMatcher(userApi.endpoints.register.matchFulfilled, () => {
        console.log("register success");
      })
      .addMatcher(userApi.endpoints.register.matchRejected, () => {
        console.log("register rejected");
      });
    builder
      .addMatcher(userApi.endpoints.login.matchPending, () => {
        console.log("login pending");
      })
      .addMatcher(
        userApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
          state.accessToken = payload.accessToken;
        },
      )
      .addMatcher(userApi.endpoints.login.matchRejected, () => {
        console.log("login rejected");
      });
    builder
      .addMatcher(userApi.endpoints.getUserInfo.matchPending, () => {
        console.log("info pending");
      })
      .addMatcher(
        userApi.endpoints.getUserInfo.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        },
      )
      .addMatcher(userApi.endpoints.getUserInfo.matchRejected, () => {
        console.log("info rejected");
      });
    builder
      .addMatcher(
        userApi.endpoints.updateUserFavouriteFilms.matchPending,
        (state, action) => {
          console.log(action);
        },
      )
      .addMatcher(
        userApi.endpoints.updateUserFavouriteFilms.matchFulfilled,
        (state, action) => {
          console.log(action);
        },
      )
      .addMatcher(
        userApi.endpoints.updateUserFavouriteFilms.matchRejected,
        (state, action) => {
          console.log(action);
        },
      );
  },
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
