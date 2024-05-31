import { FC } from "react";
import { FilmsProps } from "./interfaces";
import { Container } from "./styled";
import { FilmCard } from "@components/FilmCard";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { Spinner } from "@shared/Spinner";

export const Films: FC<FilmsProps> = ({ films, isFetching }) => {
  const isFilmsAvailable = !isFetching && films && films.length > 0;
  console.log(films);
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
              <Link
                to={PATHS_LINKS.films + "/" + (filmId || kinopoiskId)}
                key={filmId || kinopoiskId}
              >
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
                />
              </Link>
            ),
          )}
      </Container>
    </div>
  );
};
