import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  align-items: center;
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
    $choosen ? colors.primary : colors.white};
  cursor: pointer;
  transition: all 0.12s ease;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverText};
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
export const TextButton = styled.p<{ $isAvailable: boolean }>`
  cursor: ${({ $isAvailable }) => ($isAvailable ? "pointer" : "inherit")};
  color: ${({ $isAvailable, theme: { colors } }) =>
    $isAvailable ? colors.text : colors.subtext};
  transition: all 0.12s ease;
  &:hover {
    color: ${({ theme: { colors }, $isAvailable }) =>
      $isAvailable && colors.primary};
  }
`;
