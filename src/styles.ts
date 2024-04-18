import { createGlobalStyle } from "styled-components";
import PoppinsRegularWoff from "@assets/fonts/";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    src: url(PoppinsRegularWoff) format("woff");
  }
  a {
    color: inherit;
    text-decoration: unset;
  }
  ul {
    list-style-type: none;
  }
  .wrapper {
    max-width: 1340px;
    margin: 0 auto;
  }
  body {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.regular};
  }
`;
