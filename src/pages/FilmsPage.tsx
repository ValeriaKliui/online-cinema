import { useLazyGetFilmsByFiltersQuery } from "@store/services/filmsApi";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const FilmsPage = () => {
  const [searchParams] = useSearchParams();
  const [getFilmsByParams, { data }] = useLazyGetFilmsByFiltersQuery();
  const FILM_FILTERS = ["keyword", "page"];

  // const filmParams = {};
  const filmParams = useMemo(() => ({}), []);

  FILM_FILTERS.map((filter) => (filmParams[filter] = searchParams.get(filter)));

  const { items: films } = data ?? {};

  console.log(films);

  //в депенелис нужно убрать filmParams

  useEffect(() => {
    getFilmsByParams(filmParams);
  }, [getFilmsByParams, filmParams]);

  return (
    <div className="wrapper">
      {films && films.length > 0 && films.map(({ nameRu }) => <p>{nameRu}</p>)}
      {/* <Search />
       */}
    </div>
  );
};
