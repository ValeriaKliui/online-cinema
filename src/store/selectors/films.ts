import { RootState } from '..';

export const selectRandomFilm = (state: RootState) =>
  state.films.premier;
