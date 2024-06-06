import { FC, memo } from "react";
import { FilmsProps } from "./interfaces";
import { Container } from "./styled";
import { FilmCard } from "@components/FilmCard";
import { PATHS_LINKS } from "@constants/paths";
import { Spinner } from "@shared/Spinner";
import { Button } from "@shared/Button";

export const Films: FC<FilmsProps> = memo(({ films = [], isFetching }) => {
  const isFilmsAvailable = !isFetching && films && films.length > 0;

  return (
    <div className="wrapper">
      {isFetching && <Spinner />}
      <Container>
        {isFilmsAvailable &&
          films.map(
            ({
              nameRu,
              posterUrlPreview,
              ratingImdb,
              ratingKinopoisk,
              year,
              genres,
              countries,
              nameEn,
              filmId,
              kinopoiskId,
              nameOriginal,
            }) => (
              <FilmCard
                kinopoiskId={filmId || kinopoiskId}
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
                key={filmId || kinopoiskId}
              />
            ),
          )}
        {films.length === 0 && !isFetching && (
          <div>
            <p>Похоже, такой фильм отсутствует</p>
            <Button link={PATHS_LINKS.films}>Перейти в каталог</Button>
          </div>
        )}
      </Container>
    </div>
  );
});
