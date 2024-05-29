import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { useCallback, useEffect } from "react";

export const FilmsPage = () => {
  const { filmsSearchParams, updateSearchParams } = useFilmSearchParams();
  const [getFilmsByParams, { data, isFetching }] =
    useLazyGetFilmsByFiltersQuery();

  const { items: films, totalPages = 0 } = data ?? {};

  const onPageChange = useCallback(
    (pageNum: number) => {
      updateSearchParams({ page: String(pageNum) });
    },
    [updateSearchParams],
  );

  useEffect(() => {
    getFilmsByParams(filmsSearchParams);
  }, [getFilmsByParams, filmsSearchParams]);

  return (
    <>
      <Search />
      {films && <Films films={films} isFetching={isFetching} />}
      <Pages pagesAmount={totalPages} onPageChange={onPageChange} />
    </>
  );
};
