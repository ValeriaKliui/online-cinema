import { useGetReviewsQuery } from "@store/services/filmsApi";

export const Reviews = ({ filmID }) => {
  const { data: reviews } = useGetReviewsQuery(filmID);
  return (
    <div>
      {reviews?.items?.map(({ author, title, description, kinopoiskId }) => (
        <div key={kinopoiskId}>
          <p>{author}</p>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
