import { Film } from "@store/services/entities";

export interface FilmsProps {
  films?: Film[];
  isFetching: boolean;
}
