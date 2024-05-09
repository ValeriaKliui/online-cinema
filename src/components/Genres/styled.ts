import { flexColGap } from '@utils/mixins/mixins';
import styled from 'styled-components';

export const Container = styled.div`
  ${flexColGap(2)}
`;
export const GenresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: 0;
  overflow-y: hidden;
  grid-gap: 0 3em;
`;
