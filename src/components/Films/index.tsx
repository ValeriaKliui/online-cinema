import { FC } from "react";
import { FilmsProps } from "./interfaces";
import { Container } from "./styled";
import { FilmCard } from "@components/FilmCard";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { Spinner } from "@shared/Spinner";
import { Button } from "@shared/Button";
import { NavLink } from "react-router-dom";

export const Films: FC<FilmsProps> = ({ films = [], isFetching }) => {
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
        {films.length === 0 && !isFetching && (
          <div>
            <p>Похоже, такой фильм отсутствует</p>
            <NavLink to={PATHS_LINKS.films}>
              {" "}
              <Button>Перейти в каталог</Button>
            </NavLink>
          </div>
        )}
      </Container>
    </div>
  );
};
