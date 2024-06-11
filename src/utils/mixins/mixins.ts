import { css } from "styled-components";

export const flexColGap = (gap = 1) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap}em;
`;

export const scaleAnimation = () => css`
  transition: all 0.08s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
