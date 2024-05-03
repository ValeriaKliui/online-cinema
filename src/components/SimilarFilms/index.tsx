import { useGetSimilarFilmsQuery } from "@store/services/filmsApi";

export const SimilarFilms = ({ filmID }) => {
  const { data: similarFilms } = useGetSimilarFilmsQuery(filmID);
  return (
    <div>
      {similarFilms?.items.map(({ nameRu }) => (
        <div key={filmID}>
          <p>{nameRu}</p>
        </div>
      ))}
    </div>
  );
};
