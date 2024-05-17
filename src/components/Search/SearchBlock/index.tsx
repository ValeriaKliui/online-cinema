import { FC } from "react";
import { Container, Poster, SearchItem, PosterImg, SearchInfo } from "./styled";
import { SearchBlockProps } from "./interfaces";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { Button } from "@shared/Button";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { useClickOutside } from "@hooks/useClickOutside";
import { Spinner } from "@shared/Spinner";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectSearchKeyword } from "@store/selectors/app";

export const SearchBlock: FC<SearchBlockProps> = ({
  films,
  searchFilmsCountResult = 0,
  searchRef,
  isOpened,
  setIsOpened,
  isLoading,
}) => {
  const isMoreFilms = searchFilmsCountResult > 20;
  const isFilmsFound = films && films.length > 0;
  const handleClose = () => {
    setIsOpened(false);
  };
  useClickOutside(searchRef, handleClose);
  const searchKeyword = useAppSelector(selectSearchKeyword);

  return (
    <Container $isOpened={isOpened}>
      {isFilmsFound ? (
        films.map(
          ({
            nameRu,
            posterUrlPreview,
            year,
            countries,
            genres,
            kinopoiskId,
          }) => (
            <SearchItem key={kinopoiskId}>
              <Poster>
                <Link to={PATHS_LINKS.films + "/" + kinopoiskId}>
                  <PosterImg src={posterUrlPreview} />
                </Link>
              </Poster>

              <div>
                <Link to={PATHS_LINKS.films + "/" + kinopoiskId}>
                  <h4>{nameRu}</h4> {year && <p>{year}</p>}
                  <p>{formatArrayToStrings(countries)}</p>
                  <p>{formatArrayToStrings(genres)}</p>
                </Link>
              </div>
            </SearchItem>
          ),
        )
      ) : (
        <SearchInfo>
          {isLoading ? <Spinner /> : <p>Фильм не найден</p>}
        </SearchInfo>
      )}
      {isMoreFilms && (
        <Link
          to={PATHS_LINKS.search + `?search_by_keyword=${searchKeyword}&page=1`}
          className="centered-flex"
        >
          <Button onClick={handleClose}>Показать все</Button>
        </Link>
      )}
    </Container>
  );
};
