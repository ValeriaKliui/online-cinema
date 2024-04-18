import { HTMLAttributes } from "react";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export interface BaseTheme {
  colors: { text: string; hoverText: string };
  fonts: { regular: string };
  fontSizes: { regular: string };
  type: ThemeType;
}
export interface ThemeProps extends HTMLAttributes<HTMLDivElement> {}
