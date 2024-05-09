import { createGlobalStyle } from 'styled-components';
import MontserratMediumWoff from '@assets/fonts/Montserrat-Medium.woff';
import MontserratRegularWoff from '@assets/fonts/Montserrat-Regular.woff';
import MontserratBoldWoff from '@assets/fonts/Montserrat-SemiBold.woff';
import PoppinsWoff from '@assets/fonts/Poppins-Regular.woff';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.regular};
    src: url(${MontserratRegularWoff}) format('woff');
  }
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.medium};
    src: url(${MontserratMediumWoff}) format('woff');
  }
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.bold};
    src: url(${MontserratBoldWoff}) format('woff');
  }
  @font-face {
    font-family: ${({ theme: { fonts } }) => fonts.smallRegular};
    src: url(${PoppinsWoff}) format('woff');
  }
  * {
    box-sizing: border-box;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
  img {
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: ${({ theme: { fonts } }) => fonts.bold};
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
  h6 {
    font-size: 1.125em;
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
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.text};
  }
  .xl,
  .l,
  .m,
  .s,
  .xs {
    font-family: ${({ theme: { fonts } }) => fonts.medium};
  }
  .xl {
    font-size: 1.5em;
  }
  .l {
    font-size: 1.25em;
  }
  .m {
    font-size: 1.125em;
  }
  .s {
    font-size: 1em;
  }
  .xs {
    font-size: 0.75em;
  }
  .small-text,
  a {
    font-family: ${({ theme: { fonts } }) => fonts.smallRegular};
  }
  .subtext {
    color: ${({ theme: { colors } }) => colors.subtext};
  }
  .centered-flex {
    align-self: center;
    justify-self: center;
  }
  .primary-text {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
