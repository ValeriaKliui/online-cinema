import { useGetSimilarFilmsQuery } from "@store/services/filmsApi/filmsApi";
import { FC } from "react";
import { SimilarFilmsProps } from "./interfaces";
import { FilmCard } from "@components/FilmCard";
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
    <FilmCard
      nameRu={nameRu}
      posterUrlPreview={posterUrlPreview}
      nameEn={nameEn}
      kinopoiskId={filmId}
    />
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
