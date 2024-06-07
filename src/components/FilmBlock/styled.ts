import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8em;
  align-items: center;
  ${devices.lg} {
    gap: 3em;
  }
  ${devices.md} {
    ${flexColGap(2)}
  }
`;
export const Poster = styled.div`
  min-width: 25em;
  width: 25em;
`;
export const FilmInfo = styled.div`
  ${flexColGap(2)};
  color: white;
`;
export const FilmProperties = styled.div`
  display: flex;
  gap: 0.5em 1.5em;
  flex-wrap: wrap;
  p {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 2em;
  ${devices.lg} {
    ${flexColGap(1)}
  }
  ${devices.md} {
    margin-bottom: 4em;
  }
`;
