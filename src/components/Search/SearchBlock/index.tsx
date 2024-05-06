import { FC } from "react";
import { Container, Poster, SearchItem, PosterImg } from "./styled";
import { SearchBlockProps } from "./interfaces";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { Button } from "@shared/Button";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { useClickOutside } from "@hooks/useClickOutside";

export const SearchBlock: FC<SearchBlockProps> = ({
  films,
  searchFilmsCountResult,
  searchRef,
  isOpened,
  setIsOpened,
  isLoading,
}) => {
  const isMoreFilms = searchFilmsCountResult > 20;
  const isFilmsFound = films && films.length > 0;
  const handleClickOutside = () => {
    setIsOpened(false);
  };
  useClickOutside(searchRef, handleClickOutside);

  return (
    <Container $isOpened={isOpened}>
      {isFilmsFound ? (
        films.map(
          ({ nameRu, posterUrlPreview, year, countries, genres, filmId }) => (
            <SearchItem key={filmId}>
              <Poster>
                <Link to={PATHS_LINKS.films + "/" + filmId}>
                  <PosterImg src={posterUrlPreview} />
                </Link>
              </Poster>

              <div>
                <Link to={PATHS_LINKS.films + "/" + filmId}>
                  <h4>{nameRu}</h4> {year && <p>{year}</p>}
                  <p>{formatArrayToStrings(countries)}</p>
                  <p>{formatArrayToStrings(genres)}</p>{" "}
                </Link>
              </div>
            </SearchItem>
          ),
        )
      ) : (
        <div>{isLoading ? "loading" : <p>Фильм не найден</p>}</div>
      )}
      {isMoreFilms && <Button className="centered-flex">Показать все</Button>}
    </Container>
  );
};
