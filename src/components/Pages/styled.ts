import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;
export const Page = styled.div<{ $choosen: boolean }>`
  width: 2.5em;
  height: 2.5em;
  background-color: ${({ theme: { colors }, $choosen }) =>
    $choosen ? colors.hoverText : colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme: { radiuses } }) => radiuses.xs};
  color: ${({ theme: { colors }, $choosen }) =>
    $choosen ? colors.primary : "inherit"};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverText};
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
