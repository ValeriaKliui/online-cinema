import { FilmsInfoResponse } from "@store/services/filmsApi/interfaces";
import { FavFilmsResponse } from "@store/services/userApi/interfaces";

export type FavouriteFilmsProps = Pick<
  FavFilmsResponse,
  "favouriteFilmsIDs"
> & {
  favouriteFilms: FilmsInfoResponse;
};
