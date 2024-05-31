import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi/filmsApi";
import { useCallback, useEffect } from "react";

export const SearchPage = () => {
  const { filmsSearchParams, updateSearchParams } = useFilmSearchParams();

  const [searchByKeyword, { data, isFetching }] = useLazySearchByKeywordQuery();

  // useEffect(() => {
  //   const initialPageFromUrl = filmsSearchParams.get("page");
  //   if (initialPageFromUrl) updateSearchParams(Number(initialPageFromUrl));
  // }, [filmsSearchParams]);

  useEffect(() => {
    searchByKeyword(filmsSearchParams);
  }, [searchByKeyword, filmsSearchParams]);

  const { films, pagesCount = 0 } = data ?? {};

  const onPageChange = useCallback(
    (pageNum: number) => {
      updateSearchParams({ page: String(pageNum) });
    },
    [updateSearchParams],
  );

  return (
    <>
      <Search />
      {films && <Films films={films} isFetching={isFetching} />}
      <Pages pagesAmount={pagesCount} onPageChange={onPageChange} />
    </>
  );
};
