import { SearchForm } from "@components/SearchForm";
import { PATHS_LINKS } from "@constants/paths";
import { useDebounce } from "@hooks/useDebounce";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBlockProps } from "./interfaces";

export const SearchBlock: FC<SearchBlockProps> = memo(({ onKeywordChange }) => {
  const navigate = useNavigate();
  const { filmsSearchParams } = useFilmSearchParams();

  const debouncedSearch = useDebounce<string>(
    (searchString: string) =>
      searchString.length > 0 && onKeywordChange(searchString),
  );

  const onChange = useCallback(
    (keyword: string) => {
      debouncedSearch(keyword);
    },
    [debouncedSearch],
  );
  const onFormSubmit = useCallback(
    (keyword: string) => {
      navigate(PATHS_LINKS.search + `?keyword=${keyword}&page=1`);
    },
    [navigate],
  );

  return (
    <SearchForm
      initialKeyword={filmsSearchParams.keyword}
      onKeywordChange={onChange}
      onFormSubmit={onFormSubmit}
    />
  );
});
