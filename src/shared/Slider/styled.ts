import styled from "styled-components";
import ArrowSvg from "@assets/icons/arrow.svg?react";
import { scaleAnimation } from "@utils/mixins/mixins";

export const Arrow = styled(ArrowSvg)<{ $isDisabled: boolean }>`
  min-width: 2em;
  min-height: 2em;
  padding: 0.5em;
  background-color: ${({ theme: { colors }, $isDisabled }) =>
    $isDisabled ? colors.subtext : colors.primary};
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  cursor: ${({ $isDisabled }) => ($isDisabled ? "auto" : "pointer")};
  align-self: center;
  ${scaleAnimation}
`;
export const LeftArrow = styled(Arrow)`
  transform: rotate(180deg);
`;
export const Container = styled.div`
  display: flex;
  gap: 1em;
`;
export const Item = styled.div<{ $maxWidth: number }>`
  flex: 0 1 100%;
  max-width: ${({ $maxWidth }) =>
    $maxWidth === 0 ? "unset" : $maxWidth + "px"};
`;
