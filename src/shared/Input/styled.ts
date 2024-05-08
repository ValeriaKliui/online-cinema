import styled from "styled-components";

export const Container = styled.div<{
  $block?: boolean;
}>`
  position: relative;
  width: ${({ $block }) => ($block ? "100%" : "inherit")};
`;
export const InputStyled = styled.input<{ $light?: boolean }>`
  border: none;
  padding: 1em 2em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  width: 100%;
  background: ${({ $light, theme: { colors } }) =>
    $light ? colors.brightBlock : colors.darkBlock};
  color: ${({ theme: { colors } }) => colors.text};
  font-family: ${({ theme: { fonts } }) => fonts.regular};
  font-size: 0.875em;

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.subtext};
  }
`;
export const IconStyled = styled.div`
  position: absolute;
  bottom: 20%;
  right: 2em;
  z-index: 200;
  cursor: pointer;
`;
