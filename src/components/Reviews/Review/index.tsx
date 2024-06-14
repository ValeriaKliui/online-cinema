import { FC, useState } from "react";
import { Container, Description, MoreButton } from "./styled";
import parser from "html-react-parser";
import { ReviewProps } from "./interfaces";

export const Review: FC<ReviewProps> = ({
  author,
  title,
  description,
  type,
  date,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReview = () => setIsExpanded((prev) => !prev);

  return (
    <Container $type={type}>
      <p className="l">{author}</p>
      <p className="xl">{title}</p>
      <p className="xs">{new Date(date).toLocaleDateString()}</p>

      <Description $isExpanded={isExpanded}>
        <p>{parser(description)}</p>
      </Description>
      {!isExpanded && (
        <MoreButton onClick={toggleReview}>прочитать все</MoreButton>
      )}
    </Container>
  );
};
