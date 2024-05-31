import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)}
`;

export const Films = styled.div`
  display: flex;
  gap: 2em;
  overflow: hidden;
`;
