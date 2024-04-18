import { BaseTheme, ThemeType } from "./interfaces";

export const lightTheme: BaseTheme = {
  type: ThemeType.light,
  colors: { text: "#000000", hoverText: "#ffffff" },
  fonts: { regular: "Poppins, sans-serif" },
  fontSizes: { regular: "16px" },
};
