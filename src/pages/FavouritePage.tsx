import { FilmCard } from "@components/FilmCard";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useGetInfoAboutFilmsQuery } from "@store/services/filmsApi";
import { useGetFavoriteFilmsIDsQuery } from "@store/services/userApi";

export const FavouritePage = () => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};
  const { data } = useGetFavoriteFilmsIDsQuery(id);
  const { favouriteFilmsIDs } = data ?? {};

  const { data: favouriteFilms } = useGetInfoAboutFilmsQuery(
    favouriteFilmsIDs,
    { skip: !favouriteFilmsIDs || id === 0 },
  );

  const deleteFilmFromFavs = (kinopoiskId: number) => {
    // console.log(favouriteFilmsIDs);
    // console.log(kinopoiskId);
  };

  return (
    <div>
      {!favouriteFilmsIDs ? (
        <>отсутствуют</>
      ) : (
        <div className="wrapper">
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
        </div>
      )}
    </div>
  );
};
