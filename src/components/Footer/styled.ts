import { devices } from "@providers/Theme/constants";
import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const FooterConainer = styled.div`
  background: ${({ theme: { colors } }) => colors.darkBlock};
`;
export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 3em 0;
  ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const LinksContainer = styled.div`
  ${flexColGap(1.25)}
`;
export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
`;
export const SupportContainer = styled.div`
  ${flexColGap(2)}
`;
