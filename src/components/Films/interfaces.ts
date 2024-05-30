import { Film } from "@store/services/interfacesApi";

export interface FilmsProps {
  films: Film[];
  isFetching: boolean;
}
