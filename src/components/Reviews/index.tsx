import { FC, memo } from "react";
import { ReviewsProps } from "./interfaces";
import { Container, Review } from "./styled";
import parser from "html-react-parser";

export const Reviews: FC<ReviewsProps> = memo(({ reviews }) => (
  <Container className="wrapper">
    {reviews?.map(({ author, title, description, type, kinopoiskId }) => (
      <Review $type={type} key={kinopoiskId}>
        <p className="l">{author}</p>
        <p className="xl">{title}</p>
        <p>{parser(description)}</p>
      </Review>
    ))}
  </Container>
));
