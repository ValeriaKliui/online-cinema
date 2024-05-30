import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";
import { userApi } from "@store/services/userApi/userApi";
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
    builder.addMatcher(userApi.endpoints.register.matchRejected, () => {
      console.log("register rejected");
    });
    builder
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
      .addMatcher(
        userApi.endpoints.getUserInfo.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        },
      )
      .addMatcher(userApi.endpoints.getUserInfo.matchRejected, () => {
        console.log("info rejected");
      });
    builder.addMatcher(
      userApi.endpoints.updateUserFavouriteFilms.matchRejected,
      () => {
        console.log("update rejected");
      },
    );
  },
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;
