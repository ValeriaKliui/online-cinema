import { FavouriteFilms } from "@components/FavouriteFilms";
import { Spinner } from "@shared/Spinner";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useGetInfoAboutFilmsQuery } from "@store/services/filmsApi/filmsApi";
import { useGetFavoriteFilmsIDsQuery } from "@store/services/userApi/userApi";

export const FavouritePage = () => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};
  const { data, isFetching } = useGetFavoriteFilmsIDsQuery(id);
  const { favouriteFilmsIDs = [] } = data ?? {};

  const { data: favouriteFilms = [] } = useGetInfoAboutFilmsQuery(
    favouriteFilmsIDs,
    { skip: !favouriteFilmsIDs || id === 0 },
  );

  if (isFetching) return <Spinner />;
  return (
    <div className="wrapper">
      <FavouriteFilms
        favouriteFilmsIDs={favouriteFilmsIDs}
        favouriteFilms={favouriteFilms}
      />
    </div>
  );
};
