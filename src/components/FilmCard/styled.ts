import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8em;
  align-items: center;
  padding: 5em 0;
`;
export const Poster = styled.div`
  flex-basis: 160%;
`;
export const FilmInfo = styled.div`
  ${flexColGap(2)}
`;
export const FilmProperties = styled.div`
  display: flex;
  gap: 0.5em 1.5em;
  flex-wrap: wrap;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 2em;
`;
