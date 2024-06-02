import { Film } from "@store/services/entities";
import { ReactElement } from "react";

export type FilmCardProps = Pick<
  Film,
  "kinopoiskId" | "posterUrlPreview" | "nameRu" | "nameEn" | "nameOriginal"
> &
  Partial<
    Pick<
      Film,
      | "nameOriginal"
      | "year"
      | "ratingImdb"
      | "ratingKinopoisk"
      | "genres"
      | "countries"
    >
  > & {
    expanded?: boolean;
    children?: ReactElement;
  };
