import { BaseTheme } from "@providers/Theme/interfaces";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  link?: string;
  isChoosen?: boolean;
}
export interface DefineButtonColorProps {
  theme: BaseTheme;
  disabled?: boolean;
  $isChoosen?: boolean;
}
