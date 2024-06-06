import { BaseTheme, Breakpoints, ThemeType } from "./interfaces";

export const darkTheme: BaseTheme = {
  type: ThemeType.dark,
  colors: {
    text: "#ffffff",
    hoverText: "#ffffff",
    primary: "#ef4234",
    subtext: "#979797",
    background: "#131416",
    darkBlock: "#1a1a1a",
    brightBlock: "#212121",
    white: "#ffffff",
  },
  fonts: {
    medium: "Montserrat Medium",
    regular: "Montserrat Regular",
    bold: "Montserrat Semibold",
    smallRegular: "Poppins",
  },
  fontWeights: { regular: 400, medium: 500, bold: 700 },
  fontSizes: { regular: "16px" },
  radiuses: { regular: "2em", small: "1em", xs: ".5em" },
};

export const devices = {
  xs: `@media (max-width: ${Breakpoints.xs}px)`,
  sm: `@media (max-width: ${Breakpoints.sm}px)`,
  md: `@media (max-width: ${Breakpoints.md}px)`,
  lg: `@media (max-width: ${Breakpoints.lg}px)`,
  xl: `@media (max-width: ${Breakpoints.xl}px)`,
  xxl: `@media (max-width: ${Breakpoints.xxl}px)`,
};

export const lightTheme: BaseTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    background: "#ffffff",
    text: "#000000",
    darkBlock: "#b7b7b7",
    brightBlock: "#b2b2b2",
  },
};
