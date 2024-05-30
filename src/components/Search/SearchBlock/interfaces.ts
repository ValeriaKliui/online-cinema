import { Film } from "@store/services/entities";
import { RefObject } from "react";

export interface SearchBlockProps {
  films?: Film[];
  searchFilmsCountResult?: number;
  isLoading: boolean;
  setIsOpened: (isOpened: boolean) => void;
  isOpened: boolean;
  searchRef: RefObject<HTMLDivElement>;
}
