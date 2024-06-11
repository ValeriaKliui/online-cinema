import { flexColGap, scaleAnimation } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div<{ $expanded?: boolean }>`
  ${flexColGap(1)};
  position: relative;
  justify-content: ${({ $expanded = false }) =>
    $expanded ? "inherit" : "space-between"};
  flex-direction: ${({ $expanded = false }) => ($expanded ? "row" : "column")};

  ${scaleAnimation}
`;
export const ImgContainer = styled.div`
  height: 300px;
  min-width: 200px;
`;
export const FilmImg = styled.img`
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  height: 100%;
  display: block;
  object-fit: cover;
  width: 100%;
`;
export const Description = styled.div`
  ${flexColGap(0.5)};
`;
export const Rating = styled.div`
  border-bottom-left-radius: ${({ theme: { radiuses } }) => radiuses.xs};
  border-bottom-right-radius: ${({ theme: { radiuses } }) => radiuses.xs};
  background-color: ${({ theme: { colors } }) => colors.primary};
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0.5em;
  color: ${({ theme: { colors } }) => colors.white};
`;
export const ContentContainer = styled.div<{ $hasChildren: boolean }>`
  justify-content: ${({ $hasChildren }) =>
    $hasChildren ? "space-around" : "unset"};

  ${flexColGap(1)}
`;
