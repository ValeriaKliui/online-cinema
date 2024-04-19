import { BaseTheme, ThemeType } from "./interfaces";

export const lightTheme: BaseTheme = {
  type: ThemeType.light,
  colors: { text: "#ffffff", hoverText: "#ffffff", primary: "#ef4234" },
  fonts: { regular: "Poppins", title: "Montserrat" },
  fontSizes: { regular: "16px" },
  radiuses: { regular: "2em" },
};
