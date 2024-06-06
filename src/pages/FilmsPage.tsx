import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useFilmSearchParams } from "@hooks/useFilmSearchParams";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi/filmsApi";
import { useCallback, useEffect, useMemo } from "react";

export const FilmsPage = () => {
  const { filmsSearchParams, updateSearchParams } = useFilmSearchParams();
  const [getFilmsByParams, { data, isFetching }] =
    useLazyGetFilmsByFiltersQuery();

  const { items: films, totalPages = 0 } = data ?? {};

  const onPageChange = useCallback(
    (pageNum: number) => {
      updateSearchParams({ ...filmsSearchParams, page: String(pageNum) });
    },
    [updateSearchParams, filmsSearchParams],
  );

  useEffect(() => {
    getFilmsByParams(filmsSearchParams);
  }, [getFilmsByParams, filmsSearchParams]);

  const filmsMemoised = useMemo(() => films, [films]);

  return (
    <>
      <Search />
      <Films films={filmsMemoised} isFetching={isFetching} />
      <Pages
        pagesAmount={totalPages}
        onPageChange={onPageChange}
        initPage={Number(filmsSearchParams.page)}
      />
    </>
  );
};
