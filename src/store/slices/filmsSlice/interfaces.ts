import { Film } from "@store/services/entities";

export interface FilmsState {
  premier: Film | null;
  searchedFilms: Film[];
}
