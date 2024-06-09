import { devices } from "@providers/Theme/constants";
import styled from "styled-components";

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
  ${devices.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-auto-rows: 0;
    overflow-y: hidden;
  }
  ${devices.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const TabType = styled.div<{ $isChoosen: boolean }>`
  justify-self: center;
  cursor: pointer;
  height: 4em;
  display: flex;
  align-items: center;
  border-bottom: ${({ $isChoosen, theme: { colors } }) =>
    $isChoosen ? ` 2px solid ${colors.primary}` : "none"};
`;
