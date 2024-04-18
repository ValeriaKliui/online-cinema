import { RootState } from '@reduxjs/toolkit/query';

export const selectRandomFilm = (state: RootState) =>
  state.films.randomFilm;
