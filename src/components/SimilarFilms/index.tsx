import { useGetSimilarFilmsQuery } from "@store/services/filmsApi";
import { FC } from "react";
import { SimilarFilmsProps } from "./interfaces";

export const SimilarFilms: FC<SimilarFilmsProps> = ({ kinopoiskId }) => {
  const { data: similarFilms } = useGetSimilarFilmsQuery(kinopoiskId);
  return (
    <div>
      {similarFilms?.items.map(({ nameRu }) => (
        <div key={kinopoiskId}>
          <p>{nameRu}</p>
        </div>
      ))}
    </div>
  );
};
