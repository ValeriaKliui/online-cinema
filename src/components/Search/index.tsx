import { Container, SearchContainer } from "./styled";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi/filmsApi";
import { useCallback, useRef, useState } from "react";
import { FoundFilms } from "../FoundFilms";
import { SearchBlock } from "@components/SearchBlock";

export const Search = () => {
  const searchRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();

  const onKeywordChange = useCallback(
    (searchString: string) => {
      searchByKeyword({ keyword: searchString });
      setIsOpened(true);
    },
    [searchByKeyword],
  );

  const { films, searchFilmsCountResult } = data ?? {};

  return (
    <Container className="wrapper">
      <SearchContainer ref={searchRef}>
        <SearchBlock onKeywordChange={onKeywordChange} />
        <FoundFilms
          films={films}
          searchFilmsCountResult={searchFilmsCountResult}
          isOpened={isOpened}
          isLoading={isLoading || isUninitialized}
          setIsOpened={setIsOpened}
          searchRef={searchRef}
        />
      </SearchContainer>
    </Container>
  );
};
