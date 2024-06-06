import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./constants";
import { FC } from "react";
import { ThemeProps, ThemeType } from "./interfaces";
import { useAppSelector } from "@store/interfaces/hooks";
import { selectTheme } from "@store/selectors/app";

export const Theme: FC<ThemeProps> = ({ children }) => {
  const activeTheme = useAppSelector(selectTheme);
  const theme = activeTheme === ThemeType.dark ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
