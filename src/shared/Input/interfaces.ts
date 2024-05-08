import { FC, InputHTMLAttributes, SVGProps } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>;
  light?: boolean;
  block?: boolean;
  onIconClick?: () => void;
}
