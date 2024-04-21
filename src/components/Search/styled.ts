import { flexColGap } from '@/utils/mixins/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const TextContainer = styled.div`
  ${flexColGap(1)}
`;
export const Text = styled.p`
  max-width: 30%;
`;
export const SearchContainer = styled.div`
  position: relative;
`;
