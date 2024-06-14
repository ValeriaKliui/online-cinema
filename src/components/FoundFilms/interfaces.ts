import { Film } from "@store/services/entities";

export interface FoundFilmsProps {
  films?: Film[];
  searchFilmsCountResult?: number;
  isLoading: boolean;
  setIsOpened: (isOpened: boolean) => void;
  isOpened: boolean;
}
