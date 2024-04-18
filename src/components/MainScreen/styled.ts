import styled from 'styled-components';

export const Container = styled.div<{ $posterUrl: string }>`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 10)
    ),
    url(${({ $posterUrl }) => $posterUrl});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 70vh;
  background-position: top center;
`;
