import { Film, Premier } from "@store/services/entities";

export interface FilmsState {
  filmBg: Film | Premier | null;
  searchedFilms: Film[];
}
