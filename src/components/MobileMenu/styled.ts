import styled from "styled-components";
import CrossIcon from "@assets/icons/cross.svg?react";
import { svgStyles } from "@shared/Icon";
import { flexColGap } from "@utils/mixins/mixins";

export const Dialog = styled.dialog`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.brightBlock};
  z-index: 10000;
  padding: 4em;
  margin: 0;
  max-width: unset;
  border: 0;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
  p {
    color: ${({ theme: { colors } }) => colors.text};
  }
`;
export const Form = styled.form`
  ${flexColGap(1)};
`;
export const Cross = styled(CrossIcon)`
  align-self: flex-end;
  cursor: pointer;
  ${(props) => svgStyles(props)}
`;
