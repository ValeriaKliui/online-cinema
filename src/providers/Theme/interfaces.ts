import { HTMLAttributes } from 'react';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
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
  fonts: { regular: string; title: string };
  fontSizes: { regular: string };
  type: ThemeType;
  radiuses: { regular: string; small: string };
}
export interface ThemeProps extends HTMLAttributes<HTMLDivElement> {}
