import { css } from "styled-components";

export const flexColGap = (gap = 1) => css`
  display: flex;
  flex-direction: column;
  gap: ${gap}em;
`;
