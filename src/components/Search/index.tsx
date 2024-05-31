import { Container, SearchContainer } from "./styled";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi/filmsApi";
import { ChangeEvent, useCallback, useState } from "react";
import { FoundFilms } from "../FoundFilms";
import { SearchBlock } from "@components/SearchBlock";

export const Search = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();

  const onKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      searchByKeyword(e);
      setIsOpened(true);
    },
    [searchByKeyword],
  );

  const { films, searchFilmsCountResult } = data ?? {};

  return (
    <Container className="wrapper">
      <SearchContainer>
        <SearchBlock onKeywordChange={onKeywordChange} />

        <FoundFilms
          films={films}
          searchFilmsCountResult={searchFilmsCountResult}
          isOpened={isOpened}
          isLoading={isLoading || isUninitialized}
          setIsOpened={setIsOpened}
        />
      </SearchContainer>
    </Container>
  );
};
