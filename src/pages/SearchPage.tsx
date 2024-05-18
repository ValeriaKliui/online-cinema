import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi";
import { SearchParams } from "@store/services/interfaces";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchByKeyword, { data, isFetching }] = useLazySearchByKeywordQuery();
  const filmsParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  ) as unknown as SearchParams;

  useEffect(() => {
    const initialPageFromUrl = searchParams.get("page");
    if (initialPageFromUrl) setCurrentPage(Number(initialPageFromUrl));
  }, [searchParams]);

  useEffect(() => {
    searchByKeyword(filmsParams);
  }, [searchByKeyword, filmsParams]);

  const { films, pagesCount = 0 } = data ?? {};

  const choosePage = (pageNum: number) => {
    setCurrentPage(pageNum);
    setSearchParams({ ...filmsParams, page: String(pageNum) });
  };

  return (
    <>
      <Search />
      {films && <Films films={films} isFetching={isFetching} />}
      <Pages
        pagesAmount={pagesCount}
        currentPage={currentPage}
        choosePage={choosePage}
      />
    </>
  );
};
