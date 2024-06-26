import { forwardRef, memo, useCallback } from "react";
import { Container, Poster, SearchItem, PosterImg, SearchInfo } from "./styled";
import { FoundFilmsProps } from "./interfaces";
import { formatArrayToStrings } from "@utils/formatArrayToStrings";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { useClickOutside } from "@hooks/useClickOutside";
import { Spinner } from "@shared/Spinner";
import { FoundFilmsHeader } from "./FoundFilmsHeader";

export const FoundFilms = memo(
  forwardRef<HTMLDivElement, FoundFilmsProps>(
    (
      { films, searchFilmsCountResult = 0, isOpened, setIsOpened, isLoading },
      ref,
    ) => {
      const isMoreFilms = searchFilmsCountResult > 20;
      const isFilmsFound = films && films.length > 0;
      const handleClose = useCallback(() => {
        setIsOpened(false);
      }, [setIsOpened]);

      useClickOutside(ref, handleClose);

      return (
        <Container $isOpened={isOpened} ref={ref}>
          {isFilmsFound ? (
            films.map(
              ({
                nameRu,
                posterUrlPreview,
                year,
                countries,
                genres,
                filmId,
              }) => (
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
          {isMoreFilms && <FoundFilmsHeader onClose={handleClose} />}
        </Container>
      );
    },
  ),
);
