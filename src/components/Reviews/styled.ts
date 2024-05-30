import { ReviewType } from "@store/services/entities";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

const defineBorderColor = (type: ReviewType) => {
  switch (type) {
    case ReviewType.POSITIVE:
      return "green";
    case ReviewType.NEGATIVE:
      return "#900c3f";
    case ReviewType.NEUTRAL:
      return "gray";
    default:
      "inherit";
  }
};

export const Container = styled.div`
  ${flexColGap(2)};
  p {
    line-height: 130%;
    white-space: pre-line;
  }
`;
export const Review = styled.div<{ $type: ReviewType }>`
  ${flexColGap(1)};
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  padding: 2em;
  border: 3px solid ${({ $type }) => defineBorderColor($type)};
`;
