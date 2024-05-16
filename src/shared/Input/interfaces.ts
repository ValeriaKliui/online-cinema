import { FC, InputHTMLAttributes, SVGProps, SyntheticEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>;
  light?: boolean;
  block?: boolean;
  onIconClick?: (event: SyntheticEvent) => void;
}
