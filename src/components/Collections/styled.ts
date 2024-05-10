import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};
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
export const Films = styled.div`
  display: flex;
  gap: 2em;
  overflow: hidden;
`;
