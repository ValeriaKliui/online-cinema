import { GENRES } from "@store/services/entities";
import { FC, SVGProps } from "react";

export interface GenreProps {
  genre: GENRES;
  Icon: FC<SVGProps<SVGSVGElement>>;
  amount: number;
  genreName: string;
  onClick: (genre: GENRES) => void;
}
