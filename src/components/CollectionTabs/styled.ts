import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  ${devices.lg} {
    flex-wrap: wrap;
    gap: 0 1em;
  }
`;
export const TabType = styled.div<{ $isChoosen: boolean }>`
  cursor: pointer;
  height: 4em;
  display: flex;
  align-items: center;
  border-bottom: 2px solid
    ${({ $isChoosen, theme: { colors } }) =>
      $isChoosen ? colors.primary : "none"};
`;
