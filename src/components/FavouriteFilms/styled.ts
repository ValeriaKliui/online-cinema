import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const FilmsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3em 8em;
`;

export const FavFilmsHeader = styled.div`
  ${flexColGap(2)};
  align-items: center;
`;
export const FavFilm = styled.div`
  display: flex;
`;
