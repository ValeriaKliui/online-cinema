import { createGlobalStyle } from "styled-components";
import PoppinsRegularWoff from "@assets/fonts/Poppins-Regular.woff";
import MontserratRegularWoff from "@assets/fonts/Montserrat-Regular.woff";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    src: url(${PoppinsRegularWoff}) format("woff");
  }
  @font-face {
    font-family: Montserrat;
    src: url(${MontserratRegularWoff}) format("woff");
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
  }
  h1,
  h2,
  p {
    margin: 0;
  }
  h2 {
    font-family: ${({ theme: { fonts } }) => fonts.title};
    font-size: 2.5em;
  }
  p {
    line-height: 160%;
  }
  .wrapper {
    max-width: 1340px;
    margin: 0 auto;
  }
  p,
  body,
  button {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
    color: ${({ theme: { colors } }) => colors.text};
  }
`;
