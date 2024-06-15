import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";
import CrossIcon from "@assets/icons/cross.svg?react";
import { svgStyles } from "@shared/Icon";

export const Overlay = styled.div<{ $isOpened: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ $isOpened }) => ($isOpened ? "visible" : "hidden")};
  z-index: 10000;
`;
export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  position: fixed;
  padding: 1em;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  ${flexColGap(2)};
`;
export const Close = styled(CrossIcon)`
  align-self: flex-end;
  cursor: pointer;
  ${(props) => svgStyles(props)}
`;
export const Content = styled.div`
  width: 50vw;
`;
