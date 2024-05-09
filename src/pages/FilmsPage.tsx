import { FilmCard } from "@components/FilmCard";
import { Search } from "@components/Search";
import { Spinner } from "@shared/Spinner";
import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const FilmsPage = () => {
  const [searchParams] = useSearchParams();
  const [getFilmsByParams, { data, isLoading }] = useLazyGetFilmsByFiltersQuery();
  const FILM_FILTERS = ["keyword", "page", 'genres'];

  const filmParams = {};
  FILM_FILTERS.map((filter) => {
    const searchParam = searchParams.get(filter);
    if (searchParam) filmParams[filter] = searchParam
  });

  const { items: films } = data ?? {};

  //в депенелис нужно убрать filmParams

  useEffect(() => {
    getFilmsByParams(filmParams);
  }, [getFilmsByParams]);

  return (
    <div className="wrapper">
      <Search />
      {isLoading && <Spinner />}
      {films && films.length > 0 && films.map(({ nameRu, posterUrlPreview }) => <FilmCard nameRu={nameRu} posterUrlPreview={posterUrlPreview} />)}
    </div>
  );
};
