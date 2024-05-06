import { Input } from "@shared/Input";
import { Container, SearchContainer, Text, TextContainer } from "./styled";
import SearchIcon from "@assets/icons/search.svg";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi";
import { ChangeEvent, useRef, useState } from "react";
import { SearchBlock } from "./SearchBlock";
import { useDebounce } from "@hooks/useDebounce";
import { Genres } from "@components/Genres";

export const Search = () => {
  const [isOpened, setIsOpened] = useState(false);
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();

  const debouncedSearch = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) =>
      e.target.value.length > 0 && searchByKeyword(e.target.value),
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debouncedSearch(e);
    setIsOpened(true);
  };

  const { films, searchFilmsCountResult } = data ?? {};

  return (
    <Container className="wrapper">
      <TextContainer>
        <h5>Поиск по сайту</h5>
        <Text className="subtext">
          На нашем сайте вы найдете подходящие вам фильмы и сериалы
        </Text>
      </TextContainer>
      <SearchContainer ref={searchRef}>
        <Input
          placeholder="Поиск..."
          icon={SearchIcon}
          onChange={onChange}
          value={searchValue}
        />
        <SearchBlock
          films={films}
          searchFilmsCountResult={searchFilmsCountResult}
          isOpened={isOpened}
          isLoading={isLoading || isUninitialized}
          setIsOpened={setIsOpened}
          searchRef={searchRef}
        />
      </SearchContainer>
      <Genres />
    </Container>
  );
};
