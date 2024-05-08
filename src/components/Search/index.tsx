import { Input } from "@shared/Input";
import { Container, SearchContainer } from "./styled";
import SearchIcon from "@assets/icons/search.svg?react";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchBlock } from "./SearchBlock";
import { useDebounce } from "@hooks/useDebounce";
import { Genres } from "@components/Genres";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { setSearchKeyword } from "@store/slices/appSlice";
import { selectSearchKeyword } from "@store/selectors/app";
import { useNavigate } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchKeyword = useAppSelector(selectSearchKeyword);
  const searchRef = useRef(null);
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();
  const [isOpened, setIsOpened] = useState(false);

  const debouncedSearch = useDebounce(
    (searchString: string) =>
      searchString.length > 0 && searchByKeyword(searchString),
  );
  const initialSerchWasMade = useRef(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    initialSerchWasMade.current = false;
    dispatch(setSearchKeyword(e.target.value));
    debouncedSearch(e.target.value);
    setIsOpened(true);
  };

  const onClick = () => searchKeyword.length > 0 && setIsOpened(true);

  const { films, searchFilmsCountResult } = data ?? {};

  useEffect(() => {
    if (initialSerchWasMade.current)
      searchKeyword.length > 0 && searchByKeyword(searchKeyword);
  }, [searchKeyword, searchByKeyword]);

  const onIconClick = () =>
    navigate(PATHS_LINKS.films + `?keyword=${searchKeyword}&page=1`);

  return (
    <Container className="wrapper">
      <SearchContainer ref={searchRef}>
        <Input
          placeholder="Поиск..."
          Icon={SearchIcon}
          onChange={onChange}
          value={searchKeyword}
          onClick={onClick}
          onIconClick={onIconClick}
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
