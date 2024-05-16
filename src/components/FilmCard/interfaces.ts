import { Film } from "@store/services/interfaces";

export type FilmCardProps = Pick<
  Film,
  | "kinopoiskId"
  | "posterUrlPreview"
  | "nameRu"
  | "year"
  | "ratingImdb"
  | "ratingKinopoisk"
  | "genres"
  | "countries"
  | "nameEn"
  | "nameOriginal"
> & { expanded?: boolean };
