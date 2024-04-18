import { ReactElement, SVGProps } from "react";

export interface IconProps {
  Svg: ReactElement;
}
export interface SvgStylesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  hoverColor?: string;
}
