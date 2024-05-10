import { useGetReviewsQuery } from "@store/services/filmsApi";
import { FC } from "react";
import { ReviewsProps } from "./interfaces";

export const Reviews: FC<ReviewsProps> = ({ kinopoiskId }) => {
  const { data: reviews } = useGetReviewsQuery(kinopoiskId);
  return (
    <div className="wrapper">
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
