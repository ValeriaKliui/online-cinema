import { flexColGap } from '@/utils/mixins/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  ${flexColGap(3)}
`;
export const TextContainer = styled.div`
  ${flexColGap(1)}
`;
export const Text = styled.p`
  max-width: 30%;
`;
