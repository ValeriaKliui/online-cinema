import { createSlice } from "@reduxjs/toolkit";
import { authorizeApi } from "@store/services/authorizeApi";
import { AuthState } from "./interfaces";

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      authorizeApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        state.accessToken = payload.accessToken;
      },
    );
  },
});

export default AuthSlice.reducer;
