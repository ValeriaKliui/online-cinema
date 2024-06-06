import { useGetReviewsQuery } from "@store/services/filmsApi/filmsApi";
import { FC, memo } from "react";
import { ReviewsProps } from "./interfaces";
import { Slider } from "@shared/Slider";
import { ReviewContainer, Description } from "./styled";
import { Link } from "react-router-dom";
import { PATHS_LINKS } from "@constants/paths";
import { ReviewData } from "@store/services/entities";
import { Breakpoints } from "@providers/Theme/interfaces";

export const ReviewsSlider: FC<ReviewsProps> = memo(({ kinopoiskId }) => {
  const { data: reviews } = useGetReviewsQuery({ kinopoiskId });
  const { items = [] } = reviews ?? {};

  const renderReviews = ({
    author,
    title,
    description,
    kinopoiskId: reviewId,
  }: ReviewData) => (
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
          <Slider
            items={items}
            itemsAmount={{ [Breakpoints.xxl]: 3, [Breakpoints.lg]: 2 }}
            renderItem={renderReviews}
          />
        </div>
      )}
    </>
  );
});
