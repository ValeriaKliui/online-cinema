import { filmsApi } from "@store/services/filmsApi/filmsApi";
import { createSlice } from "@reduxjs/toolkit";
import { FilmsState } from "./interfaces";

const initialState: FilmsState = {
  premier: null,
  searchedFilms: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    unsetPremier: (state) => {
      state.premier = null;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      filmsApi.endpoints.getInfoAboutFilm.matchFulfilled,
      (state, { payload }) => {
        state.premier = payload;
      },
    );
    // builder.addMatcher(
    //   filmsApi.endpoints.searchByKeyword.matchFulfilled,
    //   (state, { payload }) => {
    //     state.searchedFilms = payload.films;
    //   }
    // );
    // builder.addMatcher(
    //   filmsApi.endpoints.getFilmsByFilters.matchFulfilled,
    //   (state, { payload }) => {
    //     state.searchedFilms = payload.items;
    //   }
    // );
  },
});

export const { unsetPremier } = filmsSlice.actions;
export default filmsSlice.reducer;
