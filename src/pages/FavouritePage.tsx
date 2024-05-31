import { FilmCard } from "@components/FilmCard";
import { PATHS_LINKS } from "@constants/paths";
import { Button } from "@shared/Button";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useGetInfoAboutFilmsQuery } from "@store/services/filmsApi/filmsApi";
import {
  useGetFavoriteFilmsIDsQuery,
  useUpdateUserFavouriteFilmsMutation,
} from "@store/services/userApi/userApi";
import { getFilmsStr } from "@utils/getFilmsStr";
import { Link } from "react-router-dom";

export const FavouritePage = () => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};
  const { data } = useGetFavoriteFilmsIDsQuery(id);
  const { favouriteFilmsIDs } = data ?? {};

  const { data: favouriteFilms } = useGetInfoAboutFilmsQuery(
    favouriteFilmsIDs,
    { skip: !favouriteFilmsIDs || id === 0 },
  );
  const [updateFavFilmsIDs] = useUpdateUserFavouriteFilmsMutation();

  const deleteFilmFromFavs = (kinopoiskId: number) => {
    updateFavFilmsIDs({
      id,
      favouriteFilmsIDs: favouriteFilmsIDs.filter(
        (filmID) => filmID !== kinopoiskId,
      ),
    });
  };

  const filmsStr = getFilmsStr(favouriteFilmsIDs?.length);

  return (
    <div className="wrapper">
      {favouriteFilmsIDs?.length === 0 ? (
        <>
          <p>Закладки отсутствуют</p>
          <Link to={PATHS_LINKS.films}>
            <Button>Перейти в каталог</Button>
          </Link>
        </>
      ) : (
        <>
          <h5>
            В закладках: {favouriteFilms?.length} {filmsStr}
          </h5>
          {favouriteFilms?.map(
            ({
              nameRu,
              posterUrlPreview,
              ratingImdb,
              ratingKinopoisk,
              year,
              genres,
              countries,
              kinopoiskId,
              nameEn,
              nameOriginal,
            }) => (
              <div>
                <FilmCard
                  kinopoiskId={kinopoiskId}
                  nameRu={nameRu}
                  posterUrlPreview={posterUrlPreview}
                  ratingImdb={ratingImdb}
                  ratingKinopoisk={ratingKinopoisk}
                  year={year}
                  genres={genres}
                  countries={countries}
                  nameEn={nameEn}
                  nameOriginal={nameOriginal}
                  expanded
                />
                <button onClick={() => deleteFilmFromFavs(kinopoiskId)}>
                  Удалить
                </button>
              </div>
            ),
          )}
        </>
      )}
    </div>
  );
};
