import { css } from "styled-components";
import { SvgStylesProps } from "./interfaces";

export const svgStyles = ({
  height,
  width,
  color,
  hoverColor,
}: SvgStylesProps) => {
  return css`
    height: ${height ?? "40px"};
    width: ${width ?? "inherit"};
    & path {
      fill: ${({ theme: { colors } }) => color ?? colors.text};
    }
    & hover path {
      fill: ${({ theme: { colors } }) => hoverColor ?? colors.hoverText};
    }
  `;
};
