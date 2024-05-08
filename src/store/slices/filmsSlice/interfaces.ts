import { Film } from "@store/services/interfaces";

export interface FilmsState {
  premier: Film | null;
  searchedFilms: Film[];
}
