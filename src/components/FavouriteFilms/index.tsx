import { FilmCard } from "@components/FilmCard";
import { PATHS_LINKS } from "@constants/paths";
import { Button } from "@shared/Button";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectUser } from "@store/selectors/user";
import { useUpdateUserFavouriteFilmsMutation } from "@store/services/userApi/userApi";
import { getFilmsStr } from "@utils/getFilmsStr";
import { FC } from "react";
import { FavouriteFilmsProps } from "./interfaces";
import { Container, FavFilm, FavFilmsHeader, FilmsContainer } from "./styled";

export const FavouriteFilms: FC<FavouriteFilmsProps> = ({
  favouriteFilmsIDs,
  favouriteFilms,
}) => {
  const user = useAppSelector(selectUser);
  const { id = 0 } = user ?? {};

  const noFavFilms = favouriteFilms?.length === 0 || !favouriteFilmsIDs;
  const filmsStr = getFilmsStr(favouriteFilmsIDs?.length);

  const [updateFavFilmsIDs] = useUpdateUserFavouriteFilmsMutation();
  const deleteFilmFromFavs = (kinopoiskId: number) => {
    updateFavFilmsIDs({
      id,
      favouriteFilmsIDs: favouriteFilmsIDs.filter(
        (filmID) => filmID !== kinopoiskId,
      ),
    });
  };

  return (
    <Container>
      <FavFilmsHeader>
        <h5>
          {noFavFilms || favouriteFilms?.length === 0
            ? "Закладки отсутствуют"
            : `В закладках:  ${favouriteFilms?.length}    ${filmsStr}`}
        </h5>
        {noFavFilms && (
          <Button link={PATHS_LINKS.films}>Перейти в каталог</Button>
        )}
      </FavFilmsHeader>

      <FilmsContainer>
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
            <FavFilm>
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
              >
                <Button onClick={() => deleteFilmFromFavs(kinopoiskId)}>
                  Удалить
                </Button>
              </FilmCard>
            </FavFilm>
          ),
        )}
      </FilmsContainer>
    </Container>
  );
};
