import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const ReviewContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  padding: 2em;
  height: 14em;
  ${flexColGap(1)}
`;
export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
