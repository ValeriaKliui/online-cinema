import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
`;
export const BurgerLine = styled.span`
  display: block;
  height: 2px;
  width: 30px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  margin-bottom: 6px;
`;
