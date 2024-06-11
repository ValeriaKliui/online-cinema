import { RootState } from "..";

export const selectFilmBg = (state: RootState) => state.films.filmBg;
export const selectSeacrhedFilms = (state: RootState) =>
  state.films.searchedFilms;
