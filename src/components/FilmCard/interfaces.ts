import { Film } from "@store/services/entities";

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
