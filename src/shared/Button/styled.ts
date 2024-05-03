import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: fit-content;
  background-color: ${({ theme: { colors } }) => colors.primary};
  outline: none;
  border: none;
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 0.7em;
  cursor: pointer;
`;
