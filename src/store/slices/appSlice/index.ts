import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./interfaces";
import { getRejectedExtraReducers } from "@utils/getRejectedExtraReducers";
import { filmsApi } from "@store/services/filmsApi";

const initialState: AppState = {
  isFilmsError: false,
  searchKeyword: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers(builder) {
    getRejectedExtraReducers(
      builder,
      filmsApi,
      (state: AppState, { payload }: PayloadAction<string>) => {
        state.isFilmsError = !!payload;
      },
    );
  },
});

export const { setSearchKeyword } = appSlice.actions;

export default appSlice.reducer;
