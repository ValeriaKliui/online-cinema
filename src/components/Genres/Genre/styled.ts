import { devices } from "@providers/Theme/constants";
import { flexColGap, scaleAnimation } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  path {
    fill: ${({ theme: { colors } }) => colors.primary};
  }

  display: flex;
  gap: 2em;
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  flex-basis: 310px;
  height: 170px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  ${devices.lg} {
    text-align: center;
    ${flexColGap(1)}
  }

  ${scaleAnimation}
`;
export const IconContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 4em;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
`;
