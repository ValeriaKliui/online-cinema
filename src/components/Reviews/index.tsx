import { FC } from "react";
import { ReviewsProps } from "./interfaces";
import { Container, Review } from "./styled";
import parser from "html-react-parser";

export const Reviews: FC<ReviewsProps> = ({ reviews }) => {
  return (
    <Container className="wrapper">
      {reviews?.map(({ author, title, description, type }) => (
        <Review $type={type}>
          <p className="l">{author}</p>
          <p className="xl">{title}</p>
          <p>{parser(description)}</p>
        </Review>
      ))}
    </Container>
  );
};
