import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const FilmContainer = styled.div`
  ${flexColGap(2)}
  padding: 8em 0;
  color: ${({ theme: { colors } }) => colors.white};
  .xs,
  p {
    color: ${({ theme: { colors } }) => colors.white};
  }
  ${devices.md} {
    padding: 2em 0;
  }
`;

export const FilmInfo = styled.div`
  ${flexColGap(1)}
`;
export const Description = styled.p`
  max-width: 70%;
`;
export const SubText = styled.span`
  display: flex;
  align-items: center;
  gap: 1em;

  &::before {
    content: "";
    width: 4em;
    height: 1px;
    background-color: ${({ theme: { colors } }) => colors.subtext};
  }
`;
