import { ThemeProvider } from "styled-components";
import { lightTheme } from "./constants";
import { FC } from "react";
import { ThemeProps } from "./interfaces";

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
);
