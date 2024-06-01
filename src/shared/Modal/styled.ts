import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Overlay = styled.div<{ $isOpened: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ $isOpened }) => ($isOpened ? "visible" : "hidden")};
`;
export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  position: fixed;
  padding: 2em;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  ${flexColGap(2)};
`;
