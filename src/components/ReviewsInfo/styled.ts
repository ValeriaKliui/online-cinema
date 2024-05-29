import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const Positive = styled.span`
  color: green;
`;
export const Negative = styled.span`
  color: #900c3f;
`;
export const Neutral = styled.span`
  color: gray;
`;
export const ReviewsCount = styled.div`
  display: flex;
  gap: 2em;
`;
