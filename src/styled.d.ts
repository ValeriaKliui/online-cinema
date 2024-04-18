import { BaseTheme, ThemeType } from "@providers/Theme/interfaces";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {
    type: ThemeType;
  }
}
