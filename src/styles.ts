import { createGlobalStyle } from 'styled-components';
import PoppinsRegularWoff from '@assets/fonts/Poppins-Regular.woff';
import MontserratRegularWoff from '@assets/fonts/Montserrat-Regular.woff';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    src: url(${PoppinsRegularWoff}) format('woff');
  }
  @font-face {
    font-family: Montserrat;
    src: url(${MontserratRegularWoff}) format('woff');
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: unset;
  }
  ul {
    list-style-type: none;
  }
  body {
    margin: 0;
    background: ${({ theme: { colors } }) => colors.background};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${({ theme: { fonts } }) => fonts.title};
    margin: 0;
  }
  h2 {
    font-size: 2.5em;
  }
  h3 {
    font-size: 2.25em;
  }
  h4 {
    font-size: 2em;
  }
  h5 {
    font-size: 1.5em;
  }
  p {
    line-height: 160%;
    margin: 0;
  }
  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }
  p,
  body,
  button {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
    color: ${({ theme: { colors } }) => colors.text};
  }
  .medium {
    font-size: 1.125em;
  }
  .subtext {
    color: ${({ theme: { colors } }) => colors.subtext};
  }
`;
