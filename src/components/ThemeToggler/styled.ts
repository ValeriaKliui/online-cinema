import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  width: 5em;
  height: 2.5em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  cursor: pointer;
  position: relative;
  padding: 2px;
`;
export const Circle = styled.input`
  appearance: none;
  width: 50%;
  height: 100%;
  border: 2px solid ${({ theme: { colors } }) => colors.primary};
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  margin: 0;
  transition: all 0.2s ease-in;
  background-color: ${({ theme: { colors } }) => colors.primary};
  cursor: pointer;
  &:checked {
    transform: translateX(100%);
  }
`;
