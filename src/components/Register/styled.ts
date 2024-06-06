import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  ${devices.md} {
    flex-direction: column-reverse;
    gap: 2em;
  }
`;
export const Media = styled.div`
  flex: 1 1 0;
  background: ${({ theme: { colors } }) => colors.brightBlock};
  ${flexColGap(1)};
  align-items: center;
  justify-content: center;
  padding: 10em 3em;
  text-align: center;
`;
export const AuthorizeScreen = styled.div`
  flex: 1 1 0;
  background: ${({ theme: { colors } }) => colors.darkBlock};
  ${flexColGap(1)};
  align-items: center;
  justify-content: center;
  ${devices.md} {
    padding: 2em 0;
  }
`;
export const Networks = styled.div`
  display: flex;
  gap: 3em;
`;
