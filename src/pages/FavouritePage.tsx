import { useFavouriteFilms } from "@hooks/useFavouriteFilms";
import { useGetUserInfoQuery } from "@store/services/authorizeApi";
import { useGetInfoAboutFilmsQuery } from "@store/services/filmsApi";

export const FavouritePage = () => {
  const userID = localStorage.getItem("userId");
  useGetUserInfoQuery(userID);
  const { favouriteFilmsIDs } = useFavouriteFilms();

  const { data: favouriteFilms } = useGetInfoAboutFilmsQuery(favouriteFilmsIDs);
  console.log(favouriteFilms);

  return (
    <div>
      ИЗБРАННОЕ
      {favouriteFilms?.map(({ nameRu }) => <p>{nameRu}</p>)}
    </div>
  );
};