import { FC, memo } from "react";
import { Container, Negative, Neutral, Positive, ReviewsCount } from "./styled";
import { ReviewsInfoProps } from "./interfaces";

export const ReviewsInfo: FC<ReviewsInfoProps> = memo(
  ({ nameRu, total, positive, negative, neutral }) => {
    return (
      <Container className="wrapper">
        <h5>Отзыв о фильме {nameRu}</h5>
        <div>
          <p className="l">Всего: {total}</p>
          <ReviewsCount>
            <p>
              Позитивных: <Positive> {positive}</Positive>
            </p>
            <p>
              Негативных: <Negative> {negative}</Negative>
            </p>
            <p>
              Нейтральных: <Neutral> {neutral}</Neutral>
            </p>
          </ReviewsCount>
        </div>
      </Container>
    );
  },
);
