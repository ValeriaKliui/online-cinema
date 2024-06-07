import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  img {
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
    max-height: 13em;
    object-fit: cover;
  }

  img:first-child {
    grid-row: 1 / 3;
    height: 100%;
    max-height: unset;
  }
  ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
