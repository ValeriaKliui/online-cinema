import { Films } from "@components/Films";
import { Search } from "@components/Search";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const FilmsPage = () => {
  const [searchParams] = useSearchParams();
  const [getFilmsByParams, { data, isFetching }] =
    useLazyGetFilmsByFiltersQuery();
  const filmsParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const { items: films } = data ?? {};

  useEffect(() => {
    getFilmsByParams(filmsParams);
  }, [getFilmsByParams, filmsParams]);

  return (
    <>
      <Search />
      {films && <Films films={films} isFetching={isFetching} />}
    </>
  );
};
