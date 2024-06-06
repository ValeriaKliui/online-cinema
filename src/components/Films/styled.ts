import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em 8em;
  ${devices.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
