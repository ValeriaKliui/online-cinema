import { Film } from "@/store/services/interfaces";

export const getRandomFilm = (films: Film[]): Film => {
  const min = 1;
  const max = films.length - 1;
  const index = films && Math.round(Math.random() * (max - min) + min);
  return films[index];
};
