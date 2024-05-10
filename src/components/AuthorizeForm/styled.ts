import { flexColGap } from "@utils/mixins/mixins";
import styled from "styled-components";

export const Container = styled.div`
  ${flexColGap(2)};
  align-items: center;
`;

export const FormContainer = styled.form<{ $block?: boolean }>`
  ${flexColGap(1)};
  align-items: center;
  width: ${({ $block }) => ($block ? "100%" : "fit-content")};
`;
