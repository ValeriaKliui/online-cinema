import styled from 'styled-components';

export const Container = styled.div<{
  $icon?: string;
  $block?: boolean;
}>`
  position: relative;
  width: ${({ $block }) => ($block ? '100%' : 'inherit')};
  &::after {
    position: absolute;
    content: url(${({ $icon }) => $icon});
    bottom: 20%;
    right: 2em;
  }
`;
export const InputStyled = styled.input<{ $light?: boolean }>`
  border: none;
  padding: 1em 2em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  width: 100%;
  background: ${({ $light, theme: { colors } }) =>
    $light ? colors.brightBlock : colors.darkBlock};
  color: ${({ theme: { colors } }) => colors.text};
  &::placeholder {
    color: ${({ theme: { colors } }) => colors.text};
  }
`;
