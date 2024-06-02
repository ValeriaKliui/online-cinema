export const getFilmsStr = (filmsAmount: number) => {
  if (filmsAmount === 1) return "фильм";

  if (filmsAmount >= 2 && filmsAmount <= 6) return "фильма";

  return "фильмов";
};
