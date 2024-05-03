import { HTMLAttributes } from "react";

export enum ThemeType {
  light = "light",
  dark = "dark",
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
  radiuses: { regular: string; small: string };
}
export interface ThemeProps extends HTMLAttributes<HTMLDivElement> {}
