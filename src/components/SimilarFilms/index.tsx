import { useGetSimilarFilmsQuery } from "@store/services/filmsApi/filmsApi";
import { FC } from "react";
import { SimilarFilmsProps } from "./interfaces";
import { PATHS_LINKS } from "@constants/paths";
import { FilmCard } from "@components/FilmCard";
import { Link } from "react-router-dom";
import { Slider } from "@shared/Slider";
import { SimilarFilm } from "@store/services/entities";

export const SimilarFilms: FC<SimilarFilmsProps> = ({ kinopoiskId }) => {
  const { data: similarFilms, isFetching } =
    useGetSimilarFilmsQuery(kinopoiskId);
  const { items = [] } = similarFilms ?? {};

  console.log(isFetching);
  const renderFilm = ({
    filmId,
    nameRu,
    posterUrlPreview,
    nameEn,
  }: SimilarFilm) => (
    <Link to={PATHS_LINKS.films + "/" + filmId} key={filmId}>
      <FilmCard
        nameRu={nameRu}
        posterUrlPreview={posterUrlPreview}
        nameEn={nameEn}
        kinopoiskId={filmId}
      />
    </Link>
  );

  return (
    <>
      {items.length > 0 && (
        <div className="wrapper">
          <Slider items={items} renderItem={renderFilm} itemsAmount={4} />
        </div>
      )}
    </>
  );
};
