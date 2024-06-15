import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  img {
    border-radius: ${({ theme: { radiuses } }) => radiuses.small};
    max-height: 13em;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
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
export const ModalImg = styled.img``;
