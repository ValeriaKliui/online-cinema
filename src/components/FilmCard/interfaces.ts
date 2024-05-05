import { Film } from "@store/services/interfaces";

export type FilmCardProps = Pick<
  Film,
  | "nameRu"
  | "year"
  | "filmLength"
  | "countries"
  | "genres"
  | "description"
  | "posterUrl"
  | "kinopoiskId"
>;
