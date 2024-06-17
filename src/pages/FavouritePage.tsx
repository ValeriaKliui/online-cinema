import { FavouriteFilms } from "@components/FavouriteFilms";
import { Spinner } from "@shared/Spinner";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useGetInfoAboutFilmsQuery } from "@store/services/filmsApi/filmsApi";
import { useGetFavoriteFilmsIDsQuery } from "@store/services/userApi/userApi";
import { useMemo } from "react";

const FavouritePage = () => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};
  const { data, isFetching } = useGetFavoriteFilmsIDsQuery(id);
  const { favouriteFilmsIDs: filmsIDs = [] } = data ?? {};

  const { data: favFilms = [] } = useGetInfoAboutFilmsQuery(filmsIDs, {
    skip: !filmsIDs || id === 0,
  });

  const favouriteFilmsIDs = useMemo(() => filmsIDs, [filmsIDs]);
  const favouriteFilms = useMemo(() => favFilms, [favFilms]);

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

export default FavouritePage;
