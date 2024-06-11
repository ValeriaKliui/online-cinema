import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmsState } from "./interfaces";
import { Film, Premier } from "@store/services/entities";

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
});

export const { setFilmBg, unsetFilmBg } = filmsSlice.actions;
export default filmsSlice.reducer;
