import { Premier } from "@store/services/interfaces";

export const getRandomFilm = (films: Premier[]): Premier => {
  const min = 1;
  const max = films.length - 1;
  const index = films && Math.floor(Math.random() * (max - min) + min);
  return films[index];
};
