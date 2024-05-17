import { Films } from "@components/Films";
import { Pages } from "@components/Pages";
import { Search } from "@components/Search";
import { useLazySearchByKeywordQuery } from "@store/services/filmsApi";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const [searchByKeyword, { data, isFetching }] = useLazySearchByKeywordQuery();
  const filmsParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  useEffect(() => {
    searchByKeyword(filmsParams["search_by_keyword"]);
  }, [searchByKeyword, filmsParams]);

  const { films, pagesCount = 0 } = data ?? {};

  console.log(searchParams.get("search_by_keyword"));

  const choosePage = (pageNum: number) => {
    setCurrentPage(pageNum);
    // setSearchParams({ ...searchParams, page: String(pageNum) });
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
