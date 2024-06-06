import styled from "styled-components";
import ArrowSvg from "@assets/icons/arrow.svg?react";
import { flexColGap } from "@utils/mixins/mixins";
import { devices } from "@providers/Theme/constants";

export const Arrow = styled(ArrowSvg)`
  min-width: 2em;
  min-height: 2em;
  padding: 0.5em;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  cursor: pointer;
  align-self: center;
`;
export const LeftArrow = styled(Arrow)`
  transform: rotate(180deg);
`;
export const Container = styled.div`
  display: flex;
  gap: 1em;
  ${devices.md} {
    ${flexColGap(1)};
  }
`;
export const Item = styled.div<{ $maxWidth: number }>`
  flex: 0 1 100%;
  max-width: ${({ $maxWidth }) =>
    $maxWidth === 0 ? "unset" : $maxWidth + "px"};
`;
