import { SearchForm } from "@components/SearchForm";
import { PATHS_LINKS } from "@constants/paths";
import { useDebounce } from "@hooks/useDebounce";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBlockProps } from "./interfaces";

export const SearchBlock: FC<SearchBlockProps> = ({ onKeywordChange }) => {
  const navigate = useNavigate();
  const { filmsSearchParams } = useFilmSearchParams();

  const debouncedSearch = useDebounce<string>(
    (searchString: string) =>
      searchString.length > 0 && onKeywordChange(searchString),
  );

  const onChange = (keyword: string) => {
    debouncedSearch(keyword);
  };
  const onFormSubmit = (keyword: string) => {
    navigate(PATHS_LINKS.search + `?keyword=${keyword}&page=1`);
  };

  return (
    <SearchForm
      initialKeyword={filmsSearchParams.keyword}
      onKeywordChange={onChange}
      onFormSubmit={onFormSubmit}
    />
  );
};
