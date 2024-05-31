import { SearchForm } from "@components/SearchForm";
import { PATHS_LINKS } from "@constants/paths";
import { useDebounce } from "@hooks/useDebounce";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { useNavigate } from "react-router-dom";

export const SearchBlock = ({ onKeywordChange }) => {
  const navigate = useNavigate();
  const { filmsSearchParams } = useFilmSearchParams();

  const debouncedSearch = useDebounce<string>(
    (searchString: string) =>
      searchString.length > 0 && onKeywordChange({ keyword: searchString }),
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
