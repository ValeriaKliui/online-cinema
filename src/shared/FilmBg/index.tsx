import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const FilmBg = styled.div<{ $posterUrl?: string }>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 10)),
    url(${({ $posterUrl }) => $posterUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 50vh;
  background-position: top center;
  margin-top: -4em;
  ${devices.md} {
    min-height: unset;
  }
`;
