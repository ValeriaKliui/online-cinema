import { HTMLAttributes } from "react";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export enum Breakpoints {
  xs = 400,
  sm = 600,
  md = 900,
  lg = 1280,
  xl = 1440,
  xxl = 1920,
}

export interface BaseTheme {
  colors: {
    text: string;
    hoverText: string;
    primary: string;
    subtext: string;
    background: string;
    darkBlock: string;
    brightBlock: string;
    white: string;
  };
  fonts: {
    medium: string;
    regular: string;
    bold: string;
    smallRegular: string;
  };
  fontWeights: { regular: number; medium: number; bold: number };
  fontSizes: { regular: string };
  type: ThemeType;
  radiuses: { regular: string; small: string; xs: string };
}
export interface ThemeProps extends HTMLAttributes<HTMLDivElement> {}
