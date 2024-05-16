import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div<{ $isOpened: boolean }>`
  ${flexColGap(2)};
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  max-height: 20em;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  margin-top: 1em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  padding: 2em;
  display: ${({ $isOpened }) => ($isOpened ? "flex" : "none")};
  z-index: 1000;

  &::-webkit-scrollbar {
    width: 0.5em;
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.primary};
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: { colors } }) => colors.subtext};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    background-clip: padding-box;
    cursor: pointer;
  }
`;
export const SearchItem = styled.div`
  display: flex;
  gap: 2em;
`;
export const Poster = styled.div`
  flex-basis: 30%;
`;
export const PosterImg = styled.img`
  width: 100%;
`;
export const SearchInfo = styled.div`
  align-self: center;
`;
