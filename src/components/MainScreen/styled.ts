import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const FilmContainer = styled.div`
  ${flexColGap(2)}
  padding: 8em 0;
`;

export const FilmInfo = styled.div`
  ${flexColGap(0.5)}
`;
export const Description = styled.p`
  max-width: 70%;
`;
