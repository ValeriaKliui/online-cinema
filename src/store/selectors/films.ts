import { RootState } from "..";

export const selectRandomFilm = (state: RootState) => state.films.premier;
export const selectSeacrhedFilms = (state: RootState) =>
  state.films.searchedFilms;
