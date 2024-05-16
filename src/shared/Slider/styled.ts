import styled from "styled-components";
import ArrowSvg from "@assets/icons/arrow.svg?react";

export const Arrow = styled(ArrowSvg)`
  width: 2em;
  height: 2em;
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
`;
export const Item = styled.div<{ $itemWidth: number }>`
  flex: 0 1 ${({ $itemWidth = "100%" }) => $itemWidth}px;
`;
