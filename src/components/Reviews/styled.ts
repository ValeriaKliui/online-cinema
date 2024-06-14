import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)};
  p {
    line-height: 130%;
    white-space: pre-line;
  }
`;
