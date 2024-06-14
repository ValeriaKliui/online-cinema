import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmsState } from "./interfaces";
import { Film, Premier } from "@store/services/entities";
import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { matchRejected } from "@utils/matchRejected";

const initialState: FilmsState = {
  filmBg: null,
  searchedFilms: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    unsetFilmBg: (state) => {
      state.filmBg = null;
    },
    setFilmBg: (state, { payload }: PayloadAction<Film | Premier>) => {
      state.filmBg = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      filmsApi.endpoints.getInfoAboutFilm.matchRejected,
      matchRejected,
    );
    builder.addMatcher(
      filmsApi.endpoints.searchByKeyword.matchRejected,
      matchRejected,
    );
  },
});

export const { setFilmBg, unsetFilmBg } = filmsSlice.actions;
export default filmsSlice.reducer;
