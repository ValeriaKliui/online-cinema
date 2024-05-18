import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilmsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [getFilmsByParams, { data, isFetching }] =
    useLazyGetFilmsByFiltersQuery();
  const filmsParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const { items: films, totalPages = 0 } = data ?? {};

  const choosePage = (pageNum: number) => {
    setCurrentPage(pageNum);
    setSearchParams({ ...filmsParams, page: String(pageNum) });
  };

  useEffect(() => {
    getFilmsByParams(filmsParams);
  }, [getFilmsByParams, filmsParams]);

  return (
    <>
      <Search />
      {films && <Films films={films} isFetching={isFetching} />}
      <Pages
        pagesAmount={Number(totalPages)}
        currentPage={currentPage}
        choosePage={choosePage}
      />
    </>
  );
};
