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
export const Container = styled.div<{ $type: ReviewType }>`
  ${flexColGap(1)};
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  padding: 2em;
  border: 3px solid ${({ $type }) => defineBorderColor($type)};
`;
export const Description = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? "100%" : "205px")};
  overflow: hidden;
`;
export const MoreButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(239, 66, 52, 0.2);
  align-self: flex-start;
  padding: 0.4em;
  font-family: ${({ theme: { fonts } }) => fonts.bold};
`;
