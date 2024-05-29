import { useGetReviewsQuery } from "@store/services/filmsApi";
import { FC } from "react";
import { ReviewsProps } from "./interfaces";
import { Slider } from "@shared/Slider";
import { ReviewContainer, Description } from "./styled";
import { Review } from "@store/services/interfaces";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";

export const ReviewsSlider: FC<ReviewsProps> = ({ kinopoiskId }) => {
  const { data: reviews } = useGetReviewsQuery({ kinopoiskId });
  const { items = [] } = reviews ?? {};

  const renderReviews = ({
    author,
    title,
    description,
    kinopoiskId: reviewId,
  }: Review) => (
    <Link to={PATHS_LINKS.reviews + "/" + kinopoiskId}>
      <ReviewContainer key={reviewId}>
        <p className="subtext bold">{author}</p>
        <h6>{title}</h6>
        <Description>{description}</Description>
      </ReviewContainer>
    </Link>
  );

  return (
    <>
      {items.length > 0 && (
        <div className="wrapper">
          <Slider items={items} itemsAmount={3} renderItem={renderReviews} />
        </div>
      )}
    </>
  );
};
