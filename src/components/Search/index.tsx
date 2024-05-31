import { Container, SearchContainer } from "./styled";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi/filmsApi";
import { ChangeEvent, useCallback, useState } from "react";
import { FoundFilms } from "../FoundFilms";
import { SearchForm } from "@components/SearchForm";

export const Search = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();

  const onKeywordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      searchByKeyword(e.target.value);
      setIsOpened(true);
    },
    [searchByKeyword],
  );

  // const onInputClick = () => searchKeyword.length > 0 && setIsOpened(true);

  const { films, searchFilmsCountResult } = data ?? {};

  // const onSubmit = (event: SyntheticEvent) => {
  //   event.preventDefault();
  //   // films &&
  //   //   films?.length > 0 &&
  //   navigate(PATHS_LINKS.search + `?keyword=${searchKeyword}&page=1`);
  //   setIsOpened(false);
  // };

  return (
    <Container className="wrapper">
      <SearchContainer>
        <SearchForm onKeywordChange={onKeywordChange} />

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
