import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6em;
`;
export const Option = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkBlock};
  align-items: center;
  padding: 2em 4em;
  border-radius: ${({ theme: { radiuses } }) => radiuses.small};

  ${flexColGap(2)};
`;
