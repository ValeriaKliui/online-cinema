import { BaseTheme, ThemeType } from "./interfaces";

export const lightTheme: BaseTheme = {
  type: ThemeType.light,
  colors: {
    text: "#ffffff",
    hoverText: "#ffffff",
    primary: "#ef4234",
    subtext: "#979797",
    background: "#131416",
    darkBlock: "#1a1a1a",
    brightBlock: "#212121",
  },
  fonts: {
    medium: "Montserrat Medium",
    regular: "Montserrat Regular",
    bold: "Montserrat Semibold",
    smallRegular: "Poppins",
  },
  fontWeights: { regular: 400, medium: 500, bold: 700 },
  fontSizes: { regular: "16px" },
  radiuses: { regular: "2em", small: "1em" },
};
