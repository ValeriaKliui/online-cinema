import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Errors } from "./interfaces";
import { getRejectedExtraReducers } from "@utils/getRejectedExtraReducers";
import { filmsApi } from "@store/services/filmsApi";
import { authorizeApi } from "@store/services/authorizeApi";

const initialState: AppState = {
  isFilmsError: false,
  authorizationError: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers(builder) {
    getRejectedExtraReducers(
      builder,
      filmsApi,
      (state: AppState, { payload }: PayloadAction<string>) => {
        state.isFilmsError = !!payload;
      },
    );
    getRejectedExtraReducers(
      builder,
      authorizeApi,
      (state: AppState, { payload }: PayloadAction<Errors>) => {
        state.authorizationError = payload.data;
      },
    );
  },
});

export default appSlice.reducer;
