import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./interfaces";
import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { getRejectedExtraReducers } from "@utils/getRejectedExtraReducers";
import { errorObserver } from "@utils/Observer/Observer";
import { ThemeType } from "@providers/Theme/interfaces";

const savedTheme = localStorage.getItem("theme") as ThemeType;
const initialTheme = savedTheme || ThemeType.dark;

const initialState: AppState = {
  searchKeyword: "",
  theme: initialTheme,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
    chooseTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
  extraReducers(builder) {
    getRejectedExtraReducers(builder, filmsApi, (_, { payload }) => {
      // @ts-expect-error troubles with custome func
      const errorText = payload?.data?.message || payload?.error;
      errorObserver.notify(errorText);
    });
  },
});

export const { setSearchKeyword, chooseTheme } = appSlice.actions;

export default appSlice.reducer;
