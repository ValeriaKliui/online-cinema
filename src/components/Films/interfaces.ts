import { Film } from "@store/services/interfaces";

export interface FilmsProps {
  films: Film[];
  isFetching: boolean;
}
