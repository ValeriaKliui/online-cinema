import { Film } from "@store/services/entities";
import { ReactElement } from "react";

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
> & { expanded?: boolean; children?: ReactElement };
