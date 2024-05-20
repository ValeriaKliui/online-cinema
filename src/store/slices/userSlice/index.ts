import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "@store/services/authApi";
import { UserState } from "./interfaces";
import { ACCESS_TOKEN } from "@constants/authorizeApi";

const initialState: UserState = {
  user: { id: Number(localStorage.getItem("userId")), email: "" },
  accessToken: localStorage.getItem(ACCESS_TOKEN) || null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addToFavourites: (state, action: PayloadAction<number>) => {
    //   state.favouriteFilmsIDs = [...state.favouriteFilmsIDs, action.payload];
    // },
    removeFromFavourites: (state, action: PayloadAction<number>) => {
      state.favouriteFilmsIDs = state.favouriteFilmsIDs.filter(
        (id) => id !== action.payload,
      );
    },
    logoutUser: (state) => {
      state.user = null;
      state.favouriteFilmsIDs = [];
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      },
    );
    // builder.addMatcher(
    //   userApi.endpoints.getUserInfo.matchFulfilled,
    //   (state, { payload }) => {
    //     state.user = { ...state.user, ...payload };
    //     state.favouriteFilmsIDs = payload.favouriteFilmsIDs;
    //   }
    // );
  },
});

export const { removeFromFavourites, logoutUser } = UserSlice.actions;

export default UserSlice.reducer;
