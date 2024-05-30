import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./interfaces";
import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { getRejectedExtraReducers } from "@utils/getRejectedExtraReducers";
import { errorObserver } from "@utils/Observer/Observer";

const initialState: AppState = {
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
    getRejectedExtraReducers(builder, filmsApi, (_, { payload }) => {
      const errorText = payload?.data?.message;
      errorObserver.notify(errorText);
    });
  },
});

export const { setSearchKeyword } = appSlice.actions;

export default appSlice.reducer;
