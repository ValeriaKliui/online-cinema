import { Film } from "@store/services/entities";

export type FilmBlockProps = Pick<
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
