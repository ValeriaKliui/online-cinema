import { Input } from "@shared/Input";
import { Container, SearchContainer } from "./styled";
import SearchIcon from "@assets/icons/search.svg?react";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi";
import {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchBlock } from "./SearchBlock";
import { useDebounce } from "@hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { setSearchKeyword } from "@store/slices/appSlice";
import { selectSearchKeyword } from "@store/selectors/app";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [urlSearchParams] = useSearchParams();
  const urlSearchValue = urlSearchParams.get("keyword") || "";
  const searchKeyword = useAppSelector(selectSearchKeyword) || urlSearchValue;

  const searchRef = useRef(null);
  const [searchByKeyword, { data, isLoading, isUninitialized }] =
    useLazySearchByKeywordQuery();
  const [isOpened, setIsOpened] = useState(false);

  const debouncedSearch = useDebounce<string>(
    (searchString: string) =>
      searchString.length > 0 && searchByKeyword({ keyword: searchString }),
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
      searchKeyword.length > 0 && searchByKeyword({ keyword: searchKeyword });
  }, [searchKeyword, searchByKeyword]);

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    films &&
      films?.length > 0 &&
      navigate(PATHS_LINKS.search + `?keyword=${searchKeyword}&page=1`);
    setIsOpened(false);
  };

  return (
    <Container className="wrapper">
      <SearchContainer ref={searchRef}>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Поиск..."
            Icon={SearchIcon}
            onChange={onChange}
            value={searchKeyword}
            onClick={onClick}
            onIconClick={onSubmit}
          />
        </form>
        <SearchBlock
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
