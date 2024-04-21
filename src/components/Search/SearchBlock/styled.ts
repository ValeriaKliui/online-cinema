import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.brightBlock};
  max-height: 30em;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
`;
export const SearchItem = styled.div`
  padding: 2em;
  display: flex;
  gap: 2em;
  cursor: pointer;
`;
export const Poster = styled.div`
  flex-basis: 30%;
`;
export const PosterImg = styled.img`
  width: 100%;
`;
