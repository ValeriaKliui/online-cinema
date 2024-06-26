import { useGetSimilarFilmsQuery } from "@store/services/filmsApi/filmsApi";
import { FC, memo } from "react";
import { SimilarFilmsProps } from "./interfaces";
import { FilmCard } from "@components/FilmCard";
import { Slider } from "@shared/Slider";
import { SimilarFilm } from "@store/services/entities";
import { Container } from "./styled";

export const SimilarFilms: FC<SimilarFilmsProps> = memo(({ kinopoiskId }) => {
  const { data: similarFilms } = useGetSimilarFilmsQuery(kinopoiskId);
  const { items = [] } = similarFilms ?? {};

  const renderFilm = ({
    filmId,
    nameRu,
    posterUrlPreview,
    nameEn,
    kinopoiskId,
  }: SimilarFilm) => (
    <FilmCard
      nameRu={nameRu}
      posterUrlPreview={posterUrlPreview}
      nameEn={nameEn}
      kinopoiskId={filmId || kinopoiskId}
    />
  );

  if (items.length === 0) return <></>;

  return (
    <Container className="wrapper">
      <h5>Похожие фильмы</h5>
      <Slider items={items} renderItem={renderFilm} itemsAmount={4} />
    </Container>
  );
});
