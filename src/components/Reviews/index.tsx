import { FC, memo } from "react";
import { ReviewsProps } from "./interfaces";
import { Container } from "./styled";
import { Review } from "./Review";

export const Reviews: FC<ReviewsProps> = memo(({ reviews }) => (
  <Container className="wrapper">
    {reviews?.map(({ author, title, description, type, kinopoiskId, date }) => (
      <Review
        author={author}
        title={title}
        description={description}
        type={type}
        kinopoiskId={kinopoiskId}
        date={date}
        key={kinopoiskId}
      />
    ))}
  </Container>
));
