import SearchIcon from "@assets/icons/search.svg?react";
import { PATHS_LINKS } from "@constants/paths";
import { useDebounce } from "@hooks/useDebounce";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { Input } from "@shared/Input";
import { useAppDispatch, useAppSelector } from "@store/interfaces/hooks";
import { selectSearchKeyword } from "@store/selectors/app";
import { setSearchKeyword } from "@store/slices/appSlice";
import { ChangeEvent, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

export const SearchForm = ({ onKeywordChange }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { filmsSearchParams } = useFilmSearchParams();

  const searchKeyword =
    useAppSelector(selectSearchKeyword) || filmsSearchParams.keyword;

  const debouncedSearch = useDebounce<string>(
    (searchString: string) =>
      searchString.length > 0 && onKeywordChange({ keyword: searchString }),
  );
  // const debouncedUrl = useDebounce<string>(
  //     () => updateSearchParams({ keyword: searchKeyword })
  // );

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(PATHS_LINKS.search + `?keyword=${searchKeyword}&page=1`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(e.target.value));
    debouncedSearch(e.target.value);
  };

  const onClick = () => {};

  return (
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
  );
};
