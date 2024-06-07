import styled from "styled-components";

export const NavList = styled.ul<{ $isColumn: boolean }>`
  display: flex;
  gap: 3em;
  flex-direction: ${({ $isColumn }) => ($isColumn ? "column" : "row")};
`;
