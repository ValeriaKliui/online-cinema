import { flexColGap } from "@/utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div<{ $posterUrl: string }>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 10)),
    url(${({ $posterUrl }) => $posterUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 50vh;
  background-position: top center;
`;
export const FilmContainer = styled.div`
  ${flexColGap(2)}
`;

export const FilmInfo = styled.div`
  padding-top: 6em;
  ${flexColGap(0.5)}
`;
