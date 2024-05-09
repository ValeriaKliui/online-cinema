import { flexColGap } from '@utils/mixins/mixins';
import styled from 'styled-components';

export const FooterConainer = styled.div`
  background: ${({ theme: { colors } }) => colors.darkBlock};
`;
export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 3em 0;
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
