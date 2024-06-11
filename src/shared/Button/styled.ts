import styled from "styled-components";
import { DefineButtonColorProps } from "./interfaces";
import { scaleAnimation } from "@utils/mixins/mixins";

const defineButtonColor = ({
  theme,
  disabled,
  $isChoosen,
}: DefineButtonColorProps) => {
  const { colors } = theme;
  if (disabled) return colors.subtext;
  if ($isChoosen) return colors.white;
  return colors.primary;
};
const defineButtonTextColor = ({
  theme,
  $isChoosen,
}: DefineButtonColorProps) => {
  const { colors } = theme;
  if ($isChoosen) return colors.primary;
  return colors.white;
};

export const ButtonStyled = styled.button<{ $isChoosen?: boolean }>`
  width: fit-content;
  background-color: ${({ theme, disabled, $isChoosen }) =>
    defineButtonColor({ theme, disabled, $isChoosen })};
  outline: none;
  border: none;
  border-radius: ${({ theme: { radiuses } }) => radiuses.regular};
  padding: 1em 2em;
  display: flex;
  align-items: center;
  gap: 0.7em;
  cursor: pointer;
  color: ${({ theme, $isChoosen }) =>
    defineButtonTextColor({ theme, $isChoosen })};
  white-space: nowrap;
  svg {
    path {
      fill: ${({ theme: { colors }, $isChoosen }) =>
        $isChoosen && colors.primary};
    }
  }

  ${scaleAnimation}
`;
